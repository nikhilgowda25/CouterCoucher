import React from "react"

const ProductsContext = React.createContext()

function ProductsContextProvider(props) {

    const [products, setProducts] = React.useState()

    React.useEffect(() => {
        fetch("https://fakestoreapiserver.reactbd.com/products")
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    },[])

    return (
        <ProductsContext.Provider value={{products: products}}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export { ProductsContextProvider, ProductsContext}