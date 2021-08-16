// import logo from './logo.svg';
import './App.css';
import Input from "./components/Input"
import FetchData from './components/FetchData';
import Chart from "./components/Chart"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div> 
          <Input> </Input>
          <Chart></Chart>
          <FetchData />

        </div>
      </header>
    </div>
  );
}

export default App;
