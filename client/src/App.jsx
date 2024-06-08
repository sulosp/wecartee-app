import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/shared/layout";
import Dashboard from "./components/buyer/dashboard";
import BusinessDirectory from "./components/buyer/businessDirectory";
import Cart from "./components/buyer/cart";
import SocialZone from "./components/buyer/socialZone";
import Settings from "./components/shared/settings";
import SavedBusinesses from "./components/buyer/savedBusinesses";
import BuyerChat from "./components/buyer/buyerChat";
import Overview from "./components/seller/overview";
import SellerChat from './components/seller/sellerChat'
import { STORE_DATA } from "./lib/storeData";
import VR from "./components/buyer/vr";
import Store from "./components/buyer/store";


function App() {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="businessDirectory" element={<BusinessDirectory />} />
          <Route path="cart" element={<Cart />} />
          <Route path="socialZone" element={<SocialZone />}>
            {/* Route for SocialZone index or default */}
            <Route index element={<VR />} />

            {/* Generate links for each store dynamically */}
            {STORE_DATA.map((store) => (
              <Route
                key={store.id}
                path={store.url}
                element={<Store storeId={store.id} />}
              />
            ))}
          </Route>

          <Route path="settings" element={<Settings />} />
          <Route path="savedBusinesses" element={<SavedBusinesses />} />
          <Route path="buyerchat" element={<BuyerChat />} />

          {/*sellerview*/}
          <Route path="overview" element={<Overview />} />
          <Route path = "sellerchat" element ={<SellerChat />} />


        </Route>      
     
      </Routes>
    </>
  );
}

export default App;
