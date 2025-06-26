import { motion } from "framer-motion";
import { CountdownTimer } from "@/components/countdown-timer";

export default function Countdown() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-r from-[#FEC5E5]/20 to-[#d4af37]/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl  text-[#d4af37] mb-4">
              Countdown to Our Big Day
            </h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-12" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <CountdownTimer />
          </motion.div>
          
          <motion.p 
            className="mt-12 text-5xl text-[#d4af37] font-dancing"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Until we say "I Do"
          </motion.p>
        </div>
      </section>
    </div>
  );
}
