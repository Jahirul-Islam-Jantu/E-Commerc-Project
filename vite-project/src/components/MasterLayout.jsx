import React from "react";
import PageNavbar from "./PageNavbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const MasterLayout = (props) => {
  return (
    <div>
      <PageNavbar />

      {props.children}
      <Toaster position="bottom-center" />
      <Footer />
    </div>
  );
};

export default MasterLayout;
