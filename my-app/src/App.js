import logo from './logo.svg';
import './App.css';

/* 
  Yeh joh html lika hua hai inside the return (); of App.js, yeh actually mein JSX hai.

  https://reactjs.org/docs/introducing-jsx.html
*/
function App() {
  return (
    
    // Yeh sara joh html hai inside the return voh JSX hai.
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
