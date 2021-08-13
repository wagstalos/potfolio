import React from "react";
import "./App.css";

import Portfolio from "./components/portfolio";
import Bio from "./components/bio";
import Footer from "./components/footer";
// import Toggle from "./components/toggle";

function App() {
  return (
    <>
      {/* <Toggle /> */}
      <Bio />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
