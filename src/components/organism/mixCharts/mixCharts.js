import React from 'react'
import './style.css'
import PieCharts from '../../molecules/pieCharts/pieChart';
import LineChart from '../../molecules/lineGraph/lineGraph';


export default () => {
    return (
        <div className="divFlex">
            <div className="leftDivmix">
                <PieCharts />
            </div>
            <div className="rightDivmix">
                <LineChart />
            </div>
        </div>
    );
}