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

      </div>
    </div>
  );
}

export default Dashboard;
