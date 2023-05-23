export default function List({ activities, onDeleteActivity }) {
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
                {activity.name}
                <button onClick={onDeleteActivity}>x</button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
