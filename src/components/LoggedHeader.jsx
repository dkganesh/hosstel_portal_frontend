import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { findStudent ,addIndividual } from '../slices/AdminFindStudent';
import { addStudentSignUp } from '../slices/Student_SignUp_Slice';
import { addInputs } from '../slices/Student_Login_Slice';
import {addToken} from '../session/JwtTokenSlice'
import { useNavigate } from 'react-router-dom';
import { putArray } from '../slices/GetByBlock';
import { logon } from '../session/JwtToken';
import axios from 'axios';
import { SERVER_URL } from '../service/AuthenticationServices';
import Swal from 'sweetalert2';

export const LoggedHeader = () => {
const[load,setLoad]=useState(false);

  const nav=useNavigate();
  const dispatch = useDispatch();
  function clearCache(e){
    dispatch(findStudent({name:"",
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
      room:""}));


      dispatch(addIndividual({name:"",
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
        room:""}));

        dispatch(addInputs({
          email:"",
          password:""
      }));

      dispatch(addStudentSignUp({name:"",
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
        room:""}));

        dispatch(putArray([]));

        // alert("Cache data cleared");
        if(e!="" && e!=null || e!=undefined)alert(e);
  }
  const token =useSelector((state)=>state.jwt_token_authentication);
  async function clearToken(e){
    e.preventDefault();
    setLoad(true);
    dispatch(addToken(""));
    clearCache();
    try {
      const response =await axios.post(`${SERVER_URL}/logout`,{},{
        headers:{Authorization:"Bearer "+token}})
      if(response.status ==200 || response.status=="200"){
      console.log("cleared cache");
      dispatch(logon(false))
      // window.location.reload(true);
      // console.log("refereshed");
      setLoad(false);
      Swal.fire("Logged out");
      nav("/");
      }
    } catch (err) {
      console.log(err);
      setLoad(false);
      Swal.fire("Logged out");
      nav("/");
    }
  }
  return (
    <div className='bg-slate-400 fixed top-0 min-h-[10vh] w-full lg:w-[91.6666%] rounded-md flex items-center lg:justify-end px-3 justify-center'>
        <button className='mx-3 bg-yellow-400 rounded-md px-3 py-1 hover:bg-yellow-500 border-2 border-yellow-500'
        onClick={()=>clearCache("Cache data cleared")}
        >Clear Cache</button>
        <button className='mx-3 bg-red-400 rounded-md px-3 py-1 hover:bg-red-500 border-2 border-red-500'
        onClick={clearToken}
        >Logout</button>
        {load && <div className='ml-3 h-[30px] w-[30px] border-x-4 border-blue-600 animate-spin rounded-full'></div>}
    </div>
  )
}
