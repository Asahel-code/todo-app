import React, { useState } from "react";
import { BiHighlight } from "react-icons/bi";
import UpdateTask from "./modal/UpdateTask";

const Task = () => {
  //Declaration of modal state
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  //Getting all the tasks
  const tasks = JSON.parse(localStorage.getItem("tasks"));

  //Fuction to delete a task
  const handleDelete = (e, id) => {
    e.preventDefault();
    const newState = tasks.filter((element) => element.id !== id);
    localStorage.setItem("tasks", JSON.stringify(newState));
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  //Getting task length
  const taskCount = tasks.length;

  var showTasks = "";

  if (taskCount) {
    showTasks = tasks.map((item, index) => {
      return (
        <div className="task__section__contents" key={index}>
          {/* Task title */}
          <h4 className="task__section__contents__title">{item.title}</h4>
          <div className="task__section__contents__content" >
            {/* Task requirement */}
            <p className="task__section__contents__content__item">
              {item.task}
            </p>
            {/* Update button */}
            <div className="task__section__contents__content__update">
              <BiHighlight onClick={toggleModal} />

              {modal && <UpdateTask taskId={item.id} toggle={toggleModal} />}
            </div>
            {/* Delete button */}
            <div className="task__section__contents__content__delete">
              <span
                className="task__section__contents__content__delete__item"
                onClick={(e) => handleDelete(e, item.id)}
              >
                Delete
              </span>
            </div>
          </div>
          {/* Task date */}
          <div className="task__section__contents__date">
            To perform on: <span>{item.date}</span>
          </div>
        </div>
      );
    });
  } else {
    showTasks = (
      <div className="task__section__contents__emptycontent">
        <span>No tasks available</span>
      </div>
    );
  }

  return (
    <>
      <div className="task">
        <div className="task__title">
          <h3 className="task__title__item">Your tasks</h3>
        </div>
        <div className="task__section">
          {/* List of task */}
          {showTasks}
        </div>
      </div>
    </>
  );
};

export default Task;
