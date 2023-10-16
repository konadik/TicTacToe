import React, {Component} from 'react';
import ResultCell from "./ResultCell";

const Result = () => {

    return (
        <div className="grid grid-cols-3 gap-2">
            <ResultCell backgroundColor="bg-light-green" title="x (you)" value="0"/>
            <ResultCell backgroundColor="bg-white-dirty" title="ties" value="1"/>
            <ResultCell backgroundColor="bg-dark-green" title="O (cpu)" value="1"/>
        </div>
    );

}


export default Result;
