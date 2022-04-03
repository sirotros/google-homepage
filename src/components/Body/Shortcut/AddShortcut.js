import React from "react";
import "./AddShortcut.css";
function AddShortcut({ clickOpen }) {
  function doneBtn(e) {
    const doneBtn = document.querySelector(".doneBtn");
    if (e.target.value !== "") {
      doneBtn.classList.add("active");
    } else {
      doneBtn.classList.remove("active");
    }
  }
  return (
    <div className="popUp">
      <div className="addShortcut">
        <h5>Add shortcut</h5>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="name" id="name" />
        </div>
        <div className="input-group">
          <label htmlFor="url">URL</label>
          <input type="text" className="url" id="url" onChange={doneBtn} />
        </div>
        <div className="buttons">
          <button className="cancelBtn" id="cancelBtn" onClick={clickOpen}>
            Cancel
          </button>
          <button className="doneBtn" id="doneBtn">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddShortcut;
