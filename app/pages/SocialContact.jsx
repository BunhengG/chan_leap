"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaFacebookMessenger, FaInstagram, FaTelegram } from "react-icons/fa";

const socialLinks = [
  { name: "LinkedIn", icon: <FaLinkedin />, url: "#" },
  { name: "Messenger", icon: <FaFacebookMessenger />, url: "#" },
  { name: "Instagram", icon: <FaInstagram />, url: "#" },
  { name: "Telegram", icon: <FaTelegram />, url: "https://t.me/Sengchanleap" },
];

export default function SocialContact() {
  return (
    <section className="py-12 bg-black/5">
      <h2 className="text-center text-3xl font-semibold mb-8 text-white">Social Contact</h2>

      <div className="flex justify-center gap-6">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-5xl text-white hover:text-purple-200 transition duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
