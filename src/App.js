import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage";
import GamePage from "./components/GamePage/GamePage";


function App() {
    const [openHomePage, setOpenHomePage] = useState(true);
    const [chosenSign, setChosenSign] = useState('');
    const [mode, setMode] = useState('');

    const handleChoosingSign = (chosenMark) => {
        setChosenSign(chosenMark);
    }

    const handleModeSelect = (gameMode) => {
        setMode(gameMode)
    }

    return (
        <Router>
            <Routes>
                {openHomePage && <Route path="/" element={<HomePage setChosenSign={handleChoosingSign} mode={handleModeSelect}/>}/>}
                <Route path="/game" element={<GamePage chosenSign={chosenSign} mode={mode}/>}/>
            </Routes>


        </Router>
    );
}

export default App;
