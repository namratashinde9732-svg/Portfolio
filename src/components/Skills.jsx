import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaUsers,
} from "react-icons/fa";

export default function Skills() {
  return (
    <section
      id="Skills"
      className="min-h-screen px-6 py-20 flex flex-col items-center justify-center
      bg-gradient-to-br from-purple-900 via-black to-cyan-900 text-white"
    >
      {/* HEADING */}
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-12 text-center">
        Skills
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl w-full">

        {/* TECHNICAL SKILLS */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 md:p-8 rounded-xl shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FaLaptopCode className="text-cyan-400 text-3xl" />
            <h3 className="text-xl font-semibold">Technical Skills</h3>
          </div>

          <ul className="space-y-3 text-gray-200 text-left">

            <li>• Python (Django Framework) – Full Stack Development</li>
            <li>• HTML5, CSS3, JavaScript (ES6) – Frontend Development</li>
            <li>• Bootstrap & Responsive UI Design</li>
            <li>• Database Management – SQL</li>
            <li>• CRUD Operations & Form Validation</li>
            <li>• Basic REST API Understanding</li>
            <li>• Git & Version Control (Basics)</li>

          </ul>
        </motion.div>

        {/* PROGRAMMING LANGUAGES */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 md:p-8 rounded-xl shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FaCode className="text-cyan-400 text-3xl" />
            <h3 className="text-xl font-semibold">Programming Languages</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {["C", "C++", "Java", "Python", "JavaScript"].map((skill, i) => (
              <span
                key={i}
                className="bg-cyan-500/20 border border-cyan-400 px-4 py-1 rounded-full text-sm hover:bg-cyan-500 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* TOOLS & TECHNOLOGIES */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 md:p-8 rounded-xl shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FaDatabase className="text-cyan-400 text-3xl" />
            <h3 className="text-xl font-semibold">Tools & Technologies</h3>
          </div>

          <ul className="space-y-3 text-gray-200 text-left">
            <li>• VS Code</li>
            <li>• GitHub</li>
            <li>• Browser Developer Tools</li>
            <li>• Basic Deployment Knowledge</li>
          </ul>
        </motion.div>

        {/* SOFT SKILLS */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 md:p-8 rounded-xl shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FaUsers className="text-cyan-400 text-3xl" />
            <h3 className="text-xl font-semibold">Soft Skills</h3>
          </div>

          <ul className="space-y-3 text-gray-200 text-left">
            <li>• Leadership & Team Collaboration</li>
            <li>• Effective Communication Skills</li>
            <li>• Critical Thinking & Problem Solving</li>
            <li>• Time Management & Discipline</li>
            <li>• Adaptability & Continuous Learning</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}