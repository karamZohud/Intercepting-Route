"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

export default function productIntercept() {
    const router=useRouter();

  return (
    <div className='flex h-screen items-center justify-center '>
        <div className='h-96 w-2/3 bg-red-600 flex items-center rounded-md justify-center flex-col px-4'>
            <h1 className='text-4xl text-red-100 font-bold'>Discount 20%</h1>
      <button onClick={()=>window.location.reload()}  className='mt-10 bg-white text-red-600 rounded-lg px-3'>Close</button>
        </div>
    </div>
  )
}
