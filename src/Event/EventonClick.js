import React, {useState} from 'react';

function EventonClick() {

// FOR Target ---------------------------------
    const[inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
        console.log(event.target.value);
    }
//---------------------------------------------


// FOR Type --------------------------------------
    const handleEvent = (event) => {
        event.stopPropagation(); //This will stop the event propagating event further
        console.log(`Event Type: ${event.type}`); 
        handleClick();
    };
//---------------------------------------------

// FOR Prevent Default -----------------------------
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("Form Submission Prevented")
        //You can add additional form handling
    };
//---------------------------------------------




    const handleClick = () => {
        alert("Button Clicked!");
    }

    return (
       <form onSubmit={handleSubmit}>
       <div>
         <input type="text" onChange={handleChange}/>
         <button onClick={handleEvent}>Click Me!</button>
         <button type="Submit">Submit</button>
       </div>
       </form>
    );
    
}

export default EventonClick;