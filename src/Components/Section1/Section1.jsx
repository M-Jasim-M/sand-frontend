import React from 'react'
import './Section1.css'
import first from '../../Asserts/Images/1stimg.svg'
function Section1() {
  return (
    <>
    <div className="section1">

<div className="oneleft">
<div>Monitor, build <br /> and Analytics <br /> Employs!</div>
<div>Lorem ipsum text is used by UX designers <br /> to create wireframeprototype to wireframe.</div>
<div><button>Our Case Studies</button><button>Contact Us</button></div>
</div>
<div className="oneright">
<img src={first} alt="" />
</div>

    </div>


    </>
  )
}

export default Section1