import React, { useEffect, useState } from 'react';
import crossSvg from "./assets/x-symbol-svgrepo-com.svg";
import oSvg from "./assets/o-symbol.svg";
import XIcon from "./icons/XIcon";
import OIcon from "./icons/OIcon";

const PlayerMark = ({ chosenSign }) => {
    const [showBackground, setShowBackground] = useState('');

    const changeSign = (sign) => {
        if (sign === "X") {
            setShowBackground("X");
            chosenSign("X");
        } else if (sign === "O") {
            setShowBackground("O");
            chosenSign("O");
        }
    }

    return (
        <div className={`flex bg-light-pink w-80 h-20 rounded-xl items-center justify-center p-2`}>
            <button onClick={() => changeSign('X')} className={`opacity-60 h-16 w-40 flex items-center justify-center rounded-l-xl
                ${showBackground === "X" ? "bg-black" : ''} hover:bg-black transition-colors duration-200`}>

                <XIcon color="#F5F2E3" width="32px" height="32px" />

            </button>

            <button onClick={() => changeSign('O')} className={`opacity-60 h-16 w-40 flex items-center justify-center rounded-r-xl
                ${showBackground === "O" ? "bg-black" : ''} hover-bg-black transition-colors duration-200`}>

                <OIcon color="#768D4C" width="45px" height="45px" />

            </button>
        </div>
    );
}

export default PlayerMark;
