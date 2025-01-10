
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    data: [], // This will hold the array of objects from the API
    status: 'idle', // status to manage loading, success, error states
    error: null, // To handle any errors during the API call
};





export const fetchData = createAsyncThunk('craft/fetchData', async () => {
    const res = await fetch('https://project-10-server-topaz.vercel.app/craftItems')
    const data = await res.json()
    return data
})

const craftSlice = createSlice({
    name: "craftItems",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload; 
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default craftSlice.reducer;
