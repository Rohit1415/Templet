import React from "react";
import "./section6.css";

function Section_6(props) {
  return (
    <div className="col" id="sec6out">
      <div id="sec6">
      <div className="row" >
        <div className="col-2 p-3" id="s6d1">
          <div>
            <img src={props.edit.img} alt="" />
          </div>
        </div>
        <div className="col-10 p-3" id="s6d2">
          <div>
            <h5>{props.edit.title}</h5> <br />
            <p>{props.edit.description}</p>
          </div>
        </div>
      </div>
      </div>
    </div>

    //   <div className='col'>
    //     <div>

    //     </div>
    // </div>
  );
}

export default Section_6;
