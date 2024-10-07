import { createSlice } from "@reduxjs/toolkit";

export const islogged=createSlice({
    name:"DK_isLogged",
    initialState:false,
    reducers:{
        logon(state,action){
            state=action.payload;
            return state;
        }
    }
});
export const{logon}=islogged.actions;
export default islogged.reducer;