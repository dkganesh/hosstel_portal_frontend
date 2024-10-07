import { createSlice } from "@reduxjs/toolkit";

const student_signup =createSlice({
    name:"Stdent_SignUp_Silce",
    initialState :{name:"",
        email:"",
        phone:"",
        password:"",
        regNo:"",
        parentName:"",
        parentPhone:"",
        facultyName:"",
        facultyPhone:"",
        nativePlace:"",
        staff:"",
        department:"",
        block:"",
        room:""},
        reducers:{
            addStudentSignUp(state,action){
                state=action.payload;
                // console.log(state);
                return state;
            }
        }
});
export const {addStudentSignUp}=student_signup.actions;
export default student_signup.reducer;