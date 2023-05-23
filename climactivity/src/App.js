import "./App.css";
import Form from "./Components/Form/Form";
import { useState, useEffect } from "react";
import List from "./Components/List/List";
import Hero from "./Components/Hero/Hero";

function App() {
  // Setting the acitvities to either "[]" or the localstorage
  const [activities, setActivities] = useState(() => loadingFunction());
  // Setting the weather
  const [weatherData, setWeatherData] = useState({ condition: "⏳" });

  // function to set activity to the correct value dependant on what is already in the localstorage
  function loadingFunction() {
    if (!JSON.parse(localStorage.getItem("data"))) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem("data"));
    }
  }

  //-------- Fetch Data --------
  useEffect(() => {
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
  }, []);

  // -------- interval function (not working yet) --------
  //   const interval = setInterval(() => {
  //     startFetch();
  //   }, 5000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

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

  return (
    <div>
      <Hero weatherData={weatherData} />
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} />
    </div>
  );
}

export default App;
