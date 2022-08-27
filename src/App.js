import React from "react";
import "./App.css";

import Portfolio from "./components/portfolio";
import Bio from "./components/bio";
import Footer from "./components/footer";
import Share from "./components/share";

function App() {
  return (
    <>
      <Share />
      <Bio />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
