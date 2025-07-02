import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";

export const Home = () => {
  return (
    <div className="bg-background text-foreground ">
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </div>
  );
};