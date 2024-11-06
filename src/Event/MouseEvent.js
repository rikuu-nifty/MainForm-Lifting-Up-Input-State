import React from 'react';

function MouseEvent(){

const handleMouseEnter =() =>{
    console.log("Mouse Entered the Button!")
};

const handleDoubleClick=() => {
    console.log("Button Double Clicked!")
}

    return(
        <div>
            <button onMouseEnter={handleMouseEnter}
                    onDoubleClick={handleDoubleClick}>                                     
                Hover or Click
            </button>
        </div>
    );
}

export default MouseEvent;