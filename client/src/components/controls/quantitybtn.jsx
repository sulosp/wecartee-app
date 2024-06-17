import React from "react";
import { HiOutlinePlusSm, HiOutlineMinusSm } from "react-icons/hi";

export default function QuantityBtn() {
  return (
    <div className="inline-flex bg-primary-100 rounded-full shadow-inner justify-between items-center gap-5 p-10">
      <button className="p-5 bg-primary-900 text-white rounded-full">
        <span>
          <HiOutlinePlusSm />
        </span>
      </button>
      <span>01</span>
      <button className="p-5 bg-primary-900 text-white rounded-full">
        <span>
          <HiOutlineMinusSm />
        </span>
      </button>
    </div>
  );
}
