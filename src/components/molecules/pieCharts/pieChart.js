import React, { useState } from 'react'
import './style.css'
import Donut from 'react-svg-donuts';
import 'react-svg-donuts/dist/index.css';
import DonutChart from 'react-donut-chart';
import ReactTooltip from 'react-tooltip';
import 'zingchart/es6';
import ZingChart from 'zingchart-react';
import 'zingchart-react/dist/modules/zingchart-depth.min.js';


export default () => {

    const progress = 70;
    const progress2 = 100;
    const progress3 = 69;

    const [openClose, setopenClose] = useState(false)
    const hideShow = () => {
        if (openClose === true) {
            setopenClose(false);
        }
        else {
            setopenClose(true);
        }
    }

    const [openClose1, setopenClose1] = useState(false)
    const hideShow1 = () => {
        if (openClose1 === true) {
            setopenClose1(false);
        }
        else {
            setopenClose1(true);
        }
    }

    const [openClose2, setopenClose2] = useState(false)
    const hideShow2 = () => {
        if (openClose2 === true) {
            setopenClose2(false);
        }
        else {
            setopenClose2(true);
        }
    }

    // data = {
    //     type: ring = "",
    //     title: {
    //         text: "Donut Chart"
    //     },
    //     plot: {
    //     },
    //     series: [
    //         { values: [59] },
    //         { values: [55] },
    //         { values: [30] },
    //         { values: [28] },
    //         { values: [15] }
    //     ]
    // }

    return (
        <div className="pieChartback">

            <div className="spanBlock2">
                <div>
                    <div onClick={() => hideShow()} className="onClick">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                    {openClose ?
                        <div className="tootipDiv">
                            <p>Indicates average performance in courses that  are passed by team members.</p>
                            <div className="crossDiv">
                                <i class="fas fa-times" onClick={() => hideShow()} ></i>
                            </div>

                        </div>
                        : ""}
                </div>
                <div>
                    <h3>Utilization</h3>
                </div>
            </div>
            <div className="pieChartFlex">
                <div className="pie1">
                    <Donut progress={progress} />
                </div>

                <div className="pie2">
                    <ZingChart />

                </div>
            </div>

            <div className="pieChartFlex">
                <div className="pie3">
                    <Donut progress={progress2} />
                </div>

                <div className="pie4">
                    <Donut progress={progress3} />
                </div>
            </div>
            <div className="lastDiv">
                <div className="lastleftDiv">
                    <div className="spanBlock2">
                        <div>
                            <div onClick={() => hideShow1()} className="onClick">
                                <span>.</span>
                                <span>.</span>
                                <span>.</span>
                            </div>
                            {openClose1 ?
                                <div className="tootipDiv">
                                    <p>Average time to complete a course.</p>
                                    <div className="crossDiv">
                                        <i class="fas fa-times" onClick={() => hideShow1()} ></i>
                                    </div>

                                </div>
                                : ""}
                        </div>
                        <div>
                            <h3>Course Duration Average</h3>
                        </div>
                    </div>
                </div>
                <div className="lastrightDiv">
                    <div className="spanBlock2">
                        <div>
                            <div onClick={() => hideShow2()} className="onClick">
                                <span>.</span>
                                <span>.</span>
                                <span>.</span>
                            </div>
                            {openClose2 ?
                                <div className="tootipDiv">
                                    <p>The aggregate of individuals engagement scores.</p>
                                    <div className="crossDiv">
                                        <i class="fas fa-times" onClick={() => hideShow2()} ></i>
                                    </div>

                                </div>
                                : ""}
                        </div>
                        <div>
                            <h3>Single Engagement</h3>
                        </div>
                    </div>
                </div>


            </div>
            {/* <ReactTooltip multiline={true} clickable={true} place={"right"} /> */}
        </div>
    );
}