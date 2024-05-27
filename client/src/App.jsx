import React from "react";
import { Routes, Route } from "react-router-dom";
import BuyerLayout from "./components/shared/buyerlayout";
import Dashboard from "./components/buyer/dashboard";
import BusinessDirectory from "./components/buyer/businessDirectory";
import Cart from "./components/buyer/cart";
import SocialZone from "./components/buyer/socialZone";
import Settings from "./components/shared/settings";
import SavedBusinesses from "./components/buyer/savedBusinesses";
import Chat from "./components/buyer/chat";

function App() {
  return (
    <>
      <Routes>
        <Route path="/buyer" element={<BuyerLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="businessDirectory" element={<BusinessDirectory />} />
          <Route path="cart" element={<Cart />} />
          <Route path="socialZone" element={<SocialZone />} />
          <Route path="settings" element={<Settings />} />
          <Route path="savedBusinesses" element={<SavedBusinesses />} />
          <Route path="chat" element={<Chat />} />
        </Route>
      </Routes>


      <Routes>
        <Route path="/seller" element={<BuyerLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="businessDirectory" element={<BusinessDirectory />} />
          <Route path="cart" element={<Cart />} />
          <Route path="socialZone" element={<SocialZone />} />
          <Route path="settings" element={<Settings />} />
          <Route path="savedBusinesses" element={<SavedBusinesses />} />
          <Route path="chat" element={<Chat />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
