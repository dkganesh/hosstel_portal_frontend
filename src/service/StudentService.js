import axios from "axios";
import { SERVER_URL } from "./AuthenticationServices";
// import {config} from '../session/JwtToken';

export const BASE_URL=SERVER_URL+"/std/register"
export const ADMIN_BASE_URL=SERVER_URL+"/admin"

// export const BASE_URL=`${BASE}`;
// export const ADMIN_BASE_URL=`${process.env.ADMIN_BASE_URL}`

// function getData(){
//     const student = useSelector((state)=>state.student_signup);
//     return student;
// }
class StudentService{

    registerStudent(e){
        return axios.post(BASE_URL,e);
    }
    getStudent(link,config){
        return axios.get(link,config);
    }
    deleteStudent(link,config){
        return axios.delete(link,config);
    }
    getStudent(link,config){
        return axios.get(link,config);
    }
    updateStudent(link,e,config){
        return axios.put(link,e,config);
    }
    admin_addStudent(link,e,config){
        return axios.post(link,e,config);
    }
    loginStudent(link,e){
        return axios.post(link,e);
    }
    resetPassword(link,e,config){
        return axios.post(link,e,config);
    }
    findRoomDetails(link,config){
        return axios.get(link,config);
    }
    getPassList(link,config){
        return axios.get(link,config);
    }
}
export default new StudentService();