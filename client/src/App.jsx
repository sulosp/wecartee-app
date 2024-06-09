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
import SellerChat from "./components/seller/sellerChat";


function App() {
  return (
    <>

    
      <Routes>

          <Route path ="/home" element={<Home />} />

        <Route path="/" element={<Layout />}>
          
          <Route index element={<Dashboard />} />
          <Route path="businessDirectory" element={<BusinessDirectory />} />
          <Route path="cart" element={<Cart />} />
          <Route path="socialZone/*" element={<SocialZone />} />

          <Route path="settings" element={<Settings />} />
          <Route path="savedBusinesses" element={<SavedBusinesses />} />
          <Route path="buyerchat" element={<BuyerChat />} />

          {/*sellerview*/}
          <Route path="overview" element={<Overview />} />
          <Route path="sellerchat" element={<SellerChat />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
