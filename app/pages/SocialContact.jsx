"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaTiktok, FaFacebookMessenger, FaInstagram, FaTelegram } from "react-icons/fa";

const socialLinks = [
  { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/bunheng-mai-31200a205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { name: "TikTok", icon: <FaTiktok />, url: "https://www.tiktok.com/@hengcoding?_t=ZS-8uNPlsuslCU&_r=1" },
  { name: "Messenger", icon: <FaFacebookMessenger />, url: "https://m.me/100071312815169?hash=AbarFgzOudhi6mhb&source_id=6946816" },
  { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/lyheng__?igsh=OXVndWdmbWEwNTVs&utm_source=qr" },
  { name: "Telegram", icon: <FaTelegram />, url: "https://t.me/maibunheng" },
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
