import React from "react";
import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useLocation } from "react-router-dom";
import { getMens } from "../redux/MenReducer/action";
import Card from "../components/Card";
import MenFilter from "../components/Filter/MenFilter";
import Pagination1 from "../components/Filter/Pagination1";


export function Men() {
    const [searchParams] = useSearchParams()
    const location = useLocation()
    const dispatch = useDispatch()

    const {men, isLoading, isError, total} = useSelector((store) => store.MenReducer)
    
    console.log(men)

    let obj = {
        params: {
            category: searchParams.getAll('category'),
            _page: searchParams.get('page'),
            _sort: searchParams.get('order') && 'price',
            _order: searchParams.get('order'),
        },
    }

    useEffect(() => {
        dispatch(getMens(obj))
        console.log(total)
    },[location.search])

    const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

    return (
        <div className="">
            <MenFilter type={'men'} />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-8 md:px-16 lg:px-32 pb-8 -mt-24">
                {men.length > 0 && 
                    men.map((element) => {
                        return (
                            <div className="pt-32 ">
                                <Card key={element.id} {...element} id={element.id} type={'men'} />
                            </div>
                        )
                    })
                }
            </div>
            <Pagination1 />
        </div>
    )
}