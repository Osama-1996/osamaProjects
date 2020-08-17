import React from 'react'
import './style.css'
import '../../atoms/button/button'
import Section2 from "../../molecules/sectionTwo/section2"
import Sectiontwo from "../../organism/sectionThree/section2"
import MixCharts from "../../organism/mixCharts/mixCharts"
import Footer from "../../molecules/footer/footer"
import { Link } from "react-router-dom";



export default () => {
    return (
        <div className="background-img">
            <div className="rgbaDiv">
                <div className="section1Div">
                    <div className="leftsideDiv">
                        <div className="flexDiv">
                       
                            <div className></div>
                  
                            <div>
                                <h1>Comcast</h1>
                            </div>
                          
                            <div className="section1img">
                                <img src={require('../../../assetts/images/logo.png')} />
                            </div>
                        </div>

                        <div className="belowLogo">
                            <ul>
                            <Link to="/home">
                                <li className="nth1">HOME</li>
                                </Link>
                                <Link to="/route">
                                <li  className="nth2">COURSEWORK</li>
                                </Link>
                                <Link to="/last">
                                <li  className="nth3">CERTIFICATION</li>
                                </Link>
                            </ul>
                        </div>

                    </div>
                    <div className="middleDiv">
                        <div className="middledivflex">

                            <div className="ul-liDiv">
                                <ul>
                                    <li>Dashboard</li>
                                    <li>Change Settings</li>
                                    <li>Export/Share</li>
                                    <li>Support/FAQs</li>
                                    <li>Log Out</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="rightsideDiv">
                        <div>
                            <img src={require('../../../assetts/images/text.png')} />
                        </div>
                        <div className="parahead">
                            <div>
                            <p>Company Name</p>
                            </div>
                            <div>
                            <h4>Home</h4>
                            </div>
                        </div>

                    </div>
                </div>
               
                <div>
                <Section2 />
             
                </div>
            </div>
        </div>
    );
}