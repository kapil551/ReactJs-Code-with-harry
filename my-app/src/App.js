
import './App.css';

/* 
  Yeh joh html lika hua hai inside the return (); of App.js, yeh actually mein JSX hai.

  https://reactjs.org/docs/introducing-jsx.html
*/

let name = "Kapil";

function App() {
  return (
    
    // Yeh sara joh html hai inside the return voh JSX hai.
    <div className="App">

      {/* Navbar Component of our react application */}
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact us</li>
      </nav>

      <div className="container">
        
        {/* Embedding expressions in JSX */}
        <h1> Hello {name} </h1>
        
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit ducimus, tempora reiciendis veritatis rem magni nesciunt quisquam sit error molestiae non soluta omnis fugiat blanditiis aspernatur voluptate minus sint adipisci illum ratione, rerum quasi necessitatibus eos! Dolores alias quas molestias!</p>
        
      </div>

    </div>
  );
}

export default App;
