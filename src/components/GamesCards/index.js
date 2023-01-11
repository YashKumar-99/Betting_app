import React from 'react';
import { IoMdLeaf } from 'react-icons/io';
import './styles.css';



import { CardGameDetails } from './SingleCardData';
import SingleCard from './SingleCard';
const GameCard = () => {
    return (


        <>


            {/* {
                CardGameDetails.map((item) => {
                    return <div>
                        <div className='header'><IoMdLeaf />{item.name}</div>

                    </div>
                })
            } */}

                <SingleCard />







        </>
    )
}

export default GameCard