import React from "react";

const data = [
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner1-09Feb2023.jpg",
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner5-09Feb2023.jpg",
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner9-09Feb2023.jpg",
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner2-16Mar2023.jpg",
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner6-16Mar2023.jpg",
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner10-14Dec2022.jpg",
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner3-17Jan2023.jpg",
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner7-22Dec2022.jpg",
]

export default function BigBrand() {
    return (
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5 p-4">
            {data.map((item, i) => {
                return (
                    <div key={i}>
                        <img src={item} 
                            className=""
                        />
                    </div>
                )
            })}
            <img 
                src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner8-16Dec2022.jpg"
                className="hidden md:block"
            />
            <img 
                src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner11-16Mar2023.jpg"
                className="hidden md:block"
            />
            <img 
                src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner12-31Jan2023.jpg"
                className="hidden lg:block"
            />
            <img 
                src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner4-16Mar2023.jpg"
                className="hidden lg:block"
            />
        </div>
    )
}