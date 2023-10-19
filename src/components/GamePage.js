import React, {useEffect, useState} from 'react';
import Cart from '../components/Cart';
import Board from '../components/Board';
import Result from '../components/Result';
import Options from '../components/Options';
import WinModal from "../components/WinModal";
import ReactDOM from 'react-dom';

const  GamePage=({chosenSign})=> {
    const [clearBoard, setClearBoard] = useState(false);
    const [resultsList, setResultsList] = useState({
        wins: 0,
        draws: 0,
        losses: 0,
        winner: ""
    });
    const [isGameFinished, setIsGameFinished]  = useState(false);
    const handleClearBoard = () => {
        setClearBoard(!clearBoard);
    }

    const handleUpdateResults = (newList) =>{
        setResultsList(newList);
        setIsGameFinished(true);
    }

    const handleNewGame = ()=>{
        setIsGameFinished(false);
        setClearBoard(!clearBoard);
    }


    return (

        <Cart>
            {isGameFinished && (
                ReactDOM.createPortal(
                    <WinModal onClose={handleNewGame} signChosen={resultsList.winner}/>,
                    document.getElementById('modal-root')
                )
            )}
            <Options handleClearBoard={handleClearBoard} />
            <Board clearBoard={clearBoard} updateResults={handleUpdateResults} />
            <Result resultsToDisplay={resultsList} signToDisplay={chosenSign} />
        </Cart>

    );
}

export default GamePage;
