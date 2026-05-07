import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "../assets/profile.webp";

export default function Home() {
  return (
    <section
      id="Home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6
      bg-gradient-to-br from-purple-900 via-black to-cyan-900"
    >

      {/* PROFILE IMAGE */}
      <motion.img
        src={profile}
        alt="profile"
        className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-cyan-400 shadow-2xl object-cover"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* NAME */}
      <h1 className="text-3xl md:text-5xl font-bold mt-6">
        I'm Namrata Angad Shinde
      </h1>

      {/* TYPEWRITER */}
      <TypeAnimation
        sequence={[
          "Full Stack Developer", 2000,
          "Python Django Developer", 2000,
          "Frontend Developer", 2000
        ]}
        repeat={Infinity}
        className="text-lg md:text-2xl text-cyan-400 mt-2"
      />

      {/* CAREER OBJECTIVE CARD */}
      <motion.div
        className="mt-6 bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl max-w-2xl shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-gray-200 leading-relaxed">
          Seeking a challenging role in a progressive organization to apply and enhance my skills in computing and research, contribute to innovative and scalable solutions, and grow professionally through continuous learning, problem-solving, and dedication.
        </p>
      </motion.div>

      {/* BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <button className="bg-cyan-500 px-6 py-2 rounded-lg hover:scale-105 hover:bg-cyan-600 transition">
          Download CV
        </button>

        <button className="border border-cyan-400 px-6 py-2 rounded-lg hover:bg-cyan-500 transition">
          Hire Me
        </button>
      </div>

      {/* SOCIAL ICONS */}
      <div className="flex gap-6 mt-6 text-2xl">
        <a href="#" className="hover:text-cyan-400 transition">
          <FaGithub />
        </a>
        <a href="#" className="hover:text-cyan-400 transition">
          <FaLinkedin />
        </a>
      </div>

    </section>
  );
}