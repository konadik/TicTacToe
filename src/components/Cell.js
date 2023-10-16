import React, {Component} from 'react';

const Cell = (index) => {
    // const [showCross, setShowCross] = useState(false);

    return (
        <div className="relative" >
            <div className="bg-dark-pink h-28 w-28 rounded-2xl absolute bottom-1 left-0 z-0 hover:bg-dark-pink-shadow transition-colors duration-200 ">

            </div>
            <div className="bg-light-pink h-28 w-28 rounded-2xl shadow-xl z-10 "/>
        </div>
    );

}

export default Cell;
