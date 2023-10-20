import React from 'react';
import crossSvg from '../assets/x-symbol-svgrepo-com.svg';
import oSvg from '../assets/o-symbol.svg';
import TurnButton from './TurnButton';
import {Link} from "react-router-dom";
import icon from '../assets/turn-around.png'

const Options = ({handleClearBoard, currentPlayer}) => {
    return (
        <div className="grid grid-cols-3 gap-2 flex items-center">

            <Link to={`/`}>
            <button className={`flex items-center justify-start `}>
                <img className="h-6 w-5" src={crossSvg} alt="cross svg"/>
                <img className="h-6 w-7" src={oSvg} alt="o svg"/>
            </button>
        </Link>

            <TurnButton currentPlayer={currentPlayer}/>

            <button
                onClick={handleClearBoard}
                className="justify-self-end rounded-xl w-10 h-9 bg-white-dirty shadow-md hover:bg-white transition-colors duration-200 flex items-center justify-center">
                <img src={icon} alt={`turn`} className={`h-4 w-4`}/>
            </button>
        </div>
    );
}

export default Options;
