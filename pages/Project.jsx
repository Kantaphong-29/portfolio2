import React from 'react';
import { FaLaptopCode, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Project = () => {
  const projectData = [
    {
      name: 'การสร้างเกมส์ความรู้เรื่องการซ่อมและประกอบคอมพิวเตอร์ Roblox',
      description: 'โปรเจคนี้เป็นการทำเกมส์ Roblox ให้ความรู้ โดยสมาชิก 4 คน',
      technologies: ['Roblox Studio', 'Lua', 'UI/UX Design', '3D Modeling'],
      link:'https://www.roblox.com/games/89032269637387/The-Haunted-PC',
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
    <section className="min-h-screen bg-white py-16 px-4" id="projects">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12 font-heading">
          <FaLaptopCode className="inline-block mr-4 text-blue-950" />
          โปรเจกต์
        </h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-102"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-950 font-semibold hover:text-sky-400 transition-colors duration-300"
              >
                ดูโปรเจกต์
                <FaExternalLinkAlt className="ml-2" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;