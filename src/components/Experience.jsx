import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  return (
    <section
      id="Experience"
      className="relative min-h-screen px-6 py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10"></div>

      {/* Heading */}
      <h2 className="text-4xl text-center mb-16 font-bold text-cyan-400">
        Experience
      </h2>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">

        {/* Vertical Line */}
        <div className="absolute left-4 top-0 w-[2px] h-full bg-cyan-400/40"></div>

        {/* Experience Item */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative pl-12 mb-12"
        >

          {/* Timeline Dot */}
          <div className="absolute left-0 top-2 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black">
            <FaBriefcase size={14} />
          </div>

          {/* Card */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition">

            {/* Role */}
            <h3 className="text-2xl font-semibold mb-1">
              Web Development Intern
            </h3>

            {/* Company + Duration */}
            <p className="text-cyan-400 mb-3">
              Elite Softwares | June – July 2024
            </p>

            {/* Professional Summary */}
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Completed a Web Development Internship at Elite Softwares, where I gained 
              practical experience in designing and developing responsive and scalable 
              web applications. During this period, I worked on both frontend and backend 
              development, focusing on building efficient, user-friendly interfaces and 
              implementing robust backend logic. I actively contributed to improving 
              application performance while following industry-standard coding practices 
              and development methodologies.
            </p>

            {/* Responsibilities */}
            <ul className="text-gray-400 text-sm space-y-2">
              <li>• Designed and developed dynamic web applications using modern web technologies</li>
              <li>• Implemented CRUD operations to efficiently manage and process application data</li>
              <li>• Built responsive and visually appealing user interfaces for improved user experience</li>
              <li>• Integrated backend logic with database systems for seamless functionality</li>
              <li>• Optimized application performance and ensured smooth data flow</li>
              <li>• Followed clean coding standards and best practices for maintainable code</li>
            </ul>

            {/* Key Focus */}
            <p className="text-sm text-cyan-300 mt-4">
              Key Focus: Full Stack Development | Responsive Design | Database Integration
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}