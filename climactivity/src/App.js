import "./App.css";
import Form from "./Components/Form/Form";
import { useState, useEffect } from "react";
import List from "./Components/List/List";
import Hero from "./Components/Hero/Hero";

function App() {
  const [activities, setActivities] = useState([]);
  //JSON.parse(localStorage.getItem("data"))
  const [weatherData, setWeatherData] = useState({ condition: "⏳" });

  //------ Fetch Data --------
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

  //   const interval = setInterval(() => {
  //     startFetch();
  //   }, 5000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
  }

  // Wenn Activity updated wird, pack es in den localStorage
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(activities));
  }, [activities]);

  return (
    <div>
      <Hero weatherData={weatherData} />
      <Form onAddActivity={handleAddActivity} weatherData={weatherData} />
      <List activities={activities} />
    </div>
  );
}

export default App;
