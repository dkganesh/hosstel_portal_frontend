import React, { useState } from 'react'
import { AddRoom } from './subcomponents/AddRoom';
import { AddStaff } from './subcomponents/AddStaff';
import { EditStaff } from './subcomponents/EditStaff';
import { SortByBlock } from './subcomponents/SortByBlock';
import { SortByDept } from './subcomponents/SortByDept';
import { AddBlock } from './subcomponents/AddBlock';

export const HostelManagemet = () => {
  let [room, setRoom] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  let [staff, setStaff] = useState(false);
  let [estaff, seteStaff] = useState(false);
  let [bydept, setByDept] = useState(false);
  let [byblock, setByBlock] = useState(false);
  let [addblock, setAddblock] = useState(false);
  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false);
    setRoom(false);
    setStaff(false);
    seteStaff(false);
    setByDept(false);
    setByBlock(false);
    setAddblock(false);
  }
  return (
    <div className='w-full  flex flex-wrap items-center p-2 justify-center'>
        <button className='font-extralight px-2 py-1 bg-slate-300 rounded-md mb-3 hover:bg-slate-500 border-2 border-slate-500 mr-2'onClick={()=>{setIsOpen(true);setStaff(true)}}>Add Staff</button>
        <button className='font-extralight px-2 py-1 bg-slate-300 rounded-md mb-3 hover:bg-slate-500 border-2 border-slate-500 mr-2 cursor-not-allowed' onClick={()=>{setIsOpen(true);setAddblock(true)}}>Add Block</button>
        <button className='font-extralight px-2 py-1 bg-slate-300 rounded-md mb-3 hover:bg-slate-500 border-2 border-slate-500 mr-2 ' onClick={()=>{setIsOpen(true);setByDept(true)}}>Sort by Department</button>
        <button className='font-extralight px-2 py-1 bg-slate-300 rounded-md mb-3 hover:bg-slate-500 border-2 border-slate-500 mr-2 'onClick={()=>{setIsOpen(true);setByBlock(!byblock)}}>Sort by Block</button>
        <button className='font-extralight px-2 py-1 bg-slate-300 rounded-md mb-3 hover:bg-slate-500 border-2 border-slate-500 mr-2' onClick={()=>{setIsOpen(true);setRoom(true)}}>Add Room</button>
        <button className='font-extralight px-2 py-1 bg-slate-300 rounded-md mb-3 hover:bg-slate-500 border-2 border-slate-500 mr-2'onClick={()=>{setIsOpen(true);seteStaff(true)}}>Update Staff</button>
        <button className='font-extralight px-2 py-1 bg-slate-300 rounded-md mb-3 hover:bg-slate-500 border-2 border-slate-500 mr-2 cursor-not-allowed'>Update Block </button>
        <button className='font-extralight px-2 py-1 bg-slate-300 rounded-md mb-3 hover:bg-slate-500 border-2 border-slate-500 mr-2 cursor-not-allowed'>Mess Management</button>
        {room && isOpen && <AddRoom isOpen={isOpen} setIsOpen={setIsOpen} open={open} close={close}/>}
        {/* {addblock && isOpen && <AddBlock isOpen={isOpen} setIsOpen={setIsOpen} open={open} close={close}/>} */}
        {staff && isOpen && <AddStaff isOpen={isOpen} setIsOpen={setIsOpen} open={open} close={close}/>}
        {estaff && isOpen && <EditStaff isOpen={isOpen} setIsOpen={setIsOpen} open={open} close={close}/>}
        {byblock && isOpen && <SortByBlock isOpen={isOpen} setIsOpen={setIsOpen} open={open} close={close}/>}
        {bydept && isOpen && <SortByDept isOpen={isOpen} setIsOpen={setIsOpen} open={open} close={close}/>}

</div>
  )
}
