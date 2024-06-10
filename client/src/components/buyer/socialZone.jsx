import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { STORE_DATA } from "../../lib/storeData";
import Store from "../buyer/store";
import { SearchBar, SearchStore } from "../controls/search";

export default function SocialZone() {
  const location = useLocation();
  const currentURL = location.pathname;

  // Find the store that matches the current URL
  const currentStore = STORE_DATA.find(
    (store) => `/${store.url}` === currentURL
  );

  return (
    <div className="flex flex-row w-full h-full relative flex-wrap">
      <div className="flex absolute w-2/12 z-2 h-full">
        <SearchBar />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div className="inline-flex flex-wrap w-full h-full z-0 overflow-hidden">
              <div className="flex w-full h-full">
                {currentStore ? (
                  <div key={currentStore.id} className="w-full h-full">
                    <h1>{currentStore.name}</h1>
                    <p>{currentStore.tagline}</p>
                    <Link to={`/${currentStore.url}`}>Go to store</Link>
                  </div>
                ) : (
                  <div className="flex flex-col bg-surface-100 w-full justify-center items-center ">
                    <div className="flex flex-col gap-7 justify-center items-center">
                      <div className="flex flex-col gap-3 justify-center items-center">
                        <h1 className="text-display-md text-center ">
                          {" "}
                          Search for a
                        </h1>
                        <h1 className="text-display-xl text-center font-light">
                          {" "}
                          Seach for a
                        </h1>
                        <h1 className="text-display-md text-center"> Store</h1>
                      </div>
                      <SearchStore />
                    </div>
                  </div>
                )}
              </div>
            </div>
          }
        />

        {/* Render the Store component if the current URL matches a store URL */}
        {STORE_DATA.map((store) => (
          <Route
            key={store.id}
            path={store.url}
            element={<Store storeId={store.id} />}
          />
        ))}
      </Routes>
    </div>
  );
}
