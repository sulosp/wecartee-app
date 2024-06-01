import React from "react";
import Search from "../../controls/search";
import Filter from "../../controls/filter";
import DateFilter from "../../controls/dateFilter";
import { BUSINESS_DIRECTORY } from "../../../db/businessDirectory";

export default function OngoingPromotions() {
  return (
    <div className="flex flex-col">
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
          <DateFilter />
        </div>
      </div>

      <table >
        <thead>
          <tr className="w-full text-body-md text-primary-400 font-semibold">
            <td  className="p-8 ">
              <input
                type="checkbox"
                value=""
                className="checkbox border border-primary-100 bg-primary-100"
              />
            </td>
            <td>Business Name</td>
            <td>Category</td>
            <td>Start Date</td>
            <td>End Date</td>
            <td>Products</td>
            <td>Save</td>
            <td>Info</td>
          </tr>
        </thead>
        <tbody >
          {BUSINESS_DIRECTORY.map((promotion, index) => (
            <tr key={index} className="w-full justify-between items-center">
              <td className="p-8 ">
                <input
                  type="checkbox"
                  value=""
                  className="checkbox border border-primary-100 bg-primary-100"
                />
              </td>

              <td>{promotion.business}</td>

              <td>
                {promotion.category.map((category, categoryIndex) => (
                  <span
                    key={categoryIndex}
                    className="text-label-md text-primary-400 py-5 px-12 mx-3 rounded-full bg-primary-100">
                    {category}
                  </span>
                ))}
              </td>

              <td>{formatCustomDate(promotion.startDate)}</td>
              <td>{formatCustomDate(promotion.endDate)}</td>
              <td>{promotion.products}</td>
              <td>{promotion.save ? "Yes" : "No"}</td>
              <td>
                <a href={promotion.info}>More Info</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function formatCustomDate(date) {
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  let day = date.getDate().toString().padStart(2, "0");
  let month = months[date.getMonth()]; // Month is 0-indexed
  let year = date.getFullYear().toString().slice(-2); // Get last two digits of the year
  return `${day} ${month} ${year}`;
}
