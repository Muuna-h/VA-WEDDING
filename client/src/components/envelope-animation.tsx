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
        repeatDelay: Math.random() * 2,
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
        background:
          "radial-gradient(circle, #ffffff 0%, #ffd700 50%, #ffffff 100%)",
        boxShadow: "0 0 10px rgba(255, 215, 0, 0.8)",
      }}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0, 1.2, 1, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 2,
        delay,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: Math.random() * 4 + 2,
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
    left: `${Math.random() * 100}%`,
  }));

  const sparkles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: Math.random() * 2 + 1,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  }));

  useEffect(() => {
    const timers = [
      setTimeout(() => setAnimationStep(1), 3500),
      setTimeout(() => setAnimationStep(2), 4500),
      setTimeout(() => setAnimationStep(3), 6000),
      setTimeout(() => setAnimationStep(4), 8000),
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
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
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

      {/* Centering container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          initial={{ y: -window.innerHeight, rotate: -10, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          transition={{
            duration: 3,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {/* Main Envelope */}
          <motion.div
            className="envelope-3d w-80 h-52 sm:w-96 sm:h-64 md:w-[480px] md:h-80 relative rounded-lg"
            animate={{
              boxShadow:
                animationStep >= 1
                  ? [
                      "0 25px 50px rgba(0,0,0,0.3), 0 0 40px rgba(255, 215, 0, 0.6)",
                      "0 25px 50px rgba(0,0,0,0.3), 0 0 60px rgba(255, 215, 0, 0.8), 0 0 80px rgba(255, 215, 0, 0.4)",
                    ]
                  : "0 25px 50px rgba(0,0,0,0.3), 0 0 30px rgba(255, 215, 0, 0.4)",
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
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
            {animationStep < 3 && (
              <motion.div
                className="absolute top-28 sm:top-32 md:top-40 left-1/2 flex items-center justify-center z-10"
                style={{
                  transform: "translateX(-57%) rotate(-45deg)",
                  background: "#FEC5E5",
                  boxShadow: "0 0 20px rgba(254, 197, 229, 0.6)",
                  width: "56px",
                  height: "56px",
                  position: "relative",
                }}
                animate={
                  animationStep >= 2
                    ? { scale: [1, 1.1, 0], opacity: [1, 0.8, 0], rotate: -45 }
                    : { scale: 1, opacity: 1, rotate: -45 }
                }
                transition={{ duration: 4, ease: "easeOut" }}
              >
                {/* Left lobe */}
                <div
                  style={{
                    position: "absolute",
                    width: "56px",
                    height: "56px",
                    background: "#FEC5E5",
                    borderRadius: "50%",
                    top: "-32px",
                    left: "0px",
                  }}
                />
                {/* Right lobe */}
                <div
                  style={{
                    position: "absolute",
                    width: "56px",
                    height: "56px",
                    background: "#FEC5E5",
                    borderRadius: "50%",
                    top: "0px",
                    left: "32px",
                  }}
                />
                {/* Inner Text */}
                <div
                  style={{
                    transform: "rotate(45deg)",
                    zIndex: 10,
                    textAlign: "center",
                  }}
                  className="font-dancing text-2xl sm:text-3xl md:text-4xl text-[#d4af37] mb-3 sm:mb-4 drop-shadow-sm"
                >
                  V&A
                </div>
              </motion.div>
            )}

            {/* Envelope Text */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
              <p className="font-great-vibes text-white text-2xl md:text-3xl drop-shadow-lg">
                You're Invited...
              </p>
            </div>
          </motion.div>

          {/* Invitation Card */}
          <motion.div
            className="invitation-card absolute top-0 left-1/4 w-full sm:w-80 h-auto max-h-[120vh] rounded-xl p-5 sm:p-6 z-20"
            style={{
              transform: "translateX(-70%)", // Center it horizontally
              background: "#fff",
              border: "2px solid #FEC5E5",
              boxShadow: "0 0 40px rgba(254, 197, 229, 0.3)",
              maxWidth: "77vw",
            }}
            initial={{ opacity: 0, y: 0, scale: 0.8 }}
            animate={
              animationStep >= 4
                ? {
                    opacity: 1,
                    y: -80,
                    scale: 1,
                  }
                : {
                    opacity: 0,
                    y: 0,
                    scale: 0.8,
                  }
            }
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <div className="text-center flex flex-col justify-center h-full relative">
              {/* Rose Decorations */}
              <img
                src="/images/rose-blush.png"
                alt="rose"
                className="absolute top-0 left-0 sm:top-0 sm:left-0 w-12 sm:w-16 opacity-90"
              />
              <img
                src="/images/rose-blushrc.png"
                alt="rose"
                className="absolute top-0 right-0 sm:top-0 sm:right-0 w-12 sm:w-16 opacity-90"
              />
              <img
                src="/images/gold-leaf.png"
                alt="leaf"
                className="absolute bottom-0 -left-8 sm:bottom-0 sm:-left-8 w-16 sm:w-24 opacity-100"
              />
              <img
                src="/images/gold-leafrc.png"
                alt="leaf"
                className="absolute bottom-0 -right-8 sm:bottom-0 sm:-right-8 w-16 sm:w-24 opacity-100"
              />

              {/* Title */}
              <motion.h1
                className="font-dancing text-2xl sm:text-3xl md:text-4xl text-[#d4af37] mb-3 sm:mb-4 drop-shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  animationStep >= 4
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 1, duration: 1.2 }}
              >
                You're Invited
              </motion.h1>

              {/* Content */}
              <motion.div
                className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  animationStep >= 4
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ delay: 1.8, duration: 1 }}
              >
                <p className="font-playfair text-[#444] font-medium">
                  to celebrate the union of
                </p>
                <h2 className="font-dancing text-xl sm:text-2xl md:text-3xl text-[#FEC5E5] drop-shadow-sm leading-tight">
                  Vanessa & Augustine
                </h2>
                <div className="w-10 sm:w-12 h-0.5 bg-[#d4af37] mx-auto"></div>

                {/* Bible Verse */}
                <motion.div
                  className="bg-[#fec5e580] rounded-lg p-2 sm:p-3 my-3 sm:my-4"
                  initial={{ opacity: 0 }}
                  animate={animationStep >= 4 ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 2.2, duration: 1 }}
                >
                  <p className="font-playfair text-xs sm:text-sm text-[#333] italic leading-relaxed">
                    "Love is patient and kind; love does not envy or boast; it
                    is not arrogant."
                  </p>
                  <p className="font-playfair text-xs text-[#d4af37] font-semibold mt-1">
                    — 1 Corinthians 13:4
                  </p>
                </motion.div>

                {/* Event Details */}
                <div className="space-y-1">
                  <p className="font-playfair text-base sm:text-lg md:text-xl text-[#333] font-semibold">
                    August 2nd, 2025
                  </p>
                  <p className="font-playfair text-xs sm:text-sm text-[#333]">
                    8:00 AM
                  </p>
                  <p className="font-playfair text-xs sm:text-sm text-[#333] font-medium">
                    JMC Church, Rongai
                  </p>
                </div>
              </motion.div>

              {/* Enter Button */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={
                  showEnterButton
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 30, scale: 0.8 }
                }
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="mt-3 sm:mt-4"
              >
                <Button
                  onClick={handleEnterSite}
                  className="bg-[#FEC5E5] hover:bg-[#fbbfdd] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
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
