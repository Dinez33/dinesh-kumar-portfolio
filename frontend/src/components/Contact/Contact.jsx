import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import toast from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Frontend completed! Backend will be connected next.");

    console.log(form);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-3xl font-bold mb-8">
              Let's Build Something Amazing
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4 items-center">
                <FaEnvelope
                  className="text-cyan-400"
                  size={24}
                />
                <span>dinezk333@gmail.com</span>
              </div>

              <div className="flex gap-4 items-center">
                <FaPhone
                  className="text-cyan-400"
                  size={24}
                />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex gap-4 items-center">
                <FaMapMarkerAlt
                  className="text-cyan-400"
                  size={24}
                />
                <span>Chennai, Tamil Nadu</span>
              </div>

            </div>

            <div className="flex gap-6 mt-10 text-3xl">

              <a href="https://github.com/YOUR_USERNAME">
                <FaGithub />
              </a>

              <a href="https://linkedin.com/in/YOUR_PROFILE">
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-slate-800"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-slate-800"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-slate-800"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-slate-800"
            />

            <button
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-lg font-semibold"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}