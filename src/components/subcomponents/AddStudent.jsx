import React, { useState } from 'react'

import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import StudentService, { ADMIN_BASE_URL } from '../../service/StudentService';
import { useSelector } from 'react-redux';

export const AddStudent = ({isOpen, setIsOpen,open,close}) => {

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
        const token = useSelector((state)=>state.jwt_token_authentication)
    function handleSubmit(e){
        e.preventDefault();
        const link=ADMIN_BASE_URL+"/addStudent"
        StudentService.admin_addStudent(link,student,{
            headers:{Authorization:"Bearer "+token}
          }).then(res=>{
            alert("Student Added...");
            close();
        })
        .catch(err=>{
            console.log(err);
            if(err.response.status === 401)nav("/");
        })
    }
    function handleChange(e){
        setStudent({...student,[e.target.name]:e.target.value});
    }
    function clearFunction(){
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

  return (
    <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
      <div className="flex min-h-full items-center justify-center p-4 ">
        <DialogPanel
          transition
          className=" border-2 border-black w-full max-w-md rounded-xl bg-white/6 p-6 backdrop-blur-2xl 
          duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 shadow-2xl "
        >
          <div className=" m-auto p-3 rounded-md ">
            <form action="" className=' m-auto rounded-sm' onSubmit={handleSubmit}>
                <h3 className='text-center font-thin text-lg py-1 px-2 mb-2'>Add Student </h3>

                <div className="flex flex-col flex-wrap">

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


                </div>
                <div className="mt-4 flex items-center justify-center">
                    <button type='submit' className=' mx-4 mb-3 rounded-md px-3 bg-green-400 border-2 border-green-600 font-normal py-1 hover:bg-green-600 '>Register</button>

                    <button className=' mx-4 mb-3 rounded-md px-3 bg-yellow-400 border-2 border-yellow-600 font-normal py-1 hover:bg-yellow-600 ' onClick={clearFunction}>Clear</button>

                    <button className=' mx-4 mb-3 rounded-md px-3 bg-red-400 border-2 border-red-500 font-normal py-1 hover:bg-red-500 ' onClick={close}>Close</button>
                </div>
                

            </form>
        </div>
        </DialogPanel>
      </div>
    </div>
  </Dialog>

  )
}
