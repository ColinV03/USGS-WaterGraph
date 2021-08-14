import axios from 'axios';
import React, {useState, useEffect} from 'react';


export default function FetchData() {
    //  API Interface variables: 
    const siteLocationCode = "03179000"
    const usgsParameterCode = "00060"
    const jsonFormatting = "json,1.1"
    const sevenDayPeriod = "P7D"




    const [temperatureData, setTemperatureData] = useState({})
    // const arrayOfTemps = [];

    // response.data.value.timeSeries[0].values[0].value for the value of Temperature in C
    // value[0] is 7 days previous
    function getTemperatureData() {
        axios.get(`"https://waterservices.usgs.gov/nwis/dv/?site=${siteLocationCode}&format=${jsonFormatting}&period=${sevenDayPeriod}&parameterCd=${usgsParameterCode}"`)
            .then(response => setTemperatureData(response.data.value.timeSeries[0].values[0].value))
        consoleTemperatureData();
        
    }
    // function displayTemperatureData() {
    //       temperatureData.map(x => <div><h1>{x.value}</h1></div>)
    // }


    function consoleTemperatureData() {
        console.log(temperatureData);
        // displayTemperatureData();
    }


    function getTemperatureData() {
        axios.get("https://waterservices.usgs.gov/nwis/dv/?site=03179000&format=json,1.1&period=P7D")
            .then(response => setTemperatureData(response.data.value.timeSeries[0].values[0].value))
        consoleTemperatureData();
        
    }


    // const arrayOfTemps = 
    //       temperatureData.map(x => <div><h1>{x.value}</h1></div>)
    return (
      
        <div>
            <h2>Data field</h2>
            <button onClick={() => getTemperatureData()}>Get Temperature Data</button>
            {/* <button onClick={() => consoleTemperatureData()}>Console Data</button> */}
            {/* {arrayOfTemps} */}
            {/* <div> {temperatureData.map(x =>
                <div>
                    <h3>
                        {x.value}
                    </h3>
                </div>
            )} */}
            {/* </div>  */}
        </div>
    )
}
