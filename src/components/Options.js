import React, {Component, useCallback, useEffect, useState} from 'react';
import crossSvg from './assets/x-symbol-svgrepo-com.svg';
import oSvg from './assets/o-symbol.svg'

const Options = (props) => {
    // const [currentPlayer, setCurrentPlayer] = useState('');
    const [clearBoard, setClearBoard] = useState(false);
    //
    // const handleEffect = useCallback(()=>{
    //     setCurrentPlayer(props.currentPlayer === 'X' ? 'O' : 'X');
    // }, [props.currentPlayer])
    //
    //
    // useEffect(() => {
    //     handleEffect();
    // }, [handleEffect]);


    const handleClearBoard = () => {
        setClearBoard(true);
        props.clearBoard(clearBoard);

    }


    return (
        <div className="grid grid-cols-3 gap-2 flex items-center ">

            <img className="h-4 w-8 " src={crossSvg} alt="cross svg"/>

            <div className="relative">
                <div
                        className="flex flex-row bg-dark-pink h-9 w-28 rounded-xl justify-center items-center space-x-2 absolute bottom-1 left-0 z-0 ">
                    {props.currentPlayer === 'X' ? (<img className="h-3 w-3" src={crossSvg} alt="cross svg"/>
                    ) : (
                        <img className="h-3 w-3" src={oSvg} alt="cross svg"/>
                    )}
                    <h1 className="uppercase font-bold tracking-wider text-xs">turn</h1>
                </div>
                <div className="bg-light-pink h-9 w-28 rounded-2xl shadow-xl z-10 "/>
            </div>

            <button className="justify-self-end rounded-xl w-10 h-9 bg-white-dirty shadow-md hover:bg-white transition-colors duration-200">
                C
            </button>

        </div>
    );
}

export default Options;
