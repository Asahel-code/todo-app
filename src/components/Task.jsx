import React from 'react';
import { Link } from "react-router-dom";
import { BiHighlight } from "react-icons/bi";

const Task = () => {
  return (
    <div className="task">
      <div className="task__title">
        <span className="task__title__item">Your tasks</span>
      </div>
      <div className="task__section">
        <div  className="task__section__content">
          <p className="task__section__content__item">Texting all my friends</p>
          <div className="task__section__content__update">
              <Link to="update"><BiHighlight/></Link>
          </div>
          <div className="task__section__content__delete">
            <span className="task__section__content__delete__item">Delete</span>
          </div>
        </div>

        <div  className="task__section__content">
          <p className="task__section__content__item">Texting all my friends</p>
          <div className="task__section__content__update">
              <Link to="update"><BiHighlight/></Link>
          </div>
          <div className="task__section__content__delete">
            <span className="task__section__content__delete__item">Delete</span>
          </div>
        </div>

        <div  className="task__section__content">
          <p className="task__section__content__item">Texting all my friends</p>
          <div className="task__section__content__update">
              <Link to="update"><BiHighlight/></Link>
          </div>
          <div className="task__section__content__delete">
            <span className="task__section__content__delete__item">Delete</span>
          </div>
        </div>

        <div  className="task__section__content">
          <p className="task__section__content__item">Texting all my friends</p>
          <div className="task__section__content__update">
              <Link to="update"><BiHighlight/></Link>
          </div>
          <div className="task__section__content__delete">
            <span className="task__section__content__delete__item">Delete</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task