import { configureStore } from "@reduxjs/toolkit";
import filter from './slices/filterSlice'
import mainPageSlice from "./slices/mainPageSlice";
import searchSlice from "./slices/searchSlice";

const store = configureStore({
    reducer: {
        filter,
        mainPageSlice,
        searchSlice
    }
})

export default store