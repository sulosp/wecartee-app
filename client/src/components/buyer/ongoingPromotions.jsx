import React, { useState, useEffect } from "react";
import Search from "../controls/search";
import Filter from "../controls/filter";
import DateFilter from "../controls/dateFilter";
import Rating from "../controls/rating";
import Save from "../controls/save";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
import { BUSINESS_DIRECTORY_LIST } from "../../lib/businessDirectoryList";
import { HiChevronUp } from "react-icons/hi";

export default function OngoingPromotions() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showPagination, setShowPagination] = useState(true);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = BUSINESS_DIRECTORY_LIST.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const totalPages = Math.ceil(BUSINESS_DIRECTORY_LIST.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSeeAllClick = () => {
    setShowPagination(false);
  };

  const handleDisplayPaginationClick = () => {
    setShowPagination(true);
  };

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Update showPagination based on the length of searchResults
    setShowPagination(searchResults.length === 0);
  }, [searchResults]);

  return (
    <div className="flex flex-col justify-between w-full h-full">
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
          <Search setSearchResults={setSearchResults} />
          <Filter />
          <DateFilter />
        </div>
      </div>

      <table className="flex w-full flex-col h-full ">
        <thead>
          <tr className="flex justify-between items-center text-body-md text-primary-400 font-semibold">
            <td className="flex justify-start items-center   gap-3 p-3 min-h-10 basis-2/12 ">
              Business Name
            </td>
            <td className="flex justify-start items-center  gap-3 p-3 min-h-10 basis-3/12 ">
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
              Info
            </td>
          </tr>
        </thead>

        {showPagination ? (
          <tbody>
            {currentItems.map((promotion, index) => (
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
                    <HiChevronRight className="fill-primary-100 bg-primary-900 rounded-full" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {searchResults.length > 0
              ? searchResults.map((promotion, index) => (
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
                        <HiChevronRight className="fill-primary-100 bg-primary-900 rounded-full" />
                      </Link>
                    </td>
                  </tr>
                ))
              : BUSINESS_DIRECTORY_LIST.map((promotion, index) => (
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
                        <HiChevronRight className="fill-primary-100 bg-primary-900 rounded-full" />
                      </Link>
                    </td>
                  </tr>
                ))}
          </tbody>
        )}
      </table>

      {showPagination ? (
        <div id="pagination" className="flex justify-between items-center mt-4">
          <div className="inline-flex justify-start items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`class=" rounded-md items-center hover:bg-primary-100 p-10 text-title-sm font-semibold text-primary-400 focus-visible:outline-none " ${
                  currentPage === i + 1 ? "bg-primary-100  " : "bg-white"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <div className=" w-60 flex justify-end">
            <button
              className="inline-flex justify-start gap-2 items-center"
              onClick={handleSeeAllClick}
            >
              <span className="text-title-sm text-primary-400 text-center ">
                See All
              </span>
              <HiChevronRight className="fill-primary-400" />
            </button>
          </div>
        </div>
      ) : null}

      <div className="w-full justify-center items-center flex ">
        {!showPagination && (
          <button
            id="displayPagination"
            onClick={handleDisplayPaginationClick}
            className="mt-5 text-title-lg rounded-md items-center hover:bg-primary-100 p-2 font-semibold text-primary-400 focus-visible:outline-none bg-primary-100  "
          >
            <span>
              {" "}
              <HiChevronUp />
            </span>
          </button>
        )}
      </div>
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
