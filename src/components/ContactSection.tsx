import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Facebook, 
  Twitter, 
  Linkedin,
  Send
} from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Connect{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              With Us
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your digital presence? Get in touch with our experts 
            and let's discuss how we can help grow your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-soft border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Your Company Name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project and how we can help..."
                  rows={4}
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-soft border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-primary rounded-lg p-3">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Location</h4>
                      <p className="text-muted-foreground">Coimbatore, Tamil Nadu, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-primary rounded-lg p-3">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">info@touchthestone.net</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-primary rounded-lg p-3">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p className="text-muted-foreground">+91 6381316109</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Follow Us</h3>
                
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all duration-300"
                  >
                    <Twitter className="w-5 h-5" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </div>
                
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Ready to start your digital transformation journey? Let's create 
                    something amazing together!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;