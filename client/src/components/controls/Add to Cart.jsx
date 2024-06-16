import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function AddtoCart() {
  return (
   
      <button className="inline-flex gap-2 items-center justify-center px-20 py-8 rounded-full w-40 bg-primary-900 text-white">
        <span>
          <HiOutlineShoppingCart />
        </span>
        <span>Add to Cart</span>
      </button>
      
  
  );
}
