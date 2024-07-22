import React from "react";

export default function Buttons({drawCard, playBtns, setPass}){

    function passBtn(){
        setPass(true)
    }

    return(
        <div className="buttonsWrapper">
            <button disabled={playBtns} onClick={() => passBtn()} className="passBtn">Pass</button>
            <button disabled={playBtns} onClick={drawCard} className="drawBtn">Draw Card</button>
            <button disabled={playBtns} className="doubleBtn">Double</button>
            <button disabled={playBtns} className="splitBtn">Split</button>
        </div>
    )
}