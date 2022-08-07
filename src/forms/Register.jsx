import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/todo_register.jpg";

const Register = () => {
  // const [name, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordConfirmation, setPasswordConfirmation] = useState("");
  // const [successful, setSuccessful] = useState(false);

  const handleSubmit = () => {};

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
                <h2>Join us today</h2>
              </div>
              <form
                className="form__container__rightside__body"
                onSubmit={handleSubmit}
              >
                <div className="form__container__rightside__body__input">
                  <label htmlFor="username">Username</label>
                  <input
                    type="username"
                    name="username"
                    placeholder="Input username"
                    required
                    // onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="form__container__rightside__body__input">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Input email"
                    required
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form__container__rightside__body__input">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Input password"
                    required
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form__container__rightside__body__input">
                  <label htmlFor="confrim">Confrim Password</label>
                  <input
                    type="password"
                    name="confrim"
                    placeholder="Confirm password"
                    required
                    // onChange={(e) => setPasswordConfirmation(e.target.value)}
                  />
                </div>

                <div className="form__container__rightside__body__btn">
                  <button type="submit">Register</button>
                </div>
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
