import React from 'react';
import Button from "./Button";
import Cart from "./Cart";
import crossSvg from "./assets/x-symbol-svgrepo-com.svg";
import oSvg from "./assets/o-symbol.svg";
import PlayerMark from "./PlayerMark";
import {Link} from "react-router-dom";

const HomePage = ({setChosenSign}) => {
    return (
        <Cart>
            <div className=" flex flex-col items-center  space-y-10">

                <div className={`flex items-center justify-start space-x-1 `}>
                    <img className="h-8 w-8" src={crossSvg} alt="cross svg"/>
                    <img className="h-10 w-10" src={oSvg} alt="o svg"/>
                </div>


                <div className="relative  ">
                    <div>
                        <div
                            className={`bg-dark-pink  text-white-dirty tracking-wider h-48 w-96 rounded-2xl space-y-3 uppercase absolute bottom-1 left-0 z-0 flex items-center justify-center flex-col  font-roboto `}>
                            <h1 className={`font-bold`}>pick players mark</h1>
                            <PlayerMark  chosenSign={setChosenSign}/>
                            <h1 className={`text-xs`}>remember x goes first</h1>

                        </div>
                        <div className={`bg-light-pink h-48 w-96 rounded-2xl shadow-xl z-10 `}/>
                    </div>
                </div>

                <div className={`flex flex-col  space-y-5`}>
                    <Link>
                        <Button color="bg-light-green" text="NEW GAME (VS CPU)" width='w-96' />
                    </Link>
                    <Link  to="/game">
                        <Button color="bg-white-dirty" text="NEW GAME " width='w-96' />
                    </Link>
                </div>
            </div>
        </Cart>
    );

}

export default HomePage;
