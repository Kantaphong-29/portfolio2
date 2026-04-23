import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Education from "../pages/Education";
import About from "../pages/About";
import CardDetail from "../pages/CardDetail";
import Header from "../components/Header";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Experience from "../pages/Experience";
import Project from "../pages/Project";
import Skill from "../pages/Skill";
import Footer from "../components/Footer";
import Contact from "../pages/Contact";

const App = () => {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/project" element={<Project />} />
            <Route path="skill" element={<Skill />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;