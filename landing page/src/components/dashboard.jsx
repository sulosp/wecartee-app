import React from 'react'
import {Link } from 'react-router-dom'


export default function Dashboard(){
    return (
        <div className="font-bold">
            <p>
            This is the dashboard
            </p>
            <Link to="/products" className='underline'>To Products</Link>
        </div>
      
    )
}