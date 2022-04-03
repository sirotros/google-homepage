import React from "react";
import "./Profile.css";
function Profile() {
  return (
    <ul className="profile">
      <div className="profile-header">
        <li className="profile-letter">Y</li>
        <li>
          Yasin Özgür Çakmak <br />
          cakmakyasinozgur@gmail.com
        </li>
        <li className="account">Manage Your Google Account</li>
      </div>
      <li className="add">
        <span className="material-icons">person_add</span> Add another account
      </li>
      <li className="logOut"><div className="btn">Sign out of all account</div></li>
      <li className="text">
        <span className="security">Privacy policy</span> <span className="circle"></span>
        <span className="service">Terms of service</span>
      </li>
    </ul>
  );
}

export default Profile;
