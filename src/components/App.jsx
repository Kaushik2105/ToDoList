import React from "react";
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [listItem, setListItem] = useState([]);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setTask(inputValue);
  };

  const handleClick = () => {
    setListItem((prevValue) => {
      return [...prevValue, task];
    });
    setTask("");
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={task} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItem.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
