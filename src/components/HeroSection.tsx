import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5 pt-16">
      {/* Decorative elements */}
      <div className="absolute top-20 left-4 sm:left-20 text-primary/20 animate-pulse">
        <Star className="w-6 h-6 sm:w-8 sm:h-8" />
      </div>
      <div className="absolute top-40 right-8 sm:right-32 text-accent/30 animate-pulse" style={{ animationDelay: '1s' }}>
        <Star className="w-4 h-4 sm:w-6 sm:h-6" />
      </div>
      <div className="absolute bottom-32 left-4 sm:left-16 text-primary/30 animate-pulse" style={{ animationDelay: '2s' }}>
        <Star className="w-3 h-3 sm:w-4 sm:h-4" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 sm:space-y-8 animate-fade-in order-2 lg:order-1">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="font-script text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Achieve</span>
              <br />
              <span className="text-foreground">Your Business Goal!</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Let's embark on a digital journey, immersing ourselves in diverse strategies and creating unforgettable growth as we transform your business!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button 
              variant="hero" 
              size="lg"
              className="group w-full sm:w-auto"
              onClick={scrollToContact}
            >
              Get Started
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group w-full sm:w-auto"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
        </div>
        
        {/* Right Content */}
        <div className="relative animate-scale-in order-1 lg:order-2" style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            {/* Main illustration with team image */}
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] xl:h-[500px] rounded-2xl sm:rounded-3xl relative overflow-hidden shadow-glow">
              <img 
                src="/src/assets/team-meeting.jpg" 
                alt="Professional team meeting - Touch The Stone digital marketing team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/60 rounded-2xl sm:rounded-3xl"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2">Professional Digital Marketing Team</h3>
                <p className="text-white/90 text-xs sm:text-sm lg:text-base">Collaborative strategies for business growth</p>
              </div>
            </div>
            
            {/* Floating testimonial badge */}
            <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-soft animate-float">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="flex -space-x-1 sm:-space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-primary rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-accent to-primary rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-primary to-secondary rounded-full border-2 border-white"></div>
                </div>
                <div className="text-xs sm:text-sm">
                  <div className="font-semibold text-foreground">500+ Happy</div>
                  <div className="text-muted-foreground">Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;