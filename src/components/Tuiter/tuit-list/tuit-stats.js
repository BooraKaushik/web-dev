import { useDispatch } from "react-redux";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({ type: "like-tuit", tuit });
  };
  return (
    <div className="wd-icon">
      <div className="wd-flex">
        <i className=" wd-color-gray fa fa-comment"></i>
        <span className="wd-icon-number wd-color-gray">
          {tuit.stats.comments}
        </span>
      </div>
      <div className="wd-flex">
        <i className="material-icons wd-color-gray">loop</i>
        <span className="wd-icon-number wd-color-gray">
          {tuit.stats.retuits}
        </span>
      </div>
      <div onClick={() => likeTuit(tuit)} className="wd-flex">
        <i
          className={`${
            tuit.liked ? " wd-color-pink " : "wd-color-gray "
          }fa fa-heart`}
        ></i>
        <span className={` wd-color-gray wd-icon-number`}>
          {tuit.stats.likes}
        </span>
      </div>
      <div className="wd-flex">
        <i className="material-icons wd-color-gray" style={{ margin: "auto" }}>
          file_upload
        </i>
      </div>
    </div>
  );
};
export default TuitStats;
