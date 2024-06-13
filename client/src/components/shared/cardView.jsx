import React from "react";
import classNames from "classnames";
import Rating from "../controls/rating";
import { HiHeart } from "react-icons/hi";
import { HiBackspace } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineInformationCircle } from "react-icons/hi";

export default function CardView({ storeList }) {
  if (!Array.isArray(storeList)) {
    return (
      <div>
        <span>You have no saved items in here</span>
      </div>
    );
  }

  return (
    <div
      className="w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 max-ex-sm:grid-cols-1 xl:gap-10 md:gap-5 sm:gap-7 
  gap-5"
    >
      {storeList.map((store) => (
        <div
          key={store.id}
          className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden "
        >
          <img src={store.cover} alt={store.name} className="w-full h-full" />

          <div
            className={classNames(
              "p-20 flex flex-col justify-start items-start gap-5",
              {
                "-mt-50": store.cover,
                "mt-0": !store.cover,
              },
            )}
          >
            <img
              src={store.iconPath}
              alt={store.business}
              className="w-15 h-15 rounded-full border-2 border-white shadow-lg"
            />
            <div className="inline-flex justify-between w-full items-center gap-2 ">
              <div className="flex flex-col justify-center items-start w-full ">
                <span className="text-primary-900 text-left text-bold text-title-md tracking-tight">
                  {store.business}
                </span>
                <Rating rating={store.rating} />
              </div>
              {store.save ? (
                <button className=" w-auto bg-red-100 text-red-600 inline-flex gap-1 justify-center items-center rounded-full  px-4 py-2.5 hover:bg-red-400 hover:text-white">
                  <span className="text-label-lg">
                    <HiBackspace />
                  </span>
                  <span className="text-label-md">Unsave</span>{" "}
                </button>
              ) : (
                <button className=" w-auto bg-primary-100 text-primary-900 inline-flex gap-1 justify-center items-center rounded-full text-label-md px-4 py-2.5 hover:bg-primary-900 hover:text-white">
                  <span className="text-label-lg">
                    <HiHeart />
                  </span>
                  <span className="text-label-md">save</span>{" "}
                </button>
              )}
            </div>

            <div className="inline-flex justify-start items-center gap-2 text-primary-400">
              <span>
                <HiOutlineShoppingCart />
              </span>
              <span className="text-label-md">
                {store.products + " "} Products
              </span>
            </div>
            <div className="inline-flex justify-start items-start gap-2 text-primary-400">
              <span>
                <HiOutlineInformationCircle />
              </span>
              <span className="text-label-md font-medium">{store.intro}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
