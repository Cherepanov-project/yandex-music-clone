import Footer from "./footer/footer";
import ArrowUp from "./arrowUp/arrowUp";
import React from "react";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Footer />
      <ArrowUp />
    </>
  );
};
export default Layout;
