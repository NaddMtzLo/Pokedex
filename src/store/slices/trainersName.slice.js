import { createSlice } from "@reduxjs/toolkit";

const trainersNameSlice = createSlice ({
    name: "trainersName",
    initialState: "",
    reducers: {
        setGlobalTrainersName: (state, action) => action.payload
    }
})

export const {setGlobalTrainersName} = trainersNameSlice.actions
export default trainersNameSlice.reducer