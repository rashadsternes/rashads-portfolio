import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative flex flex-col items-center px-4 pt-25" > 
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Rashad
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Sternes
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I'm a self-driven developer passionate about clean code, <br />
            intuitive UI, and creative digital experiences.<br /> 
            Let’s build something amazing! 
          </p>
        </div>
      </div>
    </section>
  );
};
