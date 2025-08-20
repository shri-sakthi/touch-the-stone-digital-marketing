import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{
    name: "Home",
    href: "#home"
  }, {
    name: "About",
    href: "#about"
  }, {
    name: "Services",
    href: "#services"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <nav className="fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-white font-bold text-lg sm:text-xl">Touch The Stone</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map(item => <a key={item.name} href={item.href} className="text-white/80 hover:text-white transition-colors duration-300 font-medium text-sm lg:text-base">
                {item.name}
              </a>)}
            <Button variant="outline-white" size="sm" className="text-sm">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-white hover:bg-white/20">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-primary/95 backdrop-blur-md rounded-lg mt-2 mx-4">
              {navItems.map(item => <a key={item.name} href={item.href} className="block px-3 py-2 text-white/80 hover:text-white transition-colors duration-300 rounded-md hover:bg-white/10" onClick={() => setIsOpen(false)}>
                  {item.name}
                </a>)}
              <div className="px-3 py-2">
                <Button variant="outline-white" size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;