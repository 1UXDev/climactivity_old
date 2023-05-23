export default function Hero({ weatherData }) {
  return (
    <div className="hero">
      <div className="heroData">
        <h1>{weatherData.condition}</h1>
        <h2>{weatherData.temperature}°C</h2>
      </div>
      <p>
        {!weatherData
          ? " "
          : weatherData.isGoodWeather
          ? "Awesome Weather ahead! Go Meet some Friendos"
          : "Channel your inner Introvert, the Weather is gonna be nasty"}
      </p>
    </div>
  );
}
