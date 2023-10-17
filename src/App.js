import React, { useState } from 'react';
import Cart from './components/Cart';
import Board from './components/Board';
import Result from './components/Result';
import Options from './components/Options';

function App() {
    const [clearBoard, setClearBoard] = useState(false);
    const [resultsList, setResultsList] = useState({
        wins: 0,
        draws: 0,
        losses: 0
    });
    const handleClearBoard = () => {
        setClearBoard(!clearBoard);
    }

    const handleUpdateResults = (newList) =>{
        setResultsList(newList);
    }

    return (
        <Cart>
            <Options handleClearBoard={handleClearBoard} />
            <Board clearBoard={clearBoard} resultsList={resultsList} updateResults={handleUpdateResults} />
            <Result resultsToDisplay={resultsList}  />
        </Cart>
    );
}

export default App;
