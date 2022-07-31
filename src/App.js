import React from "react";
import Home from './Components/Home'
import Register from './Components/Register'
import Login from './Components/Login'
import NanoLink from "./Components/NanoLink"

import { Routes, Route } from "react-router-dom"


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/NanoLink" element={<NanoLink/>}/>

      </Routes>
    </div>
  );
}

export default App;
