import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom"; // Import Link
import logo from "../../Assets/Images/logo.png"
import "./NavBar.css";


function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
          <img src={logo}  className="logo" />
          </NavLink>

          {/* Add Login/Signup Button */}
          <div className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
