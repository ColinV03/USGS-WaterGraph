import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  LineMarkSeries,
  HorizontalGridLines,
  XAxis,
  YAxis,
  VerticalGridLines,
  ChartLabel,
    FlexibleXYPlot,
  FlexibleWidthXYPlot,
  FlexibleHeightXYPlot
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
  const [dataCollected, setDataCollected] = useState(false);
  const [dataPayload, setdataPayload] = useState([]);
  const [graphBoolean, setgraphBoolean] = useState(false);

  const [maxGraphHeight, setMaxGraphHeight] = useState(600)


  let measurement = '';
  
 


  // handling input for specific site code: 
   const handleSubmit = (e) => {
     //prevent reloading of the page
     e.preventDefault();

     //data validation: must be filled.
     if (targetPoint === null || targetPoint === undefined) {
       alert("Please Enter a value");
     } else {
       console.log(`Submitting value ${targetPoint}`);
       getOutflowData();
     }
     // reset();
   };

  // const [unitMeasurement, setUnitMeasurement] = useState({});

    // response.data.value.timeSeries[0].values[0].value for the value of Outflow in ft^3/s
    // value[0] is 7 days previous

    // API Call: returns data, using setState to store JSON data. 
  async function getOutflowData() {
    console.log("Sequence Started")
    setTargetPoint(siteLocationCode)
    console.log(`Target point: ${targetPoint} SET!`)
  
    // //ERROR Catching: The system is currently supported by two endpoints:  03179000 and 01646500.
    if (targetPoint !== "03179000" && targetPoint !== "01646500") {
      alert(
        "Please use one of the two supported use cases available: \n 03179000 \n or \n 01646500."
      );
    } else {
       await axios
        .get(
          `https://waterservices.usgs.gov/nwis/iv/?site=${targetPoint}&format=${jsonFormatting}&period=${sevenDayPeriod}&parameterCd=${usgsParameterCode}`
        )
        .then((response) => setOutflowData(response.data))
        .then(console.log("Data Received"));
      
    }
     setDataCollected(true);

  }


// // FOR TESTING: 
  // useEffect(() => {
  //   getOutflowData();
    
  // }, [])

    // Listening to the React Hook above for changes
    // useEffect(() => {
    //  setGraphData(outflowData.value.timeSeries[0].values[0].value)
      
    // }, [outflowData])



    // Test case for logging to the DOM. 
  function displayOutflowData() {
    console.log(outflowData);
    if ((outflowData !== undefined && outflowData !== null) && dataCollected) {
       setGraphData(outflowData.value.timeSeries[0].values[0].value);
        displayOutflowName();
         getMeasurementValues();
        // consoleData();
        // setmaxValueGraphHeight();
        convertToReactVisData();
      
        // console.log(graphData);
        
    }
    else {
      alert("Cant do that just yet!")
    }
  }
    // displayOutflowName();
   

  
  
  function displayOutflowName() {
    if (outflowData.value === undefined) {
      alert("Please Gather Data first!")
    } else {
      console.log(`Sample Point Name: ${outflowData.value.timeSeries[0].sourceInfo.siteName}`)
      
    }
  }

  function getMeasurementValues() {
    
    if (outflowData.value === undefined) {
      alert("Please Gather Data first!")
    } else {
      measurement = outflowData.value.timeSeries[0].variable.unit.unitCode
      console.log(`Measurment in: ${measurement}`)
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
     let newArray = [];
      graphData.map(record => {
      newArray.push({x: graphData.indexOf(record), y:record.value, id:record.dateTime})
    })
    setdataPayload(newArray);
   
    console.log(newArray)
    
  }



  // for scaling graph: Thought for dynamically scaling the domain in the XYPlot 

  
  function setmaxValueGraphHeight() {
    let maxValue = (Math.max.apply(Math, dataPayload.map(item => item.y)) +100);
    console.log(maxValue);
    setMaxGraphHeight(maxValue);
  }



  function graphIt() {
    if (dataCollected) {
      setgraphBoolean(true);
    } else {
      alert("Cant do that just yet!");
    }
    
  }


  function formatDate(date) {
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    date = mm + "/" + dd + "/" + yyyy;
    return date;
  }

  let xAxisArray = []
  function xAxisLabels() {
    xAxisArray = [];
    for (var i=0; i<7; i++) {
        var d = new Date();
        d.setDate(d.getDate() - i);
        xAxisArray.push( formatDate(d) )
    }
    console.log(xAxisArray)
    }




    return (
      <div>
        <form onSubmit={handleSubmit}>
          <p className="instructions"> Instructions: please push buttons 1 => 5 for details. Most all smaller details will be provided in the console.</p>
          <label>Please provide the sample point:</label>
          <br></br>
          <input
            type="text"
            placeholder="Please Enter Code"
            onChange={(e) => setTargetPoint(e.target.value)}
          />
          <br></br>
          <button
            type="submit"
            // onClick={() => getOutflowData()}
          >
            1. Get Outflow Data
          </button>
        </form>

        {/* <button onClick={() => displayOutflowName()}>
          Get outflow siteName
        </button>
        <button onClick={() => getMeasurementValues()}>
          Get Temperature Data
        </button> */}
        <button onClick={() => displayOutflowData()}>2. Grab all Data</button>
        <br></br>
        {/* <button onClick={() => consoleData()}>Console Graph Data</button> */}
        {/* <br></br> */}
        <button onClick={() => convertToReactVisData()}>
          3. Conversion Data
        </button>
        <br></br>
        <button onClick={() => setmaxValueGraphHeight()}>
          4. Max graph height:
        </button>
        <br></br>
        <button onClick={() => graphIt()}> 5. GraphIT!</button>
        <br></br>
        <button onClick={() => xAxisLabels()}> Date Check!</button>
        <br></br>
        <div className="chartWrapper">
          {graphBoolean ? (
            <div className="chart" style={{}}>
              <h5 className="chartTitle">
                {outflowData.value.timeSeries[0].sourceInfo.siteName}
              </h5>
              <FlexibleXYPlot
                fill="red"
                opacity="1"
                dontCheckIfEmpty={true}
                yDomain={[20, maxGraphHeight]}
              >
                <VerticalGridLines />
                <HorizontalGridLines />
                <LineMarkSeries data={dataPayload} size="1" />
                <XAxis title="X Axis" tickTotal={8}  />
                <YAxis title="Outflow ft^3/s" tickTotal={10} />
              </FlexibleXYPlot>
            </div>
          ) : (
            <h3>No data selected</h3>
          )}
        </div>
      </div>
    );
}
