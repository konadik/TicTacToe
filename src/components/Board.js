import React, {useCallback, useEffect, useState} from 'react';
import Cell from './Cell';

const Board = ({clearBoard, updateResults}) => {
    const [clickedCells, setClickedCells] = useState(Array(9).fill(null));
    const [isCross, setIsCross] = useState(true);
    const  [winningLine, setWinningLine] = useState(null);

    const handleCellClick = (index) => {
        if (!clickedCells[index]) {
            const newClickedCells = [...clickedCells];
            newClickedCells[index] = isCross ? 'X' : 'O';
            setClickedCells(newClickedCells);
            setIsCross(!isCross);
        }
    };


    useEffect(() => {
        const winner = checkWinner(clickedCells);
        if (winner && winner.result === 'win' && winner.player ==='X') {
            updateResults((prevResults) => ({
                ...prevResults,
                wins: prevResults.wins + 1,
                winner: "X"
            }));
            setWinningLine(winner.winningPattern);
        }
       else if (winner && winner.result === 'win' && winner.player ==='O') {
            updateResults((prevResults) => ({
                ...prevResults,
                losses: prevResults.losses + 1,
                winner: "O"
            }));
            setWinningLine(winner.winningPattern);
        }
        else if (winner && winner.result === 'draw') {
            updateResults((prevResults) => ({
                ...prevResults,
                draws: prevResults.draws + 1,
                winner: "D"
            }));
        }
    }, [clickedCells]);



    useEffect(() => {
        setClickedCells(Array(9).fill(null));
        setWinningLine(null);
    }, [clearBoard]);


    return (
        <div>
            <div className="grid grid-cols-3 gap-2 gap-y-4  gap-x-3">
                {clickedCells.map((symbol, index) => (
                    <Cell key={index} index={index} onCellClick={handleCellClick}
                          isClicked={symbol} isPartOfWinningLine={winningLine && winningLine.includes(index)} />
                ))}
            </div>
        </div>
    );

    function checkWinner(board) {
        if (board === null) {
            return null;
        }
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return {result: "win", winningPattern: pattern, player:board[a]};
            }
        }

        if (board.every(cell => cell)) {
            return {result: "draw", winningPattern: null, player: null};
        }

        return null;
    }


};
export default Board;
