import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logolight from '../../assets/logolight.svg'
import Favicon from '../../assets/favicon.svg'
import {DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS} from '../lib/consts/navigation'


const LinkClasses = 'text-primary-100  p-20 w-full flex  flex-row justify-start  items-center gap-3  max-lg:justify-center hover:bg-primary-700 '

export default function Sidebar() {
    return (
        <div className="flex flex-col justify-start align-items-center">

            <Link className="flex flex-col items-center xl:px-50 lg:px-40 md:px-20 py-20" to="/" >
                <img className="max-lg:hidden lg:flex" src={Logolight} alt="wecartee logo" />
                <img className="lg:hidden max-lg:flex w-10 h-10" src={Favicon} alt="wecartee logo" />
            </Link>

            <div className = "flex flex-col flex-shrink-0 items-center">

                {DASHBOARD_SIDEBAR_LINKS.map((item) =>(
                    <SidebarLink key={item.key} item={item}/>
                ) )}

            </div>
                
            <div className = "flex flex-col justify-end">

                { DASHBOARD_SIDEBAR_BOTTOM_LINKS.map( (item) => {
                    <SidebarLink key = {item.key} item = {item}/>
                })

                }
            </div>
           

        </div>
    )
}



function SidebarLink({item}){
        //const {pathName } = useLocation()
//classNames = pathName === item.path? 'text-white': '', 
    return(

        <Link to={item.path}  className = {LinkClasses}>

            <span className = "text-primary-100 ">{item.icon}</span>
            <span className="text-primary-100 text-sm font-normal leading-tight max-lg:hidden lg:flex ">{item.label}</span>
            
        </Link>

    )
}


