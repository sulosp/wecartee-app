import React from "react";

const Store = ({ store }) => {
  return (
    <div className="w-full">
      <div className="inline-flex justify-start items-center">
        <h1 className="text-title-lg text-primary-400">{store.store}</h1>
      </div>
      {store.products.map((product) => (
        <div
          key={product.id}
          className="grid grid-flow-col grid-cols-4 justify-between items-center w-full bg-white shadow-sm p-20 rounded-md mb-4"
        >
          <img
            src={product.img[0]}
            alt={product.product}
            className="w-80 h-40 rounded-md "
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="w-full">
            <p className="text-body-lg text-primary-900">
              {product.collections}
            </p>
            <h2 className="text-headline-md font-light text-primary-900">
              {product.product}
            </h2>

              <div className="inline-flex gap-5">
            <p className="text-body-sm text-primary-400">
              {product.attributes.size}
            </p>
            <p className="text-body-sm text-primary-400">
              {product.attributes.color}
            </p>
            </div>

            {/* Add more product details here if needed */}
          </div>

          <div>
            <p>$ {product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Store;
