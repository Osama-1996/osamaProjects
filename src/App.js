import React from 'react';
import './assetts/style/style.css'
import {  Switch } from "react-router-dom";
import Routes from './Routes'


export default () => {
  return (
    <>
    <Switch>
        <Routes />
    </Switch>
</>
  );
}


