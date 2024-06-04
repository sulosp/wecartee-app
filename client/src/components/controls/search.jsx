import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { BUSINESS_DIRECTORY_LIST } from "../../lib/businessDirectoryList";
import {Link} from 'react-router-dom'

export default function Search({ setSearchResults }) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearchText(searchText);

    const filteredList = BUSINESS_DIRECTORY_LIST.filter(
      (item) => item.business.toLowerCase().includes(searchText)
    );
    setSearchResults(filteredList);
  };

  return (
    <div className=" bg-primary-100 rounded-lg shadow-inner inline-flex justify-between items-center p-8 w-full">
      <input
        type="search"
        id="default-search"
        className="p-2 text-sm text-primary-900 border bg-transparent border-transparent rounded-lg focus:ring-transparent focus:border-transparent focus-visible:border-transparent outline-none"
        placeholder="Search"
        value={searchText}
        onChange={handleSearch}
        required
      />
      <button
        type="submit"
        className="text-primary-900 focus:ring-4 focus:outline-none font-medium rounded-lg p-2 text-title-md"
      >
        <span>
          <HiOutlineSearch />
        </span>
      </button>
    </div>
  );
}

export function SearchBar() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="flex flex-row gap-0 w-full">
      <div className="flex flex-col basis-3/12 p-24 gap-6 bg-white min-h-screen h-full shadow-sm">
        <div className="overscroll-y-contain h-full">
          <Search setSearchResults={setSearchResults} />
          {/* Render search results here */}
          <div className="flex flex-col gap-2 mt-5">
          {searchResults.map((item) => (
      
             
             <Link key={item.key} to ={item.info} className="p-10 inline-flex gap-2 items-center hover:bg-secondary-100 bg-surface-100 rounded-lg">
                <img src={item.iconPath} alt={item.business} className="rounded-full w-10"/>
               <span>{item.business}</span>
                </Link>

             
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
