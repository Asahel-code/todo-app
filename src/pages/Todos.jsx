import React from 'react'
import AddTask from '../components/AddTask'
import Task from '../components/Task'

const Todos = () => {
  return (
    <div className="container">
      <div className="main">
        <div>
          <AddTask />
        </div>
        <div>
          <Task />
        </div>
      </div>

    </div>
  )
}

export default Todos