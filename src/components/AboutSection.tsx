import { Target, Globe, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "ROI Assurance",
      description: "Guaranteed return on investment with monthly improvement statistics"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving businesses locally in Coimbatore and globally worldwide"
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "More sales, customers, and profit through proven digital strategies"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Top digital marketing professionals dedicated to your success"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Who We Are –{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Brand Your Business
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Touch The Stone is a leading digital marketing company based in Coimbatore, 
              serving clients globally. We help businesses build their brand both locally 
              and internationally through comprehensive digital solutions.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Positioned as a top digital marketing company in Coimbatore, India, we offer 
              SEO, SMO, SMM, PPC/Google Ads, Web Design, Web Development, and E-commerce 
              solutions that deliver measurable results.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;