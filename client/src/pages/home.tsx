import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        >
          <div className="absolute inset-0 bg-[#d4af37]/30" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1 
            className="font-dancing text-6xl md:text-8xl  text-[#FEC5E5] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Vanessa & Augostine
          </motion.h1>
          
          <motion.p 
            className="font-playfair text-2xl md:text-3xl text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            August 2nd, 2025
          </motion.p>
          
          <motion.p 
            className="font-inter text-lg md:text-xl text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Join us as we celebrate our love story at Updated Soon
          </motion.p>
          
          <motion.div 
            className="space-x-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link href="/details">
              <Button className="bg-wedding-gold hover:bg-wedding-dark-gold text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                View Details
              </Button>
            </Link>
            <Link href="/rsvp">
              <Button 
                variant="outline"
                className="border-2 border-wedding-pink text-wedding-pink hover:bg-wedding-pink hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                RSVP Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
