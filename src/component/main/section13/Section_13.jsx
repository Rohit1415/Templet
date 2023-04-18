import React from "react";
import "./section13.css";

function Section_13(props) {
  return (
    <div className="sec13out">
      <div className="container">
        <div className="s13d">
          <p>{props.edit.des}</p>
        </div>
      </div>
    </div>
  );
}
export default Section_13;
