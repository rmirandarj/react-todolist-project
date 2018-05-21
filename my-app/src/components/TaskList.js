import React from "react";
import Task from "./Task";

const TaskList = function(props) {
  const renderedTasks = props.taskList.map((task, index) => (
    <Task taskData={task} onCompleteTask={props.onCompleteTask} onRemoveTask={props.onRemoveTask} index={index} />
  ));
  return <div>{renderedTasks}</div>;
};

export default TaskList;
