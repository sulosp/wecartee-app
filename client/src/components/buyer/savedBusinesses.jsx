import React, { useState } from "react";
import { BUSINESS_DIRECTORY_LIST } from "../../lib/businessDirectoryList";
import Search from "../controls/search";
import Filter from "../controls/filter";
import Rating from "../controls/rating";

export default function SavedBusinesses() {
    const [searchResults, setSearchResults] = useState([]);
    return (
        <div className="flex gap-10 flex-col justify-start items-center max-h-screen  p-24 bg-surface-100 w-full ">
            <div className="w-full p-20 rounded-lg flex flex-col justify-start items-start bg-white">
                <div className="inline-flex w-full justify-between items-start ">
                    <div className="flex flex-col justify-start gap-0">
                        <span className="text-primary-400 text-headline-sm">
                            Saved Businesses
                        </span>
                        <span className="text-primary-400 text-body-md font-light gap-1 ">
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
                        <tr className="w-full inline-flex justify-between items-center pb-14 border-surface-100 border-b">
                            <th className="basis-3/12 text-body-md text-primary-400 font-medium inline-flex justify-start items-center">
                                Business Name
                            </th>
                            <th className="basis-6/12 text-body-md text-primary-400 font-medium inline-flex justify-start items-center">
                                Category
                            </th>
                            <th className="basis-3/12 text-body-md text-primary-400 font-medium inline-flex justify-center items-center text-center">
                                Products
                            </th>
                        </tr>
                    </thead>
                    <tbody className="flex flex-col w-full justify-start items-center gap-2 mt-5">
                        {searchResults.length > 0
                            ? searchResults.map((seller) => (
                                  <tr
                                      key={seller.id}
                                      className="w-full inline-flex justify-between items-center"
                                  >
                                      <td className="inline-flex justify-start items-center text-body-md text-primary-400 gap-3 p-3 basis-3/12 ">
                                          <img
                                              src={seller.iconPath}
                                              alt="profile img"
                                              className="w-10 h-10 rounded-full"
                                          />
                                          <div className="flex flex-col justify-center items-start min-h-full">
                                              <span className="text-left">
                                                  {seller.business}
                                              </span>
                                              <Rating
                                                  rating={Math.floor(
                                                      seller.rating,
                                                  )}
                                              />
                                          </div>
                                      </td>
                                      <td className="inline-flex justify-start items-center text-body-md text-primary-400 gap-3 p-3 basis-6/12">
                                          {seller.category.map(
                                              (category, categoryIndex) => (
                                                  <span
                                                      key={categoryIndex}
                                                      className="text-label-md text-primary-400 py-5 px-12 mx-3 rounded-full bg-primary-100"
                                                  >
                                                      {category}
                                                  </span>
                                              ),
                                          )}
                                      </td>
                                  </tr>
                              ))
                            : BUSINESS_DIRECTORY_LIST.map((seller) => (
                                  <tr
                                      key={seller.id}
                                      className="w-full inline-flex justify-between items-center"
                                  >
                                      <td className="inline-flex justify-start items-center text-body-md text-primary-400 gap-3 p-3 basis-3/12 ">
                                          <img
                                              src={seller.iconPath}
                                              alt="profile img"
                                              className="w-10 h-10 rounded-full"
                                          />
                                          <div className="flex flex-col justify-center items-start min-h-full">
                                              <span className="text-left">
                                                  {seller.business}
                                              </span>
                                              <Rating
                                                  rating={Math.floor(
                                                      seller.rating,
                                                  )}
                                              />
                                          </div>
                                      </td>
                                  </tr>
                              ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
