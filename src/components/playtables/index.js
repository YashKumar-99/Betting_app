import React from 'react'
import { AiOutlinePlayCircle } from "react-icons/ai";
import { GiGlassBall} from "react-icons/gi";
import {IoFootballOutline} from "react-icons/io5";
import PlayTableDetails from './PlaySubTable';
import {IoTennisballOutline} from "react-icons/io5";

import './styles.css'
const PlayTable = () => {
    return (
        <>
            <div className='PlayHeaderSection'>
                <div className='playicon'><AiOutlinePlayCircle />In Play</div>
                <div className='cartSection'> Open Bets <span>0</span></div>
            </div>
            <div className='SectionFirst'>


                <div className='PlayHeadingContainer'>

                    <div className='PlaingHeadingLeftSection'>
                        <div className='TeamTitle'>
                        <GiGlassBall/>Cricket
                        </div>

                    </div>
                    <div className='TeamDisplayBox'>
                        <div>1</div>
                        <div>x</div>
                        <div>2</div>

                    </div>

                </div>
                <PlayTableDetails />
                    
            </div>

            <div className='SectionSecond'>


                <div className='PlayHeadingContainer'>

                    <div className='PlaingHeadingLeftSection'>
                        <div className='TeamTitle'>
                        <IoFootballOutline/> Football
                        </div>
                          
                    </div>
                    <div className='TeamDisplayBox'>
                        <div>1</div>
                        <div>x</div>
                        <div>2</div>

                    </div>

                </div>
                <PlayTableDetails />
            </div>




            <div className='SectionSecond'>


                <div className='PlayHeadingContainer'>

                    <div className='PlaingHeadingLeftSection'>
                        <div className='TeamTitle'>
                        <IoTennisballOutline/>
                            
                        </div>Tennis

                    </div>
                    <div className='TeamDisplayBox'>
                        <div>1</div>
                        <div>x</div>
                        <div>2</div>

                    </div>

                </div>
                <PlayTableDetails />
            </div>

        </>
    )
}

export default PlayTable