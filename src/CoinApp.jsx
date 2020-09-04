import React from "react";
import Coin from "./Coin";
import { useState } from "react";

export default function CoinApp() {
  const [num, setNum] = useState(null);
  const [countTails, setCountTails] = useState(0);
  const [countHeads, setCountHeads] = useState(0);
  const [countFlips, setCountFlips] = useState(0);

  const handleClick = () => {
    const randomNum = Math.floor(Math.random() * 2) + 1;
    setNum(randomNum);
    if (randomNum === 1) {
      setCountHeads(countHeads + 1);
    }
    if (randomNum === 2) {
      setCountTails(countTails + 1);
    }

    setCountFlips(countFlips + 1);
  };
  return (
    <>
      <Coin
        countTails={countTails}
        countHeads={countHeads}
        countFlips={countFlips}
        num={num}
      />
      <button onClick={handleClick}>Flip Coin</button>
    </>
  );
}
