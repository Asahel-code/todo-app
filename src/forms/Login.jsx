import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/todo_login.jpg";

const Login = () => {
  //Variable declaration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Navigation variable declaration
  const navigate = useNavigate();

  //Error variable declaration
  const [error, setError] = useState({
    type: "",
    message: "",
  });

  //success variable declaration
  const [success, setSuccess] = useState(false);

  //Getting all user stored in local storage
  const user = JSON.parse(localStorage.getItem("todoUser"));

  useEffect(() => {
    if (!user) {
      navigate("/register");
    }
    if (success || user.state) {
      navigate("/");
    }
  }, [user, success, navigate]);

  //Fuction to submit user data
  const handleSubmit = (e) => {
    //Javascript fuction to prevent default submit for a user event
    e.preventDefault();

    //Assigning all users data to a single variable
    const data = {
      username: user.username,
      email: email,
      password: password,
      state: true,
    };

    //Variable to monitor user existance
    var userExists = false;

    //Check email existance
    if (user.email === data.email) {
      userExists = true;

      //Checking password match
      if (user.password === data.password) {
        //Setting success to true
        setSuccess(true);

        //Updating local storage
        localStorage.setItem("todoUser", JSON.stringify(data));
        return;
      } else {
        //Setting error for password
        setError({
          ...error,
          type: "password",
          message: "Please check your password",
        });

        return;
      }
    }

    if (!userExists) {
      //Setting error for user existance
      setError({
        ...error,
        type: "user",
        message: "User does not exist!",
      });
      return;
    }
  };
  return (
    <div className="container">
      <div className="main">
        <div className="form">
          <div className="form__container">
            <section className="form__container__leftside">
              {/* Login page image preview */}
              <img src={img} alt="login" />
            </section>
            <section className="form__container__rightside">
              <div className="form__container__rightside__header">
                <h2>Welcome</h2>
              </div>
              <form
                className="form__container__rightside__body"
                onSubmit={handleSubmit}
              >
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

                {/* Password input field*/}
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

                {/* Password error message */}
                <div className="message">
                  {error.message !== "" && error.type === "password" && (
                    <>
                      <span className="message__danger">{error.message}</span>
                    </>
                  )}
                </div>

                {/* user existance error message */}
                <div className="message">
                  {error.message !== "" && error.type === "user" && (
                    <>
                      <span className="message__danger">{error.message}</span>
                    </>
                  )}
                </div>

                {/* Login button */}
                <div className="form__container__rightside__body__btn">
                  <button type="submit">Login</button>
                </div>

                {/* Link to login page */}
                <div>
                  <span>Have no account?</span>
                  <Link to="/register">&nbsp; Click here to signup</Link>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
