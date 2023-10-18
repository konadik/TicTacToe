import React from 'react';
import crossSvg from './assets/x-symbol-svgrepo-com.svg';
import oSvg from './assets/o-symbol.svg';
import TurnButton from './TurnButton';

const Options = ({handleClearBoard}) => {
    return (
        <div className="grid grid-cols-3 gap-2 flex items-center">
            <button className={`flex items-center justify-start `}>
                <img className="h-6 w-5" src={crossSvg} alt="cross svg"/>
                <img className="h-6 w-7" src={oSvg} alt="o svg"/>
            </button>
            <TurnButton/>
            <button
                onClick={handleClearBoard}
                className="justify-self-end rounded-xl w-10 h-9 bg-white-dirty shadow-md hover:bg-white transition-colors duration-200"
            >
                C
            </button>
        </div>
    );
}

export default Options;
