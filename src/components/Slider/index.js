import React from 'react'

import Slider from "react-slick";
import './styles.css'


const HeaderSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        // slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        arrows:false

    };


    const SliderImage = [
        {
            id: 1,
            src: 'https://lotusbookgaming.com/gstatic/gemexchimages/promobanner.png'
        },
        {
            id: 2,
            src: 'https://lotusbookgaming.com/gstatic/gemexchimages/threestarbanner3.png'
        },
        {
            id: 3,
            src: 'https://lotusbookgaming.com/gstatic/gemexchimages/BBLlotus.png'
        },
        {
            id: 4,
            src: 'https://lotusbookgaming.com/gstatic/gemexchimages/3jan1.png'
        },
    ]





    return (
        <div className='SliderContainer'>
            <Slider {...settings}>

                {
                    SliderImage.map((item) => {
                        return (<>
                            <div className='singleSlideimg'>

                                <img src={item.src} />
                            </div>

                        </>)
                    })
                }

            </Slider>
        </div>
    )
}

export default HeaderSlider