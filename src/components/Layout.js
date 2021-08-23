import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";

const Layout = ({ children }) => {
  //   let chh = children;

  
  return (
    <>
      <Header />
      <main className="products">{children}</main>
      <Footer />
    </>
  );
};



export default Layout;
