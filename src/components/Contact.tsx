import { Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg mb-12 opacity-90">
          Interested in discussing credit analysis, restructuring opportunities, or my experience? Let's connect.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg"
            variant="outline"
            className="bg-background text-foreground hover:bg-background/90 border-2 font-semibold px-8"
            onClick={() => window.location.href = 'mailto:zac.t.smith@outlook.com'}
          >
            <Mail className="mr-2 w-5 h-5" />
            zac.t.smith@outlook.com
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="bg-background text-foreground hover:bg-background/90 border-2 font-semibold px-8"
            onClick={() => window.location.href = 'tel:719-291-3683'}
          >
            <Phone className="mr-2 w-5 h-5" />
            (719) 291-3683
          </Button>

          <Button 
            size="lg"
            variant="outline"
            className="bg-background text-foreground hover:bg-background/90 border-2 font-semibold px-8"
            onClick={() => window.open('https://www.linkedin.com/in/zac-t-smith/', '_blank')}
          >
            <Linkedin className="mr-2 w-5 h-5" />
            LinkedIn
          </Button>
        </div>
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <p className="text-sm opacity-75">
            © 2025 Zachary T. Smith | The Fulcrum Memo
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
