// Creating a custom Navbar Component

// We are creating a custom function based component of react

import React from "react"

// Prop-type:
// https://reactjs.org/docs/typechecking-with-proptypes.html

// Firstly, we need to import prop types
import PropTypes from 'prop-types'


/*
    Changing Values Using Props:
        
        Now let’s Suppose you want to use the above navbar in your different applications but with different titles and About, 
        or pass New values to your existing Navbar. You can do so by using Props in React.
*/
                            // using props
export default function Navbar(props) {

    return (
        <div>

            {/* Here will be the code of Navbar component */}
            
            {/* Added Bootstrap Component ==> Navbar */}
            
            {/* 
                For Dark Mode:
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                For Light Mode:
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

             */}

            {/* I will toggle b/w light and dark mode using the string literals in javaScript.*/}
            <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    {/* Created props.title */}
                    {/* We will be passing values in these props from App.js file */}
                    <a className="navbar-brand" href="/"> {props.title} </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        {/* Create props.aboutText */}
                        {/* We will be passing values in these props from App.js file */}
                        <a className="nav-link" href="/"> {props.aboutText} </a>
                    </li>

                    </ul>
                    <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                </div>

                {/* Now How do we toggle b/w light and dark mode*/}
                {/* We don’t want to change the value in our useState in App.js again and again. 
                    Instead, we would use a switch to interchange dark and light mode. */}
                
                {/* BootStrap Component ==> checks-radio */}
                {/* https://getbootstrap.com/docs/5.1/forms/checks-radios/ */}
                <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleLightDarkMode}/>
                    <label className="form-check-label" for="flexSwitchCheckDefault"> enable {props.mode === "light" ? "dark" : "light"} mode </label>
                </div>
            </nav>

        </div>
    )
}

// Setting Up the prop-types:
Navbar.propTypes = {title: PropTypes.string.isRequired, aboutText: PropTypes.string}; 
/*
    It means that my prop-type of title is a string which means on passing any other value, like Number, it will show an error in the console.
    Hence we can only pass a string in props.title and props.aboutText. 
    
    We can use "isRequired" keyword, which makes sure that we won’t leave that prop blank. 
    If you do so, it will show an error in the console. 
    
    Similarly, You can use an object, Number, etc. as prop-type as well.
*/

// Setting Up the default prop-type:
/*
    If no props are being passed in the component, then the Default content in this prop-type will be displayed.
 */
Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About text here"
}



// What is the next step?
// ANS: Now we have created our navbar, but we have to import it to App.js(the file inside the src folder) to serve it.