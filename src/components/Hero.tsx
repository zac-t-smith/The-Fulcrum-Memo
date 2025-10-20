import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <img 
            src={profileImage} 
            alt="Zachary Smith" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary shadow-xl"
          />
        </div>
        
        <div className="border-b-4 border-primary inline-block pb-4 mb-8">
          <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-2">
            The Fulcrum Memo
          </p>
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Credit Analysis & Restructuring Insights
          </p>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-foreground">
          Zachary T. Smith
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground italic mb-8 max-w-3xl mx-auto leading-relaxed">
          From managing financial distress firsthand to analyzing it from the capital provider side
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            onClick={() => scrollToSection("memos")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
          >
            View Credit Memos
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection("about")}
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-8"
          >
            About Me
          </Button>
        </div>

        <button 
          onClick={() => scrollToSection("about")}
          className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to content"
        >
          <ArrowDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
