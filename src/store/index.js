import { configureStore } from "@reduxjs/toolkit";
import trainersName from "./slices/trainersName.slice"

export default configureStore({
    reducer:{
        trainersName
    }
})