import React from "react";
import { Link } from "react-router-dom";
import NavigationSidebar from "./NavigationSidebarComponent";
// import WhoToFollowList from "./WhoToFollowList/WhoToFollowList";

const Tuiter = () => {
  return (
    <>
      <h1>Tuiter</h1>
      <Link to="/hello">Hello</Link> |<Link to="/labs">Labs</Link>
      <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar parameter="home" />
        </div>
        <div className="col-10 col-lg-6 ps-3 pe-0"></div>
        <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
          {/* <WhoToFollowList /> */}
        </div>
      </div>
    </>
  );
};

export default Tuiter;
