const PostList = ({
  post = {
    dp: "/images/NYP.png",
    userName: "New York Post",
    handle: "@nypost",
    time: "23h",
    p1: 'Grimes seen reading Karl Marx following split with world"s richest man Elon Musk <a href="#">trib.al/nx2Gfaq</a>',
    tweetPic: "../post1.jpg",
    comments: "965",
    retweet: "2.4k",
    likes: "4k",
  },
}) => {
  const iconSize = {
    fontSize: "8px",
  };
  return (
    <>
      <div
        className="wd-post d-flex flex-row  align-item-start justify-content-start"
        style={{ width: "100%" }}
      >
        <div>
          <img
            className="wd-user-image"
            src={post.dp}
            alt="Rocket Image"
            width="48px"
            height="48px"
          />
        </div>
        <div>
          <div className="wd-handles">
            <div>
              <span className="wd-user-name">
                <strong>
                  {post.userName}{" "}
                  <span style={iconSize} className="fa-stack fa-1x wd-size-8">
                    <i className="fas fa-circle fa-stack-2x fa-inverse"></i>
                    <i
                      style={{ color: "black" }}
                      className="fas fa-check fa-stack-1x"
                    ></i>
                  </span>
                </strong>
                &nbsp;
              </span>
              <span className="wd-user-handle">
                {post.handle} &nbsp;&nbsp;-{post.time}
              </span>
            </div>
            <div>
              <i className="material-icons">more_horiz</i>
            </div>
          </div>
          <div className="wd-data">{post.p1}</div>
          <div
            style={{ borderRadius: "16px" }}
            className="wd-sub-post wd-user-image"
          >
            <img
              style={{ borderRadius: "16px", zIndex: "-10" }}
              className="wd-post-img"
              width="500px"
              height="264px"
              src={post.tweetPic}
              alt="Example Image"
            />
            {post.h1 && post.p2 && (
              <>
                <div className="wd-subject-head">
                  <b>{post.h1}</b>
                </div>
                <div className="wd-subject-tail wd-color-gray">{post.p2}</div>
              </>
            )}
          </div>
          <div className="wd-icon">
            <div className="wd-flex">
              <a href="#">
                <i className=" wd-color-gray fa fa-comment"></i>
              </a>
              <span className="wd-icon-number wd-color-gray">
                {post.comments}
              </span>
            </div>
            <div className="wd-flex">
              <a href="#">
                <i className="material-icons wd-color-gray">loop</i>
              </a>
              <span className="wd-icon-number wd-color-gray">
                {post.retweet}
              </span>
            </div>
            <div className="wd-flex">
              <a href="#">
                <i className=" wd-color-pink fa fa-heart"></i>
              </a>
              <span className="wd-icon-number wd-color-pink">{post.likes}</span>
            </div>
            <div className="wd-flex">
              <a href="#">
                <i
                  className="material-icons wd-color-gray"
                  style={{ margin: "auto" }}
                >
                  file_upload
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostList;
