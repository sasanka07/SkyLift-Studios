"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-slate-50 pt-20"
    >
      <div className="text-center max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-5 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-8"
        >
          Digital Growth Agency
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold text-indigo-700 leading-tight"
        >
          From Scrolls to Sales
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-semibold text-slate-800 mt-6"
        >
          Elevate Your Brand Online
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto"
        >
          We help businesses grow through social media management,
          content creation, paid ads, and smart digital solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex justify-center gap-4"
        >
          <a
  href="#about"
  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl flex items-center gap-2 hover:scale-105 transition"
>
  Get Started <ArrowRight size={18} />
</a>

<a
  href="#services"
  className="border border-slate-300 text-black px-8 py-4 rounded-xl hover:bg-white transition inline-flex items-center"
>
  View Services
</a>
        </motion.div>
      </div>
    </section>
  );
}