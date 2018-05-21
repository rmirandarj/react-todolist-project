import React from "react";
import ToDoTitle from "./ToDoTitle";
import ToDoInput from "./ToDoInput";
import TaskList from "./TaskList";

class ToDo extends React.Component {
  state = {
    addTaskText: "",
    taskList: [
      {
        text: "arnaldo",
        completed: false
      },
      {
        text: "antunes",
        completed: false
      }
    ]
  };

  changeText(taskText) {
    this.setState({ addTaskText: taskText });
  }

  addTask() {
    const newTask = {
      text: this.state.addTaskText,
      completed: false
    };
    const newTaskList = this.state.taskList.concat(newTask);

    this.setState({
      addTaskText: "",
      taskList: newTaskList
    });
  }

  completeTask(taskIndex) {
    const taskList = this.state.taskList;
    const localTaskList = this.state.taskList;

    if(localTaskList[taskIndex].completed == false) {
      localTaskList[taskIndex].completed = true;
    } else {
      localTaskList[taskIndex].completed = false;
    }

    this.setState ({
      taskList: localTaskList
    });
    console.log("Completed", taskIndex);
  }

  removeTask (taskIndex) {
    const localTaskList = this.state.taskList;
    localTaskList.splice(taskIndex, 1);

    this.setState ({
      taskList: localTaskList
    });
    console.log("Removed");
  }

  render() {
    return (
      <section className="section">
        <div className="container container-todo">
          <ToDoTitle />
          <div className="todo-wrapper">
            <ToDoInput
              value={this.state.addTaskText}
              onChangeText={text => this.changeText(text)}
              onAddTask={() => this.addTask()}
            />
            <TaskList 
            taskList={this.state.taskList} 
            onCompleteTask={index => this.completeTask(index)}
            onRemoveTask={index => this.removeTask(index)} />
          </div>
        </div>
      </section>
    );
  }
}

export default ToDo;
