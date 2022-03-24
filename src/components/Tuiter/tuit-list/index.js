import { useSelector } from "react-redux";
import TuitListItem from "./tuit-list-item";

const TuitList = () => {
  const tuits = useSelector((state) => state.tuitReducer);
  return (
    <>
      {tuits.map((element) => {
        return <TuitListItem key={element._id} post={element} />;
      })}
    </>
  );
};
export default TuitList;
