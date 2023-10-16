import React, {Component} from 'react';
import crossSvg from './assets/x-symbol-svgrepo-com.svg'

const Options = () => {

        return (
            <div className="grid grid-cols-3 gap-2 flex items-center ">

                <button className="h-4 w-4 flex flex-col space-y-2">
                    <img src={crossSvg} alt="cross svg"/>
                    <div>
                    <svg width="100" height="100" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="#AEBC6E" stroke="#000" stroke-width="5" />
                    </svg>
                    </div>
                </button>

                <button className="flex flex-row bg-dark-pink h-9 w-28 rounded-xl shadow-md justify-center items-center space-x-2">
                    <img  className="h-4 w-4" src={crossSvg} alt="cross svg"/>
                    <h1 className="uppercase font-bold tracking-wider text-sm">turn</h1>
                </button>

                <button className="justify-self-end rounded-xl w-10 h-9 bg-white-dirty shadow-md">
hh
                </button>

            </div>
        );
}

export default Options;
