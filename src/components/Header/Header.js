import React, { useState } from "react";
import "./Header.css";

// Apps
import Apps from "./Apps/Apps";
import AppHover from "./Apps/AppsHover";
// Profile
import Profile from "./Profile/Profile";
import ProfileCard from "./Profile/ProfileCard";

function Header() {
  const [openProfile, setOpenProfile] = useState(false);
  const [openProfileCard, setOpenProfileCard] = useState(false);

  const [openApps, setOpenApps] = useState(false);
  const [openAppsHover, setAppsHover] = useState(false);

  function clickedProfile() {
    setOpenProfile(!openProfile);
    setOpenProfileCard(false);
  }
  function hoverProfile() {
    setOpenProfileCard(!openProfileCard);
    setAppsHover(false);
  }

  function clickedApps() {
    setOpenApps(!openApps);
    setAppsHover(false);
  }
  function hoverApps() {
    setAppsHover(!openAppsHover);
    setOpenProfileCard(false)
  }

  return (
    <ul className="header">
      <li className="header-item">Gmail</li>
      <li className="header-item">Images</li>
      <li
        className="header-item app"
        onClick={clickedApps}
        onMouseEnter={hoverApps}
        onMouseLeave={hoverApps}
      >
        <span className="material-icons">apps</span>
        {openApps ? <Apps /> : null}
        {openAppsHover ? <AppHover /> : null}
      </li>
      <li
        className="header-item profile-info"
        onClick={clickedProfile}
        onMouseEnter={hoverProfile}
        onMouseLeave={hoverProfile}
      >
        <div className="profile-title">Y</div>
        {openProfile ? <Profile /> : null}
        {openProfileCard ? <ProfileCard /> : null}
      </li>
    </ul>
  );
}

export default Header;
