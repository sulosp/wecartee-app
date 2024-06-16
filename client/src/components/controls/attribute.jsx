import React from 'react';
import { HiX } from "react-icons/hi";

export default function Attribute({ product }) {
  const attributes = Array.isArray(product.attributes)
    ? product.attributes
    : Object.entries(product.attributes).map(([key, value]) => `${key}: ${value}`);

  return (
    <div>
      {attributes.map((attribute, index) => (
        <button
          key={index}
          className="inline-flex gap-2 justify-center items-center text-body-md text-primary-400 bg-primary-100 shadow-inner px-10 py-2 rounded-full"
        >
          <span>{attribute}</span>
          <span>
            <HiX />
          </span>
        </button>
      ))}
    </div>
  );
}
