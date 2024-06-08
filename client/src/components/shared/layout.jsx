import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";


export default function Layout() {
  return (
    <div className="flex flex-row h-lvh relative ">
      <div className="bg-slate-900 h-screen w-1/6 overflow-hidden top-0 left-0 bottom-0">
        <Sidebar />
      </div>

      <div className="lg:min-h-lvh w-5/6 overflow-x-hidden bg-surface-100 ">
        <div className="w-full h-full overscroll-y-contain">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

