import React from 'react'
import { HiStar } from "react-icons/hi";

export default function Rating(){

    return(

       <div className="rating">
      {[...Array(5)].map((_, index) => (
        <HiStar
          key={index}
          className={`star ${index < rating ? 'filled' : ''}`}
        />
      ))}
    </div>
    
    )

}