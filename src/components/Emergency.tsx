import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Phone, MapPin, Volume2 } from "lucide-react";
const Emergency = () => {
  return <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading font-bold text-4xl md:text-5xl">
              Instant{" "}
              <span className="bg-gradient-primary bg-clip-text text-zinc-800">
                Emergency Response
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              One tap or voice command activates instant SOS with GPS location, audio snapshot, and emergency contact alerts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-destructive/30 hover:border-destructive transition-smooth">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-destructive/10 flex items-center justify-center animate-pulse-glow">
                  <AlertCircle className="w-16 h-16 text-destructive" />
                </div>
                <h3 className="font-heading font-bold text-2xl">One-Tap SOS</h3>
                <p className="text-muted-foreground">
                  Press and hold the SOS button for 3 seconds to trigger emergency alert with your live location.
                </p>
                <Button size="lg" className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground font-semibold">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Demo SOS Button
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 hover:border-primary transition-smooth">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center animate-pulse-glow" style={{
                animationDelay: "0.5s"
              }}>
                  <Volume2 className="w-16 h-16 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-2xl">Voice Activation</h3>
                <p className="text-muted-foreground">
                  Simply say "Help me" or hold volume buttons to trigger silent SOS without touching your phone.
                </p>
                <Button size="lg" variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
                  <Volume2 className="w-5 h-5 mr-2" />
                  Test Voice Command
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="font-heading font-bold text-2xl text-center">Emergency Response Flow</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading font-bold text-xl">
                    1
                  </div>
                  <h4 className="font-heading font-semibold text-lg">SOS Triggered</h4>
                  <p className="text-sm text-muted-foreground">
                    Alert activated via button, voice, or AI detection of no response during check-in.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-heading font-bold text-xl">
                    2
                  </div>
                  <h4 className="font-heading font-semibold text-lg">Data Captured</h4>
                  <p className="text-sm text-muted-foreground">
                    GPS location, audio snapshot, and time stamp instantly recorded and encrypted.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-destructive/10 text-destructive flex items-center justify-center font-heading font-bold text-xl">
                    3
                  </div>
                  <h4 className="font-heading font-semibold text-lg">Alerts Sent</h4>
                  <p className="text-sm text-muted-foreground">
                    Emergency contacts and nearby authorities notified with live location sharing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="mt-12 bg-muted/50">
            <CardContent className="p-8">
              <h3 className="font-heading font-bold text-xl mb-4 flex items-center gap-2">
                <Phone className="w-6 h-6 text-destructive" />
                Emergency Helplines
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <div className="font-semibold">Police</div>
                    <div className="text-sm text-muted-foreground">100 / 112</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <div className="font-semibold">Women Helpline</div>
                    <div className="text-sm text-muted-foreground">181</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <div className="font-semibold">Ambulance</div>
                    <div className="text-sm text-muted-foreground">102</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Emergency;