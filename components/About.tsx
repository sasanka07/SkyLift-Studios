"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: 50, suffix: "+", label: "Brands Elevated" },
  { number: 120, suffix: "+", label: "Campaigns Delivered" },
  { number: 98, suffix: "%", label: "Client Satisfaction" },
];

function Counter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    let start = 0;

    const interval = setInterval(() => {
      start += Math.ceil(target / 30);

      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="py-32 bg-gradient-to-br from-white via-indigo-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
            About SkyLift Studios
          </h2>

          <p className="mt-8 text-xl text-slate-600 leading-9 max-w-4xl mx-auto">
            We craft digital experiences that transform businesses into
            memorable brands. Through strategy, creativity, and performance
            marketing, we help companies rise above the noise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 mt-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -12, scale: 1.04 }}
              className="bg-white rounded-3xl p-10 text-center shadow-[0_15px_50px_rgba(99,102,241,0.15)] hover:bg-gradient-to-br hover:from-indigo-600 hover:via-violet-600 hover:to-blue-500 hover:text-white transition-all duration-500 group"
            >
              <h3 className="text-5xl font-bold text-black group-hover:text-white transition-colors duration-500">
                <Counter target={stat.number} suffix={stat.suffix} />
              </h3>

              <p className="mt-4 text-slate-500 group-hover:text-indigo-100 transition-colors duration-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}