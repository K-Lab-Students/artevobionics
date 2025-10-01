import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Company from "./pages/Company";
import Contacts from "./pages/Contacts";
import News from "./pages/News";
import Submit from "./pages/Submit";

// Компонент для автоматического скролла в начало при смене маршрута
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-black text-white min-h-screen">
        <Nav />
        <Routes>
          {/* Главная страница */}
          <Route path="/" element={<Home />} />

          {/* Другие страницы */}
          <Route path="/about" element={<About />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/news" element={<News />} />
          <Route path="/submit" element={<Submit />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;