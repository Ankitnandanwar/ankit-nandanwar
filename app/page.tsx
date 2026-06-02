import Certifications from "@/src/components/sections/Certificate";
import Footer from "@/src/components/sections/Footer";
import Hero from "@/src/components/sections/Hero";
import Projects from "@/src/components/sections/Projects";
import Skills from "@/src/components/sections/Skills";
import Work from "@/src/components/sections/Work";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-cosmic-dark select-none">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none"/>
      <Hero />
      <Skills />
      <Projects />
      <Work />
      <Certifications/>
      <Footer />
    </main>
  );
}
