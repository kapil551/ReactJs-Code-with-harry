
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

        // console.log("Button is Clicked");
        // console.log("text is: " + text);

        // changing the value of the state variable, which we call "text" to upperCase
        const upperCaseText = text.toUpperCase();
        
        setText(upperCaseText); // update the value of state variable named "text" in the views

        // Show Alert message while using the features
        props.showAlert("Converted to uppercase!", "success");
    }

    // handler function to show the converted text in the textarea ==> so that we are able to add more text to your textbox.
    const showChangedText = (event) => {

        // console.log("Text of TextArea is Changed");
        // console.log(event.target);
        
        setText(event.target.value);

    }

    // handler function to convert the text of the textbox to lower case
    const lowerCaseHandler = () => {

        // console.log("LowerCase button clicked");

        // changing the value of the state variable, which we call "text" to lowerCase

        const lowerCaseText = text.toLowerCase();

        // update the value of the state variable name "text" in the views
        setText(lowerCaseText);

        // Show Alert message while using the features
        props.showAlert("Converted to lowercase!", "success");

    }


    // handler function to trim all the spaces in the "text"
    const trimSpacesHandler = () => {

        // console.log("Trim spaces button clicked");

        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
        const textAfterTrimming = text.replaceAll(" ", "");
        
        // console.log(textAfterTrimming);

        // update the value of the state variable "trimmedText" in the views with textAfterTrimming
        setTrimText(textAfterTrimming);

        // Show Alert message while using the features
        props.showAlert("Trimmed all spaces!", "success");

    }

    // handler function to copy text of the textform
    const handleCopy = () => {

        let copyText = document.getElementById("myBox");
        copyText.select();

        navigator.clipboard.writeText(copyText.value)

        // deselect the text after copying to clipboard
        document.getSelection().removeAllRanges();

        // Show Alert message while using the features
        props.showAlert("Copied to clipboard!", "success");
    }

    // handler function to remove extra spaces in the text
    const removeExtraSpaceHandler = () => {

        let extraSpacesRemovedText = text.split(/[ ]+/);

        setText(extraSpacesRemovedText.join(" "));

        // Show Alert message while using the features
        props.showAlert("Removed extra spaces!", "success");
    }

    //Step-2: To use state, firstly enter the following code inside your function-based component.
    
    // Declare a new state variable, which we'll call "text",
    // And initially the value of text is ""
    const [text, setText] = useState("");

    // Declare a new state variable, which we'll call "trimmedText",
    // And initially the value of text is ""
    let [trimmedText, setTrimText] = useState("");

    /*
    Fixing Word Count Error:
        We have created the function of Counting words in our Textform.js. 
        The split() method is used to convert the string into an array. 
        In our case, We are splitting the string by a space and then counting the length of that array, which comes out to be one. 
        Therefore, a blank space is being counted as a word.

    Solution: 
        The quick way of fixing this error is by removing the empty strings from the split array. 
        We can easily do so by using the filter method in our Text.split function as described below:
    */
    const countWords = text.split(" ").filter((element) => {

        return element.length !== 0; // returne true only if the element has length greater than zero
    }).length;
    /*
    If the arrow function returns the true value for an element, then only it would be allowed to stay in the split array. 
    The filter() does not execute the function for empty array elements.
    */

    const countCharacters = text.length;

    const timeToReadOneWord = 0.008;
    const minutesRead = timeToReadOneWord * countWords;

    /*
        Disable Button Issue:
            When our Textbox is empty, but our buttons are working and performing their functions, which seems like a bug to our application, 

            Solution: To overcome this issue, we would add the below code to every button. 

            disabled={text.length===0} 
            
            This code means to disable the buttons when the length of the text is 0. That is, the textbox is empty.
    */

    return (
        <>
        <div className="container" style={{color: props.mode === "light" ? "black" : "white"}}>
            {/* Heading */}
            <h1> {props.heading} </h1>

            {/* BootStrap Component ==> form text area and button */}
            {/* https://getbootstrap.com/docs/5.1/forms/form-control/ */}
            <div className="mb-3">
                {/* Textbox for our app */}
                {/* assign a function to the "Onchange" event of the textarea , so that we can show the change in the 
                    text of the textarea i.e. adding more text or deleting some text etc.*/}
                <textarea className="form-control" value={text} onChange={showChangedText} id="myBox" rows="8" style={{backgroundColor: props.mode === "light" ? "#F3F4F6" : "white"}} ></textarea>
            </div>

            {/* Adding Button */}
            {/* https://getbootstrap.com/docs/5.1/components/buttons/ */}

            {/* Now let’s make our button functional by assigning a function to it. 
                We are creating a function named UpperCaseHandler, which will be invoked when the button is clicked
                and this onClickHandler will change the text of the textbox to upperCase  */}
            <button className={`btn btn-${props.mode === "light" ? "secondary" : "primary"}`} onClick={upperCaseHandler} disabled={text.length === 0} > Convert to UpperCase</button>

            {/* Let’s create a convert to Lowercase Button for our app and assign a function to it. 
                So that it can convert text to Lowercase. */}
            <button className={`btn btn-${props.mode === "light" ? "secondary" : "primary"} mx-2`} onClick={lowerCaseHandler} disabled={text.length === 0} > Convert to LowerCase</button>

            {/* Let's create a trim all space Button for our app and also assign a fucntion to it.*/}
            <button type="button" className={`btn btn-${props.mode === "light" ? "secondary" : "primary"} mx-2`} onClick={trimSpacesHandler} disabled={text.length === 0} >Trim spaces</button>

            {/* Copy Text Button */}
            <button type="button" className={`btn btn-${props.mode === "light" ? "secondary" : "primary"} mx-2`} onClick={handleCopy} disabled={text.length === 0} >Copy Text</button>

            {/* {Remove Extra Spaces button} */}
            <button type="button" className={`btn btn-${props.mode === "light" ? "secondary" : "primary"} my-2`} onClick={removeExtraSpaceHandler} disabled={text.length === 0} >Remove Extra Spaces</button>
            


            


        </div>

        {/* Counting Words and Character */}
        <div className="container my-3" style={{color: props.mode === "light" ? "black" : "white"}}>

            <h1> Your text summary</h1>
            <p> {countWords} words and {countCharacters} characters </p>
            <p> {minutesRead} Minutes read </p>

            {/* Preview Section of Text */}
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter some text in the textform to preview it here."}</p>

            {/* Trimmed Text */}
            <h2>Trimmed text</h2>
            <p> {trimmedText}</p>

        </div>

        
        </>
    )
}


// What is the next step?
// ANS: Now we have created our textform, but we have to import it to App.js(the file inside the src folder) to serve it.
