import React from "react";
import { FaGraduationCap, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      institution: "วิทยาลัยอาชีวศึกษานครปฐม",
      degree: "ปวช, สาขา Information Technology",
      gpa: "3.49",
      year: "2567",
      description: "Project Game Roblox",
    },
    {
      institution: "โรงเรียนพระปฐมวิทยาลัย",
      degree: "มัธยมศึกษาตอนปลาย",
      gpa: "3.75",
      year: "2564",
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
    <section className="min-h-screen bg-white py-16 px-4" id="education">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12 font-heading">
          <FaGraduationCap className="inline-block mr-4 text-blue-950" />
          ประวัติการศึกษา
        </h2>
        <motion.div
          className="relative space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-blue-950 transition-all duration-300 transform hover:scale-102 hover:shadow-xl"
              variants={itemVariants}
            >
              <div className="flex justify-between items-start md:items-center flex-col md:flex-row">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-blue-900 flex items-center">
                    <FaGraduationCap className="text-blue-950 mr-3" />
                    {edu.institution}
                  </h3>
                  <p className="text-lg text-gray-700 mt-1">{edu.degree}</p>
                </div>
                <p className="text-md md:text-lg text-gray-600 font-medium mt-2 md:mt-0">
                  {edu.year}
                </p>
              </div>
              {edu.gpa && (
                <p className="text-gray-700 mt-2">
                  <span className="font-semibold">GPA:</span> {edu.gpa}
                </p>
              )}
              {edu.honors && (
                <p className="text-gray-700 mt-1 flex items-center">
                  <FaAward className="text-yellow-500 mr-2" />
                  <span className="font-semibold">เกียรตินิยม:</span>{" "}
                  {edu.honors}
                </p>
              )}
              {edu.description && (
                <p className="text-gray-700 mt-4 border-t pt-4 border-gray-300">
                  {edu.description}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
