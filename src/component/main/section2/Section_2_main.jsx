import React from "react";
import Section_2 from "./Section_2";
import img1 from '../../../assets/images/i1.png'
import img2 from '../../../assets/images/i2.png'
import img3 from '../../../assets/images/i3.png'
import img4 from '../../../assets/images/i4.png'

function Section_2_main() {
  let ary = [
    { img : img1 , title : 'Lorem Ipsum'  , description : 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident' } ,
    { img : img2 , title : 'Sed ut perspiciatis' , description : 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur' } ,
    { img : img3 , title : 'Magni Dolores' , description : 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' } ,
    { img : img4 , title : 'Nemo Enim' , description : 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque' }
  ]
  return (
    <div className="container">
      <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 g-4">
      {
        ary.map((x , i) => {
          return  <Section_2 edit={x} key={i}/>
        })
      }
      </div>
    </div>
  );
}


export default Section_2_main