import React from 'react'
import { HiOutlineSearch } from "react-icons/hi";

export default function Search(){
    return(
        <div className=" bg-primary-100 rounded-lg shadow-inner inline-flex justify-between items-center">
        <input
          type="search"
          id="default-search"
          className="pl-10 text-sm text-primary-900 border bg-transparent border-transparent rounded-lg  focus:ring-transparent focus:border-transparent  focus-visible:border-transparent outline-none  "
          placeholder="Search"
          required
        />
        <button
          type="submit"
          className="text-primary-900 focus:ring-4 focus:outline-none font-medium rounded-lg p-8 text-title-md"
        >
         <span><HiOutlineSearch /></span> 
        </button>
      </div>
    )
}