import { useSelector } from "react-redux";
import WhoToFollowListItem from "./WhoToFollowListItem";

const WhoToFollowList = () => {
  const who = useSelector((state) => state.who);
  return (
    <div className="list-group">
      <div className="list-group-item  fa-in">
        <strong>Who to follow</strong>
      </div>
      {who.map((element) => {
        return <WhoToFollowListItem who={element} />;
      })}
    </div>
  );
};
export default WhoToFollowList;
