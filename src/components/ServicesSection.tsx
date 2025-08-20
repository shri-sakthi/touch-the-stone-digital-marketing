import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Share2, 
  BarChart3, 
  Palette,
  ArrowRight
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "Branding",
      tagline: "Get Things Done",
      description: "Complete brand identity development, logo design, and visual strategy that makes your business stand out in the marketplace.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Marketing Materials"]
    },
    {
      icon: Share2,
      title: "Marketing", 
      tagline: "Results, Delivered",
      description: "Data-driven marketing campaigns across all digital channels to maximize your reach and generate qualified leads.",
      features: ["Social Media Marketing", "Content Strategy", "Email Campaigns", "Influencer Marketing"]
    },
    {
      icon: BarChart3,
      title: "Business Analysis",
      tagline: "Let Us Handle Everything",
      description: "Comprehensive business analysis and strategy development to identify opportunities and optimize your digital presence.",
      features: ["Market Research", "Competitor Analysis", "Performance Tracking", "Strategic Planning"]
    },
    {
      icon: Search,
      title: "Design",
      tagline: "We'll Take Care of That",
      description: "Modern, responsive web design and development solutions that convert visitors into customers and drive business growth.",
      features: ["Web Design", "UI/UX Design", "Mobile Apps", "E-commerce Platforms"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Services We{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions designed to accelerate your business growth 
            and establish a powerful online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-strong transition-all duration-500 hover:-translate-y-3 bg-card border-border/50 overflow-hidden"
            >
              <CardHeader className="relative pb-4">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <p className="text-primary font-semibold text-sm">
                  {service.tagline}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;