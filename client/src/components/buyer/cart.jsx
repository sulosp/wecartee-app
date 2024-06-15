import React, { useState } from "react";
import Search from "../controls/search";
import Fitler from "../controls/filter";
import ToggleButton from "../controls/toggleButton";
import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi";
import ProductCard from "../buyer/productCard";
import { PRODUCTS_LIST } from "../../lib/productsList";

export default function Cart() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="gap-5 flex flex-col justify-start items-start max-h-screen bg-surface-100 w-full">
      <div className="flex flex-col w-full justify-start items-start h-auto gap-5 p-24">
        <div className="inline-flex gap-5 justify-between items-center w-full  rounded-lg md:flex-nowrap sm:flex-wrap">
          <div className="inline-flex gap-2 justify-start items-center">
            <Search setSearchResults={setSearchResults} />
            {/*search results */}
            {searchResults.length > 0 ? <div></div> : <div></div>}
            <Fitler />
          </div>

          <ToggleButton
            iconPrimary={<HiOutlineHeart />}
            iconSecondary={<HiOutlineShoppingBag />}
            labelPrimary="Wishlist"
            labelSecondary="Cart"
            onPrimaryClick={() => console.log("Primary Clicked")}
            onSecondaryClick={() => console.log("Secondary Clicked")}
          />
        </div>

        <div className="flex flex-col w-full gap-2 justify-start items-center">
          {PRODUCTS_LIST.map((store) => (
            <ProductCard key={store.id} store={store} className="flex flex-col justify-stretch items-start w-full gap-2" />
          ))}
        </div>
      </div>
    </div>
  );
}
