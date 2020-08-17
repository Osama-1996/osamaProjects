import React, { useState } from 'react'
import './style.css'
import YanProgress from 'react-yan-progress';


export default () => {

    const [openClose, setOpenClose] = useState(false)
    const hideShow = () => {
        if (openClose === true) {
            setOpenClose(false);
        }
        else {
            setOpenClose(true);
        }
    }

    const [openClose1, setOpenClose1] = useState(false)
    const hideShow1 = () => {
        if (openClose1 === true) {
            setOpenClose1(false);
        }
        else {
            setOpenClose1(true);
        }
    }

    const [openClose2, setOpenClose2] = useState(false)
    const hideShow2 = () => {
        if (openClose2 === true) {
            setOpenClose2(false);
        }
        else {
            setOpenClose2(true);
        }
    }

    const [openClose3, setOpenClose3] = useState(false)
    const hideShow3 = () => {
        if (openClose3 === true) {
            setOpenClose3(false);
        }
        else {
            setOpenClose3(true);
        }
    }

    const [openClose4, setOpenClose4] = useState(false)
    const hideShow4 = () => {
        if (openClose4 === true) {
            setOpenClose4(false);
        }
        else {
            setOpenClose4(true);
        }
    }

    const [openClose5, setOpenClose5] = useState(false)
    const hideShow5 = () => {
        if (openClose5 === true) {
            setOpenClose5(false);
        }
        else {
            setOpenClose5(true);
        }
    }

    const [openClose6, setOpenClose6] = useState(false)
    const hideShow6 = () => {
        if (openClose6 === true) {
            setOpenClose6(false);
        }
        else {
            setOpenClose6(true);
        }
    }

    const [openClose7, setOpenClose7] = useState(false)
    const hideShow7 = () => {
        if (openClose7 === true) {
            setOpenClose7(false);
        }
        else {
            setOpenClose7(true);
        }
    }

    const [openClose8, setOpenClose8] = useState(false)
    const hideShow8 = () => {
        if (openClose8 === true) {
            setOpenClose8(false);
        }
        else {
            setOpenClose8(true);
        }
    }

    const [openClose9, setOpenClose9] = useState(false)
    const hideShow9 = () => {
        if (openClose9 === true) {
            setOpenClose9(false);
        }
        else {
            setOpenClose9(true);
        }
    }

    return (
        <div className="main-back">
            <div>
                <div className="dataDiv">
                    <div onClick={() => hideShow()} className="fonts">
                        <div className="downflex">
                            <div className="uparrow">
                                <i class="fas fa-angle-up"></i>
                            </div>
                            <div className="downarrow">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                        <div>
                            <p>Wifi</p>
                        </div>
                    </div>
                    <div onClick={() => hideShow()} className="dottedFlex">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </div>
                {/* ............. */}
                {openClose ?

                    <div>
                        <div className="dataflex">
                            <div>
                                <h4>Primer Wifi</h4>
                            </div>
                            <div className="companyDiv">
                                <span className="span1">o</span>
                                <span className="span2">o</span>
                                <span>Your Company</span>
                            </div>
                            <div className="similarDiv">
                                <span className="span3">o</span>
                                <span >Similar Companies</span>
                            </div>
                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>
                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>
                        {/* ............... */}

                        {/* wifi2 */}
                        <div className="dataflex">
                            <div>
                                <h4>Fundamental Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>
                        {/* ......................... */}

                        {/* wifi3 */}
                        <div className="dataflex">
                            <div>
                                <h4>Advanced Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>


                        {/* ......................... */}

                        {/* wifi4 */}
                        <div className="dataflex">
                            <div>
                                <h4>Intermidiate Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv3">
                            <div className="App">
                                <YanProgress total={100} done={90} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>


                        {/* ......................... */}
                    </div>
                    : ""}
            </div>

            {/* two */}
            <div>
                <div className="dataDiv">
                    <div onClick={() => hideShow1()} className="fonts">
                        <div className="downflex">
                            <div className="uparrow">
                                <i class="fas fa-angle-up"></i>
                            </div>
                            <div className="downarrow">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                        <div>
                            <p>RF</p>
                        </div>
                    </div>
                    <div onClick={() => hideShow1()} className="dottedFlex">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </div>
                {/* ............. */}
                {openClose1 ?

                    <div>
                        <div className="dataflex">
                            <div>
                                <h4>Primer Wifi</h4>
                            </div>
                            <div>
                                <span className="span1">o</span>
                                <span className="span2">0</span>
                                <span>Your Company</span>
                            </div>
                            <div>
                                <span className="span3">o</span>
                                <span >Similar Companies</span>
                            </div>
                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>
                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>
                        {/* ............... */}

                        {/* wifi2 */}
                        <div className="dataflex">
                            <div>
                                <h4>Fundamental Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>
                        {/* ......................... */}

                        {/* wifi3 */}
                        <div className="dataflex">
                            <div>
                                <h4>Advanced Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>


                        {/* ......................... */}

                        {/* wifi4 */}
                        <div className="dataflex">
                            <div>
                                <h4>Intermidiate Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv3">
                            <div className="App">
                                <YanProgress total={100} done={90} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>


                        {/* ......................... */}
                    </div>
                    : ""}
            </div>

            {/* three */}
            <div>
                <div className="dataDiv">
                    <div onClick={() => hideShow1()} className="fonts">
                        <div className="downflex">
                            <div className="uparrow">
                                <i class="fas fa-angle-up"></i>
                            </div>
                            <div className="downarrow">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                        <p>Video</p>
                    </div>
                    <div onClick={() => hideShow2()} className="dottedFlex">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </div>
                {/* ............. */}
                {openClose2 ?

                    <div>
                        <div className="dataflex">
                            <div>
                                <h4>Primer Wifi</h4>
                            </div>
                            <div>
                                <span className="span1">o</span>
                                <span className="span2">0</span>
                                <span>Your Company</span>
                            </div>
                            <div>
                                <span className="span3">o</span>
                                <span >Similar Companies</span>
                            </div>
                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>
                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>
                        {/* ............... */}

                        {/* wifi2 */}
                        <div className="dataflex">
                            <div>
                                <h4>Fundamental Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>
                        {/* ......................... */}

                        {/* wifi3 */}
                        <div className="dataflex">
                            <div>
                                <h4>Advanced Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>


                        {/* ......................... */}

                        {/* wifi4 */}
                        <div className="dataflex">
                            <div>
                                <h4>Intermidiate Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv3">
                            <div className="App">
                                <YanProgress total={100} done={90} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>


                        {/* ......................... */}
                    </div>
                    : ""}
            </div>

            {/* four */}
            <div>
                <div className="dataDiv">
                    <div onClick={() => hideShow1()} className="fonts">
                        <div className="downflex">
                            <div className="uparrow">
                                <i class="fas fa-angle-up"></i>
                            </div>
                            <div className="downarrow">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                        <p>Optical Theory</p>
                    </div>
                    <div onClick={() => hideShow3()} className="dottedFlex">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </div>
                {/* ............. */}
                {openClose3 ?

                    <div>
                        <div className="dataflex">
                            <div>
                                <h4>Primer Wifi</h4>
                            </div>
                            <div className="companyDiv">
                                <span className="span1">o</span>
                                <span className="span2">o</span>
                                <span>Your Company</span>
                            </div>
                            <div>
                                <span className="span3">o</span>
                                <span >Similar Companies</span>
                            </div>
                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>
                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>
                        {/* ............... */}

                        {/* wifi2 */}
                        <div className="dataflex">
                            <div>
                                <h4>Fundamental Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>
                        {/* ......................... */}

                        {/* wifi3 */}
                        <div className="dataflex">
                            <div>
                                <h4>Advanced Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>


                        {/* ......................... */}

                        {/* wifi4 */}
                        <div className="dataflex">
                            <div>
                                <h4>Intermidiate Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv3">
                            <div className="App">
                                <YanProgress total={100} done={90} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>


                        {/* ......................... */}
                    </div>
                    : ""}
            </div>

            {/* five */}
            <div>
                <div className="dataDiv">
                    <div onClick={() => hideShow1()} className="fonts">
                        <div className="downflex">
                            <div className="uparrow">
                                <i class="fas fa-angle-up"></i>
                            </div>
                            <div className="downarrow">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                        <p>Multiplexing</p>
                    </div>
                    <div onClick={() => hideShow4()} className="dottedFlex">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </div>
                {/* ............. */}
                {openClose4 ?

                    <div>
                        <div className="dataflex">
                            <div>
                                <h4>Primer Wifi</h4>
                            </div>
                            <div>
                                <span className="span1">o</span>
                                <span className="span2">0</span>
                                <span>Your Company</span>
                            </div>
                            <div>
                                <span className="span3">o</span>
                                <span >Similar Companies</span>
                            </div>
                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>
                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>
                        {/* ............... */}

                        {/* wifi2 */}
                        <div className="dataflex">
                            <div>
                                <h4>Fundamental Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>
                        {/* ......................... */}

                        {/* wifi3 */}
                        <div className="dataflex">
                            <div>
                                <h4>Advanced Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>


                        {/* ......................... */}

                        {/* wifi4 */}
                        <div className="dataflex">
                            <div>
                                <h4>Intermidiate Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv3">
                            <div className="App">
                                <YanProgress total={100} done={90} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>


                        {/* ......................... */}
                    </div>
                    : ""}
            </div>

            {/* six */}
            <div>
                <div className="dataDiv">
                    <div onClick={() => hideShow1()} className="fonts">
                        <div className="downflex">
                            <div className="uparrow">
                                <i class="fas fa-angle-up"></i>
                            </div>
                            <div className="downarrow">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                        <p>Electrical Theory</p>
                    </div>
                    <div onClick={() => hideShow5()} className="dottedFlex">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </div>
                {/* ............. */}
                {openClose5 ?

                    <div>
                        <div className="dataflex">
                            <div>
                                <h4>Primer Wifi</h4>
                            </div>
                            <div>
                                <span className="span1">o</span>
                                <span className="span2">0</span>
                                <span>Your Company</span>
                            </div>
                            <div>
                                <span className="span3">o</span>
                                <span >Similar Companies</span>
                            </div>
                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>
                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>
                        {/* ............... */}

                        {/* wifi2 */}
                        <div className="dataflex">
                            <div>
                                <h4>Fundamental Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>
                        {/* ......................... */}

                        {/* wifi3 */}
                        <div className="dataflex">
                            <div>
                                <h4>Advanced Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>


                        {/* ......................... */}

                        {/* wifi4 */}
                        <div className="dataflex">
                            <div>
                                <h4>Intermidiate Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv3">
                            <div className="App">
                                <YanProgress total={100} done={90} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>


                        {/* ......................... */}
                    </div>
                    : ""}
            </div>

            {/* seven */}
            <div>
                <div className="dataDiv">
                    <div onClick={() => hideShow1()} className="fonts">
                        <div className="downflex">
                            <div className="uparrow">
                                <i class="fas fa-angle-up"></i>
                            </div>
                            <div className="downarrow">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                        <p>Nettwork Data</p>
                    </div>
                    <div onClick={() => hideShow6()} className="dottedFlex">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </div>
                {/* ............. */}
                {openClose6 ?

                    <div>
                        <div className="dataflex">
                            <div>
                                <h4>Primer Wifi</h4>
                            </div>
                            <div>
                                <span className="span1">o</span>
                                <span className="span2">0</span>
                                <span>Your Company</span>
                            </div>
                            <div>
                                <span className="span3">o</span>
                                <span >Similar Companies</span>
                            </div>
                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>
                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>
                        {/* ............... */}

                        {/* wifi2 */}
                        <div className="dataflex">
                            <div>
                                <h4>Fundamental Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>
                        {/* ......................... */}

                        {/* wifi3 */}
                        <div className="dataflex">
                            <div>
                                <h4>Advanced Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>


                        {/* ......................... */}

                        {/* wifi4 */}
                        <div className="dataflex">
                            <div>
                                <h4>Intermidiate Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv3">
                            <div className="App">
                                <YanProgress total={100} done={90} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>


                        {/* ......................... */}
                    </div>
                    : ""}
            </div>

            {/* eight */}
            <div>
                <div className="dataDiv">
                    <div onClick={() => hideShow1()} className="fonts">
                        <div className="downflex">
                            <div className="uparrow">
                                <i class="fas fa-angle-up"></i>
                            </div>
                            <div className="downarrow">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                        <p>Headend</p>
                    </div>
                    <div onClick={() => hideShow7()} className="dottedFlex">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </div>
                {/* ............. */}
                {openClose7 ?

                    <div>
                        <div className="dataflex">
                            <div>
                                <h4>Primer Wifi</h4>
                            </div>
                            <div>
                                <span className="span1">o</span>
                                <span className="span2">0</span>
                                <span>Your Company</span>
                            </div>
                            <div>
                                <span className="span3">o</span>
                                <span >Similar Companies</span>
                            </div>
                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>
                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>
                        {/* ............... */}

                        {/* wifi2 */}
                        <div className="dataflex">
                            <div>
                                <h4>Fundamental Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>
                        {/* ......................... */}

                        {/* wifi3 */}
                        <div className="dataflex">
                            <div>
                                <h4>Advanced Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>


                        {/* ......................... */}

                        {/* wifi4 */}
                        <div className="dataflex">
                            <div>
                                <h4>Intermidiate Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv3">
                            <div className="App">
                                <YanProgress total={100} done={90} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>


                        {/* ......................... */}
                    </div>
                    : ""}
            </div>

            {/* Nine */}
            <div>
                <div className="dataDiv">
                    <div onClick={() => hideShow1()} className="fonts">
                        <div className="downflex">
                            <div className="uparrow">
                                <i class="fas fa-angle-up"></i>
                            </div>
                            <div className="downarrow">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                        <p>Circuit Switched Networks</p>
                    </div>
                    <div onClick={() => hideShow8()} className="dottedFlex">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </div>
                {/* ............. */}
                {openClose8 ?

                    <div>
                        <div className="dataflex">
                            <div>
                                <h4>Primer Wifi</h4>
                            </div>
                            <div>
                                <span className="span1">o</span>
                                <span className="span2">0</span>
                                <span>Your Company</span>
                            </div>
                            <div>
                                <span className="span3">o</span>
                                <span >Similar Companies</span>
                            </div>
                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>
                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>
                        {/* ............... */}

                        {/* wifi2 */}
                        <div className="dataflex">
                            <div>
                                <h4>Fundamental Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>
                        {/* ......................... */}

                        {/* wifi3 */}
                        <div className="dataflex">
                            <div>
                                <h4>Advanced Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>


                        {/* ......................... */}

                        {/* wifi4 */}
                        <div className="dataflex">
                            <div>
                                <h4>Intermidiate Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv3">
                            <div className="App">
                                <YanProgress total={100} done={90} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>


                        {/* ......................... */}
                    </div>
                    : ""}
            </div>

            {/* ten */}
            <div>
                <div className="dataDiv">
                    <div onClick={() => hideShow1()} className="fonts">
                        <div className="downflex">
                            <div className="uparrow">
                                <i class="fas fa-angle-up"></i>
                            </div>
                            <div className="downarrow">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                        <p>Ethernet</p>
                    </div>
                    <div onClick={() => hideShow9()} className="dottedFlex">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </div>
                {/* ............. */}
                {openClose9 ?

                    <div>
                        <div className="dataflex">
                            <div>
                                <h4>Primer Wifi</h4>
                            </div>
                            <div>
                                <span className="span1">o</span>
                                <span className="span2">0</span>
                                <span>Your Company</span>
                            </div>
                            <div>
                                <span className="span3">o</span>
                                <span >Similar Companies</span>
                            </div>
                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>
                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>
                        {/* ............... */}

                        {/* wifi2 */}
                        <div className="dataflex">
                            <div>
                                <h4>Fundamental Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>
                        {/* ......................... */}

                        {/* wifi3 */}
                        <div className="dataflex">
                            <div>
                                <h4>Advanced Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv">
                            <div className="App">
                                <YanProgress total={100} done={60} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>


                        {/* ......................... */}

                        {/* wifi4 */}
                        <div className="dataflex">
                            <div>
                                <h4>Intermidiate Wifi</h4>
                            </div>

                            <div>
                                <span className="span4">suggestions</span>
                            </div>
                        </div>
                        <div className="progress-mainDiv3">
                            <div className="App">
                                <YanProgress total={100} done={90} />
                            </div>
                        </div>

                        <div className="progress-mainDiv2">
                            <div className="App">
                                <YanProgress total={100} done={80} />
                            </div>
                        </div>


                        {/* ......................... */}
                    </div>
                    : ""}
            </div>
        </div>
    );
}