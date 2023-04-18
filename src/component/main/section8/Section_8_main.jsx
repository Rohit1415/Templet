import React from "react";
import Section_8 from "./Section_8";

function Section_8_main() {
    let ary = [
        {img : require('../../../assets/images/portfolio/portfolio-1.jpg'), title : 'PORTFOIO 1' },
        {img : require('../../../assets/images/portfolio/portfolio-2.jpg'), title : 'PORTFOIO 2' },
        {img : require('../../../assets/images/portfolio/portfolio-3.jpg'), title : 'PORTFOIO 3' },
        {img : require('../../../assets/images/portfolio/portfolio-4.jpg'), title : 'PORTFOIO 4' },
        {img : require('../../../assets/images/portfolio/portfolio-5.jpg'), title : 'PORTFOIO 5' },
        {img : require('../../../assets/images/portfolio/portfolio-6.jpg'), title : 'PORTFOIO 6' },
        {img : require('../../../assets/images/portfolio/portfolio-7.jpg'), title : 'PORTFOIO 7' },
        {img : require('../../../assets/images/portfolio/portfolio-8.jpg'), title : 'PORTFOIO 8' },
        {img : require('../../../assets/images/portfolio/portfolio-9.jpg'), title : 'PORTFOIO 9' }
    ]
  return (
    <div className="container" id="sec8">
      <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
        {
            ary.map((x , i) => {
                return <Section_8 edit={x} key={i} />
            })
        }
      </div>
    </div>
  );
}
export default Section_8_main;
