import React from "react";
import Task from "../Task";

const TasksList = ({ currentTask }) => {
  return (
    <ul className="list-group">
      {currentTask.map((name, index) => {
        return (
          <li
            key={index}
            className={`list-group-item form-check TaskList__Task TaskList__Task--${index}`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id={`gridCheck1--${index}`}
            />
            <label
              className="form-check-label"
              htmlFor={`gridCheck1--${index}`}
            >
              <Task taskName={name.title} />
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TasksList;
