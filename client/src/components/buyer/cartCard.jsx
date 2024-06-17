import React from "react";
import QuantityBtn from "../controls/quantitybtn";
import { DeleteIcon } from "../controls/delete";
import TotalPrice from "../controls/totalPrice";

export default function CartCard({ store }) {
  return (
    <>
      <div className="w-full ">
        <div className="inline-flex justify-start items-center mb-20">
          <h1 className="text-title-lg text-primary-400">{store.store}</h1>
        </div>
        {store.products.map((product) => (
          <div key={product.id} className="inline-flex w-full">
            <div className="flex basis-10/12 shadow-sm bg-white rounded-md mb-4 w-full overflow-hidden">
              <img
                src={product.img[0]}
                alt={product.name}
                className="w-40 h-40"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <div className="inline-flex justify-between items-center p-20 w-full">
                {/*product title */}
                <div className="basis-2/5 flex flex-col w-full justify-center items-start gap-5 lg:col-span-2">
                  <div className="w-full flex flex-col lg:p-0 md:ps-20">
                    <p className="text-body-lg text-primary-900">
                      {product.collections}
                    </p>
                    <h2 className="text-headline-md font-light text-primary-900">
                      {product.product}
                    </h2>
                  </div>
                  <div className="inline-flex gap-5 w-auto">
                    {/* {product.attributes.length > 0 && product.attributes.map((attribute) => (
            <Attribute key={attribute.id} attribute={attribute} />
                    ))} */}
                  </div>
                </div>
                {/*product price */}
                <div className="basis-1/5 inline-flex w-full gap-3 lg:justify-center md:justify-start items-center lg:p-0 md:p-20 text-primary-900 ">
                  <span className="text-label-lg ">$</span>
                  <span className="text-headline-sm ">{product.price}</span>
                </div>
                <div className="basis-1/5 flex flex-col gap-2 ">
                  <QuantityBtn />
                </div>
                <div className="basis-1/5 flex justify-center items-center">
                  <TotalPrice />
                </div>
              </div>
            </div>
            <div className="flex basis-2/12 w-full justify-center items-center">
              <DeleteIcon />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
