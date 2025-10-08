import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import employeeReducer from "./employeeSlice"
import taskReducer from "./taskSlice"


export const store = configureStore({
    reducer : {
        user : userReducer,
        employee : employeeReducer,
        task : taskReducer
    }
})