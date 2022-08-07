import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { BiMenuAltLeft } from "react-icons/bi";

const NavbarSection = () => {
  const menuLeft = useRef(null);

  const menuToggle = () => menuLeft.current.classList.toggle("active");
  return (
    <div className="navbar">
      <div className="container">

        <div className="navbar__menu">
          <div className="navbar__mobile-toggle" onClick={menuToggle}>
            <BiMenuAltLeft />
          </div>

          <div className="navbar__section" ref={menuLeft}>
            <div className="navbar__close" onClick={menuToggle}>
              <BiChevronLeft />
            </div>

            <div className="navbar__section__logo">
              <Link to="/" className="navbar__section__logo__item">
                G20
              </Link>
            </div>
            <div>
              <ul className="navbar__section__links">
                <li>
                  <Link to="/login" className="navbar__section__links__item">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="navbar__section__links__item">
                    Signup
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default NavbarSection;
