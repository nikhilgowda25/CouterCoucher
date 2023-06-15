import React, { Fragment} from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

export default function Layout() {

    const [products, setProducts] = React.useState()

    fetch("https://fakestoreapiserver.reactbd.com/products")
    .then(res => res.json())
    .then(data => {
        setProducts(data)
    })

    return (
        <Fragment>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </Fragment>
    )
    
}