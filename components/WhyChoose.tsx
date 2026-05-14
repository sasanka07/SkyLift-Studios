"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Zap,
  Users,
  BarChart3,
} from "lucide-react";

const points = [
  {
    icon: TrendingUp,
    title: "Result Driven",
    desc: "Focused on measurable growth.",
  },
  {
    icon: Sparkles,
    title: "Creative Content",
    desc: "Fresh ideas that stand out.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Support",
    desc: "Always available for you.",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    desc: "Quick delivery with quality.",
  },
  {
    icon: Users,
    title: "Client First",
    desc: "Built around your goals.",
  },
  {
    icon: BarChart3,
    title: "Data Backed",
    desc: "Decisions powered by insights.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why"
      className="py-28 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-slate-900"
        >
          Why{" "}
          <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
            SkyLift Studios?
          </span>
        </motion.h2>

        <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto">
          Everything your brand needs to scale digitally.
        </p>

        {/* 6 points */}
        <div className="grid md:grid-cols-3 gap-12 mt-20">
          {points.map((point, index) => {
            const Icon = point.icon;

            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center shadow-md">
                  <Icon className="text-white w-6 h-6" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-800">
                  {point.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {point.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}