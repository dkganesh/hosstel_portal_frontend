import { createSlice } from "@reduxjs/toolkit";

const jwt_token=createSlice({
    name:"DK_JWT_TOKEN",
    initialState:"",
    reducers:{
        addToken(state,action){
            state =action.payload;
            return state;
        }
    }
});
export const{addToken}=jwt_token.actions;
export default jwt_token.reducer;