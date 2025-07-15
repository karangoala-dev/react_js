import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './slices/counterSlice';

//store reducers inside the configureStore
export const store = configureStore({
    reducer: {
        counter: counterSlice, //add the counter slice's reducer here
    }
});