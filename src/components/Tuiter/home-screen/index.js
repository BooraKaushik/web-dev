import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TuitList from "../tuit-list";
import WhatsHappening from "./whats-happening";

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "set-parameter", changeState: "home" });
  });
  return (
    <div>
      <WhatsHappening />
      <TuitList />
    </div>
  );
};
export default HomeScreen;
