import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-row h-lvh ">
      <h1 className="bg-slate-900 h-screen w-1/6 overflow-hidden">Sidebar</h1>
      <div className="flex gap-5 flex-col justify-start items-center lg:min-h-lvh w-5/6 p-24 bg-surface-100">
        <Outlet />
      </div>
    </div>
  );
}
