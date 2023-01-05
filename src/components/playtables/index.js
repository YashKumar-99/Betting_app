import React from 'react'
import { AiOutlinePlayCircle } from "react-icons/ai";
import './styles.css'
const PlayTable = () => {
    return (
        <>
            <div className='PlayHeaderSection'>
                <div className='playicon'><AiOutlinePlayCircle />In Play</div>
                <div className='cartSection'> Open Bets <span>0</span></div>
            </div>


            <div className='PlayContainer'>

                <div>
                    <div className='date'>
                        <div>01/01/1001 </div>
                        <div>13:00 </div>
                    </div>
                    <div className='palying Title'>
                        <div>West Indies Sri </div>
                        <div>Sri Lanka Sri</div>
                    </div>
                </div>
                <div>
                    <div>1.73</div>
                    <div>2.73</div>
                    <div>1.43</div>

                </div>

            </div>

        </>
    )
}

export default PlayTable