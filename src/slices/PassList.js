import { createSlice } from "@reduxjs/toolkit";

const pass_list=createSlice({
    name:"DK_PassList",
    initialState:[],
    reducers:{
        pushPassList(state,action){
            state=action.payload;
            return state;
        }
    }
});
export const {pushPassList}=pass_list.actions;
export default pass_list.reducer;