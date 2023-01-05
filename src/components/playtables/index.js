import React from 'react'
import { AiOutlinePlayCircle } from "react-icons/ai";
import { CiBasketball } from "react-icons/ci";
import PlayTableDetails from './PlaySubTable';

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
                            <CiBasketball /> Cricket
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
                            <CiBasketball /> Football
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
                            <CiBasketball /> 
                            
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