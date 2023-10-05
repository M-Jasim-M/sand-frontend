import React from 'react'
import './Section3.css'
import threeone from '../../Asserts/Images/3rdchi.png'
import threetwo from '../../Asserts/Images/3rdchi2.png'
import thirdimg from '../../Asserts/Images/3rdimg.svg'

function Section3() {
  return (
    <>
    <div className="section3">
<div className="threeleft">
<div>
We Make it <br /> effortlessly to Track <br /> all users analytics
</div>

<div>We help to keep track of your expences & income.it Show <br /> the flow of record over a specific period of time . <br /> such as weekly monthy or a rey* why</div>

<div className='threebottom'>
<div>
<img src={threeone} alt="" />
<div>Powerful dashboard</div>
<div>Combine multiple Dashboards <br /> reports into a single beautiful <br /> dashboards</div>
</div>
{/* thsi is the next  */}
<div>
<img src={threetwo} alt="" />
<div>Always in sync</div>
<div>Combine multiple Dashboards <br /> reports into a single beautiful <br /> dashboards</div>


</div>

</div>

</div>

<div className="threeright">
<img src={thirdimg} alt="" />
</div>

    </div>


    </>
  )
}

export default Section3