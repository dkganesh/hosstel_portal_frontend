import React, { useState } from 'react'
import { DeleteStudent } from './subcomponents/DeleteStudent'
import { FindStudent } from './subcomponents/FindStudent'
import { EditStudent } from './subcomponents/EditStudent';
import { AddStudent } from './subcomponents/AddStudent';
import { ResetPass } from './subcomponents/ResetPass';
import { RoomDetails } from './subcomponents/RoomDetails';
import { PassDetails } from './subcomponents/PassDetails';

export const StudentManagemet = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [del, setDel] = useState(false)
  let [find, setFind] = useState(false)
  let [editStudent, setEdit] = useState(false)
  let [addStudent, setAdd] = useState(false)
  let [resetPass, setResetPass] = useState(false)
  let [roomDetails, setRoomDetails] = useState(false)
  let [pass, setPass] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false);
    setDel(false);
    setFind(false);
    setEdit(false);
    setAdd(false);
    setResetPass(false);
    setRoomDetails(false);
    setPass(false);
  }
  return (
    <div className='w-full  flex flex-wrap items-center p-2 justify-center'>
        <button className='font-extralight px-2 py-1 bg-slate-300 rounded-md mb-3 hover:bg-slate-500 border-2 border-slate-500 mr-2' onClick={()=>{setIsOpen(true);setAdd(true)}}>Add Student</button>
        <button className='font-extralight px-2 py-1 bg-slate-300 rounded-md mb-3 hover:bg-slate-500 border-2 border-slate-500 mr-2' onClick={()=>{setIsOpen(true);setEdit(true)}}>Edit Student Details</button>
        <button className='font-extralight px-2 py-1 bg-slate-300 rounded-md mb-3 hover:bg-slate-500 border-2 border-slate-500 mr-2' onClick={()=>{setIsOpen(true);setFind(true)}}>Find Student</button>
        <button className='font-extralight px-2 py-1 bg-slate-300 rounded-md mb-3 hover:bg-slate-500 border-2 border-slate-500 mr-2' onClick={()=>{setIsOpen(true);setDel(true)}}>Delete Student</button>
        <button className='font-extralight  px-2 py-1 bg-slate-300 rounded-md mb-3 hover:bg-slate-500 border-2 border-slate-500 mr-2' onClick={()=>{setIsOpen(true);setPass(true)}}>Student Pass Details</button>
        <button className='font-extralight px-2 py-1 bg-slate-300 rounded-md mb-3 hover:bg-slate-500 border-2 border-slate-500 mr-2' onClick={()=>{setIsOpen(true);setRoomDetails(true)}}>Student Room Details</button>
        <button className='font-extralight px-2 py-1 bg-slate-300 rounded-md mb-3 hover:bg-slate-500 border-2 border-slate-500 mr-2' onClick={()=>{setIsOpen(true);setResetPass(true)}}>Student Password Reset</button>
        {del && isOpen && <DeleteStudent isOpen={isOpen} setIsOpen={setIsOpen} open={open} close={close}/>}
        {find && isOpen && <FindStudent isOpen={isOpen} setIsOpen={setIsOpen} open={open} close={close}/>}
        {editStudent && isOpen && <EditStudent isOpen={isOpen} setIsOpen={setIsOpen} open={open} close={close}/>}
        {addStudent && isOpen && <AddStudent isOpen={isOpen} setIsOpen={setIsOpen} open={open} close={close}/>}
        {resetPass && isOpen && <ResetPass isOpen={isOpen} setIsOpen={setIsOpen} open={open} close={close}/>}
        {roomDetails && isOpen && <RoomDetails isOpen={isOpen} setIsOpen={setIsOpen} open={open} close={close}/>}
        {pass && isOpen && <PassDetails isOpen={isOpen} setIsOpen={setIsOpen} open={open} close={close}/>}
    </div>
  )
}
