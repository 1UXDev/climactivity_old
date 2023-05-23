export default function Form({ onAddActivity }) {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name;
    const activityCheckbox = form.elements.isForGoodWeather.checked;

    // -------- Building the Object --------
    const formObj = {
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
    <form id="form" onSubmit={handleSubmit}>
      <label htmlFor="name">Activity name</label>
      <input
        type="text"
        placeholder="name of activity"
        name="name"
        id="name"
      ></input>

      <label htmlFor="isForGoodWeather">Is good Weather Activity</label>
      <input
        type="checkbox"
        name="isForGoodWeather"
        id="isForGoodWeather"
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}

// //import { useState } from "react";

// export default function Form({ onAddActivity }) {
//     function handleSubmit(e) {
//       e.preventDefault();

//       const form = e.target;
//       const formData = new FormData(form);
//       const name = form.elements.name;
//       const activityCheckbox = form.elements.isForGoodWeather.checked;

//       const formJson = Object.fromEntries(formData.entries());
//       //console.log(formJson);
//       //to get boolean value of checkbox
//       //console.log(form.elements.isForGoodWeather.checked);

//       onAddActivity(formJson);

//       form.reset();
//       form.focus(name);
//     }

//     return (
//       <form id="form" onSubmit={handleSubmit}>
//         <h1>Ich bin die Headline</h1>
//         <label htmlFor="name">Activity name</label>
//         <input
//           type="text"
//           placeholder="name of activity"
//           name="name"
//           id="name"
//         ></input>

//         <label htmlFor="isForGoodWeather">Is good Weather Activity</label>
//         <input
//           type="checkbox"
//           name="isForGoodWeather"
//           id="isForGoodWeather"
//         ></input>
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
