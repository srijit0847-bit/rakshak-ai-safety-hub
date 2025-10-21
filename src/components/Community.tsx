import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Lightbulb, Users, MapPin } from "lucide-react";

const Community = () => {
  const recentReports = [
    {
      type: "Broken streetlight",
      location: "MG Road, Bangalore",
      time: "2 hours ago",
      icon: Lightbulb,
    },
    {
      type: "Unsafe crowd",
      location: "Connaught Place, Delhi",
      time: "4 hours ago",
      icon: AlertTriangle,
    },
    {
      type: "Empty area",
      location: "Koramangala, Bangalore",
      time: "6 hours ago",
      icon: MapPin,
    },
  ];

  return (
    <section id="community" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-heading font-bold text-4xl md:text-5xl">
              Safety Through{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Community Power
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Every report makes our community safer. Join 45,000+ women contributing to real-time safety intelligence across India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Stats Card */}
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-primary" />
                  <h3 className="font-heading font-bold text-2xl">Community Impact</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="font-heading font-bold text-4xl text-primary">45K+</div>
                    <div className="text-muted-foreground">Reports Received</div>
                  </div>
                  <div>
                    <div className="font-heading font-bold text-4xl text-secondary">70+</div>
                    <div className="text-muted-foreground">Cities Mapped</div>
                  </div>
                  <div>
                    <div className="font-heading font-bold text-4xl text-primary">98%</div>
                    <div className="text-muted-foreground">Response Rate</div>
                  </div>
                  <div>
                    <div className="font-heading font-bold text-4xl text-secondary">24/7</div>
                    <div className="text-muted-foreground">Active Monitoring</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Report Form Card */}
            <Card className="border-2 border-secondary/20">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-secondary" />
                  <h3 className="font-heading font-bold text-2xl">Report Safety Concern</h3>
                </div>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left hover:border-primary transition-smooth"
                  >
                    <Lightbulb className="w-5 h-5 mr-3" />
                    Broken Streetlight
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left hover:border-primary transition-smooth"
                  >
                    <AlertTriangle className="w-5 h-5 mr-3" />
                    Unsafe Crowd
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left hover:border-primary transition-smooth"
                  >
                    <MapPin className="w-5 h-5 mr-3" />
                    Empty / Isolated Area
                  </Button>
                </div>
                <Button className="w-full bg-gradient-primary text-primary-foreground font-semibold">
                  Submit Anonymous Report
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Reports */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-2xl">Recent Community Reports</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {recentReports.map((report, index) => (
                <Card key={index} className="hover:shadow-lg transition-smooth">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <report.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold">{report.type}</div>
                        <div className="text-sm text-muted-foreground truncate">{report.location}</div>
                        <div className="text-xs text-muted-foreground mt-1">{report.time}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
