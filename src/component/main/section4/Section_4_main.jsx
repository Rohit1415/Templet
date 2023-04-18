import Section_4 from './Section_4'
import img1 from '../../../assets/images/client-1.png'
import img2 from '../../../assets/images/client-2.png'
import img3 from '../../../assets/images/client-3.png'
import img4 from '../../../assets/images/client-4.png'
import img5 from '../../../assets/images/client-5.png'
import img6 from '../../../assets/images/client-6.png'
function Section_4_main() {
    let ary = [
        { img : img1 } ,
        { img : img2 } ,
        { img : img3 } ,
        { img : img4 } ,
        { img : img5 } ,
        { img : img6 } 
    ]
  return (
    <div className='container'>
        <div className='row g-4'>
        {
            ary.map((x , i) => {
                return <Section_4 edit={x} key={i} />
            })
        }
        </div>
    </div>
    // <Section_4 />
  )
}

export default Section_4_main