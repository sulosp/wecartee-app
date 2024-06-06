import React from "react";
import VR from "../buyer/vr";
import { STORE_DATA } from "../../lib/storeData";

export default function Store() {
  return (
    <div className="flex flex-col w-full h-full relative justify-center items-center">
      <h1 className="h-full z-2 top-1/2">{STORE_DATA[0].tagline}</h1>

      {/*VR img group  */}

      <div className="absolute z-0 top-0 left-0 w-full h-full ">
        <VR />
      </div>
    </div>
  );
}
