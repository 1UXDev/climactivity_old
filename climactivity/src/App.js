import "./App.css";
import Form from "./Components/Form/Form";
import { useState, useEffect } from "react";
import List from "./Components/List/List";
import Hero from "./Components/Hero/Hero";
import bg_good from "./Media/bg_good.mp4";
import bg_bad from "./Media/bg_bad.mp4";
import Video from "./Components/Video/Video";

function App() {
  // Setting the acitvities to either "[]" or the localstorage
  const [activities, setActivities] = useState(() => loadingFunction());
  // Setting the weather
  const [weatherData, setWeatherData] = useState({ condition: "⏳" });
  const [isGoodWeather, setIsGoodWeather] = useState();
  // Setting all other variables
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [updater, setUpdater] = useState(0);
  const [bgVid, setBgVid] = useState();

  // function to set activity to the correct value dependant on what is already in the localstorage
  function loadingFunction() {
    if (!JSON.parse(localStorage.getItem("data"))) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem("data"));
    }
  }

  //-------- Fetch Weather Data --------
  useEffect(() => {
    const interval = setInterval(() => {
      setUpdater(updater + 1);
      console.log(updater * 5, "Sekunden vergangen");
    }, 5000);

    async function startFetch() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather/europe"
        );
        setWeatherData(await response.json());
        await console.log("weather", weatherData);
      } catch (e) {
        console.error("error", e);
      }
    }
    startFetch();

    return () => clearInterval(interval);
  }, [updater]);

  // -------- Append New Activities --------
  // Funktion die an "Form" gegeben wird. das Parameter "newActivity" wird mit dem UserInput der Form gefüllt
  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
  }

  // -------- Write to local Storage --------
  // Wenn Activity updated wird, pack es in den localStorage, damit der aktuell bleibt
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(activities));
  }, [activities]);

  function handleDeleteActivity(li) {
    // Key des List-Items festhalten
    let currentLiId = li.target.parentElement.className;

    //console.log(activities.filter((activity) => activity.id !== currentLiId));
    setActivities(
      activities.filter((activity) => activity.key !== currentLiId)
    );
    localStorage.setItem(
      "data",
      JSON.stringify(
        activities.filter((activity) => activity.id !== currentLiId)
      )
    );
  }

  // isGoodWeather auf den derzeitigen Wert des API return setzen
  useEffect(() => {
    setIsGoodWeather(weatherData.isGoodWeather);
    setBgVid(weatherData.isGoodWeather ? bg_good : bg_bad);
    console.log("bg video is now:", bgVid);
  }, [weatherData, bgVid]);

  // Filtern der Activities nach dem Wetterstatus der API
  useEffect(() => {
    async function activityFilter() {
      console.log("test");

      setFilteredActivities(
        activities.filter((activity) => {
          return activity.activityCheckbox === isGoodWeather;
        })
      );
      console.log(filteredActivities);
    }
    activityFilter();
  }, [activities, isGoodWeather]);

  return (
    <>
      {isGoodWeather && <Video src={bg_good} />}
      {!isGoodWeather && <Video src={bg_bad} />}

      <Hero weatherData={weatherData} />

      <List
        activities={filteredActivities}
        weatherData={weatherData}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
