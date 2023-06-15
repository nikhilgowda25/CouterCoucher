import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {IoIosArrowForward} from "react-icons/io"
import {IoIosArrowBack} from "react-icons/io"


const data = [
    "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner1-24March23.jpg",
    "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner2-24March23.jpg",
    "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner3-01March23.jpg",
    "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner4-24March23.jpg",
    "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner5-01March23.jpg",
    "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner6-01March23.jpg",
    "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner7-01March23.jpg",
  ];

  function SampleNextArrow({onClick}) {
    return (
        <div onClick={onClick} className='flex justify-center items-center border-2 p-2 rounded-full w-8 h-8 lg:w-10 lg:h-10 cursor-pointer 
        shadow-md absolute top-40 md:top-44 lg:top-52 -right-3 z-10 bg-gray-100'>
            <IoIosArrowForward />
        </div>
    )
  }
  
  function SamplePrevArrow({onClick}) {
    return (
        <div onClick={onClick} className='flex justify-center items-center border-2 p-2 rounded-full w-8 h-8 lg:w-10 lg:h-10 cursor-pointer
         shadow-md absolute top-40 md:top-44 lg:top-52 -left-2 z-10 bg-gray-100'>
            <IoIosArrowBack />
        </div>
    )
  }

  export default function UnMissSlider() {

    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
        ]
      };
      return (
        <div className='p-2 relative'>
          <Slider {...settings} className='flex justify-center items-center'>
            {
                data.map((item, i) => {
                    return (
                        <div key={i} className='p-2 '>
                            <img src={item} className='rounded-3xl cursor-pointer'/>
                        </div>
                    )
                })
            }
          </Slider>
        </div>
      );
  }