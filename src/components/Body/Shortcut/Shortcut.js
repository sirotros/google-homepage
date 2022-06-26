import React, { useState } from "react";
import "./Shortcut.css";
import { AiFillPlusCircle } from "react-icons/ai";
import AddShortcut from "./AddShortcut";
function Shortcut() {
  const [openShortcut, setOpenShortcut] = useState(false);
  function clickOpen() {
    setOpenShortcut(!openShortcut);
  }
  return (
    <>
      <div className="shortcut" onClick={clickOpen}>
        <AiFillPlusCircle className="shortcut-icon" />
        <div className="btn">Add Shortcut</div>
      </div>
      {openShortcut && <AddShortcut clickOpen={clickOpen} />}
    </>
  );
}

export default Shortcut;
