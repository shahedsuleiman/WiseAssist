import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Home from "./Pages/Home";
import Workshops from "./Pages/Workshops";
import Techtip from "./Pages/Techtip";
import Subscribe from "./Pages/Subscribe";
import TipDetail from "./Pages/TipDetail";
import Contactus from "./Pages/Contactus";
import About from "./Components/About";
import Subscription from "./Pages/Subscription";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<RegisterPage />} />
            <Route path="/workshop" element={<Workshops />} />
            <Route path="/techtips" element={<Techtip />} />
            <Route path="/tech" element={<TipDetail />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/pricing" element={<Subscribe />} />
            <Route path="/subscribe" element={<Subscription />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
