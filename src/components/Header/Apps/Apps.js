import React from "react";
import "./Apps.css";
import { BsYoutube, BsGoogle, BsCameraFill } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import {
  SiGooglemaps,
  SiGmail,
  SiGooglecalendar,
  SiGooglephotos,
  SiGoogletranslate,
} from "react-icons/si";
import { ImGoogleDrive } from "react-icons/im";
function Apps() {
  return (
    <div className="apps">
      <ul className="apps-items">
        <li className="apps-item">
          <BsGoogle />
          <div className="apps-item-text">Google</div>
        </li>
        <li className="apps-item">
          <SiGooglemaps />
          <div className="apps-item-text">Maps</div>
        </li>
        <li className="apps-item">
          <BsYoutube />
          <div className="apps-item-text">Youtube</div>
        </li>
        <li className="apps-item">
          <FaGooglePlay />
          <div className="apps-item-text">Play</div>
        </li>
        <li className="apps-item">
          <SiGmail />
          <div className="apps-item-text">Gmail</div>
        </li>
        <li className="apps-item">
          <ImGoogleDrive />
          <div className="apps-item-text">Drive</div>
        </li>
        <li className="apps-item">
          <SiGooglecalendar />
          <div className="apps-item-text">Calender</div>
        </li>
        <li className="apps-item">
          <SiGoogletranslate />
          <div className="apps-item-text">Translate</div>
        </li>
        <li className="apps-item">
          <SiGooglephotos />
          <div className="apps-item-text">Photos</div>
        </li>
        <li className="apps-item">
          <BsCameraFill />
          <div className="apps-item-text">Images</div>
        </li>
      </ul>
      <a href="#" className="btn">
        More Google App
      </a>
    </div>
  );
}

export default Apps;
