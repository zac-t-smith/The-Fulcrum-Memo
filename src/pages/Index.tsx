import Hero from "@/components/Hero";
import About from "@/components/About";
import CreditMemos from "@/components/CreditMemos";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <CreditMemos />
      <Resume />
      <Contact />
    </div>
  );
};

export default Index;
