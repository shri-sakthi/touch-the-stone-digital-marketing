import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 text-primary/20 animate-pulse">
        <Star className="w-8 h-8" />
      </div>
      <div className="absolute top-40 right-32 text-accent/30 animate-pulse" style={{ animationDelay: '1s' }}>
        <Star className="w-6 h-6" />
      </div>
      <div className="absolute bottom-32 left-16 text-primary/30 animate-pulse" style={{ animationDelay: '2s' }}>
        <Star className="w-4 h-4" />
      </div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="font-script text-primary text-4xl md:text-5xl lg:text-6xl">Achieve</span>
              <br />
              <span className="text-foreground">Your Business Goal!</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Let's embark on a digital journey, immersing ourselves in diverse strategies and creating unforgettable growth as we transform your business!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="lg"
              className="group"
              onClick={scrollToContact}
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
        </div>
        
        {/* Right Content */}
        <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            {/* Main illustration placeholder */}
            <div className="w-full h-96 lg:h-[500px] bg-gradient-primary rounded-3xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-90 rounded-3xl"></div>
              <div className="relative z-10 text-white text-center space-y-4">
                <div className="w-24 h-24 bg-white/20 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm">
                  <span className="text-3xl font-bold">TTS</span>
                </div>
                <h3 className="text-xl font-semibold">Digital Marketing Excellence</h3>
                <p className="text-white/80">Growing businesses worldwide</p>
              </div>
            </div>
            
            {/* Floating testimonial badge */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-soft animate-float">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full border-2 border-white"></div>
                </div>
                <div className="text-sm">
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