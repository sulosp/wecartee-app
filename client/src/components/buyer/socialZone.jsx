import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { STORE_DATA } from "../../lib/storeData";
import Store from "../buyer/store";
import { SearchBar } from "../controls/search";

export default function SocialZone() {
  const location = useLocation();
  const currentURL = location.pathname;

  // Find the store that matches the current URL
  const currentStore = STORE_DATA.find((store) => `/socialZone${store.url}` === currentURL);
  const storeId = currentStore ? currentStore.id : null;

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
                {currentStore ?
                  <div key={currentStore.id} className="w-full h-full">
                    <h1>{currentStore.name}</h1>
                    <p>{currentStore.tagline}</p>
                    <Link to={`/socialZone${currentStore.url}`}>Go to store</Link>

                  </div>
                  :
                  <div key={STORE_DATA[0].id} className="w-full h-full">
                    <h1>{STORE_DATA[0].name}</h1>
                    <p>{STORE_DATA[0].tagline}</p>
                    <Link to={`/socialZone${STORE_DATA[0].url}`}>Go to store</Link>
                  </div>}

              </div>
            </div>
          }
        />

        {/* Render the Store component if the current URL matches a store URL */}
        {currentStore && (
          <Route
            key={currentStore.id}
            path={`${currentStore.url}`}
            element={<Store storeId={storeId} />}
          />
        )}

      </Routes>

    </div>
  );
}