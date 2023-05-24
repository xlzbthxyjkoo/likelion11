import React from "react";
import {Link, Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "./Home";
import About from "./About.jsx";
import notfound from "./NotFound.jsx";

//페이지 불러오기

export default function App() {
  return(
    <BrowserRouter>
      <header>
          <Link></Link>
      </header>
      <main>
        <Routes>
          <Route/>
          <Route path = "/" element={<Home />}/>
          <Route path = "/about" />
          <Route path = "/notfound" />
        </Routes>
      </main>
    </BrowserRouter>
  );
};