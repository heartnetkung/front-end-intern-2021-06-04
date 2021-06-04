import logo from './logo.svg';
import './App.css';
import Button from './ExampleButton';
import TestEvent from './test-event';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload abc.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button label={"abc"}/>
        <TestEvent/>
      </header>
    </div>
  );
}

export default App;
