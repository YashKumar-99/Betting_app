import React, { useState } from 'react'
import { GiGlassBall} from "react-icons/gi";
import { GiCombinationLock } from "react-icons/gi";
import { GiGameConsole } from "react-icons/gi";
import { GiTrophyCup } from "react-icons/gi";
import {IoTennisballOutline} from "react-icons/io5";
import {IoFootballOutline} from "react-icons/io5";
import {FaHorseHead} from "react-icons/fa";
import {FaRegEye} from "react-icons/fa";
import { GiFireAce } from "react-icons/gi";
import './styles.css'

const SideLinks = () => {

  return (

    <div className='sidebarLinks'>
      <ul>
        <li><FaRegEye/>My Market</li><hr/>
        <li><GiGlassBall/>Cricket</li><hr/>
        <li><IoFootballOutline/>Football</li><hr/>
        <li><IoTennisballOutline/>Tennis</li><hr/>
        <li><FaHorseHead/>Horse Racing</li><hr/>
        <li>Greyhound</li><hr/>
        <li><GiFireAce />Indian Card Games</li><hr/>
        <li><GiTrophyCup />Sportsbook</li><hr/>
        <li><GiGameConsole />Casino</li><hr/>
        <li><GiCombinationLock />Slots Games</li><hr/>
      </ul>

    </div>

  )
}

export default SideLinks;