import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { BiX } from "react-icons/bi";

const UpdateTask = (props) => {
  //Variable declaration
  const [taskTitle, setTaskTitle] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  //Getting all the tasks
  const tasks = JSON.parse(localStorage.getItem("tasks"));

  //Getting task id param form the URL
  let taskId = props.taskId;

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

    //Removing the previous state of a task
    const newState = tasks.filter((element) => element.id !== taskId);

    //Updating the current task
    tasks.push(data);

    //Saving revomed state
    localStorage.setItem("tasks", JSON.stringify(newState));

    //Saving update state
    localStorage.setItem("tasks", JSON.stringify(tasks));

    //Removing update modal
    props.toggle()
  };
  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal__content">
        <div className="modal__content__update__task">
          {/* update task title */}
          <div className="modal__content__update task__title">
            <h3 className="modal__content__update__task__title__item">
              Update your task
            </h3>
          </div>
          <div className="modal__content__update__task__inputs">
            {/* Task title input */}
            <div className="modal__content__update__task__inputs__input">
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
            <div className="modal__content__update__task__inputs__input">
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
            <div className="modal__content__update__task__inputs__input">
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
            <div className="modal__content__update__task__button">
              <button type="button" onClick={handleUpdate}>
                Update
              </button>
            </div>
          </div>
        </div>
        <div className="modal__content__close">
          <BiX onClick={props.toggle ? () => props.toggle() : null} />
        </div>
      </div>
    </div>
  );
};

UpdateTask.propTypes = {
  taskId: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default UpdateTask;
