import React from "react";
import VR from "../buyer/vr";
import { STORE_DATA } from "../../lib/storeData";
import { Link} from "react-router-dom";

export default function Store() {


  return (
    <div className="flex flex-col w-full h-full relative justify-center items-center">
      <div className="absolute z-1 top-0 w-full inline-flex justify-between items-center">
        <div className="view-options btn-group p-5 rounded-full bg-white">
          {STORE_DATA.categories.map((store) => (
            <Link
              key={category.id}
              to={`/store/${store.name}/category/${category.name}/view/${
                category.views ? category.views[0].id : ""
              }`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>

      <h1 className="z-1 text-white w-5/12 text-center text-display-lg">
        {store.tagline}
      </h1>

      <div className="absolute z-0 top-0 left-0 w-full h-full ">
        <VR />
      </div>
    </div>
  );
}
