import React from 'react'
import './section8.css'
function Section_8(props) {
  return (
    <>
        <div className='col sec8'>
            <div>
                <div className='s8img'>
                    <img src={props.edit.img} className='img-fluid' />
                    <div className='s8imgdes'>
                        <h3>{props.edit.title}</h3>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Section_8