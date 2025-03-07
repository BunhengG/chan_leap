'use client'

import { useEffect } from "react";
import "./globals.css";
import Navbar from "./pages/Navbar";

export default function RootLayout({ children }) {
  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.body.style.backgroundImage = "url('/texture_image.webp')";
          observer.disconnect();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.1,
    });

    observer.observe(document.querySelector("body"));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <html lang="en">
      <body className="bg-background sm:bg-cover sm:bg-no-repeat sm:bg-center lg:bg-fixed md:bg-scroll">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
