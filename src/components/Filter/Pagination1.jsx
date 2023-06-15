import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

export default function Pagination1() {

    const {total} = useSelector((store) => store.MenReducer)

    const getCurrentPage = (page) => {
        page = Number(page);
    
        if (typeof page !== "number" || page <= 0 || !page) {
          return 1;
        }
        return page;
    }

    const [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = React.useState(getCurrentPage(searchParams.get('page')))

    let disablePrev = page === 1 ? true : false
    let disableNext = (page === Math.ceil(total/12)) ? true : false

    function handlePage(value) {
        setPage(prev => prev + value)
    }

    useEffect(() => {
        let params = {
            page,
        }
        setSearchParams(params)
    },[page])

    return (
        <div className="mt-16 flex justify-center font-semibold">
            <div>
                <button disabled={disablePrev} onClick={() => handlePage(-1)}
                    className={` py-2 px-3 rounded-lg ${disablePrev ? "cursor-not-allowed bg-gray-100 text-gray-400" : 'bg-blue-100'}`}
                >
                    prev
                </button>  <span />
                <button className="bg-blue-100 py-2 px-4 rounded-lg">
                    {page}
                </button> <span />
                <button disabled={disableNext} onClick={() => handlePage(+1)}
                    className={`py-2 px-3 rounded-lg ${disableNext ? "cursor-not-allowed bg-gray-100 text-gray-400" : 'bg-blue-100'}`}
                >
                    Next
                </button>
            </div>
        </div>
    )
}