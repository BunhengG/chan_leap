import Navbar from "./pages/Navbar";
import "./globals.css";

export const metadata = {
  title: "Seng Chanleap",
  description: "Turning ideas into fast, functional, and beautiful digital solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white sm:bg-[url('/texture_image.webp')] sm:bg-cover sm:bg-no-repeat sm:bg-center sm:bg-fixed md:bg-scroll lg:bg-fixed">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
