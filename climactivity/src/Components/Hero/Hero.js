export default function Hero({ weatherData }) {
  return (
    <div className="hero">
      <h1>{weatherData.condition}</h1>
      <h2>{weatherData.temperature}°C</h2>
    </div>
  );
}
