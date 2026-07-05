import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import Timeline from "@/components/Timeline";
import Achievements from "@/components/Achievements";
import GitHubStats from "@/components/GitHubStats";

export default function Home() {
  return (
    <>
      <ParticleBackground />

      <Navbar />

      <Hero />

      <About />

      <Stats />

      <Skills />

      <FeaturedProjects />

      <Experience />

      <Contact />

      <Footer />
      <Achievements />

    <FeaturedProjects />

    <Timeline />

    <GitHubStats />

    <Contact />

    <Footer />
    </>
  );
}