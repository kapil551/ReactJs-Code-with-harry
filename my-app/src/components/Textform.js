
// Creating a custom Textform Component

// We are creating a custom function based component of react

// import React from 'react'


// useState / State Hook in react:
/*

Steps to use useState:
    Step-1: Firstly import the state to your react app
    
    Step-2: To use state, firstly enter the following code inside your function-based component.
                // Declare a new state variable, which we'll call "count"
                const [count, setCount] = useState(0);
    
    Step-3: The count is the state variable, which contains the current state value. In our case it is text. 
            So, we will replace count with text.
                const [text, setText] = useState("Enter Text here");

    Step-4: Here, The value of our text is ‘Enter text here’ . 
            Let's pass this value in our textbox and make sure to use the ‘Onchange’ event to enable text-entry in your textbox. 
            
            To do so change the code of your text area to:
            <textarea className= "form-Control value={text} Onchange={handleOnchange} id="mybox" rows= "8"></textarea>


*/

// Step-1: Firstly import the state to your react app
import React, { useState } from 'react'



                            // using Props
export default function Textform(props) {


    // handler function to convert the text of the textbox to upper case
    const upperCaseHandler = () => {

        console.log("Button is Clicked");
        console.log("text is: " + text);

        // changing the value of the state variable, which we call "text" to upperCase
        const upperCaseText = text.toUpperCase();
        
        setText(upperCaseText); // update the value of state variable named "text"
    }

    // handler function to show the converted text in the textarea ==> so that we are able to add more text to your textbox.
    const showChangedText = (event) => {

        // console.log("Text of TextArea is Changed");
        // console.log(event.target);
        
        setText(event.target.value);

    }


    //Step-2: To use state, firstly enter the following code inside your function-based component.
    
    // Declare a new state variable, which we'll call "text",
    // And initially the value of text is "Enter Text Here!"
    const [text, setText] = useState("enter text here!");



    return (
        <div>
            {/* Heading */}
            <h1> {props.heading} </h1>

            {/* BootStrap Component ==> form text area and button */}
            {/* https://getbootstrap.com/docs/5.1/forms/form-control/ */}
            <div className="mb-3">
                {/* Textbox for our app */}
                {/* assign a function to the "Onchange" event of the textarea , so that we can show the change in the 
                    text of the textarea i.e. adding more text or deleting some text etc.*/}
                <textarea className="form-control" value={text} onChange={showChangedText} id="myBox" rows="8"></textarea>
            </div>

            {/* Adding Button */}
            {/* https://getbootstrap.com/docs/5.1/components/buttons/ */}

            {/* Now let’s make our button functional by assigning a function to it. 
                We are creating a function named UpperCaseHandler, which will be invoked when the button is clicked
                and this onClickHandler will change the text of the textbox to upperCase  */}
            <button className="btn btn-primary" onClick={upperCaseHandler}> Convert to UpperCase</button>


        </div>
    )
}


// What is the next step?
// ANS: Now we have created our textform, but we have to import it to App.js(the file inside the src folder) to serve it.
