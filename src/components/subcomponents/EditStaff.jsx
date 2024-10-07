import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import HostelService, { ADMIN_BASE_URL } from '../../service/HostelService';
import { useNavigate } from 'react-router-dom';


export const EditStaff = ({isOpen, setIsOpen,open,close}) => {
    const[staff ,setStaff]=useState({
        name:"",
        email:"",
        password:"",
        staffId:"",
        phone:""
    })
    const nav=useNavigate();
    const[ss,setSS]=useState({
        email:""
    })
    const[loading,setLoading]=useState(true);

    function handleChangeBefore(e){
        setSS({...ss,[e.target.name]:e.target.value});
    }
    function handleChange(e){
        setStaff({...staff,[e.target.name]:e.target.value});
    }
    function clear(){
        setStaff({
            name:"",
            email:"",
            password:"",
            staffId:"",
            phone:""
        });
        setSS({
            email:""
        });
    }
    const token = useSelector((state)=>state.jwt_token_authentication);
    async function findStaff(e){
        const link =ADMIN_BASE_URL+"/getStaff/"+ss.email;
        let response;
        try{
        response =(await HostelService.getStaff(link,{
          headers:{Authorization:"Bearer "+token}
        })).data;
        }catch(err){
            console.log(err);
            if(err.response.status === 401)nav("/");
        }
        // console.log(response);
        setStaff(response);
        // console.log(staff);
        setLoading(false);
    }
    
    async function updateStaff(e){
        e.preventDefault();
        const link=ADMIN_BASE_URL+"/updateStaff/"+staff.email;
       await HostelService.updateStaff(link,staff,{
        headers:{Authorization:"Bearer "+token}
      }).then(res=>{
        // console.log(res.data);
        // let x=res.data;
        // console.log(x);
        clear();
        alert(res.data);
        
       }).catch(err=>{
        console.log(err);
        if(err.response.status === 401)nav("/");
       })
        close();
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
        {loading&&
            <>
                <DialogTitle as="h3" className="font-light text-center mb-3 text-lg">Edit Staff</DialogTitle>
                <input type="email" name="email" required placeholder="Email" className='border-2 mb-2 border-gray-600 mx-2 w-full rounded-md px-3 min-h-9 placeholder:font-light placeholder:text-black'  onChange={handleChangeBefore} value={ss.name}/>
                <div className="mt-4 flex items-center justify-center">
                    <Button className="bg-green-300 rounded-md px-3 py-1 hover:bg-green-500 border-2 border-green-500 mx-2" onClick={findStaff}>Edit</Button>
                    <Button className="bg-yellow-300 rounded-md px-3 py-1 hover:bg-yellow-500 border-2 border-yellow-500 mx-2" onClick={clear}>Clear</Button>
                    <Button className="bg-red-300 rounded-md px-3 py-1 hover:bg-red-500 border-2 border-red-500" onClick={close}>Close</Button>
                </div>
            </>
        }
          {!loading &&
        <>
            <DialogTitle as="h3" className="font-light text-center mb-3 text-lg">
          Update Staff
          </DialogTitle>
          <input type="text" name="name" required placeholder="Name" className='border-2 mb-2 border-gray-600 mx-2 w-full rounded-md px-3 min-h-9 placeholder:font-light placeholder:text-black'  onChange={handleChange} value={staff.name}/>

          <input type="email" name="email" required placeholder="Email" className='border-2 mb-2 border-gray-600 mx-2 w-full rounded-md px-3 min-h-9 placeholder:font-light placeholder:text-black'  onChange={handleChange} value={staff.email}/>

          <input type="tel" name="phone" required placeholder="Phone" className='border-2 mb-2 border-gray-600 mx-2 w-full rounded-md px-3 min-h-9 placeholder:font-light placeholder:text-black'  onChange={handleChange} value={staff.phone}/>

          <input type="text" name="staffId" required placeholder="Staff ID" className='border-2 mb-2 border-gray-600 mx-2 w-full rounded-md px-3 min-h-9 placeholder:font-light placeholder:text-black' onChange={handleChange} value={staff.staffId} />

          <input type="password" name="password" required placeholder="Password" className='border-2 mb-2 border-gray-600 mx-2 w-full rounded-md px-3 min-h-9 placeholder:font-light placeholder:text-black'  onChange={handleChange} value={staff.password}/>

          <div className="mt-4 flex items-center justify-center">
          <Button className="bg-green-300 rounded-md px-3 py-1 hover:bg-green-500 border-2 border-green-500 mx-2" 
          onClick={updateStaff}>Update</Button>
          <Button className="bg-yellow-300 rounded-md px-3 py-1 hover:bg-yellow-500 border-2 border-yellow-500 mx-2" onClick={clear}>Clear</Button>
          <Button className="bg-red-300 rounded-md px-3 py-1 hover:bg-red-500 border-2 border-red-500" onClick={close}>Close</Button>
          </div>
          </>}
        </DialogPanel>
      </div>
    </div>
  </Dialog>

  )
}
