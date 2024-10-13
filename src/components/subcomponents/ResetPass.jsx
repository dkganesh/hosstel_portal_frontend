import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import HostelService, { ADMIN_BASE_URL } from '../../service/HostelService';
import { useNavigate } from 'react-router-dom';
import StudentService from '../../service/StudentService';
import Swal from 'sweetalert2';

export const ResetPass = ({isOpen, setIsOpen,open,close}) => {
    const [pass,setPass] = useState({
        email:"",
        newPassword:""
    });
    const nav =useNavigate();
    const token = useSelector((state)=>state.jwt_token_authentication);
    function handleChange(e){
        setPass({...pass,[e.target.name]:e.target.value});
    }
    function clear(){
        setPass({email:"",
            newPassword:""});
    }
    function resetPass(){
        const link=ADMIN_BASE_URL+"/update/studentPassword";
        StudentService.resetPassword(link,pass,{
          headers:{Authorization:"Bearer "+token}
        }).then(res=>{
            Swal.fire("Password Changed...");
            close();
        })
        .catch(err=>{
            console.log(err);
            if(err.response.status === 401)nav("/");
        })
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
              <DialogTitle as="h3" className="font-light text-center mb-3 text-lg">
              Reset Password
              </DialogTitle>
              <input type="email" name="email" id="email"  required placeholder="Email" className='border-2 border-gray-600 mx-2 w-full rounded-md px-3 min-h-9 placeholder:font-light placeholder:text-black mb-3' value={pass.email} onChange={handleChange}/>
              <input type="password" name="newPassword" id="password"  required placeholder="New Password" className='border-2 border-gray-600 mx-2 w-full rounded-md px-3 min-h-9 placeholder:font-light placeholder:text-black' value={pass.newPassword} onChange={handleChange}/>
              <div className="mt-4 flex items-center justify-center">
              <Button className="bg-green-300 rounded-md px-3 py-1 hover:bg-green-500 border-2 border-green-500" onClick={resetPass}>Reset</Button>
              <Button className="bg-yellow-300 rounded-md px-3 py-1 hover:bg-yellow-500 border-2 border-yellow-500 mx-2" onClick={clear}>Clear</Button>
              <Button className="bg-red-300 rounded-md px-3 py-1 hover:bg-red-500 border-2 border-red-500 mx-2" onClick={close}>Close</Button>
              
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

  )
};
