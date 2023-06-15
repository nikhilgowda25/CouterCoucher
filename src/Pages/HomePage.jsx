import React from "react"
import HomeSlider from "../components/Home/HomeSlider"
import KidSlider from "../components/Home/KidSlider"
import MenSlider from "../components/Home/MenSlider"
import TrendSlider from "../components/Home/TrendSlider"
import UnMissSlider from "../components/Home/UnMissSlider"
import WomenSlider from "../components/Home/WomenSlider"
import HotDeal from "../components/Home/HotDeal"
import BigBrand from "../components/Home/BigBrand"
import Welcome from "../components/Home/Welcome"
import BigDiscount from "../components/Home/BigDiscount"

export default function HomePage() {

    return (
        <div className="p-2">
            
            <HomeSlider />

            <div className="my-2 px-2">
                <img 
                    src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Uber-HP-Desktop-PromoStrip2-14Mar23.jpg" 
                    className="rounded-3xl"
                />
            </div>

            <div className="p-2">
                <h1 className="font-semibold text-2xl border-b-4 w-36 border-orange-400 pb-1">Our Benefits</h1>
            </div>

            <div className="py-2 px-4 flex justify-around">
                <div className="flex items-center">
                    <div className="bg-gray-200 w-54 py-3 px-6 rounded-xl relative ">
                        <div className="bg-gray-200 absolute left-0 top-1/3 w-6 h-6 rounded-full flex justify-center items-center -ml-3">
                            <svg className="w-4 h-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                        </div>
                        <p className="text-xs font-bold">Free Shipping</p>
                        <p className="text-xs">On all orders aboves ₹499</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="bg-gray-200 w-54 py-3 px-6 rounded-xl relative ">
                    <div className="bg-gray-200 absolute left-0 top-1/3 w-6 h-6 rounded-full flex justify-center items-center -ml-3">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0H109.6C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9l-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3V384H128V250.6c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3V384v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V384 252.6c-4 1-8 1.8-12.3 2.3z"/></svg>
                    </div>
                        <p className="text-xs font-bold">Click & collect</p>
                        <p className="text-xs">Order online & collect in store</p>
                    </div>
                </div>
                <div className="flex items-center hidden md:block">
                    <div className="bg-gray-200 w-54 py-3 px-6 rounded-xl relative ">
                    <div className="bg-gray-200 absolute left-0 top-1/3 w-6 h-6 rounded-full flex justify-center items-center -ml-3">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"/></svg>
                    </div>
                        <p className="text-xs font-bold">Return to store</p>
                        <p className="text-xs">Return to your nearest store</p>
                    </div>
                </div>
            </div>

            <div className="my-4 px-2">
                <img 
                    src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Uber-HP-Desktop-PromoStrip3-25Mar2023.jpg" 
                    className="rounded-3xl"
                    />
            </div>

            <div className="p-2">
                <h1 className="font-semibold text-2xl border-b-4 w-52 border-orange-400 pb-1">Unmissable Offers</h1>
            </div>

            <UnMissSlider />

            <div className="p-2 mb-1 mt-4">
                <h1 className="font-semibold text-2xl border-b-4 w-44 border-orange-400 pb-1">Women's store</h1>
            </div>

            <div className="my-4 px-2">
                <img 
                    src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-PromoWidget24-Desk-Banner1-07Mar23.jpg" 
                    className="rounded-3xl"
                />
            </div>

            <WomenSlider />

            <div className="p-2 mb-1 mt-4">
                <h1 className="font-semibold text-2xl border-b-4 w-36 border-orange-400 pb-1" >Men's Store</h1>
            </div>

            <div className="my-4 px-2">
                <img 
                    src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-UBERHP-GiftCard-13modblock-oneBythree-A-07Mar2023.jpg"
                    className="rounded-3xl"
                />
            </div>

            <MenSlider />

            <div className="p-2 mb-1 mt-4">
                <h1 className="font-semibold text-2xl border-b-4 w-28 border-orange-400 pb-1" >Kids Store</h1>
            </div>

            <div className="my-4 px-2">
                <img 
                    src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget26-Desk-Banner1-08Mar23.jpg"
                    className="rounded-3xl"
                />
            </div>

            <KidSlider />

            <div className="p-2 mb-1 mt-4">
                <h1 className="font-semibold text-2xl border-b-4 w-52 border-orange-400 pb-1" >Trending Add-Ons</h1>
            </div>

            <div className="my-4 px-2">
                <img 
                    src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget23-Desk-Banner1-14Mar23.gif"
                    className="rounded-3xl"
                />
            </div>
            
            <TrendSlider />

            <div className="p-2 mb-1 mt-4">
                <h1 className="font-semibold text-2xl border-b-4 w-64 border-orange-400 pb-1" >Season's Hottest Deals</h1>
            </div>

            <HotDeal />

            <div className="p-2 mb-1 mt-4">
                <h1 className="font-semibold text-2xl border-b-4 w-72 border-orange-400 pb-1" >Big Brands Big Discounts</h1>
            </div>

            <BigBrand />

            <div className="p-2 mb-1 mt-4">
                <h1 className="font-semibold text-2xl border-b-4 w-52 border-orange-400 pb-1" >Welcome Summer</h1>
            </div>

            <Welcome />

            <div className="p-2 mb-1 mt-4">
                <h1 className="font-semibold text-2xl border-b-4 w-72 border-orange-400 pb-1" >Big Brands Big Discounts</h1>
            </div>

            <BigDiscount />
        </div>
    )
}