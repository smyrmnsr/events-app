import "./App.css";
import EventDisplay from "./components/eventDisplay";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EventDisplay />
        <Link to="/manage-event"><button> Add a new event </button></Link>
      </header>
    </div>
  );
}

export default App;
