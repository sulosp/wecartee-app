// Dashboard.js
import React from "react";
import Search from './../controls/search'
import Filter from './../controls/filter'

function Dashboard() {
  return (
    <div className="w-full p-20 bg-white rounded-lg justify-center items-center h-auto ">
      <div className="inline-flex w-full justify-between items-center pb-20 border-b border-surface-100  ">
        <div className="flex flex-col justify-start gap-2">
          <span className="text-primary-400 text-headline-sm">
            Ongoing Promotions
          </span>
          <span className="text-primary-400 text-body-md gap-1 ">
            100 Products
          </span>
        </div>

        <div className="flex flex-row justify-end items-center gap-3.5">
         <Search />
         <Filter />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
