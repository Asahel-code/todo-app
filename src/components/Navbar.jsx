import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { BiMenuAltLeft } from "react-icons/bi";

const NavbarSection = () => {
  const menuLeft = useRef(null);

  // Event listner that monitors toggler state
  const menuToggle = () => menuLeft.current.classList.toggle("active");

  //Getting all user stored in local storage
  const user = JSON.parse(localStorage.getItem("todoUser"));

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__menu">
           {/* Shows nav toggler content on tablet and screen size lower that it */}
          <div className="navbar__mobile-toggle" onClick={menuToggle}>
            <BiMenuAltLeft />
          </div>

          <div className="navbar__section" ref={menuLeft}>
            {/* Hides nav toggler content on tablet and screen size lower that it */}
            <div className="navbar__close" onClick={menuToggle}>
              <BiChevronLeft />
            </div>

            {/* App icon */}
            <div className="navbar__section__logo">
              <Link to="/" className="navbar__section__logo__item">
                G20
              </Link>
            </div>
            <div>
              <ul className="navbar__section__links">

                {/* Removes login page after you login */}
                {(user !== null && !user.state)  &&(
                  <li>
                    <Link to="/login" className="navbar__section__links__item">
                      Login
                    </Link>
                  </li>
                )}

                {/* Removes the register link after you register */}
                {user === null && (
                  <li>
                    <Link
                      to="/register"
                      className="navbar__section__links__item"
                    >
                      Signup
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSection;
