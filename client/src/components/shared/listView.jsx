import React from "react";

export default function ListView({ storeList }) {
  if (!Array.isArray(storeList) || storeList.length === 0) {
    return (
      <div>
        <span>You have no saved items here</span>
      </div>
    );
  }
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Business Name</th>
          <th>Category</th>
          <th>Products</th>
          <th>Info</th>
        </tr>
      </thead>
      <tbody>
        {storeList.map((store, index) => (
          <tr key={index}>
            <td className="inline-flex justify-start items-center text-body-md text-primary-400 gap-3 p-3 basis-2/12">
              <img src={store.iconPath} className="w-10 h-10 rounded-full" alt="icon" />
              <div className="flex flex-col">
                <span>{store.business}</span>
                <span>{store.rating}</span>
              </div>
            </td>
            <td>{store.category}</td>
            <td>{store.products}</td>
            <td>{store.info}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
