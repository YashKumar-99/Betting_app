import React from 'react';
import './styles.css';
import cricket from '../../assests/cricket-bg.png'
import football from '../../assests/football-bg.png';
import tennis from '../../assests/tennis-bg.png'
import horserace from '../../assests/horse-bg.png'
import greyhound from '../../assests/greyhound-bg.png'
import {IoTennisballOutline} from "react-icons/io5";
import {IoFootballOutline} from "react-icons/io5";
import {GiGlassBall} from "react-icons/gi";
import {FaHorseHead} from "react-icons/fa"

function Playingcard() {
  return (
    <>
    <div className="box">
      <div className='sport-button'>
        <img className='sport-bg-img' src={cricket} />
        <div className='box1' ><GiGlassBall/><span>Cricket</span></div>
      </div>
      <div className='sport-button'>
        <img className='sport-bg-img' src={football} />
        <div className="box1"><IoFootballOutline/><span>Football</span></div>
      </div>
      <div className='sport-button'>
        <img className='sport-bg-img' src={tennis} />
        <div className="box1"><IoTennisballOutline/>Tennis</div>
      </div>
      <div className='sport-button'>
        <img className='sport-bg-img' src={horserace} />
        <div className="box1"><FaHorseHead/><span> Horse Racing </span></div>
      </div>
      <div className='sport-button'>
        <img className='sport-bg-img' src={greyhound} />
        <div className='box1'>greyhound Racing</div>
      </div>
    </div>
    </>
  )
}

export default Playingcard;