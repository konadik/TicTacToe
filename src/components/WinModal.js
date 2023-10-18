import React, {Component, useEffect} from 'react';
import imgX from './assets/x-symbol-svgrepo-com.svg'
import imgO from './assets/o-symbol.svg'
import "../index.css"
import Button from "./Button";

const WinModal = ({onClose, signChosen}) => {
    return (
        <>
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-50 "/>
        <div
            className="fixed transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-70 w-screen flex bg-darker-green
            justify-center items-center flex-col space-y-4 p-7 z-10 animation-fadeIn font-roboto  tracking-wider ">

            <h1 className=" text-sm text-white">YOU WON!</h1>

            <div className="flex space-x-3 items-center  justify-center">
                {signChosen === 'X' ? ( <img src={imgX} alt="cross symbol" className="h-12 w-12"/>) : (
                    <img src={imgO} alt="cross symbol" className="h-12 w-12"/>
                )}
                <h1 className="text-4xl font-bold uppercase text-dark-green">Takes the round</h1>
            </div>

            <div className="div flex flex-row items-center justify-center space-x-3 ">
                <Button color="bg-light-green" text="Quit" width='w-24' />
                <Button color="bg-white-dirty" text="Next round" width='w-36' onClick={onClose}/>
            </div>
        </div>

        </>


    );

}


export default WinModal;
