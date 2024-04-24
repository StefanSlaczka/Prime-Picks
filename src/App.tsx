import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Display from "./components/Display";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </React.Fragment>
    </Router>
  );
};

export default App;
