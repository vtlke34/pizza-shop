import React from "react"

import { useSelector, useDispatch } from "react-redux"
import { setActiveCategories } from "../redux/slices/filterSlice"

const Categories = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.filter.categories)
    const activeCategories = useSelector(state => state.filter.activeCategories)

    return (
        <div className="categories">
            <ul>
                {categories.map((item, i) => <li
                    key={i}
                    className={activeCategories === i ? 'active' : ''}
                    onClick={() => {
                        dispatch(setActiveCategories(i))
                    }}
                >
                    {item}
                </li>)}
            </ul>
        </div>
    )
}

export default Categories