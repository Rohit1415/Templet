import React from 'react'
import Section_12 from './Section_12'

function Section_12_mail() {
    let ary = [ 
    { 
        timeline : 'Free', 
        price : '$0' , 
        time : '/month' , 
        des1 : 'Aida dere' , 
        des2 : 'Nec feugiat nisl' , 
        des3 : 'Nulla at volutpat dola' , 
        des4 : 'Pharetra massa' ,
        des5 : 'Massa ultricies mi' ,
        style : {textDecoration: 'line-through'}
    },
    { 
        timeline : 'Business', 
        price : '$19' , 
        time : '/month' , 
        des1 : 'Aida dere' , 
        des2 : 'Nec feugiat nisl' , 
        des3 : 'Nulla at volutpat dola' , 
        des4 : 'Pharetra massa' ,
        des5 : 'Massa ultricies mi',
        style2 : {textDecoration: 'line-through'}
    },
    { 
        timeline : 'Developer', 
        price : '$29' , 
        time : '/month' , 
        des1 : 'Aida dere' , 
        des2 : 'Nec feugiat nisl' , 
        des3 : 'Nulla at volutpat dola' , 
        des4 : 'Pharetra massa' ,
        des5 : 'Massa ultricies mi'
    },
    { 
        timeline : 'Ultimate', 
        price : '$49' , 
        time : '/month' , 
        des1 : 'Aida dere' , 
        des2 : 'Nec feugiat nisl' , 
        des3 : 'Nulla at volutpat dola' , 
        des4 : 'Pharetra massa' ,
        des5 : 'Massa ultricies mi'
    }
    ]
  return (
    <div className='container' id='sec12'>
        <div className='row row-cols-lg-4 row-cols-md-2 row-cols-1 g-4'>
            {
                ary.map((x , i) => {
                    return <Section_12 edit={x} key={i}/>
                })
            }
        </div>
    </div>
  )
}
export default  Section_12_mail