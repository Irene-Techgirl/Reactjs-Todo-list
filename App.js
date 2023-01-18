import { useState } from "react";
import "../src/styles.css";

export default function App() {
  const [items, setItems] = useState([]);

  function submitForm(event) {
    event.preventDefault();
    const todoEntry = document.getElementById("todo-entry").value;
    document.getElementById("todo-entry").value = "";
    const upperCasetodoEntry =
      todoEntry.charAt(0).toUpperCase() + todoEntry.slice(1);
    setItems([...items, { text: upperCasetodoEntry, completed: false }]);
  }

  function markAsComplete(event, index) {
    const modifiedEntry = items[index];
    modifiedEntry.completed = true;
    setItems([
      ...items.slice(0, index),
      modifiedEntry,
      ...items.slice(index + 1)
    ]);
  }

  function deleteEntry(event, index) {
    setItems([...items.slice(0, index), ...items.slice(index + 1)]);
  }

  return (
    <div className="App">
      <h1>Todo list</h1>
      <h2>Make your day productive!</h2>

      <ul>
        {items.map((item, index) => (
          <li className={item.completed ? "completed" : ""}>
            {item.text}{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 "
                onClick={function (event) {
                  markAsComplete(event, index);
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 svg2"
                onClick={(event) => deleteEntry(event, index)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            </span>
          </li>
        ))}
      </ul>

      <form onSubmit={submitForm}>
        <input placeholder="Enter todo item" type="text" id="todo-entry" />
        <button>Submit</button>
      </form>
    </div>
  );
}
