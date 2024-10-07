import React from 'react'

export const BlockStudent = ({user}) => {
  return (
        <div className='border-2 border-slate-500 rounded-md flex justify-center flex-col mb-2' >
                <div className='flex flex-row justify-between items-center px-2 py-1 w-full'>
                    <h3 className='font-light mx-2'>{user.name}</h3>
                    {/* <button className='bg-green-300 rounded-md px-3 py-1 hover:bg-green-500 border-2 border-green-500 mx-2 cursor-not-allowed'>Details</button> */}
                    <h3 className='font-light mx-2'>{user.regNo}</h3>
                </div>
            </div>
  )
}
