import "./App.css";
import "./vendors/bootstrap/bootstrap-5.1.3-dist/css/bootstrap.min.css";
import "./vendors/bootstrap/bootstrap-5.1.3-dist/bootstrap.min.css";
import "./vendors/fontaawsome/fontawesome-free-5.15.4-web/css/all.min.css";
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Tuiter/home-screen";
import ExploreComponent from "./components/Tuiter/ExploreScreen/ExploreComponent";
import ProfileScreen from "./components/Tuiter/ProfileScreen";
import EditProfile from "./components/Tuiter/EditProfile";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/">
            <Route path="" element={<Labs />} />
            <Route path="labs" element={<Labs />} />
            <Route path="hello" element={<HelloWorld />} />
            <Route path="tuiter" element={<Tuiter />}>
              <Route index element={<Home />} />
              <Route path="explore" element={<ExploreComponent />} />
              <Route path="profile" element={<ProfileScreen />} />
              <Route path="edit-profile" element={<EditProfile />} />
              {/* <Route path="notifications" element={<NotificationScreen />} /> */}
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
