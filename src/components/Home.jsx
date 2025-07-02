import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection";


export const Home = () => {
  return (
    <div className="bg-background text-foreground ">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />

      </main>
    </div>
  );
};