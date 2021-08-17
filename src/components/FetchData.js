import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  LineSeriesCanvas,
  HorizontalGridLines,
  XAxis,
  YAxis,
  VerticalGridLines,
} from "react-vis";
// import Input from './Input';


export default function FetchData() {
    //  API Interface variables: 
    const jsonFormatting = "json,1.1"

    //location Specific details:
    const siteLocationCode = "03179000"
    const usgsParameterCode = "00060"
  
    // period for data aggregation: 
    const sevenDayPeriod = "P7D"

    // React Hooks for data containment: 
  const [outflowData, setOutflowData] = useState({})
  const [targetPoint, setTargetPoint] = useState();
  const [graphData, setGraphData] = useState([])

  let dataPayload = [];


  // handling input for specific site code: 
   const handleSubmit = (e) => {
     //prevent reloading of the page
     e.preventDefault();

     //data validation: must be filled.
     if (targetPoint === null || targetPoint === undefined) {
       alert("Please Enter a value");
     } else {
       console.log(`Submitting value ${targetPoint}`);
     }
     // reset();
   };

  // const [unitMeasurement, setUnitMeasurement] = useState({});

    // response.data.value.timeSeries[0].values[0].value for the value of Outflow in ft^3/s
    // value[0] is 7 days previous

    // API Call: returns data, using setState to store JSON data. 
  function getOutflowData() {
    setTargetPoint(siteLocationCode)
    // //ERROR Catching: The system is currently supported by two endpoints:  03179000 and 01646500.
    // if (targetPoint !== "03179000" && targetPoint !== "01646500") {
    //   alert(
    //     "Please use one of the two supported use cases available: \n 03179000 \n or \n 01646500."
    //   );
    // } else {
      
         axios
           .get(
             `https://waterservices.usgs.gov/nwis/iv/?site=${siteLocationCode}&format=${jsonFormatting}&period=${sevenDayPeriod}&parameterCd=${usgsParameterCode}`
           )
           .then((response) => setOutflowData(response.data))
    
    
      
    // }

  }
  useEffect(() => {
    getOutflowData();
    
  }, [])

    // Listening to the React Hook above for changes
    // useEffect(() => {
    //  setGraphData(outflowData.value.timeSeries[0].values[0].value)
      
    // }, [outflowData])



    // Test case for logging to the DOM. 
  function displayOutflowData() {
    // displayOutflowName();
    setGraphData(outflowData.value.timeSeries[0].values[0].value);
    
  
    
    console.log(graphData);
    console.log(outflowData);
  }
  
  
  function displayOutflowName() {
    if (outflowData.value === undefined) {
      alert("Please Gather Data first!")
    } else {
      console.log(outflowData.value.timeSeries[0].sourceInfo.siteName)
      
    }
  }

  function getMeasurementValues() {
    if (outflowData.value === undefined) {
      alert("Please Gather Data first!")
    } else {
      console.log(outflowData.value.timeSeries[0].variable.unit.unitCode)
    }
  }

  // integrate here the data to be passed into Chart.js
  // pseudocode
  // const data = {
  //   {x: outflowData.date0.instantaneousValue, y: outflowData.date0},
  //   {x: outflowData.date1.instantaneousValue, y: outflowData.date1},
  //   {x: outflowData.date2.instantaneousValue, y: outflowData.date2},
    
  //  }

  function consoleData() {
    if (outflowData !== undefined) {
      let data = outflowData.value
      console.log(data.timeSeries[0].values[0].value)
    }
    else {
      alert("Cant do that just yet!")
    }
  }


// DATA Conversion steps: 
  function convertToReactVisData() {
    graphData.map(record => {
      dataPayload.push({x: graphData.indexOf(record), y:record.value})
    })
  console.log(dataPayload)
  }









    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Please provide the sample point:</label>
          <br></br>
          <input
            type="text"
            placeholder="Please Enter Code"
            value={targetPoint}
            onChange={(e) => setTargetPoint(e.target.value)}
          />
          <button type="submit" onClick={() => getOutflowData()}>
            Get Outflow Data
          </button>
        </form>

        <h2>Data field</h2>

        <button onClick={() => displayOutflowName()}>
          Get outflow siteName
        </button>
        <button onClick={() => getMeasurementValues()}>
          Get Temperature Data
        </button>
        <button onClick={() => displayOutflowData()}>Convert Data</button>
        <br></br>
        <button onClick={() => consoleData()}>Console Graph Data</button>
        <br></br>
        <button onClick={() => convertToReactVisData()}>
          Check the Conversion Data
        </button>
        <br></br>
        <br></br>
        <div className="chart">
          <XYPlot height={500} width={500} color="red" opacity="1">
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <LineSeriesCanvas data={dataPayload} color="red" />
          </XYPlot>
        </div>
      </div>
    );
}
