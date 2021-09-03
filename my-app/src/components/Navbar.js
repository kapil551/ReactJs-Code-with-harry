// Creating a custom Navbar Component

// We are creating a custom function based component of react

import React from "react"

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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            </nav>

        </div>
    )
}

// What is the next step?
// ANS: Now we have created our navbar, but we have to import it to App.js(the file inside the src folder) to serve it.