import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/shared/layout'
import Dashboard from './components/dashboard'
import Products from './components/Products'


function App() {
  return (
    <Routes>
      <Route path="/" element = {<Layout />}>
          <Route index element = {<Dashboard />} />
          <Route path= "products" element = {<Products />} />

      </Route>
    </Routes>
  );
}

export default App;
