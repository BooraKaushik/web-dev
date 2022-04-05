import { useDispatch } from "react-redux";
import { deleteTuit } from "./actions/tuits-actions";
import TuitStats from "./tuit-stats";

const TuitListItem = ({
  post = {
    _id: "123",
    topic: "Web Development",
    postedBy: {
      username: "ReactJS",
    },
    liked: true,
    verified: false,
    handle: "ReactJS",
    time: "2h",
    title:
      "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    tuit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    attachments: {
      video: "unKvMC3Y1kI",
    },
    "logo-image": "/Images/nodejs.jpg",
    "avatar-image": "/Images/nodejs.jpg",
    stats: {
      comments: 123,
      retuits: 234,
      likes: 345,
    },
  },
}) => {
  const dispatch = useDispatch();
  const deleteTuit = (tuit) => {
    dispatch({ type: "delete-tuit", tuit });
  };
  const likeTuit = (tuit) => {
    dispatch({ type: "like-tuit", tuit });
  };

  const iconSize = {
    fontSize: "8px",
  };

  return (
    <>
      <div
        className="wd-post d-flex flex-row  align-item-start justify-content-start"
        style={{ width: "100%", backgroundColor: "#222" }}
      >
        <div>
          <img
            className="wd-user-image"
            src={post["logo-image"] ? post["logo-image"] : ""}
            alt="Rocket"
            width="48px"
            height="48px"
            style={{ borderRadius: "24px" }}
          />
        </div>
        <div style={{ width: "100%" }}>
          <div className="wd-handles">
            <div>
              <span className="wd-user-name">
                <strong>
                  {post.postedBy &&
                    post.postedBy.username &&
                    post.postedBy.username}
                  {post.verified && (
                    <span style={iconSize} className="fa-stack fa-1x wd-size-8">
                      <i className="fas fa-circle fa-stack-2x fa-inverse"></i>
                      <i
                        style={{ color: "black" }}
                        className="fas fa-check fa-stack-1x"
                      ></i>
                    </span>
                  )}
                </strong>
                &nbsp;
              </span>
              {post.handle && (
                <span className="wd-user-handle">@{post.handle}</span>
              )}
            </div>
            <div>
              <i
                onClick={() => deleteTuit(dispatch, post)}
                className="material-icons"
              >
                close
              </i>
            </div>
          </div>
          {post.tuit && (
            <>
              <div className="wd-subject-tail wd-color-gray py-1">
                {post.tuit}
              </div>
            </>
          )}
          <div className="ps-2">
            {post.attachments && post.attachments.image && (
              <img
                style={{
                  borderRadius: "16px",
                  zIndex: "-10",
                  border: "2px solid rgb(47, 51, 54)",
                }}
                className="wd-post-img mx-auto"
                width="500px"
                height="264px"
                src={post.attachments.image ? post.attachments.image : ""}
                alt="Example"
              />
            )}
            {post.attachments && post.attachments.video && (
              <iframe
                style={{
                  borderRadius: "16px",
                  zIndex: "-10",
                  border: "2px solid rgb(47, 51, 54)",
                }}
                className="mx-auto"
                width="100%"
                height="264px"
                src={`https://www.youtube.com/embed/${post.attachments.video}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
          {<TuitStats tuit={post} />}
        </div>
      </div>
    </>
  );
};
export default TuitListItem;
