import './App.css';
import EventDisplay from './components/eventDisplay';
import NavBar from './components/navigation/nav';

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <header className="App-header">
        <EventDisplay/>
      </header>
    </div>
  );
}

export default App;
