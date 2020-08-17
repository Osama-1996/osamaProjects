import React from 'react';
import {  Switch, Route  } from "react-router-dom";
import Template from './components/template/fullPage/fullpage'
import Routing from './components/organism/route/route'
import homeTemplate from './components/template/homeTemplate/homeTemplate'
import LastTemplate from './components/template/lastTemplate/lastTemplate'


export default () => {
    return (
        <>
           
            <div >
                    <Switch>
                        <Route path="/route" component={homeTemplate} />
                        <Route path="/" component={Template} exact={true}/>
                    </Switch>
            </div>
            <div >
                    <Switch>
                        <Route path="/route" component={homeTemplate} exact={true}/>
                        <Route path="/home" component={Template} />
                    </Switch>
            </div>
            <div >
                    <Switch>
                        <Route path="/last" component={LastTemplate} />
                        <Route path="/home" component={Template} exact={true} />
                    </Switch>
            </div>
         
        </>
    );
}