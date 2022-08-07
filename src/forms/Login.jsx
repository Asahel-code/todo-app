import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/todo_login.jpg";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const handleSubmit = () => {

  }
  return (
    <div className="container">
      <div className="main">
        <div className="form">
          <div className="form__container">
            <section className="form__container__leftside">
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
                <div className="form__container__rightside__body__input">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Input email"
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form__container__rightside__body__input">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Input password"
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="form__container__rightside__body__btn">
                  <button type="submit">
                    Login
                  </button>
                </div>

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
