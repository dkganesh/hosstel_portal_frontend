import { configureStore } from "@reduxjs/toolkit";
import Student_Login_Slice from "./slices/Student_Login_Slice";
import Student_SignUp_Slice from "./slices/Student_SignUp_Slice";
import AdminFindStudent from "./slices/AdminFindStudent";
import JwtTokenSlice from "./session/JwtTokenSlice";
import GetByBlock from "./slices/GetByBlock";
import JwtToken from "./session/JwtToken"
import UserDetails from "./session/UserDetails";
import PassList from "./slices/PassList"

export const store = configureStore({
    devTools:true,
    reducer:{
        student_login: Student_Login_Slice,
        student_signup:Student_SignUp_Slice,
        admin_get_student:AdminFindStudent,
        jwt_token_authentication:JwtTokenSlice,
        get_by_block_state:GetByBlock,
        logged:JwtToken,
        logged_user:UserDetails,
        pass_list:PassList
    }
});