import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css"
const Chart = props => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.level);
    const totalMaximum = Math.max(...dataPointValues);
    
    if(props.dataPoints.length === 0){
       return <div className="chart">No Character Info</div>
    }
    
    return <div className="chart">
        {
            props.dataPoints.map(dataPoint =>
                <ChartBar
                key={dataPoint.name} 
                level={dataPoint.level} 
                maxValue={totalMaximum} 
                label={dataPoint.name}  />
            )
        }
    </div>
    
}

export default Chart;