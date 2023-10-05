import React from 'react'
import './Section5.css'
import five from '../../Asserts/Images/5thimg.png'

function Section5() {
  return (
<>
<div className="section5">

<div className="fiveleft">
<div>Collaborative <br /> Project Planning</div>
<div>Effortlessly create and manage team plans. Break down complex <br /> projects into manageable tasks, allocate resources, and visualize <br /> timelines. Foster collaboration by sharing project roadmaps with <br /> your team. Our user-friendly onboarding process ensures you're <br /> up and running quickly. Create an account, invite team members, <br /> and customize your workspace effortlessly.</div>

<button>Our Case Studies</button>
</div>

<div className="fiveright">
    <div className="fiveimg">
        <img src={five} alt="" />
    </div>

</div>

</div>

</>
  )
}

export default Section5;