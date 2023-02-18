import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setSearchValue } from '../../redux/slices/searchSlice'

import styles from './Search.module.scss'

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
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

const Search = () => {
    const { searchValue } = useSelector(state => state.searchSlice)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const debouncedSearchTerm = useDebounce(searchValue, 250)

    const onChangeHandler = (e) => {
        dispatch(setSearchValue(e.target.value))
        navigate('/search')
    }

    return (
        <label className={styles.search}>

            <img className={styles.searchIcon} src='search_icon.svg' />
            <input className={styles.input} value={searchValue} onChange={onChangeHandler} type="text" placeholder='Поиск пиццы...' />

            {searchValue && <img onClick={() => dispatch(setSearchValue(''))} className={styles.closeIcon} src='close_icon.svg' />}
        </label>
    )
}

export default Search