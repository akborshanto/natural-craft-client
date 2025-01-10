import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: "Habib ulla",
    age: 22,
    class: 13,
    fatherName: "Siful Islam",
    motherName: "Rubia Hasnat",
    hobby: ["Football", "cricket", "codding"]
}
const objectSlice = createSlice({
    name: "object",
    initialState,
    reducers: {
        personal: (state, action) => {
            state.name = action.payload.name
            state.age = action.payload.age
            state.class = action.payload.class
        },
        parents: (state, action) => {
            state.fatherName = action.payload.fatherName
            state.motherName = action.payload.motherName
        },
        addHobby: (state, action) => {
            
            state.hobby.push(action.payload);
        }

    }
})
export const { personal, parents, hobby } = objectSlice.actions
export default objectSlice.reducer