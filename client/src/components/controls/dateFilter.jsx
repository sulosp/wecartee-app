import React from "react";
import { HiOutlineCalendar } from "react-icons/hi";

export default function DateFilter() {
  return (
    <button className="p-12 bg-primary-900 rounded-lg">
      <span className="text-white text-title-md">
        <HiOutlineCalendar />
      </span>
    </button>
  );
}
