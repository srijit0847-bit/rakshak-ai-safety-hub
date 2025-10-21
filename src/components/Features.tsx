import { Card, CardContent } from "@/components/ui/card";
import { Shield, MapPin, Users, Bell, AlertCircle, Brain } from "lucide-react";
import aiRouteImg from "@/assets/feature-ai-route.png";
import sosImg from "@/assets/feature-sos.png";
import communityImg from "@/assets/feature-community.png";
const Features = () => {
  const features = [{
    icon: MapPin,
    title: "SafeRoute AI",
    description: "Finds the safest route, not the fastest. AI analyzes lighting, crowd density, and CCTV coverage in real-time.",
    image: aiRouteImg,
    color: "primary"
  }, {
    icon: AlertCircle,
    title: "Smart SOS",
    description: "One-tap or voice-trigger emergency alerts with GPS location and audio snapshot sent to your trusted contacts.",
    image: sosImg,
    color: "destructive"
  }, {
    icon: Users,
    title: "Community Safety Reports",
    description: "Real-time feedback from users about unsafe areas, broken lights, and crowd situations across 70+ cities.",
    image: communityImg,
    color: "secondary"
  }, {
    icon: Shield,
    title: "Nearby Safe Zones",
    description: "Instantly locate police stations, hospitals, 24/7 shops, and emergency shelters along your route.",
    color: "secondary"
  }, {
    icon: Brain,
    title: "AI Guardian",
    description: "Virtual assistant that checks in automatically during your journey. No response triggers emergency alerts.",
    color: "primary"
  }, {
    icon: Bell,
    title: "Real-Time Notifications",
    description: "Stay updated about risky areas nearby with instant alerts based on community reports and AI analysis.",
    color: "primary"
  }];
  return <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-heading text-4xl md:text-4xl font-bold">
            Powered by AI,{" "}
            <span className="bg-gradient-primary bg-clip-text text-stone-800 text-3xl">
              Protected by Community
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Advanced technology meets collective intelligence to create the safest travel experience for women everywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => <Card key={index} className="group hover:shadow-xl transition-smooth border-2 hover:border-primary/20 overflow-hidden">
              <CardContent className="p-6 space-y-4">
                {feature.image ? <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                    <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-smooth" />
                  </div> : <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-smooth group-hover:scale-110 ${feature.color === "primary" ? "bg-primary/10 text-primary" : feature.color === "secondary" ? "bg-secondary/10 text-secondary" : "bg-destructive/10 text-destructive"}`}>
                    <feature.icon className="w-8 h-8" />
                  </div>}
                <h3 className="font-heading font-bold text-xl">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Features;