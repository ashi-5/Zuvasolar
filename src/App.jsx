import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Work from "./pages/Work.jsx";
import Contact from "./pages/Contact.jsx";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div className="relative h-full w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        {/* <Route path="/investors" element={<Investors />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
