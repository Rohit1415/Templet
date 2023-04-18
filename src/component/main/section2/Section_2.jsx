import React from 'react'
import './section_2.css'

function Section_2(props) {
  return (
    <div id='sec2'>
        <div className='out col'>
            <div className='img'>
                <img src={props.edit.img}  />
            </div>
            <div className='s2title'>
                <h4>
                 {props.edit.title}
                </h4>
            </div>
            <div className='s2discription'>
              <p>
              {props.edit.description}
              </p>
            </div>
        </div>
    </div>
  )
}


export default Section_2