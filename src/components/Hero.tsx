import { Button } from "@/components/ui/button";
import { Shield, MapPin, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 gradient-hero"></div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Shield className="w-4 h-4" />
            AI-Powered Safety Technology
          </div>

          {/* Main Heading */}
          <h1 className="font-heading font-bold text-5xl md:text-7xl leading-tight">
            Because Every Journey
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Deserves Safety
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered safety and navigation for women, by women. Navigate confidently with real-time safe routes, community intelligence, and instant emergency support.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-smooth font-semibold text-lg px-8 py-6 glow-primary"
            >
              Download on Play Store
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth font-semibold text-lg px-8 py-6"
            >
              Get on App Store
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-left">
                <div className="font-heading font-bold text-2xl">70+</div>
                <div className="text-sm text-muted-foreground">Cities Mapped</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-left">
                <div className="font-heading font-bold text-2xl">45K+</div>
                <div className="text-sm text-muted-foreground">Safety Reports</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-heading font-bold text-2xl">24/7</div>
                <div className="text-sm text-muted-foreground">AI Guardian</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
    </section>
  );
};

export default Hero;
