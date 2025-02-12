import "./App.css";
import CustomRadialBarChart from "./Components/CircularProgressChart";
import GaugeChart from "./Components/GaugeChart/GaugeChart";

function App() {
  return (
    <>
      <GaugeChart value={40} text="3" unit="tCO₂e" />
      <CustomRadialBarChart values={[10, 20, 30, 40]} />
    </>
  );
}

export default App;
