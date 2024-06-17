import React from "react";
import AddtoCart from "../controls/addToCart";
import Delete from "../controls/delete";
//import Attribute from "../controls/attribute";

const WishlistCard = ({ store }) => {
  return (
    <div className="w-full ">
      <div className="inline-flex justify-start items-center mb-20">
        <h1 className="text-title-lg text-primary-400">{store.store}</h1>
      </div>
      {store.products.map((product) => (
        <div
          key={product.id}
          className="grid lg:grid-cols-5 lg:grid-rows-1 lg:gap-4 md:grid-cols-2 md:grid-rows-2 justify-between items-center w-full bg-white shadow-sm p-20 rounded-md mb-4"
        >
          {/* image */}
          <img
            src={product.img[0]}
            alt={product.product}
            className="w-full lg:h-40 md:h-60 rounded-md lg:row-auto  md:row-span-3"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="flex flex-col gap-5  lg:col-span-2">
            <div className="w-full flex flex-col lg:p-0 md:ps-20">
              <p className="text-body-lg text-primary-900">
                {product.collections}
              </p>
              <h2 className="text-headline-md font-light text-primary-900">
                {product.product}
              </h2>
            </div>
            <div className="inline-flex gap-5 w-auto">
              {/* <Attribute /> 
              {product.attributes.map((attribute) => (
                <Attribute key={attribute.id} attribute={attribute} />
              ))}
                */}
            </div>
          </div>
          <div className="inline-flex gap-3 lg:justify-center md:justify-start  items-center lg:p-0 md:p-20">
            <span className="text-body-md text-primary-900">$</span>
            <span className="text-headline-md text-primary-900">
              {product.price}
            </span>
          </div>
          {/* <AddtoCart /> */}
          <div className="flex lg:flex-col md:inline-flex md:w-full md:flex-nowrap sm:flex-wrap md:justify-between lg:justify-center lg:items-end gap-2 lg:p-0 md:p-20 ">
            <AddtoCart />
            <Delete />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishlistCard;