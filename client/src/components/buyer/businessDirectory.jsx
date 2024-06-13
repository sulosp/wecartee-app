import React, { useState } from "react";
import SaveWidget from "./saveWidget";
import Search from "../controls/search";
import Filter from "../controls/filter";
import { BUSINESS_DIRECTORY_LIST } from "../../lib/businessDirectoryList";
import Rating from "../controls/rating";
import Save from "../controls/save";

export default function BusinessDirectory() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="flex flex-col justify-start items-start max-h-screen bg-surface-100 w-full ">
      <div className="inline-flex  gap-5 p-24 w-full h-full">
        <div className="w-1/4  ">
          <SaveWidget />
        </div>

        <div className="w-full flex-col p-20 bg-white rounded-lg justify-start items-between h-auto ">
          <div className="inline-flex justify-between items-center w-full">
            <div className="flex flex-col justify-center items-start">
              <span className="text-primary-700 text-headline-sm">
                Business Directory
              </span>

              <span className="text-primary-400 text-body-md">
                {BUSINESS_DIRECTORY_LIST.length + " Businesses"}
              </span>
            </div>
            <div className="inline-flex justify-end items-center gap-2">
              <Search setSearchResults={setSearchResults} />

              <Filter />
            </div>
          </div>
          <table className="w-full mt-5">
            <thead>
              <tr className="w-full inline-flex justify-between items-center pb-14 border-surface-100 border-b ">
                <th className="basis-3/12 text-body-md text-primary-400 font-medium inline-flex justify-start items-center ">
                  Business Name
                </th>
                <th className="basis-5/12 text-body-md text-primary-400 font-medium inline-flex justify-start items-center ">
                  Category
                </th>
                <th className="basis-2/12 text-body-md text-primary-400 font-medium inline-flex justify-center items-center ">
                  Products
                </th>
                <th className="basis-2/12 text-body-md text-primary-400 font-medium inline-flex justify-center items-center  ">
                  Save
                </th>
              </tr>
            </thead>
            <tbody className="flex flex-col w-full justify-start items-center gap-2 mt-5">
              {searchResults.length > 0
                ? searchResults.map((seller, index) => (
                    <tr
                      key={index}
                      className="w-full inline-flex justify-between items-center "
                    >
                      <td className="inline-flex justify-start items-center text-body-md text-primary-400 gap-3 p-3 basis-3/12 ">
                        <img
                          src={seller.iconPath}
                          alt="profile img"
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex flex-col justify-center items-start min-h-full">
                          <span className="text-left">{seller.business}</span>
                          <Rating rating={Math.floor(seller.rating)} />
                        </div>
                      </td>

                      <td className="inline-flex justify-start items-center text-body-md text-primary-400 gap-1 p-3 basis-5/12">
                        {seller.category.map((category, categoryIndex) => (
                          <span
                            key={categoryIndex}
                            className="text-label-md text-primary-400 py-5 px-12 mx-3 rounded-full bg-primary-100"
                          >
                            {category}
                          </span>
                        ))}
                      </td>

                      <td className="inline-flex justify-center items-center text-body-md text-primary-400 p-3 basis-2/12 ">
                        {seller.products}
                      </td>
                      <td className="text-[24px] flex justify-center items-center basis-2/12">
                        <Save save={seller.save} />
                      </td>
                    </tr>
                  ))
                : BUSINESS_DIRECTORY_LIST.map((seller, index) => (
                    <tr
                      key={index}
                      className="w-full inline-flex justify-between items-center "
                    >
                      <td className="inline-flex justify-start items-center text-body-md text-primary-400 gap-3 p-3 basis-3/12 ">
                        <img
                          src={seller.iconPath}
                          alt="profile img"
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex flex-col justify-center items-start min-h-full">
                          <span className="text-left">{seller.business}</span>
                          <Rating rating={Math.floor(seller.rating)} />
                        </div>
                      </td>

                      <td className="inline-flex justify-start items-center text-body-md text-primary-400 gap-1 p-3 basis-5/12">
                        {seller.category.map((category, categoryIndex) => (
                          <span
                            key={categoryIndex}
                            className="text-label-md text-primary-400 py-5 px-12 mx-3 rounded-full bg-primary-100"
                          >
                            {category}
                          </span>
                        ))}
                      </td>

                      <td className="inline-flex justify-center items-center text-body-md text-primary-400 p-3 basis-2/12 ">
                        {seller.products}
                      </td>
                      <td className="text-[24px] flex justify-center items-center basis-2/12">
                        <Save save={seller.save} />
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
