import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: ['Все', 'Мясные', 'Вегетерианские', 'Гриль', 'Острые'],
    sort: ['возрастанию популярности ', 'убыванию популярности', 'возрастанию цены', 'убыванию цены', 'алфавиту А->Я', 'алфавиту Я->А'],
    isSortOpen: false,
    activeCategories: 0,
    activeSort: 0
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSortOpen: (state) => {
            state.isSortOpen = !state.isSortOpen;
        },
        setActiveCategories: (state, actions) => {
            state.activeCategories = actions.payload
        },
        setActiveSort: (state, actions) => {
            state.activeSort = actions.payload
        }
    }
})

export const { setSortOpen, setActiveCategories } = filterSlice.actions

export default filterSlice.reducer