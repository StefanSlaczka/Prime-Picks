import React from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search"
import Home from "./components/Home";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Search/>
      <Home />
    </React.Fragment>
  );
};

export default App;