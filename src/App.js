
import Timer from './Componants/Timer'
import "./App.css";
import TimerState from "./context/TimerState";

function App() {
  return (
    <TimerState>
      <div className="App">
      <Timer/>
      </div>
    </TimerState>
  );
}

export default App;





