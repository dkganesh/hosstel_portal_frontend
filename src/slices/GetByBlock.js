import { createSlice } from "@reduxjs/toolkit";

const get_by_block=createSlice({
    name:"DK_GetByBlock",
    initialState:[],
    reducers:{
        putArray(state,action){
            state=action.payload;
            return state;
        }
    }
});
export const{putArray} =get_by_block.actions;
export default get_by_block.reducer;