import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsMicFill } from "react-icons/bs";
import "./Input.css";
function Input() {
  return (
    <div className="input">
      <BiSearch fontSize="20px" fontWeight="bold" />
      <input type="text" placeholder="Search Google or tpye a URL" />
      <BsMicFill color="blue" />
    </div>
  );
}

export default Input;
