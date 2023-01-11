import React from 'react'

import { PopularGameData } from './SingleCardData'

const SingleCard = () => {
    return (
        <>
            {/* {
                CardGameArray.map((item) => {
                    return <div className="exchangeGames-item"><div className="exchangeGames-img-body" ><img src={item.img} /></div></div>

                })
            } */}



            {
                PopularGameData.map((item) => {

                    if (item.status === "ICG") {
                        return (

                            <>

                                <div className='Wrap-Header'><span className='ace-icon'> {item.icon}</span>{item.name}</div>
                                <div className='exchangeGames-content'>

                                    {
                                        item.data.map((item) => {
                                            return <div className="exchangeGames-item"><div className="exchangeGames-img-body" ><img src={item.img} /></div></div>

                                        })
                                    }

                                </div>
                            </>
                        )

                    } else if (item.status === "PG") {
                        return (


                            <>

                                <div className='Wrap-Header'><span className='ace-icon'> {item.icon}</span>{item.name}</div>
                                <div className='popularGames-content'>

                                    {
                                        item.data.map((singleitem) => {
                                            return (
                                                <div class="popularGames-item" id="KM-Andar_Bahar"><div class="popularGames-img-body" >


                                                    <img src={singleitem.img} /> <span class="popularGames-item-name">Andar Bahar</span>
                                                </div></div>
                                            )
                                        })
                                    }

                                </div>

                            </>
                        )
                    }


                })
            }
        </>
    )
}

export default SingleCard