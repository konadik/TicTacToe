import React, {useState} from 'react';
import Cell from './Cell';

const Board = (props) => {
    const [isCross, setIsCross] = useState(true);
    const handleSignChange = () =>{
        setIsCross(!isCross);
        props.getCurrentSign(isCross);
    }

    return (
        <button onClick={handleSignChange}>
        <div className="grid grid-cols-3 gap-2 gap-y-4">
            {Array(9).fill().map((_, index) => (
                <Cell key={index} index={index} />
            ))}
        </div>
        </button>
    );
};

export default Board;
