import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/loginPage";
import RegisterPage from "./components/registerPage";
import DashBoard from "./components/dashBoard";
import "./assests/app.css";
import Counter from "./components/Counter";
import List from "./components/List";

function App() {
  return (
    <div className="formBackground">
      {/* <Counter/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>

        <Routes>
          <Route path="/dashboard" element={<DashBoard />}>
            <Route path="/dashboard/counter" element={<Counter />} />
            <Route path="/dashboard/list" element={<List />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
