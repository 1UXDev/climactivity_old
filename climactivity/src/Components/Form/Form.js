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
    form.focus(e.target.name);
  }

  return (
    <form id="form" onSubmit={handleSubmit} className="form">
      <div className="formElement">
        <label htmlFor="name">Activity name</label>
        <input
          type="text"
          placeholder="name of activity"
          name="name"
          id="name"
        ></input>
      </div>

      <div className="formElement">
        <span> Good Weather?</span>
        <input
          className="mytoggle"
          type="checkbox"
          name="isForGoodWeather"
          id="isForGoodWeather"
          role="button"
        ></input>
        <label className="mytoggle" htmlFor="isForGoodWeather"></label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
