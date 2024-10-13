import React, { useState } from 'react'
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import HostelService, { ADMIN_BASE_URL } from '../../service/HostelService';
import { BlockStudent } from './BlockStudent';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { putArray } from '../../slices/GetByBlock';
import Swal from 'sweetalert2';

export const SortByDept = ({isOpen, setIsOpen,open,close}) => {
    const [dept,setDept]=useState("");
    const [loading,setLoading]=useState(true);
    let [students,setStudents]=useState([]);
    const dispatch =useDispatch();
    // let students=[];
    // console.log(students)
    function clear(){
        setBlock("");
    }
    const nav=useNavigate();
    const token = useSelector((state)=>state.jwt_token_authentication);
     async function getStudents(){
        const link=ADMIN_BASE_URL+"/getStudentsOfDepartment/"+dept;

       try{
        const response  = await HostelService.getStudentsOfBlock(link,{
          headers:{Authorization:"Bearer "+token}
        });
        // setStudents(response.data);
        dispatch(putArray(response.data));
        console.log(response.data);
        // students = response.data;
        setLoading(false);
        
       }
       catch(err){
         console.log(err);
         if(err.response.status === 401)nav("/");
        Swal.fire("Try again...");
        close();
       }
      }
      students =useSelector((state)=>state.get_by_block_state);
  return (
    <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
      <div className="flex min-h-full items-center justify-center p-4 ">
        <DialogPanel
          transition
          className=" border-2 border-black max-w-md rounded-xl bg-white/6 p-6 backdrop-blur-2xl 
          duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 shadow-2xl w-full"
        >
        {loading&&
            <>
                <DialogTitle as="h3" className="font-light text-center mb-3 text-lg">Find Students by Department</DialogTitle>
                
                <div className="flex flex-col justify-center items-center">

                  <select name="department" id="department" value={dept} onChange={e=>setDept(e.target.value)} required
                    className='mb-2'>
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

                <div className="mt-4 flex items-center justify-center">
                    <Button className="bg-green-300 rounded-md px-3 py-1 hover:bg-green-500 border-2 border-green-500 mx-2" onClick={getStudents}>Get</Button>
                    <Button className="bg-yellow-300 rounded-md px-3 py-1 hover:bg-yellow-500 border-2 border-yellow-500 mx-2" onClick={clear}>Clear</Button>
                    <Button className="bg-red-300 rounded-md px-3 py-1 hover:bg-red-500 border-2 border-red-500" onClick={close}>Close</Button>
                </div>
            </>
        }
          {!loading &&
        <>
        
            <DialogTitle as="h3" className="font-light text-center mb-3 text-lg">
          Students in Department
          </DialogTitle>
          {
            students.map(e=><BlockStudent key={e.email} user={e}/>)
          }
          <div className="mt-4 flex items-center justify-center">
          <Button className="bg-red-300 rounded-md px-3 py-1 hover:bg-red-500 border-2 border-red-500" onClick={close}>Close</Button>
          </div>
          </>}
        </DialogPanel>
      </div>
    </div>
  </Dialog>
  )
}
