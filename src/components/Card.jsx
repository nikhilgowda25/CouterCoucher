import { useToast } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Card({actualPrice, type, id, image, price, title, discount }) {

    const toast = useToast()
    let element = {
        actualPrice,
        type,
        image,
        price,
        title,
        discount,
        quantity: 1,
    }

    const [showModal, setShowModal] = React.useState(false)

    function handleClick() {
        axios
            .post('https://lifestyle-mock-server-api.onrender.com/cart', element)
            .then((res) => {
                toast({
                    title: "Added to cart",
                    description: "You can checkout from Cart",
                    status: "success",
                    position: 'top',
                    duration: 1000,
                    isClosable: true,
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function showbutton() {
        setShowModal(true)
    }

    function hideButton() {
        setShowModal(false)
    }

    return (
            <div className="relative" onMouseOver={showbutton} onMouseOut={hideButton} >
                <Link to={`/${type}/${id}`}>
                    <img src={image} 
                        className="w-48 h-64 rounded-3xl xl:w-full xl:h-full"
                    />
                </Link>
                <div className="flex items-center">
                    <p className="text-xl font-bold">{`₹${price}`}</p>
                    <p className="text-sm ml-2 line-through">{`₹${actualPrice}`}</p>
                </div>
                <p className="w-48">{title}</p>
                <button 
                    className={`bg-orange-500 text-gray-100 py-3 px-12 w-48 mt-8 absolute ${showModal ? 'block' : 'hidden'} `}
                    onClick={handleClick}
                    >
                Add To Cart</button>
                <hr className="border-b border-orange-200 w-48 absolute -bottom-20"/>
            </div>
    )
}