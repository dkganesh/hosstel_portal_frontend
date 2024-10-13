import React, { useState } from 'react'
import StudentService, { ADMIN_BASE_URL } from '../../service/StudentService';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


export const DeleteStudent = ({isOpen, setIsOpen,open,close}) => {
    const [email,setEmail] = useState("");
    const nav=useNavigate();
    // console.log(open);
    function handleChange(e){
        e.preventDefault();
        setEmail(e.target.value);
    }
    const token = useSelector((state)=>state.jwt_token_authentication);
    function deleteStudentByAdmin(e){
        e.preventDefault();
        const link = ADMIN_BASE_URL + "/delete/std/"+email;
        // console.log(link);
        // console.log(email);
        StudentService.deleteStudent(link,
          {
            headers:{Authorization:"Bearer "+token}
          }
        ).then(res=>{Swal.fire(res.data);}).catch(err=>{console.log(err)
          if(err.response.status === 401)nav("/");
        });
        // console.log("completed");
        setEmail("");
        setIsOpen(false);
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
              Delete Student
              </DialogTitle>
              <input type="email" name="email" id="std_login_email"  required placeholder="Email" className='border-2 border-gray-600 mx-2 w-full rounded-md px-3 min-h-9 placeholder:font-light placeholder:text-black' value={email} onChange={handleChange}/>
              <div className="mt-4 flex items-center justify-center">
              <Button className="bg-red-400 rounded-md px-3 py-1 hover:bg-red-500 border-2 border-red-500" onClick={deleteStudentByAdmin}>Delete Student</Button>
              <Button className="bg-yellow-300 rounded-md px-3 py-1 hover:bg-yellow-500 border-2 border-yellow-500 mx-2" onClick={()=>setEmail("")}>Clear</Button>
              <Button className='px-3 py-1 text-center  bg-red-400 rounded-md hover:bg-red-500 border-2 border-red-500' 
              onClick={close}
              >Close</Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
  )
}
