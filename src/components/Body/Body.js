import React from "react";
import './Body.css'
import logo from "../../img/Google.svg";
import Input from "./Input/Input";
import Shortcut from "./Shortcut/Shortcut";

function Body() {
  return (
    <div className="body">
      <img src={logo} alt="google-icon" />
      <Input/>
      <Shortcut/>
    </div>
  );
}

export default Body;