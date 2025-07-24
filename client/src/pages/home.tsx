import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen pt-16 sm:pt-20">
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
            className="font-dancing text-6xl sm:text-6xl md:text-10xl text-[#FEC5E5] mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Vanessah & Augostine
          </motion.h1>
          
          <motion.p 
            className="font-playfair text-xl sm:text-2xl md:text-3xl text-white mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            August 2nd, 2025
          </motion.p>
          
          <motion.p 
            className="font-inter text-base sm:text-lg md:text-xl text-white mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Join us as we celebrate our love story, FROM 9:00 AM at Terabella Gardens, Ongata Rongai
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:space-x-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link href="/details">
              <Button className="w-full sm:w-auto bg-[#d4af37] hover:bg-[#fec5e5] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                View Details
              </Button>
            </Link>
            <Link href="/rsvp">
              <Button 
                variant="outline"
                className="w-full sm:w-auto bg-[#fec5e5] border-2 border-[#fec5e5] text-wedding-pink hover:bg-[#fec5e5] hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                RSVP Now
              </Button>
            </Link>
            <Link href="/directions">
              <Button 
                variant="outline"
                className="w-full sm:w-auto border-2 border-wedding-pink text-wedding-pink hover:bg-[#fec5e5] hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Directions
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
