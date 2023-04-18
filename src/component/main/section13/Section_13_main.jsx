import React from 'react'
import Section_13 from './Section_13'

function Section_13_main() {
    let ary = [
        {des : 'Non consectetur a erat nam at lectus urna duis?'} ,
        {des : 'Feugiat scelerisque varius morbi enim nunc?'} ,
        {des : 'Dolor sit amet consectetur adipiscing elit?'} ,
        {des : 'Tempus quam pellentesque nec nam aliquam sem et tortor consequat?'} ,
        {des : 'Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?'}
    ]
  return (
    <div id='sec13'>
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <div className='s13d1'>
            {
                ary.map((x , i) => {
                    return <Section_13 edit={x} key={i}/>
                })
            }
        </div>
    </div>
  )
}
export default Section_13_main