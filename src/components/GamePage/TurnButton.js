import React, {Component} from 'react';
import crossSvg from "../assets/x-symbol-svgrepo-com.svg";
import oSvg from "../assets/o-symbol.svg";


const TurnButton = ({currentPlayer})=>{
        return (
            <div className="relative">
                <div
                    className="flex flex-row bg-dark-pink h-9 w-28 rounded-xl justify-center items-center space-x-2 absolute bottom-1 left-0 z-0 ">
                    <img className="h-3 w-3" src={currentPlayer === true ? crossSvg : oSvg} alt="cross svg" />

                    <h1 className="uppercase font-bold tracking-wider text-xs font-roboto ">turn</h1>
                </div>
                <div className="bg-light-pink h-9 w-28 rounded-2xl shadow-xl z-10 "/>
            </div>
        );
}

export default TurnButton
