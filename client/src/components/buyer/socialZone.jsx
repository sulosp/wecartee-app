import React from "react";
import { SearchBar } from "../controls/search";
import Store from "../buyer/store";


export default function SocialZone() {

  return (
    <div className="flex flex-row w-full h-full relative">
      <div className="flex absolute w-2/12 z-1 h-full">
        <SearchBar />
      </div>
      <div className="flex flex-wrap  w-full h-full z-0 overflow-hidden  ">

     <Store />
      </div>
    </div>
  );
}
