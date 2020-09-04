import React from "react";
import Head from "./images/heads.png";
import Tail from "./images/tails.png";
export default function Coin({ num, countFlips, countTails, countHeads }) {
  return (
    <div>
      <h1>Coin Flip Exercise</h1>
      {num === null ? null : (
        <div>
          {num === 1 ? (
            <img src={Head} alt="coin" />
          ) : (
            <img src={Tail} alt="coin" />
          )}
          <p>
            Total Flips-{countFlips} Tails-{countTails} Heads-{countHeads}
          </p>
        </div>
      )}
    </div>
  );
}
