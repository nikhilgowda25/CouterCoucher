import React from "react"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function HomeSlider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }

    return (
        <Slider {...settings} className=" mb-8 p-2 mt-28 lg:mt-16">
            <div>
                <img className="w-screen" src="\assets\HomeSlider\SliderImage1.jpg" />
            </div>
            <div>
                <img className="w-screen" src="\assets\HomeSlider\SliderImage2.gif" />
            </div>
            <div>
                <img className="w-screen" src="\assets\HomeSlider\SliderImage3.jpg" />
            </div>
            <div>
                <img className="w-screen" src="\assets\HomeSlider\SliderImage4.gif" />
            </div>
            <div>
                <img className="w-screen" src="\assets\HomeSlider\SliderImage5.jpg" />
            </div>
            <div>
                <img className="w-screen" src="\assets\HomeSlider\SliderImage6.jpg" />
            </div>
        </Slider>
    )
}