import React from 'react';
import axios from 'axios';

import PizzaBlock from '../components/PizzaBlock';
import PizzaBlockSkeleton from '../components/PizzaBlockSkeleton';
import Categories from '../components/Categories';
import Sort from '../components/Sort';

import { useSelector, useDispatch } from 'react-redux';
import { setActivePage, setIsLoading, setPizzas } from '../redux/slices/mainPageSlice';

const MainPage = () => {
    const sortVariant = [
        { sort: 'rating', order: 'desc' },
        { sort: 'rating', order: 'asc' },
        { sort: 'price', order: 'desc' },
        { sort: 'price', order: 'asc' },
        { sort: 'title', order: 'desc' },
        { sort: 'title', order: 'asc' },
    ]

    const dispatch = useDispatch()
    const activeCategories = useSelector(state => state.filter.activeCategories)
    const activeSort = useSelector(state => state.filter.activeSort)
    const pizzas = useSelector(state => state.mainPageSlice.pizzas)
    const isLoading = useSelector(state => state.mainPageSlice.isLoading)
    const activePage = useSelector(state => state.mainPageSlice.activePage)

    const categoryParams = activeCategories !== 0 && 'category=' + activeCategories
    const sortParams = 'sortBy=' + sortVariant[activeSort].sort + '&order=' + sortVariant[activeSort].order
    const paginationParams = `page=${activePage}&limit=8`

    React.useEffect(() => {
        dispatch(setIsLoading(true))
        axios.get(`https://63dbce9eb8e69785e48b8979.mockapi.io/items?${categoryParams}&${sortParams}&${paginationParams}`)
            .then(response => {
                dispatch(setPizzas(response.data))
                dispatch(setIsLoading(false))
            })
    }, [activeCategories, activeSort, activePage])

    return (
        <div className="container">
            <div className="content__top">

                <Categories />

                <Sort />

            </div>

            <h2 className="content__title">Все пиццы</h2>

            <div className="content__items">
                {
                    isLoading
                        ? [...new Array(4)].map((_, i) => < PizzaBlockSkeleton key={i} />)
                        : pizzas.map(item => <PizzaBlock key={item.id} {...item} />)
                }
            </div>

            <div className='pagination'>
                <button onClick={() => dispatch(setActivePage(activePage === 1 ? 1 : activePage - 1))} className='pagination-arrow'>{'<-'}</button>
                {
                    [1, 2].map((item, i) => <button
                        onClick={() => dispatch(setActivePage(item))}
                        className={activePage === item ? 'pagination-number active' : 'pagination-number'}
                    >
                        {item}
                    </button>)
                }
                <button onClick={() => dispatch(setActivePage(activePage === 2 ? 2 : activePage + 1))} className='pagination-arrow'>{'->'}</button>
            </div>

        </div >
    )
}

export default MainPage