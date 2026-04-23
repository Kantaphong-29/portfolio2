import React from "react";
import { FaBriefcase, FaHospital, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const Experience = () => {
  const experienceData = [
    {
      company: "โรงพยาบาลนครปฐม",
      position: "IT Support",
      duration: "2024/05 - 2024/09",
      location: " 196 ถนนเทศา ตำบลพระปฐมเจดีย์ อำเภอเมืองนครปฐม จังหวัดนครปฐม",
      responsibilities: [
        "รับแจ้งปัญหาและให้การสนับสนุนด้านเทคนิคแก่บุคลากรทางการแพทย์",
        "ดูแลและบำรุงรักษาอุปกรณ์คอมพิวเตอร์และเครือข่าย",
        "ติดตั้งและอัปเดตซอฟต์แวร์ที่ใช้ในโรงพยาบาล",
        "แก้ไขปัญหาเกี่ยวกับฮาร์ดแวร์และซอฟต์แวร์เบื้องต้น",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="min-h-screen bg-white py-16 px-4" id="experience">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12 font-heading">
          <FaBriefcase className="inline-block mr-4 text-blue-950" />
          ประสบการณ์การฝึกงาน
        </h2>
        <motion.div
          className="relative space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-blue-950 transition-all duration-300 transform hover:scale-102 hover:shadow-xl"
              variants={itemVariants}
            >
              <div className="flex justify-between items-start md:items-center flex-col md:flex-row">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-blue-900 flex items-center">
                    <FaLaptopCode className="text-blue-950 mr-3" />
                    {exp.position}
                  </h3>
                  <p className="text-lg text-gray-700 mt-1">{exp.company}</p>
                </div>
                <p className="text-md md:text-lg text-gray-600 font-medium mt-2 md:mt-0">
                  {exp.duration}
                </p>
              </div>
              <p className="text-gray-700 mt-2">
                <FaHospital className="inline-block mr-2" />
                {exp.location}
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-4 border-t pt-4 border-gray-300">
                {exp.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
