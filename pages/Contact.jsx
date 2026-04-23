import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaCommentDots } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="min-h-screen bg-white py-16 px-4" id="contact">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12 font-heading">
          <FaEnvelope className="inline-block mr-4 text-blue-950" />
          ติดต่อฉัน
        </h2>

        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Email */}
          <motion.div
            className="flex flex-col items-center justify-center text-center p-4"
            variants={itemVariants}
          >
            <FaEnvelope className="text-5xl text-blue-950 mb-2" />
            <p className="text-sm text-gray-700">อีเมล</p>
            <a
              href="mailto:kantaphong294@gmail.com"
              className="text-gray-900 font-semibold hover:text-blue-950 transition-colors"
            >
              kantaphong294@gmail.com
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="flex flex-col items-center justify-center text-center p-4"
            variants={itemVariants}
          >
            <FaPhoneAlt className="text-5xl text-blue-950 mb-2" />
            <p className="text-sm text-gray-700">เบอร์โทรศัพท์</p>
            <p className="text-gray-900 font-semibold">(+66) 065-0523952</p>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            className="flex flex-col items-center justify-center text-center p-4"
            variants={itemVariants}
          >
            <FaLinkedin className="text-5xl text-blue-950 mb-2" />
            <p className="text-sm text-gray-700">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 font-semibold hover:text-blue-950 transition-colors"
            >
              (CapMooCapMee)
            </a>
          </motion.div>

          {/* GitHub */}
          <motion.div
            className="flex flex-col items-center justify-center text-center p-4"
            variants={itemVariants}
          >
            <FaGithub className="text-5xl text-blue-950 mb-2" />
            <p className="text-sm text-gray-700">GitHub</p>
            <a
              href="https://github.com/KantaphongTC12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 font-semibold hover:text-blue-950 transition-colors"
            >
              KantaphongTC12
            </a>
          </motion.div>

          {/* Message Icon (placeholder) */}
          <motion.div
            className="flex flex-col items-center justify-center text-center p-4"
            variants={itemVariants}
          >
            <FaCommentDots className="text-5xl text-blue-950 mb-2" />
            <p className="text-sm text-gray-700">
              ติดต่อผ่านแบบฟอร์ม
            </p>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;