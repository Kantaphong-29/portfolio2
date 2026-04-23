import React from "react";
import {
  FaLaptopCode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Skill = () => {
  const skillsData = [
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
    { name: "React", icon: <FaReact />, color: "text-cyan-500" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
    {
      name: "Tailwind CSS",
      icon: <span className="font-bold">TW</span>,
      color: "text-teal-500",
    },
    {
      name: "UI/UX",
      icon: <span className="font-bold">UI</span>,
      color: "text-fuchsia-500",
    },
    {
      name: "Problem Solving",
      icon: <span className="font-bold">PS</span>,
      color: "text-purple-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="min-h-screen bg-white py-16 px-4" id="skills">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12 font-heading">
          <FaLaptopCode className="inline-block mr-4 text-blue-950" />
          ทักษะ
        </h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl shadow-lg w-full max-w-[150px] transition-all duration-300 transform hover:scale-110"
              variants={itemVariants}
            >
              <div className={`text-4xl mb-2 ${skill.color}`}>{skill.icon}</div>
              <p className="text-lg font-semibold text-blue-900 text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
