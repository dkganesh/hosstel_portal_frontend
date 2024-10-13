import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import StudentService, { ADMIN_BASE_URL } from '../../service/StudentService';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { addIndividual,findStudent } from '../../slices/AdminFindStudent';
import { useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../../service/AuthenticationServices';
import axios from 'axios';
import { pushPassList } from '../../slices/PassList';
import Swal from 'sweetalert2';


export const PassDetails = ({isOpen, setIsOpen,open,close}) => {

    let student=[];
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



    async function getPasses(e){
        // e.preventDefault();
        let link=SERVER_URL+"/beta/getPassList/"+email;
        
        try{
          // console.log(token);
            const response = await StudentService.getPassList(link,{
              headers:{Authorization:"Bearer "+token}
            });
            //  student =await response.data;
             dispatch(pushPassList(response.data));
            //   console.log(student);
              setLoading(false);
             
        }catch(err){
            console.log(err);
            // console.log(err.response.status);
            if(err.response.status == 401 || err.response.status=="401")nav("/");
        }
        
        
        // console.log(student);
        
    }
    
    async function approve(e){

        let link= SERVER_URL+"/beta/approvePass/"+e.target.value;
        try {
            const response = await axios.get(link,{
                headers:{Authorization:"Bearer "+token}
              });
              Swal.fire(response.data);
              close;
            
        } catch (err) {
            console.log(err);
            if(err.status == 401)nav("/");
        }
    }

  async  function decline(e){
        let link= SERVER_URL+"/beta/declinePass/"+e.target.value;
        try {
            const response = await axios.get(link,{
                headers:{Authorization:"Bearer "+token}
              });
              Swal.fire(response.data);
              close;

        } catch (err) {
            console.log(err);
            if(err.status == 401)nav("/");
        }
    }

    student=useSelector((state)=>state.pass_list);
    console.log(student);


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
                <DialogTitle as="h3" className="font-light text-center mb-3 text-lg">Pass Details</DialogTitle>
                <input type="email" name="email" id="std_login_email"  required placeholder="Staff Email" className='border-2 border-gray-600 mx-2 w-full rounded-md px-3 min-h-9 placeholder:font-light placeholder:text-black' value={email} onChange={handleChange}/>
                <div className="mt-4 flex items-center justify-center">
                <Button className="bg-green-400 rounded-md px-3 py-1 hover:bg-green-500 border-2 border-green-500" onClick={getPasses}>Get Applied Passes</Button>
                <Button className="bg-yellow-300 rounded-md px-3 py-1 hover:bg-yellow-500 border-2 border-yellow-500 mx-2" onClick={()=>setEmail("")}>Clear</Button>
                <Button className='px-3 py-1 text-center  bg-red-300 rounded-md hover:bg-red-500 border-2 border-red-500' 
                onClick={close}
                >Close</Button>
                </div>
            
              </>}
                
                {!loading &&

                <>
                    <DialogTitle as="h3" className="font-light text-center mb-3 text-lg">Applied Passes</DialogTitle>
                    <div className="mt-4 flex flex-col flex-wrap items-center justify-center">
                    {
                        student.map(e =>!e.isApproved && <div className=" w-full flex flex-col items-center flex-wrap justify-between mb-2" key={e.id}>
                                            <div className='mb-1 mt-1 flex flex-wrap items-center justify-evenly'>
                                            <span className='mr-2 p-2 font-medium'>Name : {e.name}</span>
                                            <span className='mr-2 p-2 font-medium'>Parent Name: {e.parentName}</span>
                                            <span className='mr-2 p-2 font-medium'>Parent Phone : {e.parentPhone}</span>
                                            <span className='mr-2 p-2 font-medium'>From : {e.startDate}</span>
                                            <span className='mr-2 p-2 font-medium'>To : {e.endDate}</span>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                            <button className='px-2 py-1  bg-green-400 rounded-md hover:bg-green-500 border-2 border-green-500 mr-2' 
                                            onClick={approve} value={e.id} 
                                            >Approve</button>
                                            <button className='px-2 py-1 text-center  bg-red-300 rounded-md hover:bg-red-500 border-2 border-red-500 mr-2' 
                                            onClick={decline} value={e.id}
                                             >Decline</button>
                                            </div>
                          </div>)
                    }

                    <button className='px-2 py-1  bg-red-300 rounded-md hover:bg-red-500 border-2 border-red-500 mt-3' 
                    onClick={close}>Close</button>
                    </div>

                </>
                }
                {
                  !loading && student.name=="" && 
                  <div className='flex flex-col items-center'>
                    <h2 className="font-light text-center text-lg mb-2"> Error!!! in fetching Student </h2>
                    <button className='px-2 py-1 text-center  bg-red-300 rounded-md hover:bg-red-500 border-2 border-red-500' 
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
