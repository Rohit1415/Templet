import React from "react";


import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

function Section_10(props) {
  return (
    <div className="col">
      <div className="sec10">
        <div className="s10imgout">
          <div className="s10img">
            <img src={props.edit.img} alt="" />
          </div>
        </div>
        <div className="s10des">
          <h5>{props.edit.title}</h5>
          <p>{props.edit.subtitle}</p>
          <p>{props.edit.description}</p>
          <div className="s10iconword">
            <div className="s10icon">
              <AiFillTwitterCircle />
            </div>
            <div className="s10icon">
              <BsFacebook />
            </div>
            <div className="s10icon">
              <AiFillInstagram />
            </div>
            <div className="s10icon">
              <AiFillLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_10;
