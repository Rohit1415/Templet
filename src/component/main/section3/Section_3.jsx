import React from "react";
import "./section_3.css";

function Section_3() {
  return (
    <div id="sec3">
      <div id="s3out">
      <div className="container">
        <div className="row">
          <div className="col-12" id="s3heading">
            <h2>ABOUT US</h2>
          </div>
          <div id="s3des" className="col-12">
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div className="col-12 col-md-6" id="s3d1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />{" "}
              <br />
              <p>
                <span> &#10003; </span> Ullamco laboris nisi ut aliquip ex ea
                commodo consequat
              </p>
              <p>
                <span> &#10003; </span> Duis aute irure dolor in reprehenderit
                in voluptate velit
              </p>
              <p>
                <span> &#10003; </span> Ullamco laboris nisi ut aliquip ex ea
                commodo consequat
              </p>
            </p>
          </div>
          <div className="col-12 col-md-6 mt-md-5" id="s3d2">
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <button id="s3btn1" type="button">
              Learn More
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Section_3;
