import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import axios from "axios";
import { addStudentSignUp } from '../slices/Student_SignUp_Slice';
import StudentService from '../service/StudentService';
import { LoggedHeader } from './LoggedHeader';
import { useNavigate } from 'react-router-dom';
import { SendEmail } from '../SendEmail';
import Swal from 'sweetalert2';

export const StudentSignUpForm = () => {
    const [load,setLoad]= useState(false);

    const nav=useNavigate();
    const[student,setStudent]=useState({
    name:"",
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
    room:""
    })

    function handleChange(e){
        setStudent({...student,[e.target.name]:e.target.value});
        // console.log(student);
        // console.log("from handle change funcn");
    }
    function clearFunction(e){
        e.preventDefault();
        setStudent({name:"",
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
            room:""})
    }
    const dispatch =useDispatch();
    function handleSubmit(e){
        setLoad(true);
        if(validate(student)){
        e.preventDefault();
        console.log(student);
        dispatch(addStudentSignUp(student));
        console.log("state updated")
        
        StudentService.registerStudent(student).then((res)=>{
            // axios.get(res.data).then(res=>{
            //     console.log(res);
            //     alert("Student Registered Successfully -> you can login now...");
            //     nav("/");
            // }).catch(e=>console.log(e))
            setLoad(false);
            SendEmail(res.data,student);
            console.log(res);
            // alert(resp);
        })
        .catch((err)=>{console.log(err);setLoad(false);})


        clearFunction(e);}
        else  Swal.fire({
            title: "Error",
            text: "Invalid Entry...",
            icon: "error"
          });
    }
    const validate = (e)=>{
        return e.email!=""&&
        e.phone!=""&&
        e.password!=""&&
        e.regNo!=""&&
        e.parentName!=""&&
        e.parentPhone!=""&&
        e.facultyName!=""&&
        e.facultyPhone!=""&&
        e.nativePlace!=""&&
        e.staff!=""&&
        e.department!=""&&
        e.block!=""&&
        e.room!="";
    }
  return (
        <div className="w-[98vw] max-w-[91.6666%] m-auto  bg-white rounded-md min-h-[80%] mt-[8em] mb-[2em]">
            {/* <LoggedHeader/> */}
            <div className="p-3">
            <form action="" className='m-auto rounded-sm mt-2' onSubmit={handleSubmit}>
                <h3 className='text-center font-thin text-lg py-1 px-2 mb-2'>Student Sign Up </h3>

                <div className="">

                    <input type="text" name="name" id="std_sign_name" onChange={handleChange}  required placeholder="Name"value={student.name} className='border-2 border-gray-600 mx-4 mb-3 min-w-[250px] rounded-md px-3 min-h-9 placeholder:font-extralight'/>
                    
                    <input type="email" name="email" id="std_sign_email" onChange={handleChange}  required placeholder="Email" value={student.email}className='border-2 border-gray-600 mx-4 mb-3 min-w-[250px] rounded-md px-3 min-h-9 placeholder:font-extralight'/>

                    <input type="tel" name="phone" id="std_sign_phone" onChange={handleChange}  required placeholder="Phone" value={student.phone}className='border-2 border-gray-600 mx-4 mb-3 min-w-[250px] rounded-md px-3 min-h-9 placeholder:font-extralight'/>

                    <input type="text" name="regNo" id="std_sign_regNo" onChange={handleChange}  required placeholder="Registration No"value={student.regNo} className='border-2 border-gray-600 mx-4 mb-3 min-w-[250px] rounded-md px-3 min-h-9 placeholder:font-extralight'/>

                    <input type="text" name="parentName" id="std_sign_parentName" onChange={handleChange}  required placeholder="Parent Name"value={student.parentName} className='border-2 border-gray-600 mx-4 mb-3 min-w-[250px] rounded-md px-3 min-h-9 placeholder:font-extralight'/>

                    <input type="tel" name="parentPhone" id="std_sign_parentPhone" onChange={handleChange}  required placeholder="Parent Phone" value={student.parentPhone}className='border-2 border-gray-600 mx-4 mb-3 min-w-[250px] rounded-md px-3 min-h-9 placeholder:font-extralight'/>

                    <input type="text" name="facultyName" id="std_login_facultyName" onChange={handleChange} value={student.facultyName} required placeholder="Faculty Name" className='border-2 border-gray-600 mx-4 mb-3 min-w-[250px] rounded-md px-3 min-h-9 placeholder:font-extralight'/>

                    <input type="tel" name="facultyPhone" onChange={handleChange} id="std_sign_facultyPhone" value={student.facultyPhone} required placeholder="Faculty Phone" className='border-2 border-gray-600 mx-4 mb-3 min-w-[250px] rounded-md px-3 min-h-9 placeholder:font-extralight'/>

                    <input type="text" name="nativePlace" onChange={handleChange} id="std_sign_nativePlace" value={student.nativePlace} required placeholder="Native Place" className='border-2 border-gray-600 mx-4 mb-3 min-w-[250px] rounded-md px-3 min-h-9 placeholder:font-extralight'/>

                    <input type="number" name="room" onChange={handleChange} id="std_sign_room" value={student.room} required placeholder="Room Number" className='border-2 border-gray-600 mx-4 mb-3 min-w-[250px] rounded-md px-3 min-h-9 placeholder:font-extralight'/>

                    <div className=' inline-block ml-4 min-w-[250px] mb-3'>
                        <label htmlFor="department" className='pl-5 text-center font-extralight text-md py-1 px-2 mb-3 '>Department</label>
                        <select name="department" id="department" value={student.department} onChange={handleChange} required>
                            <option value=""></option>
                            <option value="EEE" className='p-4 font-light '>ELECTRICAL</option>
                            <option value="ECE" className='p-4 font-light '>E-COMMUNICATION</option>
                            <option value="IT" className='p-4 font-light '>INFORMATION TECHNOLOGY</option>
                            <option value="CHE" className='p-4 font-light '>CHEMICAL</option>
                            <option value="ME" className='p-4 font-light '>MACHANICAL</option>
                            <option value="MAR" className='p-4 font-light '>MARINE</option>
                            <option value="CVE" className='p-4 font-light '>CIVIL</option>
                            <option value="AUT" className='p-4 font-light '>AUTOMOBILE</option>
                            <option value="CSE" className='p-4 font-light '>COMPUTER SCIENCE</option>
                            <option value="AIDS" className='p-4 font-light '>ARITIFICIAL INTELLIGENCE</option>
                        </select>
                    </div>

                    <div className=' inline-block ml-4 min-w-[250px] mb-3'>
                        <label htmlFor="block" className='pl-5 text-center font-extralight text-md py-1 px-2 mb-3'>Hostel Block</label>
                        <select name="block" id="block" value={student.block} onChange={handleChange} required>
                            <option value=""></option>
                            <option value="1" className='p-4 font-light '>Block 1</option>
                            <option value="2" className='p-4 font-light '>Block 2</option>
                            <option value="3" className='p-4 font-light '>Block 3</option>
                            <option value="4" className='p-4 font-light '>Block 4</option>
                            <option value="5" className='p-4 font-light '>Block 5</option>
                        </select>
                    </div>

                    <div className=' inline-block ml-4 min-w-[250px] mb-3'>
                        <label htmlFor="staff" className='pl-5 text-center font-extralight text-md py-1 px-2 mb-3'>RT</label>
                        <select name="staff" onChange={handleChange} id="staff"  value={student.staff} required>
                            <option value=""></option>
                            <option value="1" className='p-4 font-light '>Annamalai</option>
                            <option value="2" className='p-4 font-light '>NaveenKumar</option>
                            <option value="3" className='p-4 font-light '>Boopathy</option>
                            <option value="4" className='p-4 font-light '>CivilSir</option>
                            <option value="5" className='p-4 font-light '>NewSir</option>
                        </select>
                    </div>
                    <input type="password" name="password" id="std_sign_password" value={student.password} required placeholder="Password" onChange={handleChange} className='border-2 border-gray-600 mx-4 mb-3 min-w-[250px] rounded-md px-3 min-h-9 placeholder:font-extralight'/>

                    {/* <input type="password" name="pass" id="std_sign_retypePassword" required placeholder="Retype Password" className='border-2 border-gray-600 mx-4 mb-3 min-w-[250px] rounded-md px-3 min-h-9 placeholder:font-extralight'/> */}


                </div>
                <div className="flex flex-row justify-center items-center mt-2">
                    <button type='submit' className=' mx-4 mb-3 rounded-md px-3 bg-green-400 border-2 border-green-600 font-normal py-1 hover:bg-green-600 '>Register</button>
                    {load && <div className='inline-block h-[30px] w-[30px] border-4 border-t-blue-500 border-r-blue-500  border-b-black border-l-black animate-spin rounded-full mb-3'></div>}
                    <button className=' mx-4 mb-3 rounded-md px-3 bg-yellow-300 border-2 border-yellow-500 font-normal py-1 hover:bg-yellow-500 ' onClick={clearFunction}>Clear</button>
                    <button className=' mx-4 mb-3 rounded-md px-3 bg-green-400 border-2 border-green-600 font-normal py-1 hover:bg-green-600 ' onClick={()=>nav("/")}>LogIn</button>

                </div>

            </form>
            </div>
        </div>
  )
}
