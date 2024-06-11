import React, { useState } from "react";
import { BUSINESS_DIRECTORY_LIST } from "../../lib/businessDirectoryList";
import Search from "../controls/search";
import Filter from "../controls/filter";

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
                            <th>Business Name</th>
                            <th>Category</th>
                            <th>Products</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="w-full inline-flex justify-between items-center "></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
