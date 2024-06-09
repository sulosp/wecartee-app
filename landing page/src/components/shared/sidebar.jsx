import React from "react";
import { Link } from "react-router-dom";

import Logolight from "../../Assets/logolight.svg";
import { DASHBOARD_SIDEBAR_LINKS } from "../libs/navigation";

export default function Sidebar() {
  return (
    <div className="bg-slate-900 xl:min-h-lvh lg:min-h-lvh w-1/6">
      <div className="flex flex-col justify-between xl:min-h-lvh xl:h-full  lg:min-h-lvh lg:h-full  ">
        <div className="flex flex-col justify-start align-items-center">
          {/*logo starts */}
          <div className="flex items-center xl:px-50 lg:px-40 md:px-20 py-20">
            <Link to="/">
              <img src={Logolight} alt="logo" />
            </Link>
          </div>
        </div>
        {/*navigation starts */}
        <div class="flex flex-col flex-shrink-0 items-center">
          {DASHBOARD_SIDEBAR_LINKS.map((item) => (
            <SidebarLink key={item.key} item ={item}/>
          ))}
        </div>
      </div>
    </div>
  );
}


function SidebarLink({item}){
    return(
        <Link to ={item.path}>
        <span className = "text-xl">{item.icon}</span>
        {item.label}
        </Link>
    )
}
