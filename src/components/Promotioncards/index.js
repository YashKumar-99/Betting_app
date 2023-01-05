import React from 'react'
import './styles.css';
import { CgCrown} from "react-icons/cg";
import { GiFishing} from "react-icons/gi";


function Promotioncards() {
  return (
    <div className='promotion-button '>
        <div className='card1'><div></div>Evolution gaming</div>
        <div className='card2'><div><CgCrown/></div>live casinos </div>
        <div className='card3'><div></div>Sportsbook</div>
        <div className='card4'><div></div>Slot Games</div>
        <div className='card5'><div></div>Card Games</div>
        <div className='card6'><div></div>E-cricket</div>
        <div className='card7'><div></div>Multiplayer Games</div>
        <div className='card8'><div ><GiFishing/></div>Fishing Games</div>
    </div>
  )
}

export default Promotioncards;