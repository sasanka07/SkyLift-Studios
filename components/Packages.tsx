"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "₹5,999",
    description: "Perfect for businesses starting online",
    features: [
      "8 Social Media Posts",
      "Basic Brand Design",
      "Monthly Analytics Report",
      "Content Calendar",
      "Email Support",
    ],
  },
  {
    name: "Growth",
    price: "₹11,999",
    description: "For scaling brands seeking visibility",
    features: [
      "16 Premium Posts",
      "Paid Ads Management",
      "Weekly Analytics",
      "Creative Reels",
      "Growth Strategy",
    ],
  },
  {
    name: "Scale",
    price: "₹17,999",
    description: "Complete digital domination",
    features: [
      "Unlimited Content",
      "Advanced Ads",
      "Dedicated Strategy Team",
      "Priority Support",
      "Full Funnel Optimization",
    ],
  },
];

export default function Packages() {
  return (
    <section
      id="packages"
      className="py-32 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent mb-24"
        >
          Pricing Packages
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                y: -18,
                scale: 1.06,
              }}
              className="group h-full flex flex-col rounded-3xl p-10 bg-white shadow-[0_12px_50px_rgba(99,102,241,0.15)] hover:bg-gradient-to-br hover:from-indigo-600 hover:via-violet-600 hover:to-blue-500 hover:text-white hover:shadow-[0_25px_80px_rgba(99,102,241,0.35)] transition-all duration-500"
            >
              <h3 className="text-3xl font-bold text-black group-hover:text-white transition-colors duration-500">
                {plan.name}
              </h3>

              <p className="mt-4 text-slate-500 group-hover:text-indigo-100 transition-colors duration-500">
                {plan.description}
              </p>

              <div className="mt-8">
                <span className="text-5xl font-bold text-black group-hover:text-white transition-colors duration-500">
                  {plan.price}
                </span>

                <span className="text-lg ml-2 text-black group-hover:text-white transition-colors duration-500">
                  /month
                </span>
              </div>

              <ul className="mt-10 space-y-4 flex-grow">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-lg text-slate-600 group-hover:text-indigo-50 transition-colors duration-500"
                  >
                    ✓ {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-10 w-full py-4 rounded-2xl font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white group-hover:bg-white group-hover:text-black hover:scale-105 transition-all duration-500">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}