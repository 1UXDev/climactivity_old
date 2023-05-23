export default function List({ activities, weatherData, onDeleteActivity }) {
  return (
    <div className="list">
      <div className="filter">
        <h3>
          {weatherData.condition} Things you could do at{" "}
          {weatherData.temperature}°C
        </h3>
      </div>
      <ul>
        {(!activities || activities.length) === 0 ? (
          <div className="nothingHere">
            <h2>Nothing here yet 🪵</h2>
            <p>Why don't you add something below?</p>
          </div>
        ) : (
          activities.map((activity) => {
            return (
              <li key={activity.key} className={activity.key}>
                <h4>{activity.name}</h4>
                <button onClick={onDeleteActivity}>x</button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
