"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 text-black">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold">
            Let's Grow Your Brand
          </h2>
          <p className="mt-3 text-black">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 bg-white p-8 rounded-2xl shadow-sm border"
        >
          <form className="grid md:grid-cols-2 gap-6">

            {/* Full Name */}
            <div>
              <label className="text-sm font-medium text-black">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-2 p-3 border rounded-xl text-black placeholder-gray-500"
              />
            </div>

            {/* Business Name */}
            <div>
              <label className="text-sm font-medium text-black">
                Business Name *
              </label>
              <input
                type="text"
                placeholder="Your business"
                className="w-full mt-2 p-3 border rounded-xl text-black placeholder-gray-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium text-black">
                Phone Number *
              </label>
              <input
                type="text"
                placeholder="+91 XXXXX XXXXX"
                className="w-full mt-2 p-3 border rounded-xl text-black placeholder-gray-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-black">
                Email *
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full mt-2 p-3 border rounded-xl text-black placeholder-gray-500"
              />
            </div>

            {/* Service */}
            <div>
              <label className="text-sm font-medium text-black">
                Service Interested In *
              </label>
              <select className="w-full mt-2 p-3 border rounded-xl text-black">
                <option>Select a service</option>
                <option>Social Media Management</option>
                <option>Content Creation</option>
                <option>Paid Ads</option>
                <option>SEO</option>
                <option>Website Development</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="text-sm font-medium text-black">
                Monthly Budget *
              </label>
              <select className="w-full mt-2 p-3 border rounded-xl text-black">
                <option>Select your budget</option>
                <option>₹5K - ₹10K</option>
                <option>₹10K - ₹25K</option>
                <option>₹25K+</option>
              </select>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-black">
                Message
              </label>
              <textarea
                placeholder="Tell us about your project..."
                className="w-full mt-2 p-3 border rounded-xl h-32 text-black placeholder-gray-500"
              />
            </div>

            {/* Button */}
            <div className="md:col-span-2">
              <button className="w-full py-4 rounded-xl text-white font-medium bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-[1.02] transition">
                Send Enquiry →
              </button>
            </div>

          </form>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-4 gap-3 mt-10 text-center">
          <div className="p-4 border rounded-xl bg-white">
            <p className="text-sm text-black">Phone</p>
            <p className="font-medium mt-1">+91 63690 95063</p>
          </div>

          <div className="p-4 border rounded-xl bg-white">
            <p className="text-sm text-black">Email</p>
            <p className="font-medium mt-1">helloskyliftstudios@gmail.com</p>
          </div>

          <div className="p-4 border rounded-xl bg-white">
            <p className="text-sm text-black">Instagram</p>
            <p className="font-medium mt-1">@skyliftstudios</p>
          </div>

          <div className="p-4 border rounded-xl bg-white">
            <p className="text-sm text-black">Location</p>
            <p className="font-medium mt-1">Chennai, India</p>
          </div>
        </div>

      </div>
    </section>
  );
}