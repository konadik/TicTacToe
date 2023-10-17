import React, {Component} from 'react';
import ResultCell from "./ResultCell";

const Result = ({resultsToDisplay}) => {

    return (
        <div className="grid grid-cols-3 gap-2">
            <ResultCell backgroundColor="bg-light-green" title="x (you)" value={resultsToDisplay.wins}/>
            <ResultCell backgroundColor="bg-white-dirty" title="ties" value={resultsToDisplay.draws}/>
            <ResultCell backgroundColor="bg-dark-green" title="O (cpu)" value={resultsToDisplay.losses}/>
        </div>
    );

}


export default Result;
