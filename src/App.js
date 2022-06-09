import React from "react";
import "./App.css";

import Portfolio from "./components/portfolio";
import Bio from "./components/bio";
import Footer from "./components/footer";
import Share from "./components/share";
// import Toggle from "./components/toggle";

function App() {
  return (
    <>
      {/* <Toggle /> */}
      <Share />
      <Bio />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
