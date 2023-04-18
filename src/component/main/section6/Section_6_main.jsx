import React from 'react'
import Section_6 from './Section_6'

//imges
import img1 from '../../../assets/images/i1.png'
import img2 from '../../../assets/images/i2.png'
import img3 from '../../../assets/images/i3.png'
import img4 from '../../../assets/images/i4.png'
import img5 from '../../../assets/images/i1.png'
import img6 from '../../../assets/images/i3.png'
function Section_6_main() {
    let ary = [
        {
            title : 'Lorem Ipsum',
            description : 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident' ,
            img : img1
        },
        {
            title : 'olor Sitema' ,
            description : 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata' ,
            img : img2
        },
        {
            title : 'Sed ut perspiciatis' ,
            description : 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur' ,
            img : img3
        },
        {
            title : 'Nemo Enim' ,
            description : 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' ,
            img : img4
        },
        {
            title : 'Magni Dolore' ,
            description : 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque' ,
            img : img5
        },
        {
            title : 'Eiusmod Tempor' ,
            description : 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi' ,
            img : img6
        },
    ]
  return (
    <div className='container'>
        <div className='row row-cols-md-2 row-cols-1 gx-4 gy-0'>
            {
                ary.map((x , i) => {
                    return <Section_6 edit={x} key={i} />
                })
            }
        </div>
    </div>
  )
}

export default Section_6_main