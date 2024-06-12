import React, { useState } from "react";
import Search from "../controls/search";
import Filter from "../controls/filter";
import { BUSINESS_DIRECTORY_LIST } from "../../lib/businessDirectoryList";
import Rating from "../controls/rating";

export default function BusinessDirectory() {
    const [searchResults, setSearchResults] = useState([]);

    const renderCategories = (categories) => {
        return categories.map((category, categoryIndex) => (
            <span
                key={categoryIndex}
                className="text-label-md text-primary-400 py-5 px-12 mx-3 rounded-full bg-primary-100"
            >
                {category}
            </span>
        ));
    };

    const renderRows = (list) => {
        return list.map((seller, index) => (
            <tr
                key={index}
                className="w-full inline-flex justify-between items-center"
            >
                <td className="inline-flex justify-start items-center text-body-md text-primary-400 gap-3 p-3 basis-3/12">
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
                    {renderCategories(seller.category)}
                </td>
                <td className="inline-flex justify-center items-center text-body-md text-primary-400 p-3 basis-2/12">
                    {seller.products}
                </td>
            </tr>
        ));
    };

    return (
        <div className="gap-5 flex flex-col justify-center items-start max-h-screen p-24 bg-surface-100 w-full">
            <div className="flex-col flex p-20 bg-white shadow-sm rounded-lg w-full">
                <div className="inline-flex justify-between items-center w-full">
                    <div className="flex flex-col justify-center items-start">
                        <span className="text-primary-700 text-headline-sm">
                            Saved Businesses
                        </span>
                        <span className="text-primary-400 text-body-md gap-1">
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
                            <th className="basis-5/12 text-body-md text-primary-400 font-medium inline-flex justify-start items-center">
                                Category
                            </th>
                            <th className="basis-2/12 text-body-md text-primary-400 font-medium inline-flex justify-center items-center">
                                Products
                            </th>
                        </tr>
                    </thead>
                    <tbody className="flex flex-col w-full justify-start items-center gap-2 mt-5">
                        {searchResults.length > 0
                            ? renderRows(searchResults)
                            : renderRows(BUSINESS_DIRECTORY_LIST)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
