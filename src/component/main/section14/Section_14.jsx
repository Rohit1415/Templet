import React from "react";
import "./section14.css";
import { ImLocation2 } from "react-icons/im";
import { AiOutlineMail, AiOutlineMobile } from "react-icons/ai";
// import img from '../../../assets/images'
function Section_14() {
  return (
    <div className="sec14">
      <div className="container">
        <h1 className="heading">CONTACT US</h1>
        <div className="row row-cols-lg-2 row-cols-md-1 row-cols-1 g-4">
          <div className="col s14d1">
            <div>
              <div className="icon1">
                <ImLocation2 className="s14i1" />
                <h3>Location:</h3>
              </div>
              <p className="setetxt">A108 Adam Street, New York, NY 535022</p>
              <div className="icon1">
                <AiOutlineMail className="s14i1" />
                <h3>Email:</h3> <br />
              </div>
              <p className="setetxt">info@example.com</p>
              <div className="icon1">
                <AiOutlineMobile className="s14i1" />
                <h3>Call:</h3>
              </div>
              <p className="setetxt">+1 5589 55488 55</p>
            </div>
          </div>
          <div className="col s14d2">
            <div>
              <div className="row">
                <div className="col-5 me-auto yname">
                  <input
                    type="text"
                    className="s14yname"
                    placeholder="Your Name"
                  />
                </div>
                <div className="col-6 yemail">
                  <input
                    type="text"
                    className="s14yemail"
                    placeholder="Your Email"
                  />
                </div>
                <div className="col-12 sub">
                  <input
                    type="text"
                    className="s14subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="col-12 textare">
                  <textarea cols="70" rows="5"></textarea>
                <div className="s14btn1">
                    <p>Send Message</p>
                </div>
                <div className="div_for_sapce">

                </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section_14;
