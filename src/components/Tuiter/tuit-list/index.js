import { useDispatch, useSelector } from "react-redux";
import TuitListItem from "./tuit-list-item";
import { useEffect } from "react";
import { findAllTuits } from "./actions/tuit-actions";

const TuitList = () => {
  const tuits = useSelector((state) => state.tuitReducer);
  const dispatch = useDispatch();
  useEffect(() => findAllTuits(dispatch));

  return (
    <>
      {tuits.map &&
        tuits.map((element) => {
          return <TuitListItem key={element._id} post={element} />;
        })}
    </>
  );
};
export default TuitList;
