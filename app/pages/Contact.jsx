"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+1",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  // Handles input
  // autoComplete="off"
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handles country code selection and auto-updates phone number field
  const handleCountryChange = (e) => {
    const newCode = e.target.value;
    setForm((prevForm) => ({
      ...prevForm,
      countryCode: newCode,
      phone: newCode + prevForm.phone.replace(/^\+\d+/, ""),
    }));
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/send_message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setFeedback({ type: "success", message: "Message sent successfully!" });
        setForm({
          name: "",
          email: "",
          phone: "",
          countryCode: "+855",
          company: "",
          message: "",
        });

        setTimeout(() => setFeedback(null), 3000);
      } else {
        setFeedback({
          type: "error",
          message: data.error || "Something went wrong",
        });
      }
    } catch (error) {
      setFeedback({
        type: "error",
        message: "Network error, please try again",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black/5 w-full">
      <section
        id="contact"
        className="flex flex-col items-center text-center py-16 px-6 bg-background lg:rounded-t-custom rounded-t-custom_phone"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-foreground mb-6 text-white flex justify-center items-center"
        >
          <motion.div
            className="flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <span className="text-3xl">🏵️</span>
          </motion.div>
          Contact Me
          <motion.div
            className="flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <span className="text-3xl">🏵️</span>
          </motion.div>
        </motion.h1>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-lg bg-white p-6 rounded-3xl shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Name */}
            <motion.div whileFocus={{ scale: 1.02 }}>
              <label className="text-start block text-sm font-semibold text-foreground">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
              />
            </motion.div>

            {/* Email */}
            <motion.div whileFocus={{ scale: 1.02 }}>
              <label className="text-start block text-sm font-semibold text-foreground">
                Email
              </label>
              <input
                autoComplete="off"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
              />
            </motion.div>
          </div>

          {/* Phone Input with Country Code */}
          <motion.div whileFocus={{ scale: 1.02 }} className="mb-4">
            <label className="text-start block text-sm font-semibold text-foreground">
              Phone Number
            </label>
            <div className="flex items-center gap-2">
              {/* Country Code Dropdown */}
              <select
                name="countryCode"
                value={form.countryCode}
                onChange={handleCountryChange}
                className="w-20 border rounded-lg p-2 bg-white focus:ring-2 focus:ring-red-500 outline-none"
              >
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+855">🇰🇭 +855</option>
                <option value="+91">🇮🇳 +91</option>
                <option value="+61">🇦🇺 +61</option>
              </select>

              {/* Phone Input */}
              <input
                autoComplete="off"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="Enter phone number"
              />
            </div>
          </motion.div>

          {/* Company Input */}
          <motion.div whileFocus={{ scale: 1.02 }} className="mb-4">
            <label className="text-start block text-sm font-semibold text-foreground">
              Company
            </label>
            <input
              autoComplete="off"
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
            />
          </motion.div>

          {/* Message Input */}
          <motion.div whileFocus={{ scale: 1.02 }} className="mb-4">
            <label className="text-start block text-sm font-semibold text-foreground">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
            />
          </motion.div>

          {/* Feedback Message */}
          {feedback && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`my-4 py-3 px-6 text-sm font-semibold rounded-full text-center ${
                feedback.type === "success"
                  ? "bg-green-200 text-green-600"
                  : "bg-red-200 text-red-600"
              }`}
            >
              {feedback.message}
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="w-full bg-red-500 text-white py-3 rounded-3xl font-semibold hover:bg-red-600"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </section>
    </div>
  );
}
