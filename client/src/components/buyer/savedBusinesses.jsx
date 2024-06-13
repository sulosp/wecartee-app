import React from "react";
import CardView from "../shared/cardView";
import BUSINESS_DIRECTORY_LIST from "../../lib/businessDirectoryList";
import Search from "../controls/search";
import Filter from "../controls/filter";

export default function SavedBusinesses() {
    return (
        <div className="gap-5 flex flex-col justify-start items-start max-h-screen bg-surface-100 w-full">
            <div className=" flex flex-col justify-start items-start h-auto gap-5 p-24 ">
                <div className="inline-flex gap-5 justify-between items-center w-full bg-white shadow-lg p-20 rounded-lg md:flex-nowrap sm:flex-wrap  ">
                    <div className="lg:basis-2/3  md:basis-full flex flex-col text-primary-900">
                        <span className="text-primary-700 text-headline-sm">
                            Saved Businesses
                        </span>
                        <span className="text-primary-400 text-body-md ">
                            {BUSINESS_DIRECTORY_LIST.length + " "} Businesses
                        </span>
                    </div>
                    <div className="lg:basis-1/3 md:basis-full inline-flex justify-center items-center gap-2 sm:w-full sm:justify-between">
                        <Search />
                        <Filter />
                    </div>
                </div>
                <div className="w-full h-auto">
                    <CardView storeList={BUSINESS_DIRECTORY_LIST} />
                </div>
            </div>
        </div>
    );
}
