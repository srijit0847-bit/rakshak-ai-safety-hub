import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for reaching out!",
      description: "Our team will get back to you soon."
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-700">
              Get in{" "}
              <span className="bg-gradient-primary bg-clip-text text-gray-800">
                Touch
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Questions, feedback, or partnership inquiries? We're here to help make your journey safer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-smooth">
              <CardContent className="p-6 space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg">Email Us</h3>
                <p className="text-sm text-muted-foreground">support@rakshak.ai</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-smooth">
              <CardContent className="p-6 space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-lg">Emergency Support</h3>
                <p className="text-sm text-muted-foreground">Available 24/7</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-smooth">
              <CardContent className="p-6 space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg">Coverage</h3>
                <p className="text-sm text-muted-foreground">70+ Cities in India</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" name="subject" placeholder="How can we help?" value={formData.subject} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" name="message" placeholder="Tell us more..." rows={5} value={formData.message} onChange={handleChange} required />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-primary font-semibold text-slate-50 bg-[#213a86]">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Contact;