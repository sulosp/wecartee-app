import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout(){
    return(
        <div>
        <h1>Sidebar</h1>
        <h1>Widget Area</h1>
        <div><Outlet/></div>
        </div>
    )
}
