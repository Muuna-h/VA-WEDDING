import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Plane, Heart } from "lucide-react";

const registryOptions = [
  {
    icon: Home,
    title: "Home Essentials",
    description: "Help us furnish our new home with kitchen appliances, linens, and household items.",
    buttonText: "View Registry",
    link: "#"
  },
  {
    icon: Plane,
    title: "Honeymoon Fund",
    description: "Contribute to our dream honeymoon adventure and help us create lasting memories.",
    buttonText: "Contribute",
    link: "#"
  },
  {
    icon: Heart,
    title: "Cash Gift",
    description: "A monetary gift to help us start our married life and future plans together.",
    buttonText: "Send Gift",
    link: "#"
  }
];

export default function GiftRegistry() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl text-wedding-charcoal mb-4">
              Gift Registry
            </h2>
            <div className="w-24 h-1 bg-wedding-gold mx-auto mb-6" />
            <p className="text-lg text-wedding-charcoal max-w-2xl mx-auto">
              Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we've created a registry to help us build our new home together.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {registryOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <Card className="bg-white shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <option.icon className="w-12 h-12 text-wedding-gold mx-auto" />
                    </div>
                    <h3 className="font-playfair text-2xl text-wedding-charcoal mb-4">
                      {option.title}
                    </h3>
                    <p className="text-wedding-charcoal mb-6">
                      {option.description}
                    </p>
                    <Button 
                      className="bg-wedding-pink hover:bg-pink-500 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
                      onClick={() => window.open(option.link, '_blank')}
                    >
                      {option.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p className="text-wedding-charcoal italic">
              "The greatest gift is your presence, not your presents. We're grateful for your love and support."
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
