import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-full">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
