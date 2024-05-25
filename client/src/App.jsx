import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/shared/layout'
import Dashboard from './components/dashboard'
import BusinessDirectory from './components/businessDirectory'


function App() {
  return (
    <Routes>
      <Route path="/" element = {<Layout />}>
          <Route index element = {<Dashboard />} />
          <Route path= "businessDirectory" element = {<BusinessDirectory />} />
          
      </Route>
    </Routes>
  );
}

export default App;
