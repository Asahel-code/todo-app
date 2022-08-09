import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateTask = () => {
  //Variable declaration
  const [taskTitle, setTaskTitle] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  //Getting all the tasks
  const tasks = JSON.parse(localStorage.getItem("tasks"));

   //Navigation variable declaration
   const navigate = useNavigate()

  //Getting task id param form the URL
  let { taskId } = useParams();

  useEffect(() => {
    if (tasks !== null) {
      tasks.forEach((element) => {
        if (element.id === taskId) {
          setTaskTitle(element.title);
          setTask(element.task);
          setDate(element.date);
        }
      });
    }
  }, [tasks, taskId]);

  const handleUpdate = () => {
    //Updated state of a task
    const data = {
      id: taskId,
      title: taskTitle,
      task: task,
      date: date,
    };

    //Saving new state of a task
    tasks.push(data);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    //Removing the previous state of a task
    const newState = tasks.filter((element) => element.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(newState));

    //Redirect to tasks
    navigate('/');

  };
  return (
    <div className="container">
      <div className="main">
        <div className="update__task">
          {/* update task title */}
          <div className="__update task__title">
            <h3 className="update__task__title__item">Update your task</h3>
          </div>
          <div className="update__task__inputs">
            {/* Task title input */}
            <div className="update__task__inputs__input">
              <label htmlFor="taskTitle">Task title</label>
              <input
                id="taskTitle"
                type="text"
                name="taskTitle"
                value={taskTitle}
                placeholder="Task title"
                required
                onChange={(e) => setTaskTitle(e.target.value)}
              />
            </div>

            {/* Task content input */}
            <div className="update__task__inputs__input">
              <label htmlFor="task">Task content</label>
              <input
                id="task"
                type="text"
                name="task"
                value={task}
                placeholder="Note down you task"
                required
                onChange={(e) => setTask(e.target.value)}
              />
            </div>

            {/* Task date input */}
            <div className="update__task__inputs__input">
              <label htmlFor="date">Date</label>
              <input
                id="date"
                type="date"
                name="date"
                value={date}
                required
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            {/* Add task button */}
            <div className="update__task__button">
              <button type="submit" onClick={handleUpdate}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;
