import React, {useEffect, useState} from 'react';
import Cart from '../UI/Cart';
import Board from './Board';
import Result from './Result';
import Options from './Options';
import WinModal from "./WinModal";
import ReactDOM from 'react-dom';

const  GamePage=({chosenSign})=> {
    const [clearBoard, setClearBoard] = useState(false);
    const [isCross, setIsCross] = useState(true);
    const [resultsList, setResultsList] = useState({
        wins: 0,
        draws: 0,
        losses: 0,
        winner: ""
    });
    const [isGameFinished, setIsGameFinished]  = useState(false);
    const handleClearBoard = () => {
        setClearBoard(!clearBoard);
        setIsCross(true);
    }

    const handleUpdateResults = (newList) =>{
        setResultsList(newList);
        setIsGameFinished(true);
        sessionStorage.setItem('resultsList', JSON.stringify(newList));
    }

    const handleNewGame = ()=>{
        setIsGameFinished(false);
        setClearBoard(!clearBoard);
        setIsCross(true);
    }

    const handleSign = (e)=>{
        setIsCross(e)
    }


    return (
        <Cart>
            {isGameFinished && (
                ReactDOM.createPortal(
                    <WinModal onClose={handleNewGame} winnerSign={resultsList.winner} player={chosenSign}/>,
                    document.getElementById('modal-root')
                )
            )}
            <Options handleClearBoard={handleClearBoard} currentPlayer={isCross} />
            <Board clearBoard={clearBoard} updateResults={handleUpdateResults} player={chosenSign} isCross={isCross} click={handleSign}/>
            <Result resultsToDisplay={resultsList} signToDisplay={chosenSign} />
        </Cart>

    );
}

export default GamePage;
