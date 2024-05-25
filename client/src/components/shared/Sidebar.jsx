import React from 'react'
import { Link } from 'react-router-dom'
import Logolight from '../../assets/logolight.svg'
import Favicon from '../../assets/favicon.svg'
import {DASHBOARD_SIDEBAR_LINKS} from '../lib/consts/navigation'


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

        </div>
    )
}



function SidebarLink({item}){
    return(
        <Link to={item.path}  className = "text-primary-100 hover:text-primary-900 p-20 w-full flex  flex-row justify-start  items-center gap-3  max-lg:justify-center ">
            <span className = "text-primary-100">{item.icon}</span>
            {item.label}
            
        </Link>
    )
}



