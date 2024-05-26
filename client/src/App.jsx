import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/shared/layout'
import Dashboard from './components/dashboard'
import BusinessDirectory from './components/businessDirectory'
import Cart from './components/cart'
import SocialZone from './components/socialZone'
import Settings from './components/settings'
import SavedBusinesses from './components/savedBusinesses'
import Chat from './components/chat'

function App() {
  return (
    <Routes>
      <Route path="/" element = {<Layout />}>
          <Route index element = {<Dashboard />} />
          <Route path= "businessDirectory" element = {<BusinessDirectory />} />
          <Route path = "cart" element = {<Cart />} />
          <Route path = "socialZone" element = {<SocialZone />} />
          <Route path = "settings" element = {<Settings />} />
          <Route path = "savedBusinesses" element = {<SavedBusinesses/>} />
          <Route path = "chat" element = {<Chat />} />
      </Route>
    </Routes>
  );
}

export default App;
