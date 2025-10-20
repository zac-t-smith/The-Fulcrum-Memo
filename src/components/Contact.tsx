import { Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Get In Touch</h2>
        <p className="text-lg mb-12 opacity-90 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Interested in discussing credit analysis, restructuring opportunities, or my experience? Let's connect.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg"
            variant="outline"
            className="bg-background text-foreground hover:bg-background/90 hover:scale-105 border-2 font-semibold px-8 transition-all duration-200 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
            onClick={() => window.location.href = 'mailto:zac.t.smith@outlook.com'}
            aria-label="Send email to zac.t.smith@outlook.com"
          >
            <Mail className="mr-2 w-5 h-5" />
            zac.t.smith@outlook.com
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="bg-background text-foreground hover:bg-background/90 hover:scale-105 border-2 font-semibold px-8 transition-all duration-200 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
            onClick={() => window.location.href = 'tel:719-291-3683'}
            aria-label="Call phone number 719-291-3683"
          >
            <Phone className="mr-2 w-5 h-5" />
            (719) 291-3683
          </Button>

          <Button 
            size="lg"
            variant="outline"
            className="bg-background text-foreground hover:bg-background/90 hover:scale-105 border-2 font-semibold px-8 transition-all duration-200 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
            onClick={() => window.open('https://www.linkedin.com/in/zac-t-smith/', '_blank', 'noopener,noreferrer')}
            aria-label="Visit LinkedIn profile"
          >
            <Linkedin className="mr-2 w-5 h-5" />
            LinkedIn
          </Button>
        </div>
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <p className="text-sm opacity-75">
            © 2025 Zachary T. Smith | The Fulcrum Memo
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
