// src/reducers/exampleReducer.js
import { createSlice } from '@reduxjs/toolkit';


const initialState = { value: 10 }
const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 2;
        },
        decrement: (state) => {
            if (state.value > 0) {
                state.value -= 1;
            } else {
                alert("that number can not be negative ")
            }
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = exampleSlice.actions;
export default exampleSlice.reducer;
