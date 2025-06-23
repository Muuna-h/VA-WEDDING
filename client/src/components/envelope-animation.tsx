import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

interface PetalProps {
  delay: number;
  duration: number;
  left: string;
}

function Petal({ delay, duration, left }: PetalProps) {
  return (
    <motion.div
      className="petal absolute"
      style={{ left }}
      initial={{ y: -100, opacity: 1, rotate: 0 }}
      animate={{ y: window.innerHeight + 100, opacity: 0, rotate: 360 }}
      transition={{
        duration,
        delay,
        ease: "linear",
        repeat: Infinity,
        repeatDelay: Math.random() * 2
      }}
    />
  );
}

interface SparkleProps {
  delay: number;
  top: string;
  left: string;
}

function Sparkle({ delay, top, left }: SparkleProps) {
  return (
    <motion.div
      className="absolute w-3 h-3 bg-white rounded-full shadow-lg"
      style={{ 
        top, 
        left,
        background: "radial-gradient(circle, #ffffff 0%, #ffd700 50%, #ffffff 100%)",
        boxShadow: "0 0 10px rgba(255, 215, 0, 0.8)"
      }}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{ 
        opacity: [0, 1, 1, 0], 
        scale: [0, 1.2, 1, 0],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 2,
        delay,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: Math.random() * 4 + 2
      }}
    />
  );
}

export function EnvelopeAnimation() {
  const [, setLocation] = useLocation();
  const [animationStep, setAnimationStep] = useState(0);
  const [showEnterButton, setShowEnterButton] = useState(false);

  const petals = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2,
    left: `${Math.random() * 100}%`
  }));

  const sparkles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: Math.random() * 2 + 1,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`
  }));

  useEffect(() => {
    const timers = [
      // Step 1: Envelope swings down (CSS animation handles this)
      setTimeout(() => setAnimationStep(1), 3500),
      // Step 2: Seal pops off  
      setTimeout(() => setAnimationStep(2), 4500),
      // Step 3: Envelope opens
      setTimeout(() => setAnimationStep(3), 6000),
      // Step 4: Card slides out
      setTimeout(() => setAnimationStep(4), 8000),
      // Step 5: Show enter button
      setTimeout(() => setShowEnterButton(true), 10000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleEnterSite = () => {
    console.log("Navigating to /home");
    setLocation("/home");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Church aisle background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      {/* Falling petals */}
      <div className="absolute inset-0 pointer-events-none">
        {petals.map((petal) => (
          <Petal
            key={petal.id}
            delay={petal.delay}
            duration={petal.duration}
            left={petal.left}
          />
        ))}
      </div>

      {/* Envelope container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          initial={{ y: -window.innerHeight, rotate: -10, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          transition={{
            duration: 3,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {/* Main Envelope */}
          <motion.div 
            className="envelope-3d w-80 h-52 sm:w-96 sm:h-64 md:w-[480px] md:h-80 relative rounded-lg"
            animate={{
              boxShadow: animationStep >= 1 ? [
                "0 25px 50px rgba(0,0,0,0.3), 0 0 40px rgba(255, 215, 0, 0.6)",
                "0 25px 50px rgba(0,0,0,0.3), 0 0 60px rgba(255, 215, 0, 0.8), 0 0 80px rgba(255, 215, 0, 0.4)"
              ] : "0 25px 50px rgba(0,0,0,0.3), 0 0 30px rgba(255, 215, 0, 0.4)"
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            {/* Sparkles on envelope */}
            <div className="absolute inset-0 pointer-events-none z-10">
              {sparkles.map((sparkle) => (
                <Sparkle
                  key={sparkle.id}
                  delay={sparkle.delay}
                  top={sparkle.top}
                  left={sparkle.left}
                />
              ))}
            </div>
            {/* Envelope Flap */}
            <motion.div 
              className="envelope-flap absolute top-0 left-0 w-full h-32 sm:h-40 md:h-48"
              animate={animationStep >= 3 ? { rotateX: -90 } : { rotateX: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ transformOrigin: "bottom" }}
            />
            
            {/* Heart Seal */}
            <motion.div 
              className="absolute top-16 sm:top-20 md:top-24 left-1/2 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center z-10"
              style={{ 
                transform: "translateX(-50%)",
                background: "radial-gradient(circle, hsl(330, 68%, 75%) 0%, hsl(330, 68%, 65%) 50%, hsl(330, 68%, 55%) 100%)",
                boxShadow: "0 0 20px rgba(248, 187, 217, 0.6)",
                clipPath: "polygon(50% 5%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
              }}
              animate={animationStep >= 2 ? { 
                scale: [1, 1.2, 0], 
                rotate: [0, 180, 360],
                opacity: [1, 0.8, 0]
              } : { scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="text-white font-bold text-xs sm:text-sm">VA</div>
            </motion.div>
            
            {/* Envelope Text */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
              <p className="font-great-vibes text-white text-2xl md:text-3xl drop-shadow-lg">
                You're Invited...
              </p>
            </div>
          </motion.div>
          
          {/* Invitation Card */}
          <motion.div 
            className="invitation-card absolute top-0 left-1/2 w-64 h-[380px] sm:w-72 sm:h-[420px] md:w-80 md:h-[480px] rounded-xl p-4 sm:p-6 z-20"
            style={{ transform: "translateX(-50%)" }}
            initial={{ opacity: 0, y: 0, scale: 0.8 }}
            animate={animationStep >= 4 ? {
              opacity: 1,
              y: -80,
              scale: 1
            } : {
              opacity: 0,
              y: 0,
              scale: 0.8
            }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <div className="text-center h-full flex flex-col justify-center relative">
              {/* Watercolor Roses in Corners */}
              <div className="absolute top-1 left-1 sm:top-2 sm:left-2 text-wedding-pink text-sm sm:text-xl opacity-60">🌹</div>
              <div className="absolute top-1 right-1 sm:top-2 sm:right-2 text-wedding-pink text-sm sm:text-xl opacity-60">🌹</div>
              <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 text-wedding-gold text-xs sm:text-lg opacity-60">🌿</div>
              <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 text-wedding-gold text-xs sm:text-lg opacity-60">🌿</div>
              
              <motion.h1 
                className="font-dancing text-2xl sm:text-3xl md:text-4xl text-wedding-gold mb-3 sm:mb-4 drop-shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={animationStep >= 4 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1, duration: 1.2 }}
              >
                You're Invited
              </motion.h1>
              
              <motion.div 
                className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={animationStep >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.8, duration: 1 }}
              >
                <p className="font-playfair text-wedding-charcoal text-xs sm:text-sm font-medium">to celebrate the union of</p>
                <h2 className="font-dancing text-xl sm:text-2xl md:text-3xl text-wedding-pink drop-shadow-sm leading-tight">
                  Vanessa & Augustine
                </h2>
                <div className="w-10 sm:w-12 h-0.5 bg-wedding-gold mx-auto"></div>
                
                {/* Bible Verse */}
                <motion.div 
                  className="bg-pink-50/50 rounded-lg p-2 sm:p-3 my-3 sm:my-4"
                  initial={{ opacity: 0 }}
                  animate={animationStep >= 4 ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 2.2, duration: 1 }}
                >
                  <p className="font-playfair text-xs sm:text-sm text-wedding-charcoal italic leading-relaxed">
                    "Love is patient and kind; love does not envy or boast; it is not arrogant."
                  </p>
                  <p className="font-playfair text-xs text-wedding-gold font-semibold mt-1">
                    — 1 Corinthians 13:4
                  </p>
                </motion.div>
                
                <div className="space-y-1">
                  <p className="font-playfair text-base sm:text-lg md:text-xl text-wedding-charcoal font-semibold">July 29th, 2025</p>
                  <p className="font-playfair text-xs sm:text-sm text-wedding-charcoal">4:00 PM</p>
                  <p className="font-playfair text-xs sm:text-sm text-wedding-charcoal font-medium">JMC Church, Rongai</p>
                </div>
              </motion.div>
              
              {/* Enter Button */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={showEnterButton ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.8 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="mt-3 sm:mt-4"
              >
                <Button
                  onClick={handleEnterSite}
                  className="bg-gradient-to-r from-wedding-pink to-pink-400 hover:from-pink-400 hover:to-wedding-pink text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  Enter Our Story
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
