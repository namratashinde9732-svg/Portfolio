import { motion } from "framer-motion";
import { FaHotel, FaUserGraduate, FaLaptopCode } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Hostel Management System",
      icon: <FaHotel className="text-cyan-400" />,
      desc: "A web-based application developed to digitize and streamline hostel operations with improved efficiency and management.",
      points: [
        "Designed a centralized system for managing hostel operations",
        "Implemented room allocation for efficient space utilization",
        "Developed fee tracking and payment monitoring system",
        "Integrated complaint handling module for issue resolution",
        "Reduced manual work by automating administrative processes",
      ],
    },
    {
      title: "Student Management System",
      icon: <FaUserGraduate className="text-cyan-400" />,
      desc: "A responsive system for managing student records, attendance, and academic information.",
      points: [
        "Created structured student data management system",
        "Implemented full CRUD operations with database",
        "Developed attendance tracking functionality",
        "Designed clean and user-friendly responsive interface",
      ],
    },
    {
      title: "Personal Portfolio Website",
      icon: <FaLaptopCode className="text-cyan-400" />,
      desc: "A modern portfolio website showcasing skills, projects, and experience with interactive UI.",
      points: [
        "Developed using React and Tailwind CSS",
        "Built fully responsive design across all devices",
        "Integrated animations for enhanced user experience",
        "Organized content for clear and professional presentation",
      ],
    },
  ];

  return (
    <section
      id="Projects"
      className="relative min-h-screen px-6 py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >

      {/* Background Glow Effects */}
      <div className="absolute w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10"></div>

      {/* Heading */}
      <h2 className="text-4xl text-center mb-16 font-bold tracking-wide">
        Projects
      </h2>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/30 transition"
          >
            {/* Title with Icon */}
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              {project.icon}
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {project.desc}
            </p>

            {/* Points */}
            <ul className="text-gray-400 text-sm space-y-2">
              {project.points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 rounded-2xl border border-transparent hover:border-cyan-400 transition pointer-events-none"></div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}