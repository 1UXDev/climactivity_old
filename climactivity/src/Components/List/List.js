export default function List({ activities, weatherData, onDeleteActivity }) {
  return (
    <div className="list">
      <div className="filter">
        <button>I feel sunshine</button>
        <button>I feel rain</button>
      </div>
      <ul>
        {(!activities || activities.length) === 0 ? (
          <div className="nothingHere">
            <h2>Nothing 🪵 here</h2>
            <p>Why don't you add something?</p>
          </div>
        ) : (
          activities.map((activity) => {
            return (
              <li key={activity.key} className={activity.key}>
                <div className="icon">
                  {weatherData.condition} Its going to be{" "}
                  {weatherData.temperature}°C - You could:
                </div>
                <h3>{activity.name}</h3>
                <button onClick={onDeleteActivity}>x</button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
