import { createSlice } from "@reduxjs/toolkit";

const student_login =createSlice({
    name:"Student_Login_Slice",
    initialState:{
        email:"",
        password:""
    },
    reducers:{
        addInputs(state,action){
            state=action.payload;
            // console.log(state);
            return state;
        }
    }
});
export const{addInputs}  = student_login.actions;
export default student_login.reducer;