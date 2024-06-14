import React from "react";
import classNames from "classnames";
import Rating from "../controls/rating";
import {
  HiOutlineShoppingCart,
  HiOutlineInformationCircle,
} from "react-icons/hi";
import { SaveButton } from "../controls/save";
import { Link } from "react-router-dom";

export default function CardView({ storeList }) {
  if (!Array.isArray(storeList)) {
    return (
      <div>
        <span>You have no saved items in here</span>
      </div>
    );
  }

  return (
    <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-ex-sm:grid-cols-1 xl:gap-10 md:gap-5 sm:gap-7 gap-5">
      {storeList.map((store) => (
        <div
          key={store.id}
          className="flex flex-col justify-between bg-white shadow-md rounded-lg overflow-hidden"
        >
          {/*store cover */}
          <div
            className="h-[150px] w-full"
            style={{
              backgroundImage: `url(${store.cover})`,
              backgroundSize: "cover",
            }}
          ></div>

          <div
            className={classNames(
              "p-20 flex flex-col justify-start items-start gap-5",
              {
                "-mt-50": store.cover,
                "mt-0": !store.cover,
              },
            )}
          >
            {/*store profile */}
            <img
              src={store.iconPath}
              alt={store.business}
              className="w-15 h-15 rounded-full border-2 border-white shadow-lg"
            />

            {/*store data */}
            <div className="inline-flex justify-between w-full items-center gap-2 ">
              <div className="flex flex-col justify-center items-start w-full ">
                <span className="text-primary-900 text-left text-bold text-title-md tracking-tight">
                  {store.business}
                </span>
                <Rating rating={store.rating} />
              </div>

              {/*savebutton */}
              <SaveButton storeId={store.id} />
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
          <Link
            to={store.url}
            className="bg-primary-900 hover:bg-secondary-900 text-white py-12 px-24 w-full text-center"
          >
            View Products
          </Link>
        </div>
      ))}
    </div>
  );
}
