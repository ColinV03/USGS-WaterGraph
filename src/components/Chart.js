import React, {Component} from "react"
import "../../node_modules/react-vis/dist/style.css"
import { XYPlot, LineSeries, HorizontalGridLines, XAxis, YAxis, VerticalGridLines } from "react-vis";
import verticalGridLines from "react-vis/dist/plot/vertical-grid-lines";
import yAxis from "react-vis/dist/plot/axis/y-axis";

export default class Chart extends Component {
  render() {
    const data = [
      { x: 0, y: 8 },
      { x: 1, y: 5 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
      { x: 4, y: 1 },
      { x: 5, y: 7 },
      { x: 6, y: 6 },
      { x: 7, y: 3 },
      { x: 8, y: 2 },
      { x: 9, y: 0 },
    ];
    return (
      <div className="Chart">
        <XYPlot height={300} width={300}>
                <VerticalGridLines/>
                <HorizontalGridLines />
                <XAxis />
                <YAxis/>
                <LineSeries data={data} />
          
        </XYPlot>
      </div>
    );
  }
}
