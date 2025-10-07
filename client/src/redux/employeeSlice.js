import {createSlice} from "@reduxjs/toolkit"

const employeeSlice = createSlice({
    name: "employee",
    initialState : [],
    reducers: {
        setEmployee: (state, action) => action.payload
    }
})

export const {setEmployee} = employeeSlice.actions
export default employeeSlice.reducer;