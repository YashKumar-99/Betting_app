import React, { useState } from 'react'
import { IoTennisballOutline,IoFootballOutline  } from "react-icons/io5";
import { FaHorseHead,FaRegEye ,FaInstagramSquare,FaTelegram,FaWhatsappSquare} from "react-icons/fa";
import { GiGlassBall,GiCombinationLock ,GiGameConsole,GiTrophyCup,GiFireAce, GiHound } from "react-icons/gi";
import { IoLogoWhatsapp, IoMdPower } from "react-icons/io";
import './styles.css'

const SideLinks = () => {

  return (
    <>
      <div className='sidebarLinks'>
        <ul>
          <li className='Black'><FaRegEye /><span className='text'>My Market</span></li><hr />
          <li className='red'><GiGlassBall /><span className='text'>Cricket</span></li><hr />
          <li className='Black'><IoFootballOutline /><span className='text'>Football</span></li><hr />
          <li className='lightgreen'><IoTennisballOutline /><span className='text'>Tennis</span></li><hr />
          <li className='Black'><FaHorseHead /><span className='text'>Horse Racing</span></li><hr />
          <li className='red'><GiHound /><span className='text'>Greyhound</span></li><hr />
          <li className='PlaydateTitle'><GiFireAce /><span className='text'>Indian Card Games</span></li><hr />
          <li className='yellow'><GiTrophyCup /><span className='text'>Sportsbook</span></li><hr />
          <li className='red'><GiGameConsole /><span className='text'>Casino</span></li><hr />
          <li className='red'><GiCombinationLock /><span className='text'>Slots Games</span></li><hr />
        </ul>

        <div>
          <div className='heading'>
            Get Instant ID On Whatsapp
          </div>
          <ul>
            <li className='lightgreen'><IoLogoWhatsapp /><span className='social'>Whatsapp Now</span> </li>
            <li className='Black' ><FaInstagramSquare/><span className='social'>Follow On Instagram</span></li>
            <li><FaTelegram/><span className='social'>Follow On Telegram</span></li>
            <li><FaWhatsappSquare/><span className='social'>Whatsapp Support</span></li>
          </ul>
          

        </div>
      </div>

    </>
  )
}

export default SideLinks;