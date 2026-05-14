"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Social Media Management",
    desc: "Complete strategy, posting, engagement, and optimization."
  },
  {
    title: "Content Creation",
    desc: "Professional reels, creatives, visuals, and brand storytelling."
  },
  {
    title: "Paid Advertising",
    desc: "Meta & Google ad campaigns optimized for ROI."
  },
  {
    title: "Website Development",
    desc: "High-converting responsive business websites."
  },
  {
    title: "Brand Identity",
    desc: "Logo, visual systems, and premium branding."
  },
  {
    title: "SEO Growth",
    desc: "Organic search ranking and traffic generation."
  }
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent mb-20">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -12, scale: 1.03 }}
              className="bg-gradient-to-br from-white to-indigo-50 rounded-3xl p-8 shadow-[0_10px_40px_rgba(99,102,241,0.18)]"
            >
              <h3 className="text-2xl font-bold text-slate-800">
                {service.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-8">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}