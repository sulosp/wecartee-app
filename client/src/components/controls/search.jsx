import React, { useState, useRef } from "react";
import { HiOutlineSearch, HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { BUSINESS_DIRECTORY_LIST } from "../../lib/businessDirectoryList";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { STORE_DATA } from "../../lib/storeData";

export default function Search({ setSearchResults }) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearchText(searchText);

    const filteredList = BUSINESS_DIRECTORY_LIST.filter((item) =>
      item.business.toLowerCase().includes(searchText),
    );
    setSearchResults(filteredList);
  };

  return (
    <div className="bg-primary-100 rounded-lg shadow-inner inline-flex justify-between items-center p-8 w-full">
      <input
        type="search"
        id="default-search"
        className="p-2 w-full text-sm text-primary-900 border bg-transparent border-transparent rounded-lg focus:ring-transparent focus:border-transparent focus-visible:border-transparent outline-none"
        placeholder="Search"
        value={searchText}
        onChange={handleSearch}
        required
      />
      <button
        type="submit"
        className="text-primary-900 focus:ring-4 focus:outline-none font-medium rounded-lg p-2 text-title-md"
      >
        <HiOutlineSearch />
      </button>
    </div>
  );
}

export function SearchBar() {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const searchbarRef = useRef(null);

  const toggleSearchBar = () => {
    setIsSearchBarVisible((prev) => !prev);
  };

  return (
    <div className="flex flex-row gap-0 w-full h-full min-h-screen ">
      <div
        ref={searchbarRef}
        id="searchbar"
        className={`flex flex-col gap-6 bg-white shadow-sm transition-all ${
          isSearchBarVisible
            ? "w-full ease-in duration-100 overflow-hidden p-24"
            : "w-0 p-0 overflow-hidden ease-out duration-100"
        }`}
      >
        <div className="overscroll-y-contain h-full">
          <Search setSearchResults={setSearchResults} />
          <div
            className={classNames(
              "flex",
              "flex-col",
              "gap-2",
              "mt-5",
              "transition-opacity",
              {
                "opacity-100 ease-in duration-200": isSearchBarVisible,
                "opacity-0 ease-out duration-100": !isSearchBarVisible,
              },
            )}
          >
            {searchResults.length > 0
              ? searchResults.map((item) => (
                  <Link
                    key={item.key}
                    to={item.info}
                    className="p-10 inline-flex gap-2 items-center hover:bg-secondary-100 bg-surface-100 rounded-lg"
                  >
                    <img
                      src={item.iconPath}
                      alt={item.business}
                      className="rounded-full w-10"
                    />
                    <span className="text-label-lg text-primary-400">
                      {item.business}
                    </span>
                  </Link>
                ))
              : BUSINESS_DIRECTORY_LIST.map((item) => (
                  <Link
                    key={item.key}
                    to={item.info}
                    className="p-10 inline-flex gap-2 items-center hover:bg-secondary-100 bg-surface-100 rounded-lg focus:bg-secondary-100"
                  >
                    <img
                      src={item.iconPath}
                      alt={item.business}
                      className="rounded-full w-10"
                    />
                    <span className="text-label-lg text-primary-400">
                      {item.business}
                    </span>
                  </Link>
                ))}
          </div>
        </div>
      </div>

      <button
        id="searchtab"
        className="flex flex-row justify-center items-center p-10 relative bg-primary-400"
        onClick={toggleSearchBar}
      >
        <div className="absolute top-1/2 left-full z-2 p-10 text-white">
          {isSearchBarVisible ? <HiChevronLeft /> : <HiChevronRight />}
        </div>
        <span className="inline-flex transform rotate-90 top-1/2 py-10 px-20 absolute -right-[50px] text-white bg-primary-400 rounded-md">
          Search
        </span>
      </button>
    </div>
  );
}

export function SearchStore() {
  const [searchInput, setSearchInput] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSearch = () => {
    const store = STORE_DATA.find(
      (s) => s.name.toLowerCase() === searchInput.toLowerCase().trim(),
    );
    if (store) {
      window.location.href = `socialZone${store.url}`;
    } else {
      setShowPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-inner inline-flex justify-between items-center p-8 w-full">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="p-2 w-full text-sm text-primary-900 border bg-transparent border-transparent rounded-lg focus:ring-transparent focus:border-transparent focus-visible:border-transparent outline-none"
        placeholder="Enter store name"
        required
      />
      <button
        type="submit"
        onClick={handleSearch}
        className="text-primary-900 focus:ring-4 focus:outline-none font-medium rounded-lg p-2 text-title-md"
      >
        <HiOutlineSearch />
      </button>
      {showPopup && (
        <div className="fixed top-0 right-0 bg-black bg-opacity-50 flex justify-center items-center z-50 w-5/6 h-full">
          <div className="bg-white p-4 rounded-md shadow-md flex flex-col justify-center items-center gap-7 p-40">
            <div className="flex flex-col justify-center items-center gap-4">
              <h2 className="text-center text-display-md text-center tracking-tight text-primary-900">
                Try searching again!{" "}
              </h2>
              <p className="text-body-lg text-primary-900">
                It seems the store you're looking for is hiding from us.
              </p>
            </div>

            <button
              onClick={handleClosePopup}
              className="mt-2 px-16 py-8 bg-primary-900 text-white font-bold rounded text-body-lg hover:scale-110 transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
