import React from "react";
import Search from "../../controls/search";
import Filter from "../../controls/filter";
import DateFilter from "../../controls/dateFilter";
import {PROMOTIONS} from "./../../../db/Promotions";

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

      <table>
        <thead>
          <tr className="w-full text-body-md text-primary-400 font-semibold">
            <td>
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
        <tbody>
          {PROMOTIONS.map((promotion, index) => (
            <tr key={index}>
              <td>{promotion.business}</td>
              <td>{promotion.category}</td>
              <td>{promotion.startDate}</td>
              <td>{promotion.endDate}</td>
              <td>{promotion.products}</td>
              <td>{promotion.save}</td>
              <td>{promotion.info}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
