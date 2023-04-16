import React from "react";
import "./Button.css";

function Button() {
  return (
    <a href="javascript:SubmitForm('form2')">
      <div className="button animate-enter"></div>
    </a>
  );
}

export default Button;
