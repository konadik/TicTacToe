import Cart from "./components/Cart";
import Board from "./components/Board";
import Result from "./components/Result";
import Options from "./components/Options";
import {useState} from "react";

function App() {
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const handleCurrentSign = (newSign) =>{
        if(newSign === true){
        setCurrentPlayer('X')}else{
            setCurrentPlayer('O')
        }
    }



    return (
        <Cart>
            <Options currentPlayer={currentPlayer}/>
            <Board getCurrentSign={handleCurrentSign}/>
            <Result/>
        </Cart>
    );
}

export default App;
