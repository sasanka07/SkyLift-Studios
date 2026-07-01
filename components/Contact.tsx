"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    business: "",
    phone: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);

        setFormData({
          fullName: "",
          business: "",
          phone: "",
          email: "",
          service: "",
          budget: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

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

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 bg-white p-8 rounded-2xl shadow-sm border"
        >
          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6"
          >

            {/* Full Name */}
            <div>
              <label className="text-sm font-medium text-black">
                Full Name *
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full mt-2 p-3 border rounded-xl text-black"
              />
            </div>

            {/* Business Name */}
            <div>
              <label className="text-sm font-medium text-black">
                Business Name *
              </label>

              <input
                type="text"
                name="business"
                value={formData.business}
                onChange={handleChange}
                required
                placeholder="Your business"
                className="w-full mt-2 p-3 border rounded-xl text-black"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium text-black">
                Phone Number *
              </label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 XXXXX XXXXX"
                className="w-full mt-2 p-3 border rounded-xl text-black"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-black">
                Email *
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full mt-2 p-3 border rounded-xl text-black"
              />
            </div>

            {/* Service */}
            <div>
              <label className="text-sm font-medium text-black">
                Service Interested In *
              </label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border rounded-xl text-black"
              >
                <option value="">Select a service</option>
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

              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border rounded-xl text-black"
              >
                <option value="">Select your budget</option>
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
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="w-full mt-2 p-3 border rounded-xl h-32 text-black"
              />
            </div>

            {/* Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl text-white font-medium bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-[1.02] transition"
              >
                {loading ? "Sending..." : "Send Enquiry →"}
              </button>
            </div>

            {/* Success Message */}
            {success && (
              <div className="md:col-span-2 text-center text-green-600 font-medium">
                Enquiry sent successfully!
              </div>
            )}

          </form>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-4 gap-4 mt-10 text-center">

          <div className="bg-white p-4 rounded-xl border">
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-semibold mt-1">
              +91 63690 95063
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border">
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-semibold mt-1">
              helloskyliftstudios@gmail.com
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border">
            <p className="text-sm text-gray-500">Instagram</p>
            <p className="font-semibold mt-1">
              @skyliftstudios
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border">
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-semibold mt-1">
              Chennai, India
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}