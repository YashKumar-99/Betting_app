import React from 'react'
import { PlayDetails } from './PlayData';

const PlayTableDetails = () => {
    return (

        <>

            {
                PlayDetails.map((item) => {
                    return (<>


                        <div className='PlayContainer'>

                            <div className='PlaingLeftSection'>
                                <div className='Palyingdate'>
                                    <div>{item.date} </div>
                                    <div>{item.time}</div>
                                </div>
                                <div className='Palying Title'>
                                    <div>{item.Team1} </div>
                                    <div>{item.Team2}</div>
                                </div>

                            </div>

                            <div className='PlayingRightSection'>
                            <div className='livelogo'>  {item?.live}</div>

                                <div>{item.index1}</div>
                                <div>{item.index2}</div>
                                <div>{item.index3}</div>

                            </div>

                        </div>

                    </>)
                })
            }


            {/* <div className='PlayContainer'>

                <div className='PlaingLeftSection'>
                    <div className='Palyingdate'>
                        <div>01/01/1001 </div>
                        <div>13:00 </div>
                    </div>
                    <div className='Palying Title'>
                        <div>West Indies Sri </div>
                        <div>Sri Lanka Sri</div>
                    </div>
                </div>
                <div className='PlayingRightSection'>
                    <div>1.73</div>
                    <div>2.73</div>
                    <div>1.43</div>

                </div>

            </div> */}

        </>
    )
}

export default PlayTableDetails;