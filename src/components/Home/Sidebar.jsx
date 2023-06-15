import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"
import { toggleSidebar } from "../../redux/cartReducer/action";

export default function Sidebar() {

    const dispatch = useDispatch()

    const listStyle = "hover:text-pink-500 cursor-pointer border-b-0 border-orange-400 transition-transform duration-700 transform hover:border-b-4 hover:scale-110 w-28 mb-4"

    return (
        <div className="absolute right-0 z-10 bg-gradient-to-b from-lime-500 to-teal-500 rounded-3xl w-2/3 h-screen p-4">
            <Link to='/'>
                <img 
                    src="src\assets\Header\coutureChaos_Logo-main.png" 
                    className="w-30 h-12 mr-auto ml-auto mb-12"
                    onClick={() => dispatch(toggleSidebar(false))}
                />
            </Link>
            <ul className="flex flex-col items-center text-2xl text-center leading-loose">
                <Link to='/'>
                    <li onClick={() => dispatch(toggleSidebar(false))} className={listStyle}>Home</li>
                </Link>
                <Link to='/women'>
                    <li onClick={() => dispatch(toggleSidebar(false))} className={listStyle}>Womens</li>
                </Link>
                <Link to="/men">
                    <li onClick={() => dispatch(toggleSidebar(false))} className={listStyle}>Mens</li>
                </Link>
                <li className={listStyle}>Kids</li>
                <Link to='/cart'>
                    <li onClick={() => dispatch(toggleSidebar(false))} className={listStyle}>Your Cart</li>
                </Link>
                <li className={listStyle}>Profile</li>
                <li>
                    <button className="bg-yellow-400 py-2 px-6 rounded font-semibold text-base hover:bg-pink-300">Login</button>
                </li>
            </ul>
        </div>
    )
}