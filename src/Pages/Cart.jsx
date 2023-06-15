import React, {useEffect} from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, incrementQuantity, decrementQuantity } from "../redux/cartReducer/action";
import axios from "axios";
import { useToast } from "@chakra-ui/react";


export default function Cart() {

    const navigate = useNavigate()
    const toast = useToast()
    const dispatch = useDispatch()
    const { cartItems } = useSelector((store) => store.CartReducer)

    let saved = 0

    function getData() {
        axios.get('https://lifestyle-mock-server-api.onrender.com/cart')
        .then((res) => {
            dispatch(addToCart(res.data))
        })
        .catch((err) => {
            console.log(err)
        })
    }

    function handleDelete(e) {
        let { id, title } = e
        axios.delete(`https://lifestyle-mock-server-api.onrender.com/cart/${id}`)
        .then((res) => {
            dispatch(removeFromCart(id))
            toast({
                title: `${title}`,
                description: "Deleted from Cart",
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

    function handleInc(id, value) {
        axios.patch(`https://lifestyle-mock-server-api.onrender.com/cart/${id}`, {
            quantity: value
        })
        .then((res) => {
            dispatch(incrementQuantity(id))
            getData()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    function handleDec(id, value) {
        axios.patch(`https://lifestyle-mock-server-api.onrender.com/cart/${id}`, {
            quantity: value
        })
        .then((res) => {
            dispatch(decrementQuantity(id))
            getData()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    function getTotalPrice() {
        return cartItems.reduce((total, e) => total + e.price * e.quantity, 0)
    }

    useEffect(() => {
        getData()
    }, [])

    console.log(cartItems)

    return (
        <div className="pt-20">
            <p className="text-2xl font-light mb-2 p-2">YOUR BASKET</p>
            <div className="flex overflow-auto">
                <table className="table-auto border border-gray-300 min-w-full text-center shrink-0">
                    <thead className="bg-gray-600 text-gray-100 text-sm ">
                        <tr>
                            <th className="p-4 text-start">ITEM DESCRIPTION</th>
                            <th>UNIT PRICE</th>
                            <th>QUANTITY</th>
                            <th>SUBTOTAL</th>
                            <th>REMOVE</th>
                            <th className="bg-teal-500">SAVINGS</th>
                        </tr>
                    </thead>

                    {cartItems.length === 0 ? (
                        <p>YOUR BASKET IS EMPTY</p>
                    ) : (
                        <tbody>
                            {cartItems.map((element) => {
                                {
                                    saved = saved + ((Math.floor(element.actualPrice - element.price)) * element.quantity)
                                }
                                return (
                                    <tr key={element.id}>
                                        <td className="text-start p-4">
                                            <Link to={``}>
                                                <img className="w-24 h-24" src={element.image} alt="Dan Abramov" />
                                            </Link>
                                            <p className="text-xs mt-4">{element.title}</p>
                                        </td>
                                        <td className="text-xs">
                                            <p>Original Price</p>
                                            <p>₹ {Math.floor(element.actualPrice)}</p>
                                            <p>Discounted Price</p>
                                            <p>₹ {Math.floor(element.price)}</p>
                                        </td>
                                        <td>
                                            <button disabled={element.quantity === 1} onClick={() => handleDec(element.id, element.quantity-1)}
                                                className={`border px-3 py-1 rounded-lg ${element.quantity === 1 ? 'border-gray-200 cursor-not-allowed' : 'border-gray-400'}`}
                                            >
                                                -
                                            </button>
                                            <button className="border border-gray-400 px-3 py-1 rounded-lg mx-1">{element.quantity}</button>
                                            <button onClick={() => handleInc(element.id, element.quantity+1)}
                                                className="border border-gray-400 px-3 py-1 rounded-lg "
                                            >
                                                +
                                            </button>
                                        </td>
                                        <td className="text-sm">
                                            <p>₹ {Math.floor(element.price) * element.quantity}</p>
                                        </td>
                                        <td>
                                            <CloseIcon className="cursor-pointer" onClick={() => handleDelete(element)} />
                                        </td>
                                        <td className="text-sm">
                                            <p>₹ {Math.floor(element.actualPrice - element.price) * element.quantity}</p>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    )}
                </table>
            </div>
            <div className="w-full md:w-3/4 lg:w-1/2 border border-gray-300 mt-8">
                <div className="flex justify-between items-center border border-gray-300 p-4">
                    <div>
                        <p>SubTotal</p>
                        <p>Delivery Charges</p>
                    </div>
                    <div>
                        <p>₹ {getTotalPrice()}</p>
                        <p>***</p>
                    </div>
                    <div className="border-l border-gray-300 p-2 text-red-500 text-center">
                        <p>You saved!</p>
                        <p>₹ {Math.floor(saved)}</p>
                    </div>
                </div>
                <div className="flex justify-around align-left border border-gray-300 p-8 text-3xl text-gray-700 font-light">
                    <h1 >TOTAL{" "}</h1>
                    <h1>
                        {" "}
                        ₹ {getTotalPrice()}
                    </h1>
                </div>
                <div className="border border-gray-300 justify-end flex">
                    <button onClick={() => {
                        if(cartItems.length !==0) {
                            navigate('/checkout')
                        } else {
                            toast({
                                title: "Cart is Empty.",
                                description: "Please add some products.",
                                status: "error",
                                duration: 2000,
                                isClosable: true,
                                position: "top",
                            })
                            navigate('/')
                        }
                    }} className="border-l border-gray-300 p-2 font-semibold rounded-lg hover:bg-teal-200">
                        {" "}Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}