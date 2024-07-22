import React from "react";

export default function Buttons({hit, playBtns, standBtn, doubleBtn, playerTotal}){

    return(
        <div className="buttonsWrapper">
            <button onClick={standBtn} disabled={playBtns || playerTotal >= 21} className="passBtn">Stand</button>
            <button onClick={hit} disabled={playBtns || playerTotal >= 21} className="drawBtn">Hit</button>
            <button disabled={playBtns} onClick={doubleBtn} className="doubleBtn">Double</button>
        </div>
    )
}