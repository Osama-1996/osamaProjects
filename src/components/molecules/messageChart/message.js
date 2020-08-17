import React,{useRef, useEffect} from 'react'
import './style.css'
import { gsap, TweenMax } from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'

export default () => {
    if(typeof window !=='undefined')
{
    gsap.registerPlugin(ScrollTrigger);
}
    let chart1=useRef(null);
    let chart2 = useRef(null);
    let chart3 =useRef(null);
    let chart4 =useRef(null);
    let chart5 =useRef(null);
    useEffect(() => {
        TweenMax.from(chart1, {scrollTrigger:{trigger:chart1, toggleActions:"restart reverse restart resume"}
    ,x:-200, opacity:0,duration:0.5});
    TweenMax.from(chart2,{scrollTrigger:{trigger:chart2,toggleActions:"restart reverse restart resume"},x:200,opacity:0,duration:0.5});
    TweenMax.from(chart3, {scrollTrigger:{trigger:chart3, toggleActions:"restart reverse restart resume"}
    ,x:-200, opacity:0,duration:0.5});
    TweenMax.from(chart4,{scrollTrigger:{trigger:chart4,toggleActions:"restart reverse restart resume"},x:200,opacity:0,duration:0.5});
    TweenMax.from(chart5,{scrollTrigger:{trigger:chart5,toggleActions:"restart reverse restart resume"},x:-200, opacity:0,duration:0.5});
    })
    return (
        <div className="messageBack">
            <div>
                <h1>Insights</h1>
            </div>
            <div >
                <div className="chart1" ref={element =>{chart1=element}} >
                    <div>
                        <p >Looks like your <b> company's Coursework Performance</b> has increased in several areas since last month. Nice job!</p>
                    </div>
                </div>
            </div>
            <div className="widthDiv">
                <div >
                    <div className="chart2" ref={el => {chart2 = el}}>
                        <div>
                            <p>Your company's<b> Wi-Fi competencies</b> might need some attention. Here are a few <b>Courses</b> you might consider: httpz:/bit.ly.kashjf45</p>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className="chart1"  ref={element3 =>{chart3=element3}}>
                    <div>
                        <p>Looks like your <b> company's Coursework Performance</b> has increased in several areas since last month. Nice job!</p>
                    </div>
                </div>
            </div>
            <div className="widthDiv">
                <div >
                    <div className="chart2"  ref={element4 =>{chart4=element4}} >
                        <div>
                            <p>Your company's<b> Wi-Fi competencies</b> might need some attention. Here are a few <b>Courses</b> you might consider: httpz:/bit.ly.kashjf45</p>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className="chart1" ref={element5 =>{chart5=element5}}  >
                    <div>
                        <p>Looks like your <b> company's Coursework Performance</b> has increased in several areas since last month. Nice job!</p>
                    </div>
                </div>
            </div>
            <div >
                <div className="imgCenter"  >
                    <img src={require('../../../assetts/images/chat2.png')} />
                </div>
            </div>
        </div>
    );
}