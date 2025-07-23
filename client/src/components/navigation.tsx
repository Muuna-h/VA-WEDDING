import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/home", label: "Home" },
  { href: "/details", label: "View Details" },
  { href: "/countdown", label: "Countdown" },
  { href: "/rsvp", label: "RSVP" },
  { href: "/directions", label: "Directions" }
];

export function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/home">
              <div className="font-dancing text-2xl  text-[#d4af37] cursor-pointer hover:text-wedding-dark-gold transition-colors">
                V & A
              </div>
            </Link>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a className={`nav-link hover: text-[#d4af37] transition-colors ${
                    location === item.href ? " text-[#d4af37] font-semibold" : ""
                  }`}>
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 right-0 bg-white z-50 md:hidden"
          >
            <div className="container mx-auto px-4 py-8">
              <div className="flex justify-between items-center mb-8">
                <div className="font-dancing text-2xl text-[#d4af37]">V & A</div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X />
                </Button>
              </div>
              <div className="space-y-20">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <a
                      className="block text-lg text-[#d4af37] hover:text-[#fec5e5] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
