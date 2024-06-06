import React from "react";
import "aframe";
import VR from "../buyer/vr";

export default function Store() {
  return (
    <div className="flex flex-col w-full h-full p-50 relative">
      <div className="absolute top-0 w-full inline-flex justify-between items-center"></div>

      {/*//VR img group starting img src={STORE_DATA[0].views[0].img} className="w-full" alt="store" */}

      <div className="inline-flex overflow-hidden">
        <VR />
      </div>
    </div>
  );
}
