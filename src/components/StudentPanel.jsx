import React, { useEffect, useState } from 'react'
import { LoggedHeader } from './LoggedHeader'
import { useDispatch, useSelector } from 'react-redux'
import StudentService, { ADMIN_BASE_URL } from '../service/StudentService'
import { useNavigate } from 'react-router-dom'
import { updateUser } from '../session/UserDetails'
import StudentPanelServices from '../service/StudentPanelServices'
import { SERVER_URL } from '../service/AuthenticationServices'
import axios from 'axios'
import QRCode from "react-qr-code"

export const StudentPanel = () => {

    const nav =useNavigate();
    const dispatch =useDispatch();
    const temp=useSelector((state)=>state.student_login);
    const logged =useSelector((state)=>state.logged);
    const link=ADMIN_BASE_URL+"/getStudent/"+temp.email;
    const token =useSelector((state)=>state.jwt_token_authentication);

    const[loading,setLoading]=useState(true);
    const[load,setLoad]=useState(false);
    let[qr,setQr]=useState(null);
    let[disdate,setDisDate]=useState(null);

    const[newPassword,setNewPassword]=useState("");

    

    
    const [req,setReq]=useState({
        startDate:"",
        endDate:""
    })

    



useEffect(()=>{
    function call(){
        StudentService.getStudent(link,{
            headers:{Authorization:"Bearer "+token}
          }).then(res=>{
            dispatch(updateUser(res.data));
          }).catch(err=>{
            console.log(err);
            if(err.status==401)nav("/");
          })
          if(!logged)nav("/");
    };
    call();
},[])




    const[startDate,setStartDate]=useState("");
    const[endDate,setEndDate]=useState("");
    const[startTime,setStartTime]=useState("");
    const[endTime,setEndTime]=useState("");

// const data =useSelector((state)=>state.logged_user);
    

const data =useSelector((state)=>state.logged_user);

    function configStart(){
        const temp= startDate+" "+startTime+":00";
        setReq({...req,startDate:temp});
        // setReq({...req,email:data.email,staff:data.staff});
        console.log(req);
    }
    function configEnd(){
       
        const temp= endDate+" "+endTime+":00";
        setReq({...req,endDate:temp});
        // setReq({...req,email:data.email,staff:data.staff});
        console.log(req);
    }
    function clear(){
        setStartDate("");
        setStartTime("");
        setEndDate("");
        setEndTime("");
    }

    async function applyPass(){
        setReq({...req,email:data.email,staff:data.staff});
        console.log(data);
        // setReq({...req,email:data.email,staff:data.staff});
        // setReq({...req,email:data.email,staff:data.staff});
        console.log(req);
        let link =SERVER_URL+"/beta/applyPass";
        setLoad(true);
        try {
            const response = await StudentPanelServices.applyPass(link,req,{
                headers:{Authorization:"Bearer "+token}
              })

            alert(response.data);
            setLoad(false);
            clear();
        } catch (err) {
            setLoad(false);
            console.log(err);
            // if(err.status==401)nav("/");
            alert("try again...");
        }
        
    }

    async function changePassword(){
        const link= SERVER_URL+"/admin/update/studentPassword";

        try {
            const response = await axios.post(link,{
                newPassword:newPassword,
                email:data.email
            },{
                headers:{Authorization:"Bearer "+token}
              });
        
            alert(response.data);
            setNewPassword("");
        } catch (err) {
            console.log(err);
            alert("try again...");
        }

    }


    async function viewPass(){
        const link= SERVER_URL+"/beta/getToken/"+data.email;
        try {
            const response = await axios.get(link,{
                headers:{Authorization:"Bearer "+token}
              });
            setQr(response.data.token);
            let temp=response.data.date;
            temp=temp.substring(0,11);
            setDisDate(temp);
            setLoading(false);
        } catch (err) {
            console.log(err);
            alert("try again...");
        }
    }
  
  return (
    <div className='w-[98vw] h-[98vh] flex flex-col m-auto items-center justify-center'>
        <LoggedHeader/>
        <div className="flex flex-col m-auto items-center justify-center mt-[8em] max-w-[91.6666%]  min-w-[50%] h-fit rounded-lg">
            <div className="flex flex-col items-center justify-center px-2 h-full mt-2">
                <h1 className='font-thin text-2xl text-center mt-1'>Student Panel</h1>
                <div className="h-full flex flex-col items-center justify-evenly">
                    
                    <div className="w-[100%] flex items-center justify-center flex-col bg-white rounded-md mt-2 mb-2">
                        <h3 className=' font-thin text-lg text-center mt-3 mb-1 '>Change Password</h3>
                        <input type="password" className='px-3 py-1 rounded-md border-2 border-black mb-2' placeholder='New Password' name="newPassword" value={newPassword} onChange={(e)=>{setNewPassword(e.target.value)}}/>
                        <button className='px-2 py-1 ml-2 border-2 bg-green-400 hover:bg-green-600 border-green-600 rounded-md font-normal mb-2' onClick={changePassword}>Change</button>
                    </div>

                    <div className=" w-[100%] flex items-center justify-center flex-col bg-white rounded-md mt-2">
                        <h3 className=' font-thin text-lg text-center mt-3 mb-1 '>Apply Pass</h3>

                        <div className="flex flex-row flex-wrap items-center justify-evenly mt-2 py-2 px-3 w-full">
                            <label htmlFor="startDate" className='mr-2'>Start Date</label>
                            <input type="date" name="startDate" id="sdate"  value={startDate} className='w-80% border-2 border-black bg-blue-400 rounded-md px-3 mx-2 font-normal' onChange={(e)=>{setStartDate(e.target.value)}}/>
                            <input type="time" name="startTime" id="stime"  value={startTime} className='w-80% border-2 border-black bg-blue-400 rounded-md px-3 mx-2 font-normal' onChange={(e)=>{setStartTime(e.target.value)}}/>
                            <button className='px-2 py-1 ml-2 border-2 bg-green-400 hover:bg-green-600 border-green-600 rounded-md font-normal' onClick={configStart}>save</button>
                        </div>
                        <div className="flex flex-row flex-wrap items-center justify-evenly mt-2 py-2 px-3 w-full">
                            <label htmlFor="date" className='mr-2'>End Date</label>
                            <input type="date" name="endDate" id="edate"  value={endDate} className='w-80% border-2 border-black bg-blue-400 rounded-md px-3 mx-2 font-normal' onChange={(e)=>{setEndDate(e.target.value)}}/>
                            <input type="time" name="endTime" id="etime"  value={endTime} className='w-80% border-2 border-black bg-blue-400 rounded-md px-3 mx-2 font-normal' onChange={(e)=>{setEndTime(e.target.value)}}/>
                            <button className='px-2 py-1 ml-2 border-2 bg-green-400 hover:bg-green-600 border-green-600 rounded-md font-normal' onClick={configEnd}>save</button>
                        </div>
                        {
                            load && 
                            <div className='my-3 h-[30px] w-[30px] border-x-4 border-blue-600 animate-spin rounded-full'>

                            </div>
                        }
                        <button type='submit' className='mt-2 mx-4 mb-3 rounded-md px-3 bg-green-400 border-2 border-green-600 font-normal py-1 hover:bg-green-600 ' onClick={applyPass}>Submit</button>
                        
                    </div>
                    <div className="h-[50%] w-full mt-2 bg-white rounded-md flex flex-col justify-center items-center">
                    <h3 className='font-thin text-lg text-center mt-1'>View Applied Pass</h3>
                        {loading && <>
                        <button type='submit' className='mt-2 mx-4 mb-3 rounded-md px-3 bg-green-400 border-2 border-green-600 font-normal py-1 hover:bg-green-600 ' onClick={viewPass}>View</button></>}
                        {!loading && qr!=null &&
                            <div className='flex flex-col items-center justify-center p-3'>
                                <h3>{disdate}</h3>
                                <QRCode size={120} fgColor="black" bgColor="white" value={qr} className="rounded-lg m-2 p-2 border-2 border-black"/>
                            </div>
                        }
                        
                    </div>

                        
                </div>
            </div>
        </div>
    
    
    </div>
  )
}
