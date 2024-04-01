import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Players from "./pages/Players";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="*" element={<NotFoundPage />} /> */}
        <Route index element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/players" element={<Players />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
