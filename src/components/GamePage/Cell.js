import React, { useState } from 'react';
import oSvg from "../assets/o-symbol.svg";
import crossSvg from '../assets/x-symbol-svgrepo-com.svg';

const Cell = ({ index, onCellClick, isClicked, isPartOfWinningLine }) => {

    return (
        <div className={`relative`}>
            <div
                className={`bg-dark-pink h-28 w-28 rounded-2xl absolute bottom-1 left-0 z-0 hover:bg-dark-pink-shadow 
                transition-colors duration-200 flex items-center justify-center ${isClicked ? 'pointer-events-none' : ''}
                 ${isPartOfWinningLine ? 'bg-light-pink transition duration-500': ''}`}
                onClick={() => {
                    if (!isClicked) {
                        onCellClick(index);
                    }
                }}
            >
                {isClicked ? (isClicked === 'X' ? <img className="h-10 w-10 " src={crossSvg} alt="cross svg" /> : <img className="h-10 w-10" src={oSvg} alt="o svg" />) : null}
            </div>
            <div className="bg-light-pink h-28 w-28 rounded-2xl shadow-xl z-10" />
        </div>
    );
}

export default Cell;
