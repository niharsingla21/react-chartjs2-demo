import LineChart from './components/LineChart';
import React from 'react';
import './App.css';
import { Bar } from 'react-chartjs-2';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';

function App() {
  return (
    <div className="App">
     <div className='chart'>
       {/* <LineChart/> */}
       {/* <BarChart/> */}
       <DoughnutChart />
     </div>
    </div>
  );
}

export default App;
