import React, { useState } from 'react'
import StudentService, { ADMIN_BASE_URL } from '../../service/StudentService';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { findStudent } from '../../slices/AdminFindStudent';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

let student;
export function FindStudent({isOpen, setIsOpen,open,close}){
    const [email,setEmail] = useState("");
    const dispatch =useDispatch();
    const [loading,setLoading] = useState(true);
    const nav=useNavigate();
    // console.log(open);
    function handleChange(e){
        e.preventDefault();
        setEmail(e.target.value);
    }
    
    const token = useSelector((state)=>state.jwt_token_authentication)
    // console.log(token);
    async function getStudent(e){
        e.preventDefault();
        let link=ADMIN_BASE_URL+"/getStudent/"+email;
        // console.log(token + "-> from find student");
        // const config = ;
        
        try{
            const response = await StudentService.getStudent(link,{
              headers:{Authorization:"Bearer "+token}
            })
             student =response.data;
             if(student.name!=null){
              dispatch(findStudent(student));
            }
             
        }catch(err){
            console.log(err);
              if(err.response.status === 401)nav("/");
            
        }
        
        
        // console.log(student);
        setLoading(false);
    }
    
    student=useSelector((state)=>state.admin_get_student);
    // console.log(student);

  return (
    <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4 ">
             <DialogPanel
              transition
              className=" border-2 border-black w-full max-w-md rounded-xl bg-white/6 p-6 backdrop-blur-2xl 
              duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 shadow-2xl ">
            
              {loading && 
              <>
                <DialogTitle as="h3" className="font-light text-center mb-3 text-lg">Find Student</DialogTitle>
                <input type="email" name="email" id="std_login_email"  required placeholder="Email" className='border-2 border-gray-600 mx-2 w-full rounded-md px-3 min-h-9 placeholder:font-light placeholder:text-black' value={email} onChange={handleChange}/>
                <div className="mt-4 flex items-center justify-center">
                <Button className="bg-green-400 rounded-md px-3 py-1 hover:bg-green-500 border-2 border-green-500" onClick={getStudent}>Get Student</Button>
                <Button className="bg-yellow-300 rounded-md px-3 py-1 hover:bg-yellow-500 border-2 border-yellow-500 mx-2" onClick={()=>setEmail("")}>Clear</Button>
                <Button className='px-3 py-1 text-center  bg-red-400 rounded-md hover:bg-red-500 border-2 border-red-500' 
                onClick={close}
                >Close</Button>
                </div>
            
              </>}
                
                {!loading && student.name!="" &&

                  <>
                    <DialogTitle as="h3" className="font-light text-center mb-3 text-lg">Student Details</DialogTitle>
                    <div className="mt-4 flex flex-col flex-wrap items-center justify-center">
                        <div className=" w-full flex flex-row items-center flex-wrap justify-between pr-3">
                          <span className='mr-2 p-2 font-medium'>Student Name</span>
                          <h3 className='font-extralight text-left mb-3 block'>{student.name}</h3>
                        </div>

                        <div className=" w-full flex flex-row items-center justify-between flex-wrap pr-3">
                          <span className='mr-2 p-2 font-medium'>Student Email</span>
                          <h3 className='font-extralight text-left mb-3 block'>{student.email}</h3>
                        </div>

                        <div className=" w-full flex flex-row items-center justify-between flex-wrap pr-3">
                          <span className='mr-2 p-2 font-medium'>Student Phone</span>
                          <h3 className='font-extralight text-left mb-3 block'>{student.phone}</h3>
                        </div>

                        <div className=" w-full flex flex-row items-center justify-between flex-wrap pr-3">
                          <span className='mr-2 p-2 font-medium'>Student Register No</span>
                          <h3 className='font-extralight text-left mb-3 block'>{student.regNo}</h3>
                        </div>

                        <div className=" w-full flex flex-row items-center justify-between flex-wrap pr-3">
                          <span className='mr-2 p-2 font-medium'>Student Parent Name</span>
                          <h3 className='font-extralight text-left mb-3 block'>{student.parentName}</h3>
                        </div>

                        <div className=" w-full flex flex-row items-center justify-between flex-wrap pr-3">
                          <span className='mr-2 p-2 font-medium'>Student Parent Phone</span>
                          <h3 className='font-extralight text-left mb-3 block'>{student.parentPhone}</h3>
                        </div>

                        <div className=" w-full flex flex-row items-center justify-between flex-wrap pr-3">
                          <span className='mr-2 p-2 font-medium'>Student Department</span>
                          <h3 className='font-extralight text-left mb-3 block'>{student.department}</h3>
                        </div>

                        <div className=" w-full flex flex-row items-center justify-between flex-wrap pr-3">
                          <span className='mr-2 p-2 font-medium'>Student Native Place</span>
                          <h3 className='font-extralight text-left mb-3 block'>{student.nativePlace}</h3>
                        </div>

                        <div className=" w-full flex flex-row items-center justify-between flex-wrap pr-3">
                          <span className='mr-2 p-2 font-medium'>Student Faculty Name</span>
                          <h3 className='font-extralight text-left mb-3 block'>{student.facultyName}</h3>
                        </div>

                        <div className=" w-full flex flex-row items-center justify-between flex-wrap pr-3">
                          <span className='mr-2 p-2 font-medium'>Student Faculty Phone</span>
                          <h3 className='font-extralight text-left mb-3 block'>{student.facultyPhone}</h3>
                        </div>

                        <div className=" w-full flex flex-row items-center justify-between flex-wrap pr-3">
                          <span className='mr-2 p-2 font-medium'>Student Block</span>
                          <h3 className='font-extralight text-left mb-3 block'>{student.block}</h3>
                        </div>

                        <div className=" w-full flex flex-row items-center justify-between flex-wrap pr-3">
                          <span className='mr-2 p-2 font-medium'>Student Room No</span>
                          <h3 className='font-extralight text-left mb-3 block'>{student.room}</h3>
                        </div>

                      <button className='px-2 py-1  bg-red-400 rounded-md hover:bg-red-500 border-2 border-red-500' 
                      onClick={close}
                      >Close</button>
                    </div>
                  </>
                }
                {
                  !loading && student.name=="" && 
                  <div className='flex flex-col items-center'>
                    <h2 className="font-light text-center text-lg mb-2"> Error!!! in fetching Student </h2>
                    <button className='px-2 py-1 text-center  bg-red-400 rounded-md hover:bg-red-500 border-2 border-red-500' 
                      onClick={close}
                      >Close</button>
                  </div>
                }
            
            </DialogPanel>
          </div>
        </div>
      </Dialog>
  )
}
