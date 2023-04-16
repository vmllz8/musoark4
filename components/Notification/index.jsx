import React from "react";
import "./Notification.css";

function Notification() {
  return (
    <div className="notification">
      <div className="text-2 inter-normal-black-16px">11:11</div>
      <img
        className="icon-bar_chart"
        src="https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector@2x.png"
        alt="icon-bar_chart"
      />
      <img
        className="icon-signal"
        src="https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-1@2x.png"
        alt="icon-signal"
      />
      <img
        className="vector-4"
        src="https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/vector-2@2x.png"
        alt="Vector"
      />
    </div>
  );
}

export default Notification;
