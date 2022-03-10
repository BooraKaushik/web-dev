const WhoToFollowListItem = ({
  who = {
    avatarIcon: "./java.jpg",
    userName: "Java",
    handle: "Java",
  },
}) => {
  const iconSize = {
    fontSize: "8px",
  };

  const curvedImage = {
    borderRadius: "250px",
  };
  const borderRad = {
    borderRadius: "16px",
  };
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-2 my-auto">
          <img
            style={curvedImage}
            src={who.avatarIcon}
            alt={who.userName}
            width="100%"
          />
        </div>
        <span className="col-6">
          <div>
            <strong className=" fa-in">{who.userName}</strong>
            <span style={iconSize} className="fa-stack fa-1x">
              <i className="fas fa-circle fa-stack-2x fa-inverse"></i>
              <i
                style={{ color: "black" }}
                className="fas fa-check fa-stack-1x"
              ></i>
            </span>
          </div>
          <div className=" fa-in">@{who.handle}</div>
        </span>
        <span className="col-4 my-auto">
          <button
            style={borderRad}
            className="btn btn-primary wd-button-tweet my-auto px-0"
          >
            follow
          </button>
        </span>
      </div>
    </div>
  );
};
export default WhoToFollowListItem;
