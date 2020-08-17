import React, { useState } from 'react'
import './style.css'
import ReactTooltip from 'react-tooltip';
// import Dropdown from 'rc-dropdown';
// import Menu, { Item as MenuItem } from './rc-menu';


export default () => {

    // const menuItems = [
    //     <MenuItem key="1">1st item</MenuItem>,
    //     <MenuItem key="2">2nd item</MenuItem>,
    //   ];

    //   const menu = (
    //     <Menu>
    //       {menuItems}
    //     </Menu>
    //   );
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

    const [openClose3, setopenClose3] = useState(false)
    const hideShow3 = () => {
        if (openClose3 === true) {
            setopenClose3(false);
        }
        else {
            setopenClose3(true);
        }
    }

    const [openClose4, setopenClose4] = useState(false)
    const hideShow4 = () => {
        if (openClose4 === true) {
            setopenClose4(false);
        }
        else {
            setopenClose4(true);
        }
    }

    const [openClose5, setopenClose5] = useState(false)
    const hideShow5 = () => {
        if (openClose5 === true) {
            setopenClose5(false);
        }
        else {
            setopenClose5(true);
        }
    }

    const [openClose6, setopenClose6] = useState(false)
    const hideShow6 = () => {
        if (openClose6 === true) {
            setopenClose6(false);
        }
        else {
            setopenClose6(true);
        }
    }

    const [openClose7, setopenClose7] = useState(false)
    const hideShow7 = () => {
        if (openClose7 === true) {
            setopenClose7(false);
        }
        else {
            setopenClose7(true);
        }
    }

    const [openClose8, setopenClose8] = useState(false)
    const hideShow8 = () => {
        if (openClose8 === true) {
            setopenClose8(false);
        }
        else {
            setopenClose8(true);
        }
    }

    const [openClose9, setopenClose9] = useState(false)
    const hideShow9 = () => {
        if (openClose9 === true) {
            setopenClose9(false);
        }
        else {
            setopenClose9(true);
        }
    }

    const [openClose10, setopenClose10] = useState(false)
    const hideShow10 = () => {
        if (openClose10 === true) {
            setopenClose10(false);
        }
        else {
            setopenClose10(true);
        }
    }

    const [openClose11, setopenClose11] = useState(false)
    const hideShow11 = () => {
        if (openClose11 === true) {
            setopenClose11(false);
        }
        else {
            setopenClose11(true);
        }
    }
    
    return (

        <div>
            <div className="section2back">

                <div className="blockOne">
                    <div className="spanBlock">

                        <div onClick={() => hideShow()} className="onClick">
                            <span>.</span>
                            <span>.</span>
                            <span>.</span>
                        </div>
                        {openClose ?
                            <div className="tootipDiv">
                                <p>Indicates average performance in courses that <br/> are passed by team members.</p>
                                <div className="crossDiv">
                                    <i class="fas fa-times" onClick={() => hideShow()} ></i>
                                </div>

                            </div>
                                 :""}
                        <div className="triangle" >
                            <div>
                            <sup > <i class="fas fa-exclamation-triangle" onClick={() => hideShow1()}></i></sup>
                            </div>
                            {openClose1 ?
                            <div className="tootipDiv">
                                <p>Indicates average performance in courses that <br/>  are passed by team members.</p>
                                <div className="crossDiv">
                                    <i class="fas fa-times" onClick={() => hideShow1()} ></i>
                                </div>
                                </div>
                             :""}
                        </div>

                    </div>
                    <div className="belowDots">
                        <div>
                            <h6 onClick={() => hideShow7()}>Course Performance</h6>
                        </div>
                    
                        <div className="mixDiv">
                            <div > 
                                <h5 onClick={() => hideShow7()}>
                                    <sup>-</sup>
                                    <span>0</span>
                                    <span className="extra">.1</span>
                                    <sup className="percent">%</sup>

                                </h5>
                               
                            </div>
                        </div>
                    </div>
               {openClose7 ?
                    <div className="dropdown">
                            <div className="dropdown1">
                          <div >
                              <p>Period begins</p>
                          </div>
                          <div className="bigFont">
                              <p>10.15.17</p>
                          </div>
                            </div>
                            <div className="dropdown1">
                          <div>
                              <p>Period begins</p>
                          </div>
                          <div className="bigFont">
                              <p>10.15.17</p>
                          </div>
                            </div>
                            <div className="dropdown1">
                          <div>
                              <p>Period begins</p>
                          </div>
                         
                            </div>
                            <div className="dropdown1">
                          <div>
                              <p>Period begins</p>
                          </div>
                         
                            </div>
                            <div className="dropdown1">
                          <div>
                              <p>Period begins</p>
                          </div>
                         
                            </div>
                        </div>
                        :""}
                    <div className="thirdcoloum">
                        <div>
                            <h5>
                                <span>87</span>
                                <span className="extra">.1</span>
                                <sup>%</sup>
                            </h5>
                        </div>
                    </div>
                    <div className="lastDiv">
                        <div>
                            <p>Company Avg Score vs Others</p>
                        </div>
                        <div>
                            <img src={require('../../../assetts/images/arrow_down.png')} />
                        </div>
                    </div>
                </div>
                {/* two */}
                <div className="blockOne">
                    <div className="spanBlock">
                    <div onClick={() => hideShow2()} className="onClick">
                            <span>.</span>
                            <span>.</span>
                            <span>.</span>
                        </div>
                        {openClose2 ?
                            <div className="tootipDiv">
                                <p>Indicates average performance in courses that <br/>  are passed by team members.</p>
                                <div className="crossDiv">
                                    <i class="fas fa-times" onClick={() => hideShow2()} ></i>
                                </div>

                            </div>
                                 :""}
                    </div>
                    <div className="belowDots">
                        <div>
                            <h6 onClick={() => hideShow8()}>Certification Performance</h6>
                        </div>
                        <div className="mixDiv">
                            <div >
                                <h5 onClick={() => hideShow8()}>
                                    <sup>+</sup>
                                    <span>2</span>
                                    <span className="extra">.1</span>
                                    <sup className="percent">%</sup>
                                </h5>
                            </div>
                        </div>
                    </div>
                    {openClose8 ?
                    <div className="dropdowntwo">
                            <div className="dropdown1">
                          <div>
                              <p>Period begins</p>
                          </div>
                          <div className="bigFont">
                              <p>10.15.17</p>
                          </div>
                            </div>
                            <div className="dropdown1">
                          <div>
                              <p>Period begins</p>
                          </div>
                          <div className="bigFont">
                              <p>10.15.17</p>
                          </div>
                            </div>
                            <div className="dropdown1">
                          <div>
                              <p>Period begins</p>
                          </div>
                         
                            </div>
                            <div className="dropdown1">
                          <div>
                              <p>Period begins</p>
                          </div>
                         
                            </div>
                            <div className="dropdown1">
                          <div>
                              <p>Period begins</p>
                          </div>
                         
                            </div>
                        </div>
                        :""}
                    <div className="thirdcoloum">
                        <div>
                            <h5>
                                <span>80</span>
                                <span className="extra">.7</span>
                                <sup>%</sup>
                            </h5>
                        </div>
                    </div>
                    <div className="lastDiv">
                        <div>
                            <p>Company Avg Score vs Others</p>
                        </div>
                        <div>
                            <img src={require('../../../assetts/images/arrow_up.png')} />
                        </div>
                    </div>
                </div>
                {/* three */}
                <div className="blockOne">
                    <div className="spanBlock">
                    <div onClick={() => hideShow3()} className="onClick">
                            <span>.</span>
                            <span>.</span>
                            <span>.</span>
                        </div>
                        {openClose3 ?
                            <div className="tootipDiv">
                                <p>Indicates average performance in courses that <br/>  are passed by team members.</p>
                                <div className="crossDiv">
                                    <i class="fas fa-times" onClick={() => hideShow3()} ></i>
                                </div>

                            </div>
                                 :""}
                        <div className="triangle">
                        <div>
                            <sup > <i class="fas fa-exclamation-triangle" onClick={() => hideShow6()}></i></sup>
                            </div>
                            {openClose6 ?
                            <div className="tootipDiv">
                                <p>Indicates average performance in courses that <br/> are passed by team members.</p>
                                <div className="crossDiv">
                                    <i class="fas fa-times" onClick={() => hideShow6()} ></i>
                                </div>
                                </div>
                             :""}
                        </div>
                    </div>
                    <div className="belowDots">
                        <div>
                            <h6  onClick={() => hideShow9()}>Courses- Completion Rate</h6>
                        </div>
                        <div className="mixDiv">
                            <div >
                                <h5  onClick={() => hideShow9()}>
                                    <sup>+</sup>
                                    <span>8</span>
                                    <span className="extra">.63</span>
                                    <sup className="percent">%</sup>
                                </h5>
                            </div>
                        </div>
                    </div>
                    {openClose9 ?
                    <div className="dropdownthree">
                            <div className="dropdown1">
                          <div>
                              <p>Period begins</p>
                          </div>
                          <div className="bigFont">
                              <p>10.15.17</p>
                          </div>
                            </div>
                            <div className="dropdown1">
                          <div>
                              <p>Period begins</p>
                          </div>
                          <div className="bigFont">
                              <p>10.15.17</p>
                          </div>
                            </div>
                            <div className="dropdown1">
                          <div>
                              <p>Period begins</p>
                          </div>
                         
                            </div>
                            <div className="dropdown1">
                          <div>
                              <p>Period begins</p>
                          </div>
                          
                            </div>
                            <div className="dropdown1">
                          <div>
                              <p>Period begins</p>
                          </div>
                          
                            </div>
                            
                        </div>
                        :""}
                    <div className="thirdcoloum">
                        <div>
                            <h5>
                                <span>38</span>
                                <span className="extra">.79</span>
                                <sup>%</sup>
                            </h5>
                        </div>
                    </div>
                    <div className="lastDiv">
                        <div>
                            <p>Company Avg Score vs Others</p>
                        </div>
                        <div>
                            <img src={require('../../../assetts/images/arrow_up.png')} />
                        </div>
                    </div>
                </div>
                {/* four */}
                <div className="blockOne">
                    <div className="spanBlock">
                    <div onClick={() => hideShow4()} className="onClick">
                            <span>.</span>
                            <span>.</span>
                            <span>.</span>
                        </div>
                        {openClose4 ?
                            <div className="tootipDiv">
                                <p>Indicates average performance in courses that <br/>  are passed by team members.</p>
                                <div className="crossDiv">
                                    <i class="fas fa-times" onClick={() => hideShow4()} ></i>
                                </div>

                            </div>
                                 :""}
                    </div>
                    <div className="belowDots">
                        <div>
                            <h6 onClick={() => hideShow10()}>Courses Pass Rate</h6>
                        </div>
                        <div className="mixDiv">
                            <div >
                                <h5 onClick={() => hideShow10()}>
                                    <sup>-</sup>
                                    <span>3</span>
                                    <span className="extra">.41</span>
                                    <sup className="percent">%</sup>
                                </h5>
                            </div>
                        </div>
                    </div>
                    {openClose10 ?
                    <div className="dropdownfour">
                            <div className="dropdown1">
                          <div>
                              <p>Period begins</p>
                          </div>
                          <div className="bigFont">
                              <p>10.15.17</p>
                          </div>
                            </div>
                            <div className="dropdown1">
                          <div>
                              <p>Period begins</p>
                          </div>
                          <div className="bigFont">
                              <p>10.15.17</p>
                          </div>
                            </div>
                            <div className="dropdown1">
                          <div>
                              <p>Period begins</p>
                          </div>
                        
                            </div>
                            <div className="dropdown1">
                          <div>
                              <p>Period begins</p>
                          </div>
                         
                            </div>
                            <div className="dropdown1">
                          <div>
                              <p>Period begins</p>
                          </div>
                         
                            </div>
                            
                        </div>
                        :""}
                    <div className="thirdcoloum">
                        <div>
                            <h5>
                                <span>95</span>
                                <span className="extra">.0</span>
                                <sup>%</sup>
                            </h5>
                        </div>
                    </div>
                    <div className="lastDiv">
                        <div>
                            <p>Company Avg Score vs Others</p>
                        </div>
                        <div>
                            <img src={require('../../../assetts/images/arrow_down.png')} />
                        </div>
                    </div>
                </div>
                {/* five */}
                <div className="blockOne">
                    <div className="spanBlock">
                    <div onClick={() => hideShow5()} className="onClick">
                            <span>.</span>
                            <span>.</span>
                            <span>.</span>
                        </div>
                        {openClose5 ?
                            <div className="tootipDiv">
                                <p>Indicates average performance in courses that <br/>  are passed by team members.</p>
                                <div className="crossDiv">
                                    <i class="fas fa-times" onClick={() => hideShow5()} ></i>
                                </div>

                            </div>
                                 :""}
                    </div>
                    <div className="belowDots">
                        <div>
                            <h6 onClick={() => hideShow11()}>Courses Fail Rate</h6>
                        </div>
                        <div className="mixDiv">
                            <div >
                                <h5 onClick={() => hideShow11()}>
                                    <sup>+</sup>
                                    <span>3</span>
                                    <span className="extra">.43</span>
                                    <sup className="percent">%</sup>
                                </h5>
                            </div>
                        </div>
                    </div>
                    {openClose11 ?
                    <div className="dropdownfive">
                            <div className="dropdown1">
                          <div>
                              <p>Period begins</p>
                          </div>
                          <div className="bigFont">
                              <p>10.15.17</p>
                          </div>
                            </div>
                            <div className="dropdown1">
                          <div>
                              <p>Period begins</p>
                          </div>
                          <div className="bigFont">
                              <p>10.15.17</p>
                          </div>
                            </div>
                            <div className="dropdown1">
                          <div>
                              <p>Period begins</p>
                          </div>
                        
                            </div>
                            <div className="dropdown1">
                          <div>
                              <p>Period begins</p>
                          </div>
                         
                            </div>
                            <div className="dropdown1">
                          <div>
                              <p>Period begins</p>
                          </div>
                         
                            </div>
                        </div>
                        :""}
                    <div className="thirdcoloum">
                        <div>
                            <h5>
                                <span>5</span>
                                <span className="extra">.0</span>
                                <sup>%</sup>
                            </h5>
                        </div>
                    </div>
                    <div className="lastDiv">
                        <div>
                            <p>Company Avg Score vs Others</p>
                        </div>
                        <div>
                            <img src={require('../../../assetts/images/arrow_up.png')} />
                        </div>
                    </div>
                </div>
            </div>
            <ReactTooltip multiline={true} clickable={true} place={"right"} event={"onClick"} />
        </div>

    );
}