import { Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">R</span>
              </div>
              <span className="font-heading font-bold text-2xl">Rakshak.ai</span>
            </div>
            <p className="text-background/70 text-sm">
              Because every journey deserves safety. AI-powered protection for women, by women.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Features</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#features" className="hover:text-background transition-smooth">SafeRoute AI</a></li>
              <li><a href="#features" className="hover:text-background transition-smooth">Smart SOS</a></li>
              <li><a href="#community" className="hover:text-background transition-smooth">Community Reports</a></li>
              <li><a href="#features" className="hover:text-background transition-smooth">AI Guardian</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#how-it-works" className="hover:text-background transition-smooth">How It Works</a></li>
              <li><a href="#contact" className="hover:text-background transition-smooth">Contact</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-smooth"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-smooth"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-smooth"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-background/70 mt-4">
              Emergency: <span className="text-background font-semibold">100 / 112 / 181</span>
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>© {currentYear} Rakshak.ai. All rights reserved. Built with ❤️ for women's safety.</p>
          <p className="mt-2 font-semibold text-background">Because everyone deserves to return home safely, every single day.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
