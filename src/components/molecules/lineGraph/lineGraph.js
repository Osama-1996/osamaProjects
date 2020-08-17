import React, { useState } from 'react';
import './style.css';
import LineChart from 'react-linechart';
import '../charts/charts';



export default () => {
    const data = [
        {
            color: "steelblue",
            points: [{ x: 1, y: 2 }, { x: 3, y: 5 }, { x: 7, y: -3 }, { x: 3, y: 5 }, { x: 3, y: 5 }, { y: 3, }, { x: 2, y: 2 }]
        }
    ];

    const [openClose, setOpenClose] = useState(false)
    const hideShow = () => {
        if (openClose === true) {
            setOpenClose(false);
        }
        else {
            setOpenClose(true);
        }
    }
    return (
        <div>

            <div className="linedataDiv">
                <div className="span3">
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </div>
                <div className="lineHead">
                    <h3>Professional Development Index</h3>
                </div>
                <div className="lineflexDiv">
                    <span className="line1">Average</span>
                    <span className="line2">Your Company 2018</span>
                    <span className="line3">Your Company 2017</span>
                </div>
            </div>
            <div>
                <LineChart
                    width={900}
                    height={400}
                    data={data}
                />
            </div>
            <div className="bigHead">
                <h1>Company Compentencies</h1>
            </div>
            <div className="gridViewDiv">
                <div>
                    <i class="fas fa-th"  onClick={() => hideShow()}></i>
                </div>
                <div>
                    <span  onClick={() => hideShow()}>Add More</span>
                </div>
            </div>
            {openClose ?
            <div className="closingDiv">
            <div className="dataDiv1">
                    <div  className="fonts1">
                        <div className="downflex1">
                            <div className="uparrow1">
                                <i class="fas fa-angle-up"></i>
                            </div>
                            <div className="downarrow1">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                        <div className="wifi">
                            <p>Wifi</p>
                        </div>
                    </div>
                    <div  className="dottedFlex1">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </div>
             
                <div className="dataDiv1">
                    <div  className="fonts1">
                        <div className="downflex1">
                            <div className="uparrow1">
                                <i class="fas fa-angle-up"></i>
                            </div>
                            <div className="downarrow1">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                        <div className="wifi">
                            <p>RF</p>
                        </div>
                    </div>
                    <div  className="dottedFlex1">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </div>

              
                <div className="dataDiv1">
                    <div  className="fonts1">
                        <div className="downflex1">
                            <div className="uparrow1">
                                <i class="fas fa-angle-up"></i>
                            </div>
                            <div className="downarrow1">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                        <div className="wifi">
                            <p>Video</p>
                        </div>
                    </div>
                    <div  className="dottedFlex1">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </div>
                {/* four */}
                <div className="dataDiv1">
                    <div  className="fonts1">
                        <div className="downflex1">
                            <div className="uparrow1">
                                <i class="fas fa-angle-up"></i>
                            </div>
                            <div className="downarrow1">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                        <div className="wifi">
                            <p>Optical Theory</p>
                        </div>
                    </div>
                    <div  className="dottedFlex1">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </div>
                {/* fivr */}
                <div className="dataDiv1">
                    <div  className="fonts1">
                        <div className="downflex1">
                            <div className="uparrow1">
                                <i class="fas fa-angle-up"></i>
                            </div>
                            <div className="downarrow1">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                        <div className="wifi">
                            <p>MultiPlexing</p>
                        </div>
                    </div>
                    <div  className="dottedFlex1">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </div>
                {/* six */}
                <div className="dataDiv1">
                    <div  className="fonts1">
                        <div className="downflex1">
                            <div className="uparrow1">
                                <i class="fas fa-angle-up"></i>
                            </div>
                            <div className="downarrow1">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                        <div className="wifi">
                            <p>Electric Thoery</p>
                        </div>
                    </div>
                    <div  className="dottedFlex1">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </div>
                {/* seven */}
                <div className="dataDiv1">
                    <div  className="fonts1">
                        <div className="downflex1">
                            <div className="uparrow1">
                                <i class="fas fa-angle-up"></i>
                            </div>
                            <div className="downarrow1">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                        <div className="wifi">
                            <p>Network Data</p>
                        </div>
                    </div>
                    <div  className="dottedFlex1">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </div>
                {/* eight */}
                <div className="dataDiv1">
                    <div  className="fonts1">
                        <div className="downflex1">
                            <div className="uparrow1">
                                <i class="fas fa-angle-up"></i>
                            </div>
                            <div className="downarrow1">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                        <div className="wifi">
                            <p>Headend</p>
                        </div>
                    </div>
                    <div  className="dottedFlex1">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </div>
                {/* nine */}
                <div className="dataDiv1">
                    <div  className="fonts1">
                        <div className="downflex1">
                            <div className="uparrow1">
                                <i class="fas fa-angle-up"></i>
                            </div>
                            <div className="downarrow1">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                        <div className="wifi">
                            <p>Circuit Switched Networks</p>
                        </div>
                    </div>
                    <div  className="dottedFlex1">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </div>
                {/* ten */}
                <div className="dataDiv1">
                    <div  className="fonts1">
                        <div className="downflex1">
                            <div className="uparrow1">
                                <i class="fas fa-angle-up"></i>
                            </div>
                            <div className="downarrow1">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                        <div className="wifi">
                            <p>Ethernet</p>
                        </div>
                    </div>
                    <div  className="dottedFlex1">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </div>
                </div>
                 :""}
                </div> 
       
           
    );
}
