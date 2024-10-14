import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addInputs, addInputs as addStudent} from '../slices/Student_Login_Slice'
import {addToken} from '../session/JwtTokenSlice'
import StudentService, { ADMIN_BASE_URL } from '../service/StudentService';
import summaFunction, { logon } from '../session/JwtToken';
import { useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../service/AuthenticationServices';
import { updateUser } from '../session/UserDetails';
import Swal from 'sweetalert2'

export const StudentSignInForm = () => {
  const dispatch= useDispatch();
  const [loginForm,setLoginForm] =useState({email:"",password:""})
  const[load,setLoad]=useState(false);



  function handleChange(e){
    setLoginForm({...loginForm,[e.target.name]:e.target.value});
    // console.log(loginForm);
  }
  const nav=useNavigate();
  async function handleSubmit(e){
    e.preventDefault();
    setLoad(true);
    let link=SERVER_URL+"/login"
    // dispatch(addStudent(loginForm));
    try{
      const response = await StudentService.loginStudent(link,loginForm);
      dispatch(addToken(response.data));
      // console.log(response.data);
      dispatch(logon(true));
      dispatch(addInputs(loginForm));
      setLoad(false)
      Swal.fire({
        title: "Success!",
        text: "You are logged in!",
        icon: "success"
      });
      nav("/studentPanel");
    }
    catch(err){
      console.log(err);
      setLoad(false);
      Swal.fire({
        title: "Error!",
        text: "Incorrect Credentials!!!",
        icon: "error"
      });
      nav("/");
    }
    // console.log("saved to state from handle submit");
    setLoginForm({email:"",password:""});
  }

  return (
        <div className="h-[98vh] w-[98vw] flex ">
          <div className="w-fit m-auto p-3 bg-white rounded-md lg:w-[50%]">
          <form action="" className='flex flex-col items-center justify-evenly' onSubmit={handleSubmit}>
            <h3 className='text-center font-thin text-lg py-1 px-2'>Student Login</h3>
            <input type="email" name="email" id="std_login_email" value={loginForm.email} onChange={handleChange} required placeholder="Email" className='border-2 border-gray-600 mx-4 mb-3 min-w-[250px] rounded-md px-3 min-h-9 placeholder:font-light'/>

            <input type="password" name="password" id="std_login_password" value={loginForm.password} required onChange={handleChange} placeholder="Password" className='border-2 border-gray-600 mx-4 mb-3 min-w-[250px] rounded-md px-3 min-h-9 placeholder:font-light'/>
           
            {load && <div className='mb-3 h-[30px] w-[30px] border-4 border-t-blue-500 border-r-blue-500  border-b-black border-l-black animate-spin rounded-full'></div>}
            <div className="">
            <button type='submit' className=' mx-4 mb-3 rounded-md px-3 bg-green-400 border-2 border-green-600 font-normal py-1 hover:bg-green-600 '>Submit</button>
            <button className=' mx-4 mb-3 rounded-md px-3 bg-yellow-400 border-2 border-yellow-600 font-normal py-1 hover:bg-yellow-600 ' onClick={e=>{e.preventDefault();setLoginForm({email:"",password:""})}}>Clear</button>
            </div>
           
           {/* <button className='bg-indigo-400 rounded-md px-2 py-1 font-normal hover:bg-indigo-500 border-2 border-indigo-500'>Forget Password</button> */}
          </form>
        </div>
        </div>
  )
}
