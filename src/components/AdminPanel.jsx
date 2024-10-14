import React, { useEffect, useState } from 'react'
import { StudentManagemet } from './StudentManagemet'
import { HostelManagemet } from './HostelManagemet'
import { LoggedHeader } from './LoggedHeader'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { SERVER_URL } from '../service/AuthenticationServices'
import Swal from 'sweetalert2'

export const AdminPanel = () => {
    const logged =useSelector((state)=>state.logged);
    const nav =useNavigate();
    useEffect(()=>{
        function call(){
            if(!logged)nav("/");
        }
        call();
    },[]);

    async function shutdown(){
        try {
            const res =await axios.get(SERVER_URL+"/admin/shutdown-server");
            console.log(res);
            Swal.fire({
                title: "Server is down now...",
                text: "Auto logout initiated",
                icon: "info"
              });
              setTimeout(nav("/"),2000);
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: "Server is down now...",
                text: "Auto logout initiated",
                icon: "info"
              });
              setTimeout(nav("/"),2000);
        }
    }

  return (<>
    {logged &&
    <div className='w-[98vw] h-[98vh] flex flex-col m-auto items-center justify-center'>
        <LoggedHeader/>
                <div className="flex flex-col m-auto items-center justify-center mt-[8em] max-w-[91.6666%]">
                    
                    <div className=' bg-white  mx-auto rounded-md py-5 px-4 '>
                        <h1 className='font-thin text-2xl text-center'>Admin Panel </h1>
                        <button className='font-light text-sm  p-1  block text-center mx-auto bg-blue-300 hover:bg-blue-400' onClick={shutdown}>Shutdown server</button>
                        <div className=" border-black  flex lg:flex-row  flex-wrap justify-evenly items-center px-2 py-3 flex-col f">
                            <div className="flex flex-col lg:w-[50%] w-fit p-3 lg:border-r-2 border-0">
                                <h3 className='font-light text-lg text-center '>Student Management</h3>
                                <StudentManagemet/>
                            </div>
                            <div className="flex flex-col lg:w-[50%] w-fit p-3 lg:border-l-2 border-0">
                                <h3 className='font-light text-lg text-center '>Hostel Management</h3>
                                <HostelManagemet/>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
    }
    {/* {!logged  && nav("/")} */}
    </>
  )
}
