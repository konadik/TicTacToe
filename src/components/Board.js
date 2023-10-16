import React from 'react';
import Cell from './Cell';

const Board = () => {
    return (
        <div className="grid grid-cols-3 gap-2">
            {Array(9).fill().map((_, index) => (
                <Cell key={index} index={index} />
            ))}
        </div>
    );
};

export default Board;
