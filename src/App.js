import './App.css';
import { Link } from "react-router-dom";
import EventsTable from "./components/events-table"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EventsTable/>
        <Link to="/manage-events">Events</Link>
      </header>
    </div>
  );
}

export default App;