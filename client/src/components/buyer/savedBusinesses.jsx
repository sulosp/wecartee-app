import React, { useState, useEffect } from "react";
import CardView from "../shared/cardView";
import BUSINESS_DIRECTORY_LIST from "../../lib/businessDirectoryList";
import Search from "../controls/search";
import Filter from "../controls/filter";
import { HiChevronUp, HiChevronRight } from "react-icons/hi";
import ViewToggle from "../controls/viewToggle";
import ListView from "../shared/listView";

export default function SavedBusinesses() {
    const [searchResults, setSearchResults] = useState([]);
    const savedItems = BUSINESS_DIRECTORY_LIST.filter(
        (item) => item.save === true,
    );

    const [currentPage, setCurrentPage] = useState(1);
    const [showPagination, setShowPagination] = useState(true);
    const itemsPerPage = 4;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = savedItems.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(savedItems.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleSeeAllClick = () => {
        setShowPagination(false);
    };

    const handleDisplayPaginationClick = () => {
        setShowPagination(true);
    };

    useEffect(() => {
        // Update showPagination based on the length of searchResults
        setShowPagination(searchResults.length === 0);
    }, [searchResults]);

    const [activeView, setActiveView] = useState("card");

    return (
        <div className="gap-5 flex flex-col justify-start items-start max-h-screen bg-surface-100 w-full">
            <div className="flex flex-col w-full justify-start items-start h-auto gap-5 p-24">
                <div className="inline-flex gap-5 justify-between items-center w-full bg-white shadow-lg p-20 rounded-lg md:flex-nowrap sm:flex-wrap">
                    <div className="xl:basis-3/4 lg:basis-2/3 md:basis-full flex flex-col text-primary-900">
                        <span className="text-primary-700 text-headline-sm">
                            Saved Businesses
                        </span>
                        <span className="text-primary-400 text-body-md">
                            {savedItems.length + " "} Businesses
                        </span>
                    </div>
                    <div className="xl:basis-1/4 lg:basis-1/3 md:basis-full inline-flex justify-center items-center gap-2 sm:w-full sm:justify-between">
                        <Search setSearchResults={setSearchResults} />
                        <Filter />
                        <ViewToggle setActiveView={setActiveView} />
                    </div>
                </div>

                <div className="w-full h-auto">
                    {showPagination ? (
                        activeView === "card" ? (
                            <CardView storeList={currentItems} />
                        ) : (
                            <ListView storeList={currentItems} />
                        )
                    ) : searchResults.length > 0 ? (
                        activeView === "card" ? (
                            <CardView storeList={searchResults} />
                        ) : (
                            <ListView storeList={searchResults} />
                        )
                    ) : (
                        <p>No search results found.</p>
                    )}
                </div>

                {showPagination && (
                    <div
                        id="pagination"
                        className="inline-flex w-full justify-between items-center mt-4"
                    >
                        <div className="inline-flex justify-start items-center gap-2">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i}
                                    onClick={() => paginate(i + 1)}
                                    className={`rounded-md items-center hover:bg-primary-100 p-10 text-title-sm font-semibold text-primary-400 focus-visible:outline-none ${
                                        currentPage === i + 1
                                            ? "bg-primary-100"
                                            : "bg-white"
                                    }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>

                        <div className="w-60 flex justify-end">
                            <button
                                className="inline-flex justify-start gap-2 items-center"
                                onClick={handleSeeAllClick}
                            >
                                <span className="text-title-sm text-primary-400 text-center">
                                    See All
                                </span>
                                <HiChevronRight className="fill-primary-400" />
                            </button>
                        </div>
                    </div>
                )}

                {!showPagination && (
                    <div className="w-full justify-center items-center flex">
                        <button
                            id="displayPagination"
                            onClick={handleDisplayPaginationClick}
                            className="mt-5 text-title-lg rounded-md items-center hover:bg-primary-100 p-2 font-semibold text-primary-400 focus-visible:outline-none bg-primary-100"
                        >
                            <span>
                                {" "}
                                <HiChevronUp />
                            </span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
