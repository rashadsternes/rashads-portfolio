import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <div className="bg-background text-foreground ">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
      </main>
      <Footer />

    </div>
  );
};