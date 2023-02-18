import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    pizzas: [],
    isLoading: true,
    activePage: 1
}

const mainPageSlice = createSlice({
    name: 'mainPageSlice',
    initialState,
    reducers: {
        setPizzas: (state, actions) => {
            state.pizzas = actions.payload
        },
        setIsLoading: (state, actions) => {
            state.isLoading = actions.payload
        },
        setActivePage: (state, actions) => {
            state.activePage = actions.payload
        }
    }
})

export const { setPizzas, setIsLoading, setActivePage } = mainPageSlice.actions

export default mainPageSlice.reducer