import React, { useEffect }from 'react';
import AddTask from '../components/AddTask';
import Task from '../components/Task';
import { useNavigate } from 'react-router-dom';

const Todos = () => {

  //Getting all user stored in local storage
  const user = JSON.parse(localStorage.getItem("user"));

  //Navigation variable declaration
  const navigate = useNavigate();

  useEffect(() => {
    if(!user){
      navigate("/register");
    }
    else if(!user.state){
      navigate("/login")
    }
  },[user, navigate]);
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