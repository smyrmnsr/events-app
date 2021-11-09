import './App.css';
import EventDisplay from './components/eventDisplay';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EventDisplay/>
        <Link to="/manage-event"> Create a new event </Link>
      </header>
    </div>
  );
}

export default App;
