import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaBriefcase,
  FaUser,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="About"
      className="min-h-screen px-6 py-20 flex flex-col items-center justify-center
      bg-gradient-to-br from-purple-900 via-black to-cyan-900 text-white"
    >
      {/* HEADING */}
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-12 text-center">
        About Me
      </h2>

      {/* MAIN CONTENT */}
      <motion.div
        className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 md:p-10 rounded-xl max-w-4xl shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {/* Paragraphs LEFT ALIGNED */}
        <div className="space-y-5 text-gray-200 text-base md:text-lg leading-relaxed text-left">

          <p>
            I am <span className="text-cyan-400 font-semibold">Namrata Angad Shinde</span>, 
            a dedicated and enthusiastic Full Stack Developer currently pursuing a Bachelor’s degree in 
            Computer Science from Haribhai V Desai College, Pune (2022–2025). I have built a strong 
            foundation in programming, web development, and database management systems.
          </p>

          <p>
           Skilled in developing responsive and scalable web applications using Python, HTML, CSS, JavaScript, and Bootstrap. Focused on building efficient, user-friendly interfaces with strong backend functionality, along with strong problem-solving skills and a commitment to continuous learning.
          </p>

        </div>
      </motion.div>

      {/* INFO CARDS */}
      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl w-full">

        {/* PERSONAL INFO */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl shadow-lg text-left"
          whileHover={{ scale: 1.05 }}
        >
          <FaUser className="text-cyan-400 text-3xl mb-3" />
          <h3 className="text-xl mb-2">Personal Information</h3>

          <p className="text-gray-300 flex items-center gap-2">
            <FaPhone /> 8605882845
          </p>

          <p className="text-gray-300 flex items-center gap-2 mt-2">
            <FaMapMarkerAlt /> Pune, Maharashtra
          </p>
        </motion.div>

        {/* EDUCATION */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl shadow-lg text-left"
          whileHover={{ scale: 1.05 }}
        >
          <FaUserGraduate className="text-cyan-400 text-3xl mb-3" />
          <h3 className="text-xl mb-2">Education</h3>

          <p className="text-gray-300">B.Sc Computer Science</p>
          <p className="text-gray-300">Haribhai V Desai College, Pune</p>
          <p className="text-gray-400 mt-1">2022 – 2025</p>
        </motion.div>

        {/* EXPERIENCE */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl shadow-lg text-left"
          whileHover={{ scale: 1.05 }}
        >
          <FaBriefcase className="text-cyan-400 text-3xl mb-3" />
          <h3 className="text-xl mb-2">Internship</h3>

          <p className="text-gray-300">Python Django Developer</p>
          <p className="text-gray-300">Elite Softwares</p>
          <p className="text-gray-400 mt-1">June 2024 – July 2024</p>
        </motion.div>

      </div>
    </section>
  );
}