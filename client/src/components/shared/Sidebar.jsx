import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logolight from "../../assets/logolight.svg";
import Favicon from "../../assets/favicon.svg";
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS, SELLER_SIDEBAR_LINKS, SETTINGS_LINKS } from "../../lib/consts/navigation";
import classNames from "classnames";
import ToggleSwitch from "../controls/toggleSwitch";
import Notification from "./notification";
import ViewMode from './viewMode'


const LinkClasses =
  "text-primary-100 hover:text-primary-100  p-20 w-full flex  flex-row justify-start  items-center gap-3  max-lg:justify-center hover:bg-primary-700 text-sm font-normal leading-tight max-lg:hidden lg:flex  ";

export default function Sidebar() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const toggleNotification = () => {
    const newStatus = !notificationsEnabled;
    setNotificationsEnabled(newStatus);
    const message = newStatus
      ? "Notifications are now enabled!"
      : "Notifications are now disabled!";
    setNotifications([{ id: notifications.length + 1, message }]);
  };

 
  return (

    <div className="flex flex-col justify-between h-full align-items-center">

      <div className="flex flex-col justify-start align-items-center">
        
        <Link
          className="flex flex-col items-center xl:px-50 lg:px-40 md:px-20 py-20"
          to="/"
        >
          <img
            className="max-lg:hidden lg:flex"
            src={Logolight}
            alt="wecartee logo"
          />
          <img
            className="lg:hidden max-lg:flex w-10 h-10"
            src={Favicon}
            alt="wecartee logo"
          />
        </Link>

      <ViewModeNavigation />


      </div>
      

      <div className="flex flex-col justify-end">
        <ToggleSwitch
          label="Toggle Notifications"
          checked={notificationsEnabled}
          onChange={toggleNotification}
        />

        <Notification notifications={notifications} />

        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}

        <ViewMode />

      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? "text-primary-900 bg-primary-100"
          : "text-primary-100",
        LinkClasses
      )}
    >
      <span>{item.icon}</span>
      <span>{item.label}</span>
    </Link>
  );
}


function ViewModeNavigation(){
  const location = useLocation();
  const path = location.pathname;

if (path === "/businessDirectory" ||  path  === "/cart" || path === "/" || path === "/socialZone" || path === "/savedBusinesses" || path  === "/chat") {
  return (
    
    <div className="flex flex-col flex-shrink-0 items-center">
    {DASHBOARD_SIDEBAR_LINKS.map((item) => (
      <SidebarLink key={item.key} item={item} />
    ))}
  </div>
  );

} else if (path === "/overview"  ) {
  return (
    <div className="flex flex-col flex-shrink-0 items-center">
      {SELLER_SIDEBAR_LINKS.map((item) => (
        <SidebarLink key={item.key} item={item} />
      ))}
    </div>
  );
} else if (path === "/settings"){
  return(
    <div className = "flex flex-col flex-shrink-0 items-center">
        {SETTINGS_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))

        }
    </div>
  )
}
  
  
  
  else {
  return null;
}


}