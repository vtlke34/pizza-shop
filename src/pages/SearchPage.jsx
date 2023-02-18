import React from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

import PizzaBlock from '../components/PizzaBlock';
import PizzaBlockSkeleton from '../components/PizzaBlockSkeleton';

import { useSelector } from 'react-redux';


function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = React.useState(value);

    React.useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value]
    );

    return debouncedValue;
}

const SearchPage = () => {
    const [pizzas, setPizzas] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    // const navigate = useNavigate()

    const { searchValue } = useSelector(state => state.searchSlice)

    const debouncedSearchTerm = useDebounce(searchValue, 400)

    React.useEffect(() => {
        setIsLoading(true)
        axios.get(`https://63dbce9eb8e69785e48b8979.mockapi.io/items?search=${debouncedSearchTerm}`)
            .then(response => {
                setPizzas(response.data)
                setIsLoading(false)
            })
    }, [debouncedSearchTerm])

    return (
        <div className="container">

            <h2 className="content__title">Найденные пиццы</h2>

            <div className="content__items">

                {
                    isLoading
                        ? [...new Array(4)].map((_, i) => < PizzaBlockSkeleton key={i} />)
                        : pizzas.map(item => <PizzaBlock key={item.id} {...item} />)
                }
                {
                    pizzas.length === 0 && <h2>{'Ничего не найдено :('}</h2>
                }

            </div>

        </div>
    )
}

export default SearchPage