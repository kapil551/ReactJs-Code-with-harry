import React from 'react'

                        // using props
export default function Alert(props) {

    // handler function to capitalize the first character of the alert type 
    const capitalizeFirstCharacter = (word) => {

        console.log(word);

        const lowerAllCharactersInWord = word.toLowerCase();
        
        const upperFirstCharacterInWord = lowerAllCharactersInWord.charAt(0).toUpperCase();

        // slice() ==> The index to the beginning of the specified portion of stringObj. 
        //             Returns a section of a string.
        return upperFirstCharacterInWord + lowerAllCharactersInWord.slice(1);

    }
    
    return (

        <div style={{height: "3.5rem"}}>

            {/* Logical && Operator:
                If props.alert is null then the code written after && won’t be shown otherwise 
                the code inside <div></div> tag will be displayed.  
            */}
        

                                                    {/* change the color of the alert box as per type
                                                        e.g. green color for "success", red color for "warning" */}
            { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong> {capitalizeFirstCharacter(props.alert.type)} </strong>: {props.alert.msg}
            </div> }

        </div>
        
    )
}
