import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <motion.div
        className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-gray-200 transform transition-all duration-300 hover:scale-105"
      >
        <div className="flex flex-col items-center">
          <div className="flex-shrink-0 mb-6">
            <img
              src="/img/S__23740427.jpg"
              alt="รูปโปรไฟล์"
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-gray-200"
            />
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-950 mb-4">
              เกี่ยวกับฉัน
            </h1>
            <p className="text-gray-700 mb-2">
              ชื่อ: นายกันตพงษ์ ธงชัย / Mr. Kantaphong Thongchai
            </p>
            <p className="text-gray-700 mb-2">
              อาชีพ: นักศึกษาขอตังค์แม่ไปวันๆ
            </p>
            <p className="text-gray-700 mb-8">
              อนาคตอยากเป็น Tattoo Artist
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center border-t pt-4 border-gray-200">
          <p className="text-gray-600 italic">
            "ฝันให้ไกล แล้วไปให้พ้น"
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;