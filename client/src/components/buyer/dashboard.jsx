<<<<<<< HEAD
// Dashboard.js
import React from "react";
import Search from './../controls/search'
import Filter from './../controls/filter'

function Dashboard() {
  return (
    <div className="w-full p-20 bg-white rounded-lg justify-center items-center h-auto ">
      <div className="inline-flex w-full justify-between items-center pb-20 border-b border-surface-100  ">
        <div className="flex
         flex-col justify-start gap-2">
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
=======
import React from "react";
import OngoingPromotions from "./ongoingPromotions.jsx";
import SaveWidget from "./saveWidget.jsx";
import UpcomingPromotion from "./upcomingPromotion.jsx";

function Dashboard() {
  return (
    <div className="flex gap-5 flex-col justify-start items-center max-h-screen  p-24 bg-surface-100 w-full ">

      <div className="w-full flex p-20 bg-white rounded-lg justify-center items-center h-auto ">
        <OngoingPromotions />
      </div>

      <div className="flex flex-row justify-between w-full gap-5 h-auto">

        <div className="w-1/2 ">
          <SaveWidget />
        </div>

        <div className="w-1/2">
        <UpcomingPromotion />
        </div>

>>>>>>> b64d44e65a0c967ea04e5fb888d683035c4e061e
      </div>
    </div>
  );
}

export default Dashboard;
