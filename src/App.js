import "./App.css";
import "./vendors/bootstrap/bootstrap-5.1.3-dist/css/bootstrap.min.css";
import "./vendors/bootstrap/bootstrap-5.1.3-dist/bootstrap.min.css";
import "./vendors/fontaawsome/fontawesome-free-5.15.4-web/css/all.min.css";
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/hello" exact={true} element={<HelloWorld />} />
          <Route path="/" exact={true} element={<Labs />} />
          <Route path="/labs" exact={true} element={<Labs />} />
          <Route path="/tuiter" exact={true} element={<Tuiter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
