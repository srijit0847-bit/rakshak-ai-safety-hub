import { Database, Brain, MapPin, Users, RefreshCw } from "lucide-react";
const HowItWorks = () => {
  const steps = [{
    icon: Database,
    title: "Data Collection",
    description: "Real-time data from crowd density sensors, lighting levels, CCTV coverage, and police proximity.",
    color: "primary"
  }, {
    icon: Brain,
    title: "AI Analysis",
    description: "Python-based ML models process safety factors using TensorFlow to evaluate risk levels.",
    color: "secondary"
  }, {
    icon: MapPin,
    title: "Safety Scoring",
    description: "Every route segment receives a dynamic safety score based on multiple real-time parameters.",
    color: "primary"
  }, {
    icon: MapPin,
    title: "Route Recommendation",
    description: "Google Maps API renders the safest path with visual indicators for hazards and safe zones.",
    color: "secondary"
  }, {
    icon: Users,
    title: "Community Feedback",
    description: "User reports enhance AI accuracy, creating a continuously improving safety intelligence network.",
    color: "primary"
  }];
  return <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-heading font-bold text-4xl md:text-5xl">
            How{" "}
            <span className="bg-gradient-primary bg-clip-text text-slate-800">
              Rakshak.ai
            </span>{" "}
            Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Advanced AI technology combined with community intelligence creates a continuous safety improvement cycle.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary opacity-20 transform -translate-x-1/2"></div>

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-lg ${step.color === "primary" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}>
                        {index + 1}
                      </div>
                      <h3 className="font-heading font-bold text-2xl">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="relative">
                    <div className={`w-24 h-24 rounded-2xl flex items-center justify-center transition-smooth hover:scale-110 ${step.color === "primary" ? "bg-primary/10 text-primary glow-primary" : "bg-secondary/10 text-secondary glow-secondary"}`}>
                      <step.icon className="w-12 h-12" />
                    </div>
                  </div>

                  <div className="flex-1"></div>
                </div>)}
            </div>

            {/* Feedback Loop Indicator */}
            <div className="mt-16 flex items-center justify-center">
              <div className="flex items-center gap-4 bg-muted px-8 py-4 rounded-full">
                <RefreshCw className="w-6 h-6 text-primary animate-spin" style={{
                animationDuration: "3s"
              }} />
                <span className="font-heading font-semibold text-lg">Continuous Improvement Cycle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorks;