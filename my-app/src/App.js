
import './App.css';

// import the Navbar component to this App.js file 
import Navbar from './components/Navbar';

// import the Textform component to this App.js file
import TextForm from './components/Textform';


/* 
  Yeh joh html lika hua hai inside the return (); of App.js, yeh actually mein JSX hai.

  https://reactjs.org/docs/introducing-jsx.html
*/

function App() {
  return (
    
    // Yeh sara joh html hai inside the return voh JSX hai.
    <div className="App">

      {/* Navbar Component of our react application */}
        
        {/* Serve/Use the custom NavBar Component here */}
        {/* We will use the Navbar component by writing <Navbar/> inside return(). */}
        
        {/* passing the values in the created props ==> I created two props for my Navbar component (title and aboutText)*/}
        <Navbar title="Textutils" aboutText="About Textutils"/> 

      
      {/* TextForm Component of our react application */}
        
        <div className="container my-3">

          {/* Serve/Use the custom TextForm Component here */}
          {/* We will use the TextForm component by writing <TextForm/> inside return(). */}
          
          {/* passing the values in the created props ==> I created one prop in my TextForm component (heading)*/}
          <TextForm heading="Enter the text to analyse" />

        </div>
        

      
    </div>
  );
}

export default App;
