import React from 'react'
import './section12.css'
function Section_12(props) {
  return (
    <div className='col'>
        <div>
            <div className='sec12'>
                <div className='s12_d1'>
                    <p>{props.edit.timeline}</p>
                </div>
                <div className='s12_d2'>
                    <div className='s12pricesection'>
                        <p className='s12price'>{props.edit.price}</p> <p className='s12time'>{props.edit.time}</p>
                    </div>
                    <p>{props.edit.des1}</p>
                    <p>{props.edit.des2}</p>
                    <p>{props.edit.des3}</p>
                    <p>{props.edit.des}</p>
                    <p>{props.edit.des}</p>
                </div>
                <div className='s12_d3'>
                    <div className='s12btn1'>
                        Buy Now
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default  Section_12