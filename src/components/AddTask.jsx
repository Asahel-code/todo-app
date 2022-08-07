import React from 'react';

const AddTask = () => {
  return (
    <div className="add__task">
        <div className="add__task__title">
            <span className="add__task__title__item">What are you upto for the day or the days to come?</span>
        </div>
        <div className="add__task__inputs">
            <div className="add__task__inputs__input">
                <label htmlFor="task">Add a task</label>
                <input id="task" type="text" name="task" placeholder="Note down you task" />
            </div>
            <div className="add__task__inputs__input">
                <label htmlFor="date">Date</label>
                <input id="date" name="date" type="date"/>
            </div>
        </div>
        <div className="add__task__button">
            <button type="submit">Add</button>
        </div>
    </div>
  )
}

export default AddTask