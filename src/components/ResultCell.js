import React, {Component} from 'react';

const ResultCell = (props) => {
        return (
            <div className={`${props.backgroundColor} h-16 w-28 rounded-xl shadow-md flex flex-col justify-center items-center  font-roboto  tracking-wider`}>
                <h1 className="uppercase text-xs font-bold  ">{props.title}</h1>
                <p className="text-md font-extrabold ">{props.value}</p>
            </div>
        );

}

export default ResultCell;
