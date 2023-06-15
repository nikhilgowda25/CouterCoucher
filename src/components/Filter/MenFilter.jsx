import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    Portal,
  } from '@chakra-ui/react'

export default function MenFilter({type}) {

    function getCurrentpage(page) {

        page = Number(page)

        if (typeof page !== "number" || page <= 0 || !page) {
            return 1
        }
        return page
    }

    const initRef = React.useRef()
    const [searchParams, setSearchParams] = useSearchParams()
    const initialcategory = searchParams.getAll('category')
    const [category, setCategory] = useState(initialcategory || [])
    const [page, setPage] = useState(getCurrentpage(searchParams.get('page')))
    const initialOrder = searchParams.get('order')
    const [order, setorder] = useState(initialOrder || "")

    function handleSort(e) {
        setorder(e.target.value)
    }

    console.log(category)

    function handleChange(e) {
        let newCategory = [...category]
        const value = e.target.value
        if (newCategory.includes(value)) {
            newCategory = newCategory.filter((element) => {
                return element !== value
            })
        } else {
            newCategory.push(value)
        }
        setCategory(newCategory)
    }

    useEffect(() => {
        let params = {
            page,
            category
        }
        order && (params.order = order)
        setSearchParams(params)
    },[category, page, order])

    return (
        <div className="pt-36 lg:pt-24 px-8">
            <div onChange={handleSort} className="bg-yellow-400 w-32 p-2 rounded-lg my-4">
                <Popover
                    trigger={"hover"}
                    closeOnBlur={"false"}
                    placement="bottom-start"
                    initialFocusRef={initRef}
                >
                    {({isOpen, onClose}) => (
                        <div>
                            <PopoverTrigger>
                                <button>
                                    Filter By Price
                                    <span>
                                        {isOpen ? <ChevronUpIcon fontSize={"xl"} /> : <ChevronDownIcon fontSize={"xl"}/>}
                                    </span>
                                </button>
                            </PopoverTrigger>
                            <Portal>
                                <PopoverContent>
                                    <PopoverBody className="bg-red-200 flex flex-col p-4 gap-4 rounded-lg w-64">
                                        <div>
                                            <input 
                                                type="radio"
                                                name="order"
                                                value={"asc"}
                                                defaultChecked={order === "asc"}
                                            />
                                            <label>Low To High</label>
                                        </div>
                                        <div>
                                            <input 
                                                type="radio"
                                                name="order"
                                                value={"desc"}
                                                defaultChecked={order === "desc"}
                                            />
                                            <label>High To Low</label>
                                        </div>
                                    </PopoverBody>
                                </PopoverContent>
                            </Portal>
                        </div>
                    )}
                </Popover>
            </div>


            <div className="bg-yellow-400 w-28 p-2 rounded-lg">
                <Popover
                    trigger={"hover"}
                    closeOnBlur={false}
                    placement="bottom-start"
                    initialFocusRef={initRef}
                >
                    {({isOpen, onClose}) =>(
                        <div>
                            <PopoverTrigger>
                                <button>
                                    Filter By Category
                                    <span>
                                        {isOpen ? <ChevronUpIcon fontSize={"xl"} /> : <ChevronDownIcon fontSize={"xl"} />}
                                    </span>
                                </button>
                            </PopoverTrigger>
                            <Portal>
                                <PopoverContent>
                                    <PopoverBody className="bg-red-200 flex flex-col p-4 gap-4 rounded-lg w-64">
                                        <div>
                                            <input 
                                                type="checkbox"
                                                onChange={handleChange}
                                                checked={category.includes(
                                                    type === 'men' ? 'Casual Shirts' : 'Dresses and Jumpsuits'
                                                )}
                                                value={
                                                    type === 'men' ? 'Casual Shirts' : 'Dresses and Jumpsuits'
                                                }
                                            />
                                            <label>{type === 'men' ? 'Casual Shirts' : 'Dresses and Jumpsuits'}</label>
                                        </div>
                                        <div>
                                            <input 
                                                type="checkbox"
                                                onChange={handleChange}
                                                checked={category.includes(
                                                    type === 'men' ? 'Jeans' : 'Kurtas and Kurtis'
                                                )}
                                                value={
                                                    type === 'men' ? 'Jeans' : 'Kurtas and Kurtis'
                                                }
                                            />
                                            <label>{type === 'men' ? 'Jeans' : 'Kurtas and Kurtis'}</label>
                                        </div>
                                    </PopoverBody>
                                </PopoverContent>
                            </Portal>
                        </div>
                    )}
                </Popover>
            </div>
        </div>
    )
}