import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { STORE_DATA } from "../../lib/storeData";
import Store from "../buyer/store";
import { SearchBar, SearchStore } from "../controls/search";
import TextAnimation from "../controls/textAnimation";

export default function SocialZone() {
  const location = useLocation();
  const currentURL = location.pathname;

  // Find the store that matches the current URL
  const currentStore = STORE_DATA.find(
    (store) => `/${store.url}` === currentURL,
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
                    <Store storeId={currentStore.id} />
                  </div>
                ) : (
                  <div
                    id="socialZoneDemo"
                    className="flex flex-col bg-surface-100 w-full justify-center items-center "
                  >
                    <div className="flex flex-col gap-7 justify-between items-center w-1/3 h-1/3">
                      <div className="flex flex-col gap-4 justify-center items-center">
                        <h1 className="text-display-sm text-center text-primary-900 tracking-tight ">
                          {" "}
                          Search for a
                        </h1>
                        <TextAnimation />
                        <h1 className="text-display-sm text-center text-primary-900 tracking-tight ">
                          {" "}
                          Store
                        </h1>
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
