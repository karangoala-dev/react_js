import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    initialState: 0,
    name: 'counter',
    reducers: {
        increment: (state) => {
            return state + 1;
        },
        decrement: (state) => {
            return state - 1;
        }
    }
});

//now, the counterSlice will contain actions in return type of createSlice, these actions can be exported
export const { increment, decrement } = counterSlice.actions;  
export default counterSlice.reducer;