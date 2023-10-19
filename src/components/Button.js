import React from 'react';

const Button = ({width, color, text, onClick}) => {
    return (
        <button onClick={onClick}>
            <div className="relative  tracking-wider font-bold">
                <div
                    className={`${color} h-14 ${width} rounded-2xl uppercase text-md absolute bottom-1 left-0 z-0 hover:bg-dark-pink-shadow transition-colors duration-200 flex items-center justify-center`}
                    >
                    {text}
                </div>
                <div className={`bg-light-pink h-14 ${width} rounded-2xl shadow-xl z-10 `}/>
            </div>
        </button>
    );

}

export default Button;
