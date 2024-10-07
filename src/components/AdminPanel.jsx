import React, { useEffect, useState } from 'react'
import { StudentManagemet } from './StudentManagemet'
import { HostelManagemet } from './HostelManagemet'
import { LoggedHeader } from './LoggedHeader'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const AdminPanel = () => {
    const logged =useSelector((state)=>state.logged);
    const nav =useNavigate();
    useEffect(()=>{
        function call(){
            if(!logged)nav("/");
        }
        call();
    },[])
  return (<>
    {logged &&
    <div className='w-[98vw] h-[98vh] flex flex-col m-auto items-center justify-center'>
        <LoggedHeader/>
                <div className="flex flex-col m-auto items-center justify-center mt-[8em] max-w-[91.6666%]">
                    <div className=' bg-white  mx-auto rounded-md py-5 px-4 '>
                        <h1 className='font-thin text-2xl text-center '>Admin Panel</h1>
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
