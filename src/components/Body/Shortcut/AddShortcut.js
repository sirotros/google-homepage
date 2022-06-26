import { useRef } from "react";
import "./AddShortcut.css";
function AddShortcut({ clickOpen }) {
  const doneRef = useRef(null);
  function doneBtn(e) {
    if (e.target.value !== "") {
      doneRef.current.classList.add("active");
    } else {
      doneRef.current.classList.remove("active");
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
          <button className="doneBtn" id="doneBtn" ref={doneRef}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddShortcut;
