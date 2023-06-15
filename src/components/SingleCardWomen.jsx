import React, {useEffect, useLayoutEffect} from "react";
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

export default function SingleCardWomen() {

    const { id } = useParams()

    const toast = useToast()

    const { women } = useSelector((store) => store.MenReducer)

    const [element] = women.filter((element) => element.id === id)

    if(!element) {
        return <div>Loading..</div>
    }

    let {actualPrice, type, image, price, title} = element

    const discount = 100 - Math.ceil((price * 100) / actualPrice)

    const diffAmount = actualPrice - price

    const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


    let obj = {
        actualPrice,
        type,
        image,
        price,
        title,
        discount,
        quantity: 1,
    }

    function handleAdd() {
        axios
            .post('https://lifestyle-mock-server-api.onrender.com/cart', obj)
            .then((res) => {
                toast({
                    title: "Added to cart",
                    description: "You can checkout from cart",
                    status: "success",
                    duration: 2000,
                    position: "top",
                    isClosable: true,
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="pt-36 lg:pt-12 px-8 l lg:flex items-center lg:gap-8">
            <div className="grid grid-cols-2 gap-x-4 gap-y-16 lg:basis-1/2">
                <div className="overflow-hidden">
                    <img 
                        src={element.img1} 
                        className="rounded-xl transition-transform duration-700 transform hover:scale-125 "    
                    />
                </div>
                <div className="overflow-hidden">
                    <img 
                        src={element.img2} 
                        className="rounded-xl transition-transform duration-700 transform hover:scale-125"
                    />
                </div>
                <div className="overflow-hidden">
                    <img 
                        src={element.img3} 
                        className="rounded-xl transition-transform duration-700 transform hover:scale-125"
                    />
                </div>
                <div className="overflow-hidden">
                    <img 
                        src={element.img4} 
                        className="rounded-xl transition-transform duration-700 transform hover:scale-125"
                    />
                </div>
            </div>
            <div className="mt-16 lg:basis-1/2">
                <p className="text-3xl font-semibold">{title}</p>
                <p className="text-2xl font-light">
                    {`₹${price} Inclusive of all taxes`}
                </p>
                <div className="flex gap-2 items-center">
                    <p className="text-xl font-light line-through">
                        {`₹${actualPrice}`}
                    </p>
                    <p className="text-sm">
                        {`Save ₹${diffAmount}`}
                    </p>
                    <p className="text-sm">
                        {`(${discount}% Off)`}
                    </p>
                </div>
                <p className="text-orange-500">★★★★☆</p>
                <p className="mt-8 text-2xl font-light text-gray-600">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                </p>
                <p className="my-6 text-lg">
                    Keep your look simple yet stylish by wearing this graceful perky A-line piece designed with embroidery on the surface.
                    The outfit boasts a round neck, three-quarter sleeves, and a curved hemline. Style with a pair of jhumkas and bangles and you are good to go.
                </p>
                <hr/>
                <p className="font-semibold text-yellow-500 my-4">FEATURES</p>
                <div className="md:flex items-center gap-48">
                    <ul className="leading-loose">
                        <li>Embroidered</li>
                        <li>Hand was only</li>
                        <li>Pure Cotton</li>
                    </ul>
                    <ul className="my-4 leading-loose">
                        <li>Kurta</li>
                        <li>Round Neck</li>
                        <li>Casual</li>
                    </ul>
                </div>
                <hr/>
                <p className="font-semibold text-yellow-500 my-6">PRODUCT DETAILS</p>
                <ul className="leading-loose tracking-wide">
                    <li><span className="font-bold">Net Quantity: </span>1</li>
                    <li><span className="font-bold">Occasion: </span>Casual</li>
                    <li><span className="font-bold">Product: </span>Kurta</li>
                    <li><span className="font-bold">Design: </span>Embroidered</li>
                    <li><span className="font-bold">Fabric: </span>Cotton</li>
                    <li><span className="font-bold">Model Wears: </span>Size S, has Height 5'7",Chest 33",and Waist 28"</li>
                    <li><span className="font-bold">Country of Origin: </span>India</li>
                </ul>
                <button onClick={handleAdd}
                    className="ml-auto mr-auto bg-gradient-to-r from-orange-500 to-orange-400 text-white py-4 font-semibold mt-4 w-full">
                    ADD TO CART
                </button>
                <div className="flex items-center justify-center mt-6">
                    <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                    <p>2-3 business days delivery</p>
                </div>
            </div>
        </div>
    )
}