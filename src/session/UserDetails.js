import { createSlice } from "@reduxjs/toolkit";

const user_details=createSlice({
    name:"DK_UserDetails_State",
    initialState:{},
    reducers:{
        updateUser(state,action){
            state=action.payload;
            return state;
        }
    }
});
export const{updateUser} = user_details.actions;
export default user_details.reducer;