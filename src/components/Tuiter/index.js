import { Outlet } from "react-router-dom";
import NavigationSidebar from "./NavigationSidebarComponent";
import { createStore, combineReducers } from "redux";
import who from "./reducers/who";
import { Provider, useSelector } from "react-redux";
import WhoToFollowList from "./WhoToFollowList";
import tuitReducer from "./reducers/tuits-reducer";
import NavigationSidebarReducer from "./reducers/NavigationSideBarReducer";
import ProfileScreenReducer from "./reducers/ProfileScreenReducer";

const Tuiter = () => {
  const store = createStore(
    combineReducers({
      who,
      tuitReducer,
      NavigationSidebarReducer,
      ProfileScreenReducer,
    })
  );
  return (
    <Provider store={store}>
      <div className="row mt-2">
        <div className="col-2 col-lg-1 col-xl-2">
          <NavigationSidebar />
        </div>
        <div className="col-10 col-lg-7 col-xl-6">
          <Outlet />
        </div>
        <div className="d-none d-lg-block col-lg-4 col-xl-4">
          <WhoToFollowList />
        </div>
      </div>
    </Provider>
  );
};
export default Tuiter;
