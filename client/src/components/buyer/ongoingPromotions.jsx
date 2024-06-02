import React from "react";
import Search from "../controls/search";
import Filter from "../controls/filter";
import DateFilter from "../controls/dateFilter";
import Rating from "../controls/rating";
import Save from "../controls/save";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";

const BUSINESS_DIRECTORY = [
  {
    key: "001",
    business: "Macdonalds",
    category: ["Food", "Drink"],
    startDate: new Date("2024-01-25"),
    endDate: new Date("2024-04-20"),
    products: 25,
    save: true,
    info: "/macdonalds",
    iconPath: "/assets/seller_profiles/macdonalds.svg",
    rating: 4,
  },
  {
    key: "002",
    business: "Heineken",
    category: ["Beverages"],
    startDate: new Date("2024-02-20"),
    endDate: new Date("2024-04-20"),
    products: 50,
    save: false,
    info: "/heineken",
    iconPath: "/assets/seller_profiles/Heineken.svg",
    rating: 3,
  },

  {
    key: "003",
    business: "Chipotle",
    category: ["Food"],
    startDate: new Date("2024-03-10"),
    endDate: new Date("2024-04-25"),
    products: 50,
    save: true,
    info: "/chipotle",
    iconPath: "/assets/seller_profiles/chipotle.svg",
    rating: 4,
  },

  {
    key: "004",
    business: "Nestle",
    category: ["Food", "Drink", "Baby Products"],
    startDate: new Date("2024-03-22"),
    endDate: new Date("2024-04-22"),
    products: 35,
    save: false,
    info: "/nestle",
    iconPath: "/assets/seller_profiles/nestle.svg",
    rating: 3.75,
  },

  {
    key: "005",
    business: "Feedzai",
    category: ["Food", "Drink", "Baby Products"],
    startDate: new Date("2024-03-18"),
    endDate: new Date("2024-04-26"),
    products: 25,
    save: true,
    info: "/feedzai",
    iconPath: "/assets/seller_profiles/feedzai.svg",
    rating: 4,
  },

  {
    key: "006",
    business: "Nike",
    category: ["Shoes"],
    startDate: new Date("2024-03-22"),
    endDate: new Date("2024-04-30"),
    products: 25,
    save: true,
    info: "/nike",
    iconPath: "/assets/seller_profiles/nike.svg",
    rating: 4,
  },
];

export default function OngoingPromotions() {
  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-between items-center pb-20 border-b border-surface-100  ">
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

      <table className="flex w-full flex-col">
        <thead>
          <tr className="w-full flex justify-between items-center text-body-md text-primary-400 font-semibold">
            <td className="flex justify-center items-center   gap-3 p-3 min-h-10 basis-2/12 ">
              Business Name
            </td>
            <td className="flex justify-center items-center  gap-3 p-3 min-h-10 basis-3/12 ">
              Category
            </td>
            <td className="flex justify-center items-center  gap-3 p-3 min-h-10 basis-2/12 ">
              Start Date
            </td>
            <td className="flex justify-center items-center  gap-3 p-3 min-h-10 basis-2/12 ">
              End Date
            </td>
            <td className="flex justify-center items-center gap-3 p-3 min-h-10 basis-1/12 ">
              Products
            </td>
            <td className="flex justify-center items-center  gap-3 p-3 min-h-10 basis-1/12 ">
              Save
            </td>
            <td className="flex justify-center items-center  gap-3 p-3 min-h-10 basis-1/12 ">
              {" "}
              Info
            </td>
          </tr>
        </thead>
        <tbody>
          {BUSINESS_DIRECTORY.map((promotion, index) => (
            <tr key={index} className="w-full flex ">
              <td className="inline-flex justify-start items-center text-body-md text-primary-400 gap-3 p-3 basis-2/12 ">
                <img
                  src={promotion.iconPath}
                  alt="profile img"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex flex-col justify-center items-start min-h-full">
                  <span className="text-left">{promotion.business}</span>
                  <Rating rating={Math.floor(promotion.rating)} />
                </div>
              </td>

              <td className="inline-flex justify-start items-center text-body-md text-primary-400 gap-1 p-3 basis-3/12">
                {promotion.category.map((category, categoryIndex) => (
                  <span
                    key={categoryIndex}
                    className="text-label-md text-primary-400 py-5 px-12 mx-3 rounded-full bg-primary-100"
                  >
                    {category}
                  </span>
                ))}
              </td>

              <td className="inline-flex justify-center items-center text-body-md text-primary-400 p-3 basis-2/12">
                {formatCustomDate(promotion.startDate)}
              </td>
              <td className="inline-flex justify-center items-center text-body-md text-primary-400 p-3 basis-2/12">
                {formatCustomDate(promotion.endDate)}
              </td>
              <td className="inline-flex justify-center items-center text-body-md text-primary-400 p-3 basis-1/12 ">
                {promotion.products}
              </td>
              <td className="text-[24px] flex basis-1/12 justify-center items-center">
                <Save save={promotion.save} />
              </td>
              <td className=" flex basis-1/12 justify-center items-center">
                <Link className=" p-2" to={promotion.info}>
                  <HiChevronRight className="fill-primary-100 bg-primary-900 rounded-full  " />
                </Link>
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
