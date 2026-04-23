import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "หน้าแรก", link: "/" },
    { name: "เกี่ยวกับฉัน", link: "/about" },
    { name: "การศึกษา", link: "/education" },
    { name: "ประสบการณ์การฝึกงาน", link: "/experience" },
    { name: "โปรเจคงาน", link: "/project" },
    { name: "ทักษะ", link: "/skill" },    
    { name: "ติดต่อ", link: "/contact" },   
  ];

  return (
    <>
      <header className="bg-blue-950 text-white p-4">
        <div className="container mx-auto py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">Kantaphong Thongchai</h1>
            </div>

            <button
              className="block lg:hidden cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i
                className={`bi ${isMenuOpen ? "bi-x" : "bi-list"} text-3xl`}
              ></i>
            </button>

            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="block text-lg py-2 hover:text-gray-300 transition-all duration-300 font-semibold hover:-translate-y-1"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <nav
              className={`lg:hidden absolute left-0 top-0 w-2/3 bg-blue-950 text-white h-full ${
                isMenuOpen ? "block" : "hidden"
              } z-50`}
            >
              <div className="p-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg py-2 hover:text-gray-300 transition-all duration-300 font-semibold"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;