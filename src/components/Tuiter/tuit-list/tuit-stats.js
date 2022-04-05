import { useDispatch } from "react-redux";
import { updateTuit } from "./actions/tuit-actions";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  return (
    <div className="wd-icon">
      <div className="wd-flex">
        <i className=" wd-color-gray fa fa-comment"></i>
        <span className="wd-icon-number wd-color-gray">{tuit.comments}</span>
      </div>
      <div className="wd-flex">
        <i className="material-icons wd-color-gray">loop</i>
        <span className="wd-icon-number wd-color-gray">{tuit.retuits}</span>
      </div>
      <div
        onClick={() =>
          updateTuit(dispatch, {
            ...tuit,
            likes: tuit.likes + 1,
          })
        }
        className="wd-flex"
      >
        <i
          className={`${
            tuit.likes ? " wd-color-pink " : "wd-color-gray "
          }fa fa-thumbs-up`}
        ></i>
        <span className={` wd-color-gray wd-icon-number`}>{tuit.likes}</span>
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
