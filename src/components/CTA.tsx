import { Button } from "@/components/ui/button";
import { Download, Users } from "lucide-react";
const CTA = () => {
  return <section className="py-24 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-slate-50">
          <h2 className="font-heading text-4xl font-bold text-slate-500 md:text-5xl">
            Take Safety Into Your Own Hands
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            Download Rakshak and travel confidently, anytime, anywhere. Join thousands of women who've already made their journeys safer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-lg px-8 py-6 shadow-xl">
              <Download className="w-5 h-5 mr-2" />
              Download App
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-lg px-8 py-6" onClick={() => {
            const element = document.getElementById("community");
            element?.scrollIntoView({
              behavior: "smooth"
            });
          }}>
              <Users className="w-5 h-5 mr-2" />
              Join the Safety Movement
            </Button>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="font-heading font-bold text-4xl bg-gray-900">45K+</div>
              <div className="text-primary-foreground/80">Active Users</div>
            </div>
            <div>
              <div className="font-heading font-bold text-4xl bg-gray-900">70+</div>
              <div className="text-primary-foreground/80">Cities</div>
            </div>
            <div>
              <div className="font-heading font-bold text-4xl bg-slate-900">24/7</div>
              <div className="text-primary-foreground/80">AI Protection</div>
            </div>
            <div>
              <div className="font-heading font-bold text-4xl bg-slate-900">4.8★</div>
              <div className="text-primary-foreground/80">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CTA;