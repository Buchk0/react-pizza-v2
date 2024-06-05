import './App.css';
import React, {useState} from 'react';
import {Routes, Route} from "react-router-dom";
import { useContext, createContext } from 'react';
import "./scss/app.scss";

import Header from './components/Header'
import Home from "./pages/Home";
import NotFound from "./pages/Not-Found";
import Cart from "./pages/Cart";

export const searchContext = createContext()

function App() {
  const [searchItem, setSearchItem] = useState('');
  return (
    <div className="wrapper">
    <searchContext.Provider value={{ searchItem, setSearchItem }}>
    <Header />
    <div className="content">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='*' element={<NotFound />}/>
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
    </searchContext.Provider>
  </div>
  );
}

export default App;
