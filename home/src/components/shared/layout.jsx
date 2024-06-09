import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from './sidebar'

export default function Layout() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen ">
      <Sidebar />
      <div className="flex gap-5 flex-col justify-start items-center lg:min-h-lvh w-5/6 p-60 bg-surface-100">
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
}
