import { Fragment } from "react";
import Footer from "./Footer";

import NavBar from "./NavBar";
import NavBarPartner from "./NavBarPartner";

const Layout = (props) => {
  const role = "";

  return (
    <Fragment>
      {role !== "PARTNER" && <NavBar />}
      {role === "PARTNER" && <NavBarPartner />}

      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
