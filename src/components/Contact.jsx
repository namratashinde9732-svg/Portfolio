import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="Contact" className="min-h-screen px-6 py-20">

      {/* Section Title */}
      <h2 className="text-4xl text-center mb-12 text-cyan-400">
        Contact
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* LEFT SIDE - CONTACT INFO */}
        <div className="bg-gray-800 p-6 rounded-xl text-gray-300 space-y-4">
          <h3 className="text-2xl text-white mb-4">Contact Information</h3>

          <p className="flex items-center gap-3">
            <FaEnvelope className="text-cyan-400" />
            namratashinde@gmail.com
          </p>

          <p className="flex items-center gap-3">
            <FaPhone className="text-cyan-400" />
            8605882845
          </p>

          <p className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-cyan-400" />
            Katraj, Pune
          </p>

          <p className="mt-4">
            I am open to job opportunities, internships, and collaborations.
            Feel free to reach out if you’d like to work together or discuss opportunities.
          </p>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form className="bg-gray-800 p-6 rounded-xl space-y-4">

          {/* FORM HEADLINE */}
          <h3 className="text-2xl text-white flex items-center gap-2">
            <FaPaperPlane className="text-cyan-400" />
            Get in Touch
          </h3>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-700 text-white outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-700 text-white outline-none"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded bg-gray-700 text-white outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-cyan-500 py-3 rounded hover:bg-cyan-600 transition flex items-center justify-center gap-2"
          >
            <FaPaperPlane />
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}