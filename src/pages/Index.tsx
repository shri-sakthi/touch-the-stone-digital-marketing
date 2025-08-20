import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-foreground text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/80">
            ©2019 by Touch The Stone. Transforming businesses digitally.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
