import React, { useState } from "react";
import Search from "../controls/search";
import Filter from "../controls/filter";
import ToggleButton from "../controls/toggleButton";
import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi";
import { PRODUCTS_LIST } from "../../lib/productsList";
import WishlistCard from "./wishlistCard";


export default function Wishlist() {
    
        const [wishList, setwishList] = useState([]);
      
        const handlewishList = (wishList) => {
          setwishList(wishList);
        }
      
        const setSearchResults = (searchResults) => {
          setwishList(searchResults);
        }
        
        return (
          <div className="gap-5 flex flex-col justify-start items-start max-h-screen bg-surface-100 w-full">
            <div className="flex flex-col w-full justify-start items-start h-auto gap-5 p-24">
              <div className="inline-flex gap-5 justify-between items-center w-full rounded-lg md:flex-nowrap sm:flex-wrap">
                <div className="inline-flex gap-2 justify-start items-center">
                  <Search setSearchResults={setSearchResults} />
                  {/* search results */}
                  <Filter />
                </div>
      
                <ToggleButton
                  iconPrimary={<HiOutlineHeart />}
                  iconSecondary={<HiOutlineShoppingBag />}
                  labelPrimary="Wishlist"
                  labelSecondary="Cart"
                  onPrimaryClick={() => handlewishList(wishList)}
                  onSecondaryClick={() => handlewishList(wishList)}
                />
              </div>
      
              <div className="flex flex-col w-full gap-2 justify-start items-center">
                {PRODUCTS_LIST.map((store) => (
                  <div key={store.id}>
                    <WishlistCard
                      store={store}
                      className="flex flex-col justify-stretch items-start w-full gap-2"
                    />
                  </div>
                ))}
              </div>
              {wishList.map((store) => (
                <div key={store.id}>
                  <WishlistCard
                    store={store}
                    className="flex flex-col justify-stretch items-start w-full gap-2"
                  />
                </div>
              ))}
            </div>
          </div>
        );
      
      
}