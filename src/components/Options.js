
import React from 'react';
import crossSvg from './assets/x-symbol-svgrepo-com.svg';
import oSvg from './assets/o-symbol.svg';
import TurnButton from './TurnButton';

const Options = ({ handleClearBoard }) => {
    return (
        <div className="grid grid-cols-3 gap-2 flex items-center">
            <img className="h-4 w-8" src={crossSvg} alt="cross svg" />
            <TurnButton />
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
