import { Fragment, useContext } from "react";
import AuthContext from "../../store/auth-context";
import Footer from "./Footer";

import NavBar from "./NavBar";
import NavBarPartner from "./NavBarPartner";

const Layout = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
      {authCtx.role !== "PARTNER" && <NavBar />}
      {authCtx.role === "PARTNER" && <NavBarPartner />}

      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
