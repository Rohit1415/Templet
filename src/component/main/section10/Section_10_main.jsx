import React from 'react'
import Section_10 from './Section_10'
import './section10.css'

function Section_10_main() {
    let ary = [
        {
          img : require('../../../assets/images/team/team-1.jpg'),
          title : 'Walter White',
          subtitle : 'Chief Executive Officer',
          description : 'Explicabo voluptatem mollitia et repellat qui dolorum quasi'
        },
        {
          img : require('../../../assets/images/team/team-2.jpg'),
          title : 'Product Manager',
          subtitle : 'Product Manager',
          description : 'Aut maiores voluptates amet et quis praesentium qui senda para'
        },
        {
          img : require('../../../assets/images/team/team-3.jpg'),
          title : 'William Anderson',
          subtitle : 'CTO',
          description : 'Quisquam facilis cum velit laborum corrupti fuga rerum quia'
        },
        {
          img : require('../../../assets/images/team/team-4.jpg'),
          title : 'Amanda Jepson',
          subtitle : 'Accountant',
          description : 'Dolorum tempora officiis odit laborum officiis et et accusamusx'
        }
    ]
  return (
    <div id='sec10'>
    <div className="container">
       <div className='row row-cols-lg-2 row-cols-md-1 row-cols-1 g-4'>
       {
        ary.map((x , i) => {
          return <Section_10 edit={x} key={i} />
        })
       }
       </div>
    </div>
    </div>
  )
}

export default  Section_10_main