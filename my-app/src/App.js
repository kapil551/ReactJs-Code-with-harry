
import React, { useState } from 'react';
import './App.css';

// import the Navbar component to this App.js file 
import Navbar from './components/Navbar';

// import the Textform component to this App.js file
import TextForm from './components/Textform';

// import the About component to this App.js file
import About from './components/About';

// import the Alert component to this App.js file
import Alert from './components/Alert';


/* 
  Yeh joh html lika hua hai inside the return (); of App.js, yeh actually mein JSX hai.

  https://reactjs.org/docs/introducing-jsx.html
*/

function App() {

  // function to toggle b/w light and dark mode ==> By updating the value of state variable named "Mode"
  const toggleLightDarkModeHandler = () => {

    // console.log("Switch is clicked");

    // enable dark mode
    if(Mode === "light") {

      setMode("dark");

      //Also, Enable dark mode for the body of the react application
      document.body.style.backgroundColor = "#9CA3AF";

      // to show alert while changing modes
      showAlert("Dark mode is enabled", "success");
    }

    // enable light mode
    else {

      setMode("light");

      //Also, Enable light mode for the body of the react application
      document.body.style.backgroundColor = "white";

      // to show alert while changing modes
      showAlert("Light mode is enabled", "success");
    }

  }

  // showAlert handler function to display the alert
  const showAlert = (message, type) => {

    // update the value of set variable alert object
    setalert({

      msg: message,
      type: type
    });

  }


  // Now I am going to learn how to manage the state of our complete react application from App.js
  // For Example ==> Applying dark mode to our complete react application.

  // In our app.js we will create a new state variable named "Mode"
  // The initial value of this state variable named "Mode" is light
  const [Mode, setMode] = useState("light");

  // In our app.js we will create a new state variable named "alert"
  // The initial value of this state variable named "alert" is null
  const [alert, setalert] = useState(null);

  return (
    
    // Yeh sara joh html hai inside the return voh JSX hai.
    <div className="App">

      {/* Navbar Component of our react application */}
        
        {/* Serve/Use the custom NavBar Component here */}
        {/* We will use the Navbar component by writing <Navbar/> inside return(). */}
        
        {/* passing the values in the created props ==> I created two props for my Navbar component (title and aboutText)*/}
        {/* Now I will also pass this state variable named "Mode" to our NavBar component using props, I added a new props name mode with value as state variable */}
        {/* Also I will pass the toggleLightDarkModeHandler to the NavBar component using props*/}
        <Navbar title="Textutils" aboutText="About Textutils" mode={Mode} toggleLightDarkMode={toggleLightDarkModeHandler} />

        {/* Alert component of our react application */}

          {/* Serve/Use the custom Alert Component here */}
          {/* We will use the Alert component by writing <Alert/> inside return(). */}
          {/* passing the values in the created props ==> I created one props for my Alert component (alert)*/}
          {/* The value of this alert props is the state variable named "alert" */}
          <Alert alert={alert} />



      
      {/* TextForm Component of our react application */}
        
        <div className="container my-3">

          {/* Serve/Use the custom TextForm Component here */}
          {/* We will use the TextForm component by writing <TextForm/> inside return(). */}
          
          {/* passing the values in the created props ==> I created one prop in my TextForm component (heading)*/}
          {/* Now I will also pass this state variable named "Mode" to our TextForm component using props, I added a new props name mode with value as state variable */}
          <TextForm heading="Enter the text to analyse" mode={Mode} />

        </div>

       {/* About Component of our react application */}
       {/* Using About component in our react app */}
       <About/>
        

      
    </div>
  );
}

export default App;
