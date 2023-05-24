import { uid } from "uid";

export default function Form({ onAddActivity }) {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name;
    const activityCheckbox = form.elements.isForGoodWeather.checked;

    // -------- Building the Object --------
    const formObj = {
      key: uid(),
      name: name.value,
      activityCheckbox: activityCheckbox,
    };

    // -------- Passing Object to function in App --------
    onAddActivity(formObj);

    // -------- Clean Up the Form --------
    form.reset();
    e.target.elements.name.focus();
  }

  return (
    <form id="form" onSubmit={handleSubmit} className="form">
      <h2>Add a new Activity</h2>
      <div className="formElementWrapper">
        <div className="formElement">
          <label htmlFor="name"></label>
          <input
            type="text"
            placeholder="name of activity"
            name="name"
            id="name"
            tabindex="1"
          ></input>
        </div>

        <div
          className="formElement"
          title="activate if activity is for good weather"
        >
          <input
            className="mytoggle"
            type="checkbox"
            name="isForGoodWeather"
            id="isForGoodWeather"
            role="button"
            title="activate if activity is for good weather"
            tabindex="2"
          ></input>
          <label className="mytoggle" htmlFor="isForGoodWeather"></label>
        </div>
      </div>
      <button type="submit" tabindex="3">
        Submit
      </button>
    </form>
  );
}
