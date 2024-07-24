import React, { useState } from "react";

export default function Aside({ betBtn, setBetBtn, chip1, chip5, chip25, chip50, chip100, play, betAmount, setBetAmount, balance, setBalance, message }) {

    const [addToAmount, setAddToAmount] = useState(0)

    function setAmount(amount) {
        setAddToAmount(amount)
    }

    function addAmount() {
        if (betAmount + addToAmount <= balance) {
            setBetAmount(prev => prev + addToAmount)
        }
    }

    function removeAmount() {
        if (betAmount > 0 && betAmount >= addToAmount) {
            setBetAmount(prev => prev - addToAmount);
        }
    }

    function bet() {
        if(balance >= betAmount){
            setBalance(prev => prev - betAmount);
            play();
            setBetBtn(true)
        }
    }

    return (
        <div className='aside'>
            <div className='balance'>Balance: ${balance}</div>
            <div className="message">{message}</div>
            <div className="betContainer">
                <p className="totalBet">Total Bet: ${betAmount}</p>
                <p className="amountToAdd">Amount to add: ${addToAmount}</p>
                <div className="chips">
                    <img onClick={() => setAmount(1)} src={chip1} alt="" className="chip1" />
                    <img onClick={() => setAmount(5)} src={chip5} alt="" className="chip5" />
                    <img onClick={() => setAmount(25)} src={chip25} alt="" className="chip25" />
                    <img onClick={() => setAmount(50)} src={chip50} alt="" className="chip50" />
                    <img onClick={() => setAmount(100)} src={chip100} alt="" className="chip100" />
                </div>
                <div className="buttons">
                    <button disabled={betBtn} onClick={() => removeAmount()} className="removeBtn">Remove</button>
                    <button disabled={betBtn} onClick={() => addAmount()} className="addBtn">Add</button>
                </div>
                <button disabled={betBtn} onClick={() => bet()} className="betBtn">Bet</button>
            </div>
        </div>
    )
}