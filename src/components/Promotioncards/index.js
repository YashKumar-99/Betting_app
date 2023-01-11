import React from 'react'
import './styles.css';
import { CgCrown } from "react-icons/cg";
import { GiFishing } from "react-icons/gi";
import { GiCardKingHearts } from "react-icons/gi";
import { GiTrophyCup } from "react-icons/gi";
import Evolution from "../../assests/Evolution-bg.png";
import live from "../../assests/live-bg.png";
import sports from "../../assests/Sportsbook-bg.png";
import slot from "../../assests/slot-bg.png";
import cards from "../../assests/card-bg.png";
import ecricket from "../../assests/e-Cricket-bg.png";
import multi from "../../assests/multiplayer-bg.png";
import fishing from "../../assests/fishing-bg.png";
import { GiCombinationLock } from "react-icons/gi";
import { GiGameConsole } from "react-icons/gi";


function Promotioncards() {
  return (



    <div className='promotion-button'>
      <div className='promotion'>
        <img src={Evolution} />
        <div className='card'><GiTrophyCup /> Evolution gaming</div>
      </div>
      <div className='promotion' >
        <img src={live} />
        <div className='card'><CgCrown />
          live casinos </div>
      </div>
      <div className='promotion'>
        <img src={sports} />
        <div className='card'><GiTrophyCup />Sportsbook</div>
      </div>
      <div className='promotion'>
        <img src={slot} />
        <div className='card'><GiCombinationLock />Slot Games</div>
      </div>
      <div className='promotion'>
        <img src={cards} />
        <div className='card'><GiCardKingHearts />Card Games</div></div>
      <div className='promotion'>
        <img src={ecricket} />
        <div className='card'><GiGameConsole />E-cricket</div></div>
      <div className='promotion'>
        <img src={multi} />
        <div className='card'><GiCardKingHearts /> Multiplayer Games</div>
      </div>
      <div className='promotion'>
        <img src={fishing} />
        <div className='card'><GiFishing />Fishing Games</div></div>
    </div>
    




  )
}

export default Promotioncards;