import React from 'react'
import { Link } from 'react-router-dom'
import Logolight from '../../assets/logolight.svg'
import Favicon from '../../assets/favicon.svg'
import Navigation from '../lib/consts/navigation'


export default function Sidebar() {
    return (
        <div className="flex flex-col justify-start align-items-center">

            <Link className="flex flex-col items-center xl:px-50 lg:px-40 md:px-20 py-20" to="/" >
                <img className="max-lg:hidden lg:flex" src={Logolight} alt="wecartee logo" />
                <img className="lg:hidden max-lg:flex w-10 h-10" src={Favicon} alt="wecartee logo" />
            </Link>

            <Navigation className = "flex flex-col flex-shrink-0 items-center" />

        </div>
    )
}