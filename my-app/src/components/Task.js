import React from "react";
import TaskList from "./TaskList";

const Task = function(props) {

  let todoBoxClass = "box todo-box"

  if(props.taskData.completed == true) {
    todoBoxClass = todoBoxClass + " todo-box-completed";
  } else {
    todoBoxClass = todoBoxClass + " todo-box-white";
  }

  return (
    <div className={todoBoxClass}>
      <span 
        className="icon is-small"
        onClick={() => props.onCompleteTask(props.index)}
      >
      <i className="far fa-check-circle" aria-hidden="true" />
      </span>
      <span>{props.taskData.text}</span>
      <span 
        className="icon is-small"
        onClick={() => props.onRemoveTask(props.index)}
      >
      <is className="fas fa-trash-alt" aria-hidden="true" />
      </span>
    </div>
  );
};

export default Task;
