import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
  return (
    <>
      <div className="wd-border-gray">
        <div className="row mb-2">
          <div className="col-11">
            <div className="input-group col-10">
              <span
                style={{
                  backgroundColor: "rgb(34, 37, 39)",
                  borderRadius: "16px 0px 0px 16px",
                }}
                className="wd-bgcolor-gray input-group-text wd-border-16"
                id="wd-search-icon"
              >
                <i className="fas fa-search  fa-in"></i>
              </span>
              <input
                style={{
                  borderRadius: "0px 16px 16px 0px",
                  borderColor: "transparent",
                  borderLeft: "0px",
                  paddingLeft: "8px",
                }}
                type="text"
                className="wd-bgcolor-gray wd-search form-control wd-border-16"
                placeholder="Search Twitter"
                aria-label="twitter"
                aria-describedby="wd-search-icon"
              />
            </div>
          </div>
          <div className="col-1 m-auto">
            <i
              style={{ color: "#2a9fd6" }}
              className="fas fa-cog wd-double fa-in"
            ></i>
          </div>
        </div>
        <ul className="nav nav-tabs mb-0 wd-bct">
          <li className="nav-item">
            <a className="nav-link active wd-color-gray" href="../for-you.html">
              For You
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link wd-color-gray" href="../trending.html">
              Trending
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link wd-color-gray" href="../news.html">
              News
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link wd-color-gray" href="../sports.html">
              Sports
            </a>
          </li>
          <li className="nav-item d-none d-md-inline">
            <a
              className="nav-link wd-color-gray px-lg-1 px-xl-2"
              href="../entertainment.html"
            >
              Entertainment
            </a>
          </li>
        </ul>
      </div>
      <div className="position-relative wd-border-gray">
        <img
          src={"/images/spacex.jfif"}
          alt="Spacex Image"
          className="img-fluid"
        />
        <h3 className="position-absolute bottom-0 start-0 px-3 py-2 wd-color-white">
          Space X's Starship
        </h3>
      </div>
      <div className="list-group">
        <PostSummaryList />
      </div>
    </>
  );
};
export default ExploreComponent;
