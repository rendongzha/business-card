import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./style.css";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
function Page() {
  return (
    <main className="main">
      <Info />
      <About />
      <Interests />
      <Footer />
    </main>
  );
}

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<Page />);
