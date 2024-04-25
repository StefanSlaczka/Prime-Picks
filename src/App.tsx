import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Display from "./components/Display";
import ViewDetials from "./components/ViewDetials"

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/display" element={<Display />} />
          <Route path="ViewDetials" element={<ViewDetials/>}/>
        </Routes>
      </React.Fragment>
    </Router>
  );
};

export default App;
