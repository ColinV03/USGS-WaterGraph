import axios from 'axios';
import React, {useState, useEffect} from 'react';


export default function FetchData() {
    //  API Interface variables: 
    const jsonFormatting = "json,1.1"

    //location Specific details:
    const siteLocationCode = "03179000"
    const usgsParameterCode = "00060"
    // period for data aggregation: 
    const sevenDayPeriod = "P7D"

    // React Hooks for data containment: 
    const [outflowData, setOutflowData] = useState([])

    // const arrayOfTemps = [];

    // response.data.value.timeSeries[0].values[0].value for the value of Outflow in ft^3/s
    // value[0] is 7 days previous

    // API Call: returns data, using setState to store JSON data. 
    function getOutflowData() {
        axios.get(`https://waterservices.usgs.gov/nwis/iv/?site=${siteLocationCode}&format=${jsonFormatting}&period=${sevenDayPeriod}&parameterCd=${usgsParameterCode}`)
            .then(response => setOutflowData(response.data.value.timeSeries[0].values[0].value))    
        
    }


    // Listening to the React Hook above for changes
    useEffect(() => {
        displayOutflowData();
        // writeData(outflowData)
    }, [outflowData])



    // Test case for logging to the DOM. 
    function displayOutflowData() {
        outflowData.map(x => console.log(x.value))
        console.log(outflowData);
        // displayoutflowData();
    }

    // Write data to the DOM: 
    // function writeData(outflowData) {
    //     for (let data in outflowData){
    //        console.log(data.value)
    //    }
            
    // }


    // const state = {
    //   labels: ["January", "February", "March", "April", "May"],
    //   datasets: [
    //     {
    //       label: "Rainfall",
    //       fill: false,
    //       lineTension: 0.5,
    //       backgroundColor: "rgba(75,192,192,1)",
    //       borderColor: "rgba(0,0,0,1)",
    //       borderWidth: 2,
    //       data: [65, 59, 80, 81, 56],
    //     },
    //   ],
    // };


    return (
      <div>
        <h2>Data field</h2>
        <button onClick={() => getOutflowData()}>Get Temperature Data</button>
        {outflowData.map((x) => (
          <div>
                <h5>Date:{ x.dateTime}    Value: {x.value} ft^3/s</h5> 
          </div>
        ))}
      </div>
    );
}
