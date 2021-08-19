// import logo from './logo.svg';
import './App.css';
// import Input from "./components/Input"
import FetchData from './components/FetchData';
import Chart from "./components/Chart"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <FetchData targetPoint={"03179000"} />
          {/* <Chart></Chart> */}
        </div>
      </header>
    </div>
  );
}

export default App;
