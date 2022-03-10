import React from "react";
const NavigationSidebar = ({ parameter = "home" }) => {
  const iconSize = {
    fontSize: "8px",
  };
  const padding = {
    paddingLeft: "12px",
  };
  return (
    <>
      <div className="row">
        <div className="list-group col-12 col-lg-12 col-xl-12 pe-0">
          <a
            href="../home.html"
            className="list-group-item list-group-item-action"
          >
            <i className="fab fa-twitter fa-in"></i>
          </a>
          <a
            href="../HomeScreen/explore.html"
            className={`list-group-item list-group-item-action ${
              parameter === "home" ? " active" : ""
            }`}
          >
            <i className="fa fa-home fa-in"></i>
            <span className="d-none d-xl-inline ms-1 fa-in">Home</span>
          </a>
          <a
            href="../ExploreScreen/explore.html"
            className={`list-group-item list-group-item-action${
              parameter === "explore" ? " active" : ""
            }`}
            aria-current="true"
          >
            <i className="fa fa-hashtag fa-in"></i>
            <span className="d-none d-xl-inline ms-1 fa-in">Explore</span>
          </a>
          <a
            href="../notifications.html"
            className={`list-group-item list-group-item-action${
              parameter === "notifications" ? " active" : ""
            }`}
          >
            <i className="fa fa-bell fa-in"></i>
            <span className="d-none d-xl-inline ms-1 fa-in">Notifications</span>
          </a>
          <a
            href="../messages.html"
            className={`list-group-item list-group-item-action${
              parameter === "messages" ? " active" : ""
            }`}
          >
            <i className="fa fa-envelope fa-in"></i>
            <span className="d-none d-xl-inline ms-1 fa-in">Messages</span>
          </a>
          <a
            href="../bookmarks.html"
            className={`list-group-item list-group-item-action${
              parameter === "bookmarks" ? " active" : ""
            }`}
          >
            <i className="fa fa-bookmark fa-in"></i>
            <span className="d-none d-xl-inline ms-1 fa-in">Bookmarks</span>
          </a>
          <a
            href="../lists.html"
            className={`list-group-item list-group-item-action${
              parameter === "items" ? " active" : ""
            }`}
          >
            <i className="fa fa-list fa-in"></i>
            <span className="d-none d-xl-inline ms-1 fa-in">Items</span>
          </a>
          <a
            href="../profile.html"
            className={`list-group-item list-group-item-action${
              parameter === "profile" ? " active" : ""
            }`}
          >
            <i className="fa fa-user fa-in"></i>
            <span className="d-none d-xl-inline ms-1 fa-in">Profile</span>
          </a>
          <a
            style={padding}
            href="../more.html"
            className={`wd-pl-12 list-group-item list-group-item-action${
              parameter === "more" ? " active" : ""
            }`}
          >
            <span style={iconSize} className="fa-stack fa-1x">
              <i className="fas fa-circle fa-stack-2x fa-inverse"></i>
              <i
                style={{ color: "black" }}
                className="fas fa-ellipsis-v fa-stack-1x fa-rotate-90"
              ></i>
            </span>
            <span className="d-none d-xl-inline ms-1 fa-in">More</span>
          </a>
        </div>
        <button className="btn btn-primary mt-2 wd-button-tweet px-0">
          Tweet
        </button>
      </div>
    </>
  );
};

export default NavigationSidebar;
