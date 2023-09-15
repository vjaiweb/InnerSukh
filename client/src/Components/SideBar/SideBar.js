import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './SideBar.css';
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChallengeIcon from "@mui/icons-material/Psychology";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar-container">
      <a to="/">
        <div
          className={`icon-container ${
            location.pathname === "/user/dashboard" ? "sidebar-active" : ""
          }`}
        >
          <DashboardIcon fontSize="large" />
          <br />
          Dashboard
        </div>
      </a>

      <a to="/module/topic">
        <div
          className={`icon-container ${
            location.pathname.startsWith("/module") ? "sidebar-active" : ""
          }`}
        >
          <ChallengeIcon  fontSize="large" />
          <br />
          Challenge
        </div>
      </a>
    </div>
  );
}

export default Sidebar;
