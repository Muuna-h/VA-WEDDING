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
            className="envelope-3d w-96 h-64 md:w-[480px] md:h-80 relative rounded-lg"
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
              className="envelope-flap absolute top-0 left-0 w-full h-40 md:h-48"
              animate={animationStep >= 3 ? { rotateX: -90 } : { rotateX: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ transformOrigin: "bottom" }}
            />
            
            {/* Heart Seal */}
            <motion.div 
              className="heart-seal absolute top-20 md:top-24 left-1/2 w-20 h-20 rounded-full flex items-center justify-center z-10"
              style={{ transform: "translateX(-50%)" }}
              animate={animationStep >= 2 ? { 
                scale: [1, 1.2, 0], 
                rotate: [0, 180, 360],
                opacity: [1, 0.8, 0]
              } : { scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="text-white font-bold text-xl">VA</div>
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
            className="invitation-card absolute top-0 left-1/2 w-80 h-[480px] md:w-96 md:h-[550px] rounded-xl p-8 z-20"
            style={{ transform: "translateX(-50%)" }}
            initial={{ opacity: 0, y: 0, scale: 0.8 }}
            animate={animationStep >= 4 ? {
              opacity: 1,
              y: -120,
              scale: 1
            } : {
              opacity: 0,
              y: 0,
              scale: 0.8
            }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <div className="text-center h-full flex flex-col justify-center relative">
              {/* Decorative Hearts */}
              <div className="absolute top-4 left-4 text-wedding-pink text-2xl">♥</div>
              <div className="absolute top-4 right-4 text-wedding-gold text-2xl">♥</div>
              <div className="absolute bottom-4 left-4 text-wedding-gold text-2xl">♥</div>
              <div className="absolute bottom-4 right-4 text-wedding-pink text-2xl">♥</div>
              
              <motion.h1 
                className="font-dancing text-5xl md:text-6xl text-wedding-gold mb-6 drop-shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={animationStep >= 4 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1, duration: 1.2 }}
              >
                You're Invited
              </motion.h1>
              
              <motion.div 
                className="space-y-6 text-lg md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={animationStep >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.8, duration: 1 }}
              >
                <p className="font-playfair text-wedding-charcoal font-medium">to celebrate the union of</p>
                <h2 className="font-dancing text-4xl md:text-5xl text-wedding-pink drop-shadow-sm leading-tight">
                  Vanessa & Augustine
                </h2>
                <div className="w-16 h-0.5 bg-wedding-gold mx-auto"></div>
                <p className="font-playfair text-2xl text-wedding-charcoal font-semibold">July 29th, 2025</p>
                <p className="font-playfair text-lg text-wedding-charcoal">4:00 PM</p>
                <p className="font-playfair text-lg text-wedding-charcoal font-medium">JMC Church, Rongai</p>
              </motion.div>
              
              {/* Enter Button */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={showEnterButton ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.8 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="mt-8"
              >
                <Button
                  onClick={handleEnterSite}
                  className="bg-gradient-to-r from-wedding-gold to-wedding-dark-gold hover:from-wedding-dark-gold hover:to-wedding-gold text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
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
