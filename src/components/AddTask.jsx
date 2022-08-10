import React, { useState } from "react";
import uuid from "react-uuid";

const AddTask = () => {
  //Variable declaration
  const [taskTitle, setTaskTitle] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  //Error variable declaration
  const [error, setError] = useState({
    type: "",
    message: "",
  });

  //Declaration of today's date
  //   let datenow = new Date();

  //Creating an array of tasks that will be used to store each user task
  var tasks = JSON.parse(localStorage.getItem("tasks"))
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  localStorage.setItem("tasks", JSON.stringify(tasks));

  //Getting task stored in the locale storage
  tasks = JSON.parse(localStorage.getItem("tasks"));

  //Getting specific element i want for today's date
  //   const today =
  //     datenow.getFullYear() + "-" + datenow.getMonth() + "-" + datenow.getDate();

  const handleSubmit = () => {
    //Assigning all task data to a single variable
    const data = {
      id: uuid(),
      title: taskTitle,
      task: task,
      date: date,
    };

    //Storing users task to local storage
    if (data.taskTitle !== "" && data.task !== "" && data.date !== "") {
      tasks.push(data);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    } else {
      //setting up an error message for submitting form with out any or all required input fields
      setError({
        ...error,
        type: "task",
        message: "Please add a task before submitting!!",
      });
    }
  };

  return (
    <div className="add__task">
      {/* Add task title */}
      <div className="add__task__title">
        <h3 className="add__task__title__item">
          What are you upto for the day or the days to come?
        </h3>
      </div>
      <div className="add__task__inputs">
        {/* Task title input */}
        <div className="add__task__inputs__input">
          <label htmlFor="taskTitle">Task title</label>
          <input
            id="taskTitle"
            type="text"
            name="taskTitle"
            placeholder="Task title"
            required
            onChange={(e) => setTaskTitle(e.target.value)}
          />
        </div>

        {/* Task content input */}
        <div className="add__task__inputs__input">
          <label htmlFor="task">Task content</label>
          <input
            id="task"
            type="text"
            name="task"
            placeholder="Note down you task"
            required
            onChange={(e) => setTask(e.target.value)}
          />
        </div>

        {/* Task date input */}
        <div className="add__task__inputs__input">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            name="date"
            required
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

      {/* Task error message */}
      <div className="message">
        {error.message !== "" && error.type === "task" && (
          <>
            <span className="message__danger">{error.message}</span>
          </>
        )}
      </div>

      {/* Add task button */}
      <div className="add__task__button">
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTask;
