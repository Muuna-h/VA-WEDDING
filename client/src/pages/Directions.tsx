import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Church, Clock, MapPin, Phone, Mail, User } from "lucide-react";
import { VENUE_INFO, CONTACT_INFO } from "@/lib/constants";

export default function Directions() {
  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-8 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-wedding-charcoal mb-4">
              Location & Contact
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-wedding-gold mx-auto" />
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div 
              className="space-y-6 sm:space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-pink-50 to-white shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="font-playfair text-xl sm:text-2xl text-wedding-charcoal mb-4 sm:mb-6">
                    Wedding Venue
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-wedding-pink mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-wedding-charcoal">
                          Terrabella Gardens
                        </h4>
                        <p className="text-gray-600">Ongata Rongai, Along Rongai Kiserian road (Magadi rd)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-wedding-pink mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-wedding-charcoal">Ceremony Time</h4>
                        <p className="text-gray-600">{VENUE_INFO.ceremony.time}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-pink-50 to-white shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl text-wedding-charcoal mb-6">
                    Directions
                  </h3>
                  <div className="space-y-4 text-gray-600">
                    <h4 className="font-semibold text-wedding-charcoal">From Town:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Drive past Kware Market</li>
                      <li>Look for Energy petrol station on your left</li>
                      <li>Turn onto the rough road next to the petrol station</li>
                      <li>Drive 100 meters from the main road</li>
                      <li>Terrabella Gardens will be on your right</li>
                    </ul>
                    
                    <h4 className="font-semibold text-wedding-charcoal mt-4">From Kiserian:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Drive past Arap Moi Primary School</li>
                      <li>Look for Energy petrol station on your right</li>
                      <li>Turn onto the rough road next to the petrol station</li>
                      <li>Drive 100 meters from the main road</li>
                      <li>Terrabella Gardens will be on your right</li>
                    </ul>
                    <p className="mt-4">Ample parking available on site</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-pink-50 to-white shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl text-wedding-charcoal mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-wedding-pink mr-4" />
                      <div>
                        <h4 className="font-semibold text-wedding-charcoal">Bride</h4>
                        <p className="text-gray-600">
                          {CONTACT_INFO.bride.name} - {CONTACT_INFO.bride.phone}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-wedding-pink mr-4" />
                      <div>
                        <h4 className="font-semibold text-wedding-charcoal">Groom</h4>
                        <p className="text-gray-600">
                          {CONTACT_INFO.groom.name} - {CONTACT_INFO.groom.phone}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-wedding-pink mr-4" />
                      <div>
                        <h4 className="font-semibold text-wedding-charcoal">Email</h4>
                        <p className="text-gray-600">{CONTACT_INFO.email}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Google Maps Embed */}
            <motion.div 
              className="rounded-lg shadow-lg overflow-hidden h-[520px] sm:h-96 lg:h-full min-h-[520px] sm:min-h-[600px]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d926.4274332056426!2d36.74242220761949!3d-1.3978852570306466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f055d91bb1b4d%3A0x944e17e1df236130!2sTerabella%20Gardens!5e1!3m2!1sen!2ske!4v1753281555017!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Simple Heart Statement */}
      <div className="bg-white py-6 sm:py-8 text-center relative">
        <motion.div 
          className="container mx-auto px-4 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative inline-flex items-center flex-wrap justify-center">
            <span className="text-xl sm:text-2xl text-[#d4af37] mr-2">Made with</span>
            
            {/* Heart Seal */}
            <div 
              className="inline-flex items-center justify-center relative mx-2"
              style={{
                background: "#FEC5E5",
                boxShadow: "0 0 10px rgba(254, 197, 229, 0.6)",
                width: "40px",
                height: "40px",
                position: "relative",
                transform: "rotate(-45deg)",
              }}
            >
              {/* Left lobe */}
              <div
                style={{
                  position: "absolute",
                  width: "40px",
                  height: "40px",
                  background: "#FEC5E5",
                  borderRadius: "50%",
                  top: "-24px",
                  left: "0px",
                }}
              />
              {/* Right lobe */}
              <div
                style={{
                  position: "absolute",
                  width: "40px",
                  height: "40px",
                  background: "#FEC5E5",
                  borderRadius: "50%",
                  top: "0px",
                  left: "24px",
                }}
              />
              {/* Inner Text */}
              <div
                style={{
                  transform: "rotate(45deg)",
                  zIndex: 9,
                  textAlign: "center",
                }}
                className="font-dancing text-2xl text-[white] drop-shadow-sm"
              >
                Heart
              </div>
            </div>
            
            <span className="text-xl sm:text-2xl text-[#d4af37] ml-2">for Our Special Day</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
