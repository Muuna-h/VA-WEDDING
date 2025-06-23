import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users, Church, Utensils } from "lucide-react";
import { VENUE_INFO } from "@/lib/constants";

export default function EventDetails() {
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
              Wedding Details
            </h2>
            <div className="w-24 h-1 bg-wedding-gold mx-auto" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Ceremony Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Card className="bg-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Church className="w-12 h-12 text-wedding-gold mx-auto mb-4" />
                    <h3 className="font-playfair text-2xl text-wedding-charcoal mb-2">
                      Ceremony
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-wedding-pink mr-3" />
                      <span>Tuesday, July 29th, 2025</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-wedding-pink mr-3" />
                      <span>{VENUE_INFO.ceremony.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-wedding-pink mr-3" />
                      <span>{VENUE_INFO.ceremony.name}, {VENUE_INFO.ceremony.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-wedding-pink mr-3" />
                      <span>Formal Attire Requested</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Reception Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Card className="bg-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Utensils className="w-12 h-12 text-wedding-gold mx-auto mb-4" />
                    <h3 className="font-playfair text-2xl text-wedding-charcoal mb-2">
                      Reception
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-wedding-pink mr-3" />
                      <span>Tuesday, July 29th, 2025</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-wedding-pink mr-3" />
                      <span>{VENUE_INFO.reception.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-wedding-pink mr-3" />
                      <span>{VENUE_INFO.reception.name}, {VENUE_INFO.reception.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Utensils className="w-5 h-5 text-wedding-pink mr-3" />
                      <span>Dinner & Dancing</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
