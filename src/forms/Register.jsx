import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/todo_register.jpg";

const Register = () => {
  //Variable declaration
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  //Navigation variable declaration
  const navigate = useNavigate();

  //Error variable declaration
  const [error, setError] = useState({
    type: "",
    message: "",
  });

  //Getting all user stored in local storage
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if(user !== null){
      if(user.state){
        navigate("/")
      }
    }
    
  },[user, navigate]);

  //Fuction to submit user data
  const handleSubmit = (e) => {

    //Javascript fuction to prevent default submit for a user event
    e.preventDefault();

    //Assigning all users data to a single variable
    const data = {
      username: username,
      email: email,
      password: password,
      state: false
    };

    //Checking password matches confirm passwordConfirmation
    if (password !== passwordConfirmation) {
      //Setting error message with value
      setError({
        ...error,
        type: "passwordConfirmation",
        message: "Please, ensure password match confirm password!!",
      });
      return
    } else {
      //Setting error message to null
      setError({
        ...error,
        type: "",
        message: "",
      });

      //Storing user data to browser local storage
      localStorage.setItem("user", JSON.stringify(data));

      //Redirect to login page after a success register
      navigate('/login');
      return
    }
  };

  return (
    <div className="container">
      <div className="main">
        <div className="form">
          <div className="form__container">
            {/* Register preview image */}
            <section className="form__container__leftside">
              <img src={img} alt="login" />
            </section>
            <section className="form__container__rightside">
              <div className="form__container__rightside__header">
                <h2>Join us today</h2>
              </div>
              <form
                className="form__container__rightside__body"
                onSubmit={handleSubmit}
              >
                {/* Username input field */}
                <div className="form__container__rightside__body__input">
                  <label htmlFor="username">Username</label>
                  <input
                    type="username"
                    name="username"
                    placeholder="Input username"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                {/* Email input field */}
                <div className="form__container__rightside__body__input">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Input email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Password input field */}
                <div className="form__container__rightside__body__input">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Input password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* Confirm password input field */}
                <div className="form__container__rightside__body__input">
                  <label htmlFor="confrim">Confrim Password</label>
                  <input
                    type="password"
                    name="confrim"
                    placeholder="Confirm password"
                    required
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                  />
                </div>

                {/* Confirmation password error message  */}
                <div className="message">
                  {error.message !== "" &&
                    error.type === "passwordConfirmation" && (
                      <>
                        <span className="message__danger">{error.message}</span>
                      </>
                    )}
                </div>

                {/* Register button */}
                <div className="form__container__rightside__body__btn">
                  <button type="submit">Register</button>
                </div>

                {/* Link to login page */}
                <div>
                  <span>Already have an account?</span>
                  <Link to="/login">&nbsp; Click here to signin</Link>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
