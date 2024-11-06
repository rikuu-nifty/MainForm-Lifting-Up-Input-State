import React from 'react'; 

function KeyboardEvent() {
    const handleKeyDown = (event) => {
        if (event.key == "Enter") {
            alert("Enter Key Pressed!");
        }
    };

    const handleKeyPressed = (event) => {
        console.log(`Key Pressed: ${event.key}`); 
    };

    return ( 
        <div>
            <input
                type="text"
                placeholder="Type Something"
                onKeyDown={handleKeyDown}
                onKeyPress={handleKeyPressed} 
            />
        </div>
    );

}

export default KeyboardEvent;
