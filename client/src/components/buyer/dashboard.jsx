
import React from "react";
import OngoingPromotions from "./ongoingPromotions.jsx";
import SavedBusinessWidget from "./savedBusinessWidget.jsx";

function Dashboard() {
  return (
    <div className="flex gap-5 flex-col justify-start items-center lg:min-h-lvh  p-24 bg-surface-100 w-full">
    <div className="w-full flex p-20 bg-white rounded-lg justify-center items-center h-auto ">
      <OngoingPromotions />
      </div>

      <div className = "flex flex-row justify-between w-full gap-5 h-full">
        <SavedBusinessWidget />
      </div>
      </div>
    
  );
}

export default Dashboard;
