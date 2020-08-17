import React from 'react'
import './style.css'
import Section1 from "../../organism/section1/section1"
import Section2 from "../../organism/sectionThree/section2"
import MixCharts from "../../organism/mixCharts/mixCharts"
import Footer from "../../molecules/footer/footer"

export default()=>{
    return(
<div className="backColour">
<Section1/>
{/* <MixCharts/> */}
<Section2/>
<Footer/>
</div>
    );
}