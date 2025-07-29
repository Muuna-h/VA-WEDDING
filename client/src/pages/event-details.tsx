import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users, Church, Utensils, Mail, ClipboardList } from "lucide-react";
import { VENUE_INFO } from "@/lib/constants";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function EventDetails() {
  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      <section className="py-12 sm:py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-8 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-[#FEC5E5] mb-4">
              Wedding Details
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-[#d4af37] mx-auto" />
          </motion.div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12 max-w-6xl mx-auto">
            {/* Ceremony Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Card className="bg-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="text-center mb-4 sm:mb-6">
                    <Church className="w-10 h-10 sm:w-12 sm:h-12 text-[#d4af37] mx-auto mb-3 sm:mb-4" />
                    <h3 className="font-playfair text-xl sm:text-2xl text-wedding-charcoal mb-2">
                      Ceremony
                    </h3>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-[#FEC5E5] mr-3" />
                      <span>Saturday, August 2nd, 2025</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-[#FEC5E5] mr-3" />
                      <span>{VENUE_INFO.ceremony.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-[#FEC5E5] mr-3" />
                      <span className="font-semibold">Terrabella Gardens - Ongata Rongai</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-[#FEC5E5] mr-3" />
                      <span>Attire: Pink and Gold Theme</span>
                      
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 italic">
                      Any attire with the theme color will suffice.
                     </p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 italic">
                      The reception will be held at the same venue starting from 12PM following the ceremony.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Order of Events Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Card className="bg-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="text-center mb-4 sm:mb-6">
                    <ClipboardList className="w-10 h-10 sm:w-12 sm:h-12 text-[#d4af37] mx-auto mb-3 sm:mb-4" />
                    <h3 className="font-playfair text-xl sm:text-2xl text-wedding-charcoal mb-2">
                      Order of Events
                    </h3>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <p className="text-sm font-medium">MC: Mr. James Mutura</p>
                    <div className="space-y-1">
                      <p className="text-sm">• Opening Prayer</p>
                      <p className="text-sm">• Praise & Worship song</p>
                      <p className="text-sm">• Groom Procession - Page boys/Big boys song</p>
                      <p className="text-sm">• Bride Procession - Flower girl/Big Girl song</p>
                      <p className="text-sm">• Introduction: MC</p>
                      <p className="text-sm">• Prayer - Praise & Worship team</p>
                      <p className="text-sm">• Sermon session: Rev</p>
                      <p className="text-sm">• Cake Session</p>
                      <p className="text-sm">• Gifts & Presents</p>
                      <p className="text-sm">• Vote of thanks</p>
                      <p className="text-sm">• Food</p>
                      <p className="text-sm">• Closing Prayer</p>
                      <p className="text-sm">• Photo Session</p>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 italic text-center">
                      Guest Leave at their pleasure. GOD BLESS YOU!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* RSVP Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Card className="bg-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="text-center mb-4 sm:mb-6">
                    <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-[#d4af37] mx-auto mb-3 sm:mb-4" />
                    <h3 className="font-playfair text-xl sm:text-2xl text-wedding-charcoal mb-2">
                      RSVP
                    </h3>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-center text-sm sm:text-base text-gray-700">
                      Please confirm your attendance by filling out our RSVP form. We're excited to celebrate our special day with you!
                    </p>
                    <p className="text-center text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                      Kindly respond by <span className="font-semibold">July 31st, 2025</span>
                    </p>
                    <div className="flex justify-center mt-3 sm:mt-4">
                      <Link href="/rsvp">
                        <Button className="bg-[#d4af37] hover:bg-[#fec5e5] text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                          RSVP Now
                        </Button>
                      </Link>
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
