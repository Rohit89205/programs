import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Pagination from './Pagination';
import Home from "./pages/Home";
import Pagination from "./pages/Pagination";
import About from "./pages/About";
import Navbar from "./comp/Navbar";
import UseReducerComp from "./comp/UseReducer/UseReducerComp";
import UseRefComp from "./comp/UseRef/UseRefComp";

// import MoneyState from "./comp/UseContext/MoneyState";
import UseLayoutComp from "./comp/UseLayout/UseLayoutComp";

import UseCallbackComp from "./comp/UseCallback/UseCallbackComp";
import UseMemoComp from "./comp/UseMemo/UseMemoComp";

import "./App.css";
import { ThemeProvider } from "./theme-context";

const App = () => {
  return (
    <>
    {/* <UseReducerComp /> */}
    <UseMemoComp />
    {/* <MoneyState>

    </MoneyState> */}
    {/* <UseRefComp /> */}
    </>
    // <ThemeProvider>
    //   <BrowserRouter>
    //     {/* <Pagination /> */}
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/pagination" element={<Pagination />} />
    //       <Route path="/about" element={<About />} />
    //     </Routes>
    //   </BrowserRouter>
    // </ThemeProvider>
  );
};

export default App;
