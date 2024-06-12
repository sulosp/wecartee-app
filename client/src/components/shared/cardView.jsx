import React from "react";
import classNames from "classnames";
import Rating from "../controls/rating";

export default function CardView({ storeList }) {
  if (!Array.isArray(storeList)) {
    return (
      <div>
        <span>You have no saved items in here</span>
      </div>
    );
  }

  return (
    <div className="inline-flex justify-between items-start gap-5 flex-wrap w-full">
      {storeList.map((store) => (
        <div
          key={store.id}
          className="flex flex-col basis-1/5 bg-white shadow-md rounded-lg overflow-hidden "
        >
          <img src={store.cover} alt={store.name} className="w-full h-full" />

          <div
            className={classNames("p-20 flex flex-col gap-5", {
              "-mt-50": store.cover,
              "mt-0": !store.cover,
            })}
          >
            <img
              src={store.iconPath}
              alt={store.business}
              className="w-15 h-15 rounded-full border-2 border-white shadow-lg"
            />
            <div className="inline-flex">
              <div className="flex flex-col justify-center items-start w-full">
                <span className="text-primary-900 text-left text-title-md tracking-tight">
                  {store.business}
                </span>
                <Rating rating={store.rating} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
