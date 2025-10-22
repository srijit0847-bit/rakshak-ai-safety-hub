import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
const Testimonials = () => {
  const testimonials = [{
    name: "Riya Sharma",
    location: "Delhi",
    role: "Student",
    text: "Rakshak helped me avoid a deserted road after my evening class. The AI route showed me a safer, well-lit path with CCTV coverage. I feel so much more confident now.",
    rating: 5
  }, {
    name: "Ananya Patel",
    location: "Pune",
    role: "Night Shift Worker",
    text: "The AI check-in feature is a game-changer. My family knows I'm safe, and the automatic alerts give them peace of mind during my late-night commutes.",
    rating: 5
  }, {
    name: "Neha Gupta",
    location: "Gurgaon",
    role: "Professional",
    text: "Finally, a safety app that feels built for us. The community reports are incredibly helpful, and knowing there are 45,000+ women contributing makes me feel connected and protected.",
    rating: 5
  }];
  return <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-heading font-bold text-4xl md:text-5xl">
            Trusted by{" "}
            <span className="bg-gradient-primary bg-clip-text text-neutral-900">
              Women Everywhere
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from real women who travel safer every day with Rakshak.ai
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => <Card key={index} className="hover:shadow-xl transition-smooth border-2 hover:border-primary/20">
              <CardContent className="p-8 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="pt-4 border-t">
                  <div className="font-heading font-semibold text-lg">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;