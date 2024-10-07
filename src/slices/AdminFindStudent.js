import { createSlice } from "@reduxjs/toolkit";

const admin_student=createSlice({
    name:"Admin_Get_Student_Slice",
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
            findStudent(state, action){
                state=action.payload;
                // console.log(state);
                return state;
            },
            addIndividual(state,action){
                const{title,value}=action.payload;
                state={...state,[title]:value};
                return state;
            }
        }
});
export const{findStudent,addIndividual}=admin_student.actions;
export default admin_student.reducer;