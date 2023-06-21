import React, {useState, useRef} from "react"
import Sidebar from "./Home/Sidebar"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { toggleSidebar } from "../redux/cartReducer/action"


export default function Header() {

    // const [isSidebarOpen, setSidebarOpen] = useState(false)
    const sidebarRef = useRef(null)

    const {cartItems} = useSelector((store) => store.CartReducer)

    const {isSidebarOpen} = useSelector((store) => store.CartReducer)

    const dispatch = useDispatch()
    
    const [numOfItems, setNumOfItems] = React.useState(cartItems.length)

    React.useEffect(() => {
        function handleClickOutside(event) {
            if(sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                dispatch(toggleSidebar(false))
            }
        }

        document.body.addEventListener('click', handleClickOutside)

        return () => {
            document.body.removeEventListener('click', handleClickOutside)
        }
    }, [])

    function handleSidebarClick(event) {
        event.stopPropogation()
    }
    
    function toggleBar() {
        return isSidebarOpen ? dispatch(toggleSidebar(false)) : dispatch(toggleSidebar(true))
    }
    
    // fixed inset-0 bg-gray-800 bg-opacity-75 z-50 backdrop-blur

    React.useEffect(() => {
        setNumOfItems(cartItems.length)
    },[cartItems])

    console.log(numOfItems)

    return (
        <header className="p-2 bg-gray-100 fixed w-full z-50 ">
            <div className="flex justify-center lg:justify-around items-center" ref={sidebarRef}>
                <button onClick={toggleBar}
                    className="bg-yellow-400 w-12 h-10 rounded-lg flex justify-center items-center 
                    hover:bg-pink-300 mr-auto ml-4 lg:hidden">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                </button>
                {isSidebarOpen && (
                    <div onClick={handleSidebarClick} className="-mt-16 z-50">
                        <Sidebar />
                    </div>
                )}
                <Link to="/">
                    <img src="\assets\Header\coutureChaos_Logo-main.png" className="w-30 h-12"/>
                </Link>

                <Link to='/women'>
                    <p className="font-bold hidden lg:block">Women</p>
                </Link>

                <Link to='/men'>
                    <p className="font-bold hidden lg:block">Men</p>
                </Link>

                <Link>
                    <p className="font-bold hidden lg:block">Kids</p>
                </Link>

                <Link>
                    <p className="font-bold hidden lg:block">Shoes</p>
                </Link>

                <Link>
                    <p className="font-bold hidden lg:block">Beauty</p>
                </Link>

                <div className="flex flex-col items-center mt-4 hidden lg:block -mb-4 w-96 text-gray-500">
                    <input type="text" placeholder="What are you looking for?" className="p-2 pl-12 w-11/12 rounded placeholder-gray-500 " />
                    <svg className="h-4 w-4 -translate-y-7 ml-3 lg:block " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path className="fill-current" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                </div>

                <div className="text-red-700 flex gap-2 lg:gap-4 mr-4 ml-auto lg:ml-0">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path className="fill-current" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path className="fill-current" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                    <Link to='/cart'>
                        <div className="relative flex">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path className="fill-current" d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
                            <p className="z-10 bg-yellow-300 text-xs flex justify-center items-center rounded-full w-4 h-4 absolute -right-2">{numOfItems}</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-center mt-4 text-gray-500  lg:hidden">
                <input type="text" placeholder="What are you looking for?" className="p-2 pl-12 w-11/12 rounded placeholder-gray-500 " />
            </div>
        </header>
    )
}