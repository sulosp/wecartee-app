import React from 'react'
import { HiOutlineX } from "react-icons/hi";


export default function Delete() {
  return (
    <div>
      <button className="inline-flex gap-2 items-center justify-center px-20 py-8 rounded-full w-40 bg-primary-100 text-primary-900">
        <span>
          <HiOutlineX />
        </span>
        <span>Delete</span>
      </button>
    </div>
  )
}



