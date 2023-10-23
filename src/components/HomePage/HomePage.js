import React, {useEffect, useRef, useState} from 'react';
import Button from "../UI/Button";
import Cart from "../UI/Cart";
import crossSvg from "../assets/x-symbol-svgrepo-com.svg";
import oSvg from "../assets/o-symbol.svg";
import PlayerMark from "./PlayerMark";
import {Link} from "react-router-dom";

const HomePage = ({setChosenSign, mode}) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [animation, setAnimation] = useState(false)

    const handleButtonDisable = (value) => {
        setIsButtonDisabled(value);
    }

    const handleClick = (selectedMode) => {
        if (isButtonDisabled === true) {
            setAnimation(true);
            setTimeout(()=>{
                setAnimation(false)
            }, 1450)

        }else{
            if(selectedMode === 'userVsComputer'){
                mode('userVsComputer')
            }else{
                mode('userVsUser')
            }
        }
    }

    return (
        <Cart>
            <div className=" flex flex-col items-center  space-y-10 ">

                <div className={`flex items-center justify-start space-x-1 `}>
                    <img className="h-8 w-8" src={crossSvg} alt="cross svg"/>
                    <img className="h-10 w-10" src={oSvg} alt="o svg"/>
                </div>


                <div className="relative  ">
                    <div>
                        <div
                            className={`bg-dark-pink  text-white-dirty tracking-wider h-48 w-96 rounded-2xl space-y-3 uppercase absolute bottom-1 left-0 z-0 flex items-center justify-center flex-col  font-roboto `}>
                            <h1 className={`font-bold`}>pick players mark</h1>
                            <div className={`${animation ? 'shake ' : ''}`}>
                                <PlayerMark chosenSign={setChosenSign} disable={handleButtonDisable}/>
                            </div>
                            <h1 className={`text-xs`}>remember x goes first</h1>

                        </div>
                        <div className={`bg-light-pink h-48 w-96 rounded-2xl shadow-xl z-10 `}/>
                    </div>
                </div>

                <div className={`flex flex-col  space-y-5`} >
                    <Link to={isButtonDisabled ? "#" : "/game"} >
                        <Button id={`userVsComputer`} color="bg-light-green" text="NEW GAME (VS CPU)" width='w-96' onClick={() => handleClick('userVsComputer')}/>
                    </Link>
                    <Link to={isButtonDisabled ? "#" : "/game"}>
                        <Button id={`userVsUser`}  color="bg-white-dirty" text="NEW GAME " width='w-96' onClick={() => handleClick('userVsUser')}/>
                    </Link>
                </div>
            </div>
        </Cart>
    );

}

export default HomePage;
