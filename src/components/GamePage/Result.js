import React, {Component, useEffect, useState} from 'react';
import ResultCell from "./ResultCell";

const Result = ({resultsToDisplay, signToDisplay}) => {
    const [text, setText]=useState({you: '', they: ''})

    useEffect(()=>{
        if(signToDisplay === 'X'){
            setText({
                you: 'X (you)',
                they: 'O'
            })

        }else{
            setText({
                you: 'O (you)',
                they: 'X'
            })
        }
    },[signToDisplay])

    return (
        <div className="grid grid-cols-3 gap-2">
            <ResultCell backgroundColor="bg-light-green" title={text.you} value={resultsToDisplay.wins}/>
            <ResultCell backgroundColor="bg-white-dirty" title="ties" value={resultsToDisplay.draws}/>
            <ResultCell backgroundColor="bg-dark-green" title={text.they} value={resultsToDisplay.losses}/>
        </div>
    );

}


export default Result;
