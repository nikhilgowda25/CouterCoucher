import React, {useContext} from "react"
import { ProductsContext } from "../productsContext"


export default function Footer() {

    return(
        <footer className="p-4">
            <hr/>
            <div className="text-center mt-4 md:flex md:justify-around md:items-center">
                <div>
                    <h1 className="text-xl font-bold">Subscribe to our awesome emails.</h1>
                    <h2 className="text-gray-700 mb-8">Get our latest offers and news straight in your inbox.</h2>
                    <input type="text" className="border p-2 w-64 rounded mr-4"/>
                    <button className="bg-black text-white px-1 py-2 font-bold rounded">Subscribe</button>
                </div>
                <div className="">
                    <h1 className="text-xl font-bold mt-8">Download our apps</h1>
                    <h3 className="text-gray-700">Shop our products and offers on-the-go</h3>
                    <div className="flex justify-center my-8 ">
                        <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" 
                            className="h-8 w-24 mr-6"
                        />
                        <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" 
                            className="h-8 w-24"
                        />
                    </div>
                </div>
                
            </div>

            <hr/>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 p-8">
                <div>
                    <h1 className="font-bold">Women</h1>
                    <ul className="text-sm text-gray-600 leading-6">
                        <li>Tops</li>
                        <li>Ethnicwear</li>
                        <li>Bottoms</li>
                        <li>Dresses</li>
                        <li>Jumpsuits</li>
                        <li>Winterwear</li>
                        <li>Lingerie</li>
                        <li>Sportswear</li>
                        <li>Beauty</li>
                        <li>Watches</li>
                        <li>Sunglasses</li>
                    </ul>
                </div>

                <div>
                    <h1 className="font-bold">Men</h1>
                    <ul className="text-sm text-gray-600 leading-6">
                        <li>Tops</li>
                        <li>Bottoms</li>
                        <li>EthnicWear</li>
                        <li>Winterwear</li>
                        <li>Sportswear</li>
                        <li>Innerwear</li>
                        <li>Grooming</li>
                        <li>Watches</li>
                        <li>Sunglasses</li>
                    </ul>
                </div>
                
                <div>
                    <h1 className="font-bold">Kids</h1>
                    <ul className="text-sm text-gray-600 leading-6">
                        <li>Girls Clothing</li>
                        <li>Boys Clothing</li>
                        <li>Infants Girls</li>
                        <li>Infants Boys</li>
                        <li>Winterwear</li>
                        <li>Add ons</li>
                        <li>The Teen</li>
                        <li>Shop</li>
                    </ul>
                </div>

                <div>
                    <h1 className="font-bold">Shoes & Bags</h1>
                    <ul className="text-sm text-gray-600 leading-6">
                        <li>Women</li>
                        <li>Men</li>
                        <li>Boys</li>
                        <li>Girls</li>
                        <li>Accessories</li>
                        <li>Essentials</li>
                    </ul>
                </div>

                <div>
                    <h1 className="font-bold">Beauty</h1>
                    <ul className="text-sm text-gray-600 leading-6">
                        <li>Makeup Eyes</li>
                        <li>Makeup Face</li>
                        <li>Makeup Lips</li>
                        <li>Makeup Nails</li>
                        <li>Perfumes</li>
                    </ul>
                </div>

                <div>
                    <h1 className="font-bold">Explore</h1>
                    <ul className="text-sm text-gray-600 leading-6">
                        <li>Online Offers</li>
                        <li>Store Offers</li>
                        <li>Online Gift</li>
                        <li>Card</li>
                        <li>Store Gift</li>
                        <li>Card</li>
                        <li>Stores Nearby</li>
                        <li>EDGE</li>
                        <li>Memebership</li>
                    </ul>
                </div>

                <div>
                    <h1 className="font-bold">About</h1>
                    <ul className="text-sm text-gray-600 leading-6">
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Take a Tour</li>
                        <li>Blog</li>
                        <li>Store Locator</li>
                        <li>Landmark</li>
                    </ul>
                </div>

                <div>
                    <h1 className="font-bold">Help</h1>
                    <ul className="text-sm text-gray-600 leading-6">
                        <li>Contact us</li>
                        <li>Shipping</li>
                        <li>Returns</li>
                        <li>Process</li>
                        <li>Policy</li>
                        <li>Help Center</li>
                    </ul>
                </div>
            </div>

            <hr />

            <div className="my-4 p-4 md:flex md:justify-around ">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex items-center">
                        <div className="border border-gray-600 w-12 h-12 rounded-full flex justify-center items-center">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-gray-600 text-sm">Talk to us</p>
                            <p className="font-semi-bold">1800-123-1555</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="border border-gray-600 w-12 h-12 rounded-full flex justify-center items-center">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-gray-600 text-sm">Helpcentre</p>
                            <p className="font-semi-bold">help@outfitstore.com</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="border border-gray-600 w-12 h-12 rounded-full flex justify-center items-center">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-gray-600 text-sm">Write to us</p>
                            <p className="font-semi-bold">help@outfitstore.com</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex justify-center items-center">
                    <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>
                    <svg className="h-7 w-7 ml-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                    <svg className="h-7 w-7 ml-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    <svg className="h-7 w-7 ml-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                </div>
            </div>

            <hr/>
            
            <div className="py-4 px-8 flex items-center gap-8 text-center justify-center">
                <div>
                    <img src="\assets\Header\coutureChaos_Logo-main.png" className="w-30 h-12"/>
                </div>
                <div className="text-sm text-gray-600">
                    <p>&#169; 2023 VM Intellectual Property Limited.</p>
                    <p>Terms & Conditions - Privacy Policy</p>
                </div>
            </div>
            
        </footer>
    )
}