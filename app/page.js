import Hero from "./pages/Hero";
import WorkExperience from "./pages/WorkExperience";
import Contact from "./pages/Contact";
import SocialContact from "./pages/SocialContact";
import Footer from "./pages/Footer";
import MicrosoftTech from "./pages/Microsoft";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <MicrosoftTech />
      <WorkExperience />
      <SocialContact />
      <Contact />
      <Footer />
    </main>
  );
}
