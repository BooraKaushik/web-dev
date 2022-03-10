const PostSummaryItem = ({
  post = {
    topic: "Web Development",
    userName: "ReactJS",
    time: "2h",
    title:
      "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    image: "/images/React.png",
  },
}) => {
  const iconSize = {
    fontSize: "8px",
  };
  const borderGray = { border: "1px solid rgb(41, 37, 37)" };
  const colorWhite = { color: "white" };
  return (
    <div style={borderGray} className="list-group-item  wd-border-gray">
      <div className="row">
        <div className="col-9 col-lg-10">
          <p style={colorWhite} className="text-secondary mb-1">
            {post.topic}
          </p>
          <div className="d-flex flex-row justify-content-start align-items-center">
            <p style={colorWhite} className=" h5 d-inline m-0">
              {post.userName}
            </p>
            <span style={iconSize} className="fa-stack fa-1x my-auto">
              <i className="fas fa-circle fa-stack-2x fa-inverse"></i>
              <i
                style={{ color: "black" }}
                className="fas fa-check fa-stack-1x"
              ></i>
            </span>
            <div className="text-secondary">&nbsp;&nbsp;- {post.time}</div>
          </div>
          <p style={colorWhite}>{post.title}</p>
          {post.tweets ? (
            <p className="text-secondary">{post.tweets} tweets</p>
          ) : (
            <></>
          )}
        </div>
        <div className="col-3 col-md-2 my-auto">
          <img src={post.image} alt="React" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};
export default PostSummaryItem;
