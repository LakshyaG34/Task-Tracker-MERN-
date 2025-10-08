import {createSlice} from "@reduxjs/toolkit"

const taskSlice = createSlice({
    name: "user",
    initialState : [],
    reducers: {
        setTask: (state, action) => action.payload
    }
})

export const {setTask} = taskSlice.actions
export default taskSlice.reducer;