import { useEffect, useState } from 'react';
import './style.css';
import croupier from './img/croupier (1).png'
import Buttons from './components/Buttons';
import Aside from './components/Aside';
import chip1 from './img/Chip_1_96x96-32_37907.png'
import chip5 from './img/Chip_5_96x96-32_37904.png'
import chip25 from './img/Chip_25_96x96-32_37906.png'
import chip50 from './img/Chip_50_96x96-32_37905.png'
import chip100 from './img/Chip_100_96x96-32_37908.png'
import casinoBackground from './img/10013168.jpg'

function App() {

  const cards = [
    {
      id: 1,
      value: 1,
      code: 'AS',
      img: 'https://www.deckofcardsapi.com/static/img/AS.png'
    },
    {
      id: 2,
      value: 1,
      code: 'AD',
      img: 'https://www.deckofcardsapi.com/static/img/AD.png'
    },
    {
      id: 3,
      value: 1,
      code: 'AC',
      img: 'https://www.deckofcardsapi.com/static/img/AC.png'
    },
    {
      id: 4,
      value: 1,
      code: 'AH',
      img: 'https://www.deckofcardsapi.com/static/img/AH.png'
    },
    {
      id: 5,
      value: 2,
      code: '2D',
      img: 'https://www.deckofcardsapi.com/static/img/2S.png'
    },
    {
      id: 6,
      value: 2,
      code: '2D',
      img: 'https://www.deckofcardsapi.com/static/img/2D.png'
    },
    {
      id: 7,
      value: 2,
      code: '2C',
      img: 'https://www.deckofcardsapi.com/static/img/2D.png'
    },
    {
      id: 8,
      value: 2,
      code: '2H',
      img: 'https://www.deckofcardsapi.com/static/img/AH.png'
    },
    {
      id: 9,
      value: 3,
      code: '3S',
      img: 'https://www.deckofcardsapi.com/static/img/3S.png'
    },
    {
      id: 10,
      value: 3,
      code: '3D',
      img: 'https://www.deckofcardsapi.com/static/img/3D.png'
    },
    {
      id: 11,
      value: 3,
      code: '3C',
      img: 'https://www.deckofcardsapi.com/static/img/3C.png'
    },
    {
      id: 12,
      value: 3,
      code: '3H',
      img: 'https://www.deckofcardsapi.com/static/img/3H.png'
    },
    {
      id: 13,
      value: 4,
      code: '4S',
      img: 'https://www.deckofcardsapi.com/static/img/4S.png'
    },
    {
      id: 14,
      value: 4,
      code: '4D',
      img: 'https://www.deckofcardsapi.com/static/img/4D.png'
    },
    {
      id: 15,
      value: 4,
      code: '4C',
      img: 'https://www.deckofcardsapi.com/static/img/4C.png'
    },
    {
      id: 16,
      value: 4,
      code: '4H',
      img: 'https://www.deckofcardsapi.com/static/img/4H.png'
    },
    {
      id: 17,
      value: 5,
      code: '5S',
      img: 'https://www.deckofcardsapi.com/static/img/5S.png'
    },
    {
      id: 18,
      value: 5,
      code: '5D',
      img: 'https://www.deckofcardsapi.com/static/img/5D.png'
    },
    {
      id: 19,
      value: 5,
      code: '5C',
      img: 'https://www.deckofcardsapi.com/static/img/5C.png'
    },
    {
      id: 20,
      value: 5,
      code: '5H',
      img: 'https://www.deckofcardsapi.com/static/img/5H.png'
    },
    {
      id: 21,
      value: 6,
      code: '6S',
      img: 'https://www.deckofcardsapi.com/static/img/6S.png'
    },
    {
      id: 22,
      value: 6,
      code: '6D',
      img: 'https://www.deckofcardsapi.com/static/img/6D.png'
    },
    {
      id: 23,
      value: 6,
      code: '6C',
      img: 'https://www.deckofcardsapi.com/static/img/6C.png'
    },
    {
      id: 24,
      value: 6,
      code: '6H',
      img: 'https://www.deckofcardsapi.com/static/img/6H.png'
    },
    {
      id: 25,
      value: 7,
      code: '7S',
      img: 'https://www.deckofcardsapi.com/static/img/7S.png'
    },
    {
      id: 26,
      value: 7,
      code: '7D',
      img: 'https://www.deckofcardsapi.com/static/img/7D.png'
    },
    {
      id: 27,
      value: 7,
      code: '7C',
      img: 'https://www.deckofcardsapi.com/static/img/7C.png'
    },
    {
      id: 28,
      value: 7,
      code: '7H',
      img: 'https://www.deckofcardsapi.com/static/img/7H.png'
    },
    {
      id: 29,
      value: 8,
      code: '8S',
      img: 'https://www.deckofcardsapi.com/static/img/8S.png'
    },
    {
      id: 30,
      value: 8,
      code: '8D',
      img: 'https://www.deckofcardsapi.com/static/img/8D.png'
    },
    {
      id: 31,
      value: 8,
      code: '8C',
      img: 'https://www.deckofcardsapi.com/static/img/8C.png'
    },
    {
      id: 32,
      value: 8,
      code: '8H',
      img: 'https://www.deckofcardsapi.com/static/img/8H.png'
    },
    {
      id: 33,
      value: 9,
      code: '9S',
      img: 'https://www.deckofcardsapi.com/static/img/9S.png'
    },
    {
      id: 34,
      value: 9,
      code: '9D',
      img: 'https://www.deckofcardsapi.com/static/img/9D.png'
    },
    {
      id: 35,
      value: 9,
      code: '9C',
      img: 'https://www.deckofcardsapi.com/static/img/9C.png'
    },
    {
      id: 36,
      value: 9,
      code: '9H',
      img: 'https://www.deckofcardsapi.com/static/img/9H.png'
    },
    {
      id: 37,
      value: 10,
      code: '0S',
      img: 'https://www.deckofcardsapi.com/static/img/0S.png'
    },
    {
      id: 38,
      value: 10,
      code: '0D',
      img: 'https://www.deckofcardsapi.com/static/img/0D.png'
    },
    {
      id: 39,
      value: 10,
      code: '0C',
      img: 'https://www.deckofcardsapi.com/static/img/0C.png'
    },
    {
      id: 40,
      value: 10,
      code: '0H',
      img: 'https://www.deckofcardsapi.com/static/img/0H.png'
    },
    {
      id: 41,
      value: 10,
      code: 'KS',
      img: 'https://www.deckofcardsapi.com/static/img/KS.png'
    },
    {
      id: 42,
      value: 10,
      code: 'KD',
      img: 'https://www.deckofcardsapi.com/static/img/KD.png'
    },
    {
      id: 43,
      value: 10,
      code: 'KC',
      img: 'https://www.deckofcardsapi.com/static/img/KC.png'
    },
    {
      id: 44,
      value: 10,
      code: 'KH',
      img: 'https://www.deckofcardsapi.com/static/img/KH.png'
    },
    {
      id: 45,
      value: 10,
      code: 'QS',
      img: 'https://www.deckofcardsapi.com/static/img/QS.png'
    },
    {
      id: 46,
      value: 10,
      code: 'QD',
      img: 'https://www.deckofcardsapi.com/static/img/QD.png'
    },
    {
      id: 47,
      value: 10,
      code: 'QC',
      img: 'https://www.deckofcardsapi.com/static/img/QC.png'
    },
    {
      id: 48,
      value: 10,
      code: 'QH',
      img: 'https://www.deckofcardsapi.com/static/img/QH.png'
    },
    {
      id: 49,
      value: 10,
      code: 'JS',
      img: 'https://www.deckofcardsapi.com/static/img/JS.png'
    },
    {
      id: 50,
      value: 10,
      code: 'JD',
      img: 'https://www.deckofcardsapi.com/static/img/JD.png'
    },
    {
      id: 51,
      value: 10,
      code: 'JC',
      img: 'https://www.deckofcardsapi.com/static/img/JC.png'
    },
    {
      id: 52,
      value: 10,
      code: 'JH',
      img: 'https://www.deckofcardsapi.com/static/img/JH.png'
    }
  ]
  const [deck, setDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [playerTotal, setPlayerTotal] = useState(0);
  const [dealerTotal, setDealerTotal] = useState(0);
  const [message, setMessage] = useState('');
  const [playBtns, setPlayBtns] = useState(true)
  const [betAmount, setBetAmount] = useState(0)
  const [balance, setBalance] = useState(250)
  const [betBtn, setBetBtn] = useState(false)
  const [cardClass, setCardClass] = useState('card')

  // Shuffling Cards function
  function shuffleDeck(array) {
    let shuffledCards = array.slice();
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }
    return shuffledCards;
  }
  useEffect(() => {
    setDeck(shuffleDeck(cards));
  }, []);

  
  const calculateTotal = (hand) => {
    let total = 0;
    let aces = 0;
    hand.forEach(card => {
      if (card.value === 1) {
        aces += 1;
        total += 11;
      } else {
        total += card.value;
      }
    });
    while (total > 21 && aces) {
      total -= 10;
      aces -= 1;
    }
    return total;
  };

  const dealInitialHands = () => {
    let newDeck = [...deck];
    const playerHand = [newDeck.pop(), newDeck.pop()];
    const dealerHand = [newDeck.pop()];
    setDeck(newDeck);
    setPlayerHand(playerHand);
    setDealerHand(dealerHand);
    setPlayerTotal(calculateTotal(playerHand));
    setDealerTotal(calculateTotal(dealerHand));
    setMessage('');
    setPlayBtns(false)
    const newTotal = calculateTotal(playerHand)
    if(newTotal === 21){
      setMessage('Blackjack!');
      setPlayBtns(true)
      setBalance(prev => prev + betAmount * 3)
      setTimeout(() => {
        setCardClass('cardOut')
      }, 1000); 
      setTimeout(() => {
        setCardClass('card')
        setPlayerHand([])
        setPlayerTotal(0)
        setDealerHand([])
        setDealerTotal(0)
        setBetBtn(false)
      }, 1500);
    }
  };

  const hit = () => {
    let newDeck = [...deck];
    const newCard = newDeck.pop();
    const newPlayerHand = [...playerHand, newCard];
    const newTotal = calculateTotal(newPlayerHand);
    setDeck(newDeck);
    setPlayerHand(newPlayerHand);
    setPlayerTotal(newTotal);
    if (newTotal > 21) {
      setMessage('You busted!');
      setPlayBtns(true)
      setTimeout(() => {
        setCardClass('cardOut')
      }, 1000);
      setTimeout(() => {
        setCardClass('card')
        setPlayerHand([])
        setPlayerTotal(0)
        setDealerHand([])
        setDealerTotal(0)
        setBetBtn(false)
      }, 1500);
    }
  };

  const stand = () => {
    let newDeck = [...deck];
    let newDealerHand = [...dealerHand];
    let newTotal = dealerTotal;
    while (newTotal < 17) {
      const newCard = newDeck.pop();
      newDealerHand = [...newDealerHand, newCard];
      newTotal = calculateTotal(newDealerHand);
    }
    setDeck(newDeck);
    setDealerHand(newDealerHand);
    setDealerTotal(newTotal);
    if (newTotal > 21 || newTotal < playerTotal) {
      setMessage('You win!');
      setBalance(prev => prev + betAmount * 2)
      setTimeout(() => {
        setCardClass('cardOut')
      }, 1000);
    } else if (newTotal === playerTotal) {
      setMessage('Draw!');
      setBalance(prev => prev + betAmount)
      setTimeout(() => {
        setCardClass('cardOut')
      }, 1000);
    } else {
      setMessage('Dealer wins!');
      setTimeout(() => {
        setCardClass('cardOut')
      }, 1000);
    }
    setPlayBtns(true)
    setTimeout(() => {
      setCardClass('card')
      setPlayerHand([])
      setPlayerTotal(0)
      setDealerHand([])
      setDealerTotal(0)
      setBetBtn(false)
    }, 1500);
  };

  const double = () => {
    if (balance > betAmount) {
      let newDeck = [...deck];
      const newCard = newDeck.pop();
      const newPlayerHand = [...playerHand, newCard];
      const newTotal = calculateTotal(newPlayerHand);
      setDeck(newDeck);
      setPlayerHand(newPlayerHand);
      setPlayerTotal(newTotal);
      setBalance(prev => prev - betAmount)
      if (newTotal > 21) {
        setMessage('You busted!');
        setTimeout(() => {
          setCardClass('cardOut')
        }, 1000);
        setPlayBtns(true)
        setTimeout(() => {
          setCardClass('card')
          setPlayerHand([])
          setPlayerTotal(0)
          setDealerHand([])
          setDealerTotal(0)
          setBetBtn(false)
        }, 1500);
      } else {
        stand()
      }
    }
  }

  useEffect(() => {
    if (playerTotal === 21) {
      setBalance(prev => prev + betAmount * 3)
    }
    if (dealerTotal > 21) {
      setBalance(prev => prev + betAmount * 2)
    }
  }, [playerTotal])

  return (
    <div className="wrapper">
      <div style={{ backgroundImage: `url(${casinoBackground})` }} className='leftWrapper'>
        <div className='mainContainer'>
          <img className='courpier' src={croupier} alt="" />
          <div className="tableWrapper">
            <div className="outline">
              <div className="table">
                <div className='courpierSide'>
                  <div className='total'>{dealerTotal}</div>
                  <div className='cards'>
                    {dealerHand.map((card, key) => (
                      <img className={cardClass} src={card.img} key={key} />
                    ))}
                  </div>
                </div>
                <div className='playerSide'>
                  <div className='total'>{playerTotal}</div>
                  <div className='cards'>
                    {playerHand.map((card, key) => (
                      <img className={cardClass} src={card.img} key={key} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Buttons doubleBtn={double} standBtn={stand} playBtns={playBtns} hit={hit} playerTotal={playerTotal} />
        </div>
      </div>
      <Aside betBtn={betBtn} setBetBtn={setBetBtn} message={message} play={dealInitialHands} chip1={chip1} chip5={chip5} chip25={chip25} chip50={chip50} chip100={chip100} betAmount={betAmount} setBetAmount={setBetAmount} balance={balance} setBalance={setBalance} />
    </div>
  );
}

export default App;