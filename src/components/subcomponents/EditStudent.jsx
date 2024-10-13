import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import StudentService, { ADMIN_BASE_URL } from '../../service/StudentService';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { addIndividual,findStudent } from '../../slices/AdminFindStudent';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


export const EditStudent = ({isOpen, setIsOpen,open,close}) => {
    let student={};
    const [email,setEmail] = useState("");
    const nav =useNavigate();
    const dispatch =useDispatch();
    const [loading,setLoading] = useState(true);
    
    // console.log(open);
    function handleChange(e){
        // e.preventDefault();
        setEmail(e.target.value);
    }
    const token = useSelector((state)=>state.jwt_token_authentication)
    async function getStudent(e){
        // e.preventDefault();
        let link=ADMIN_BASE_URL+"/getStudent/"+email;
        
        try{
          // console.log(token);
            const response = await StudentService.getStudent(link,{
              headers:{Authorization:"Bearer "+token}
            });
             student =await  response.data;
             if(student.name!=null){
              if(student.password==null)student.password="";
              dispatch(findStudent(student));
              // console.log(student);
              setLoading(false);
            }
             
        }catch(err){
            console.log(err);
            // console.log(err.response.status);
            if(err.response.status == 401 || err.response.status=="401")nav("/");
        }
        
        
        // console.log(student);
        
    }
    
    
    function handleChangeForEdit(e){
        // e.preventDefault();
        const temp={
            title:e.target.name,
            value:e.target.value,
        }
        dispatch(addIndividual(temp));
        // student=useSelector((state)=>state.admin_get_student);
    }
    student=useSelector((state)=>state.admin_get_student);
    // console.log(student);
    function handleUpdate(){
        let link =ADMIN_BASE_URL+"/update/std/"+student.email;
        console.log(student);
        StudentService.updateStudent(link,student,
          {
            headers:{Authorization:"Bearer "+token}
          }
        ).then(res=>{
            // console.log(res);
            Swal.fire("Updated...");
            close();
        })
        .catch(err=>{
            console.log(err);
            if(err.response.status == 401 || err.response.status=="401")nav("/");
        })
    }
    // if(student.password==null){
    //     const temp={
    //         title:"password",
    //         value:"",
    //     }
    //     dispatch(addIndividual(temp));
    // }
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
                <DialogTitle as="h3" className="font-light text-center mb-3 text-lg">Edit Student</DialogTitle>
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
                          <input className='pl-3 py-1 font-extralight text-left mb-3 block w-[50%] h-7 rounded text-black mt-3'name='name' onChange={handleChangeForEdit} value={student.name}/>
                        </div>

                        <div className=" w-full flex flex-row items-center justify-between flex-wrap pr-3">
                          <span className='mr-2 p-2 font-medium'>Student Email</span>
                          <input className='pl-3 py-1 font-extralight text-left mb-3 block w-[50%] h-7 rounded text-black mt-3'name='email' onChange={handleChangeForEdit}  value={student.email}/>
                        </div>

                        <div className=" w-full flex flex-row items-center justify-between flex-wrap pr-3">
                          <span className='mr-2 p-2 font-medium'>Student Phone</span>
                          <input className='pl-3 py-1 font-extralight text-left mb-3 block w-[50%] h-7 rounded text-black mt-3'name='phone' onChange={handleChangeForEdit}  value={student.phone}/>
                        </div>

                        <div className=" w-full flex flex-row items-center justify-between flex-wrap pr-3">
                          <span className='mr-2 p-2 font-medium'>Student Register No</span>
                          <input className='pl-3 py-1 font-extralight text-left mb-3 block w-[50%] h-7 rounded text-black mt-3'name='regNo' onChange={handleChangeForEdit}  value={student.regNo}/>
                        </div>

                        <div className=" w-full flex flex-row items-center justify-between flex-wrap pr-3">
                          <span className='mr-2 p-2 font-medium'>Student Parent Name</span>
                          <input className='pl-3 py-1 font-extralight text-left mb-3 block w-[50%] h-7 rounded text-black mt-3'name='parentName' onChange={handleChangeForEdit}  value={student.parentName}/>
                        </div>

                        <div className=" w-full flex flex-row items-center justify-between flex-wrap pr-3">
                          <span className='mr-2 p-2 font-medium'>Student Parent Phone</span>
                          <input className='pl-3 py-1 font-extralight text-left mb-3 block w-[50%] h-7 rounded text-black mt-3'name="parentPhone" onChange={handleChangeForEdit}  value={student.parentPhone}/>
                        </div>

                        <div className=" w-full flex flex-row items-center justify-between flex-wrap pr-3">
                          <span className='mr-2 p-2 font-medium'>Student Department</span>
                          <input className='pl-3 py-1 font-extralight text-left mb-3 block w-[50%] h-7 rounded text-black mt-3' name='department' onChange={handleChangeForEdit}  value={student.department}/>
                        </div>

                        <div className=" w-full flex flex-row items-center justify-between flex-wrap pr-3">
                          <span className='mr-2 p-2 font-medium'>Student Native Place</span>
                          <input className='pl-3 py-1 font-extralight text-left mb-3 block w-[50%] h-7 rounded text-black mt-3' name='nativePlace' onChange={handleChangeForEdit}  value={student.nativePlace}/>
                        </div>

                        <div className=" w-full flex flex-row items-center justify-between flex-wrap pr-3">
                          <span className='mr-2 p-2 font-medium'>Student Faculty Name</span>
                          <input className='pl-3 py-1 font-extralight text-left mb-3 block w-[50%] h-7 rounded text-black mt-3'name='facultyName' onChange={handleChangeForEdit}  value={student.facultyName}/>
                        </div>

                        <div className=" w-full flex flex-row items-center justify-between flex-wrap pr-3">
                          <span className='mr-2 p-2 font-medium'>Student Faculty Phone</span>
                          <input className='pl-3 py-1 font-extralight text-left mb-3 block w-[50%] h-7 rounded text-black mt-3'name='facultyPhone' onChange={handleChangeForEdit}  value={student.facultyPhone}/>
                        </div>

                        <div className=" w-full flex flex-row items-center justify-between flex-wrap pr-3">
                          <span className='mr-2 p-2 font-medium'>Student Block</span>
                          <input className='pl-3 py-1 font-extralight text-left mb-3 block w-[50%] h-7 rounded text-black mt-3'name='block' onChange={handleChangeForEdit}  value={student.block}/>
                        </div>

                        <div className=" w-full flex flex-row items-center justify-between flex-wrap pr-3">
                          <span className='mr-2 p-2 font-medium'>Student Room No</span>
                          <input className='pl-3 py-1 font-extralight text-left mb-3 block w-[50%] h-7 rounded text-black mt-3'name='room' onChange={handleChangeForEdit}  value={student.room}/>
                        </div>

                        <div className=" w-full flex flex-row items-center justify-between flex-wrap pr-3">
                          <span className='mr-2 p-2 font-medium'>Password</span>
                          <input className='pl-3 py-1 font-extralight text-left mb-3 block w-[50%] h-7 rounded text-black mt-3'name='password' onChange={handleChangeForEdit}  value={student.password}/>
                        </div>

                        <div className=" w-full flex flex-row items-center justify-between flex-wrap pr-3">
                            <span className='mr-2 p-2 font-medium'>Student Department</span>
                            <div className=' inline-block mt-2 mb-2'>
                                <select name="department" id="department" value={student.department} onChange={handleChangeForEdit} >
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
                        </div>

                        <div className="flex flex-row justify-between items-center mt-2 w-[40%]">
                            <button className='px-2 py-1  bg-green-400 rounded-md hover:bg-green-500 border-2 border-green-500' 
                            onClick={handleUpdate}
                            >Update</button>
                            <button className='px-2 py-1  bg-red-400 rounded-md hover:bg-red-500 border-2 border-red-500' 
                            onClick={close}
                            >Close</button>
                        </div>
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
