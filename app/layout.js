import Navbar from "./pages/Navbar";
import "./globals.css";

export const metadata = {
  title: "Seng Chanleap",
  description: "Turning ideas into fast, functional, and beautiful digital solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background bg-[url('/texture_image.webp')] bg-cover bg-no-repeat bg-center sm:bg-fixed md:bg-scroll lg:bg-fixed">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
