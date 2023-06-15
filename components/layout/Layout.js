import React, { useState } from "react";

import Sidebar from "./Sidebar";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Layout = ({ children }) => {
  const [show, setShow] = useState(true);
  return (
    <div className="layout">
      <div className="layout-container">
        <div className="layout-left">
          <div onClick={() => setShow(!show)} style={{textAlign:"right"}}>{show ? <CloseIcon /> : <HamburgerIcon />}</div>
          <Sidebar show={show} setShow={setShow} />
        </div>
        <div className="layout-right">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
