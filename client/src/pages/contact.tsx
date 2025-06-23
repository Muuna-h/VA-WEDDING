import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Church, Clock, MapPin, Phone, Mail, User } from "lucide-react";
import { VENUE_INFO, CONTACT_INFO } from "@/lib/constants";

export default function Contact() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl text-wedding-charcoal mb-4">
              Location & Contact
            </h2>
            <div className="w-24 h-1 bg-wedding-gold mx-auto" />
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-pink-50 to-white shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl text-wedding-charcoal mb-6">
                    Wedding Venue
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Church className="w-5 h-5 text-wedding-pink mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-wedding-charcoal">
                          {VENUE_INFO.ceremony.name}
                        </h4>
                        <p className="text-gray-600">{VENUE_INFO.ceremony.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-wedding-pink mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-wedding-charcoal">Ceremony Time</h4>
                        <p className="text-gray-600">{VENUE_INFO.ceremony.time} - 6:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-wedding-pink mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-wedding-charcoal">Reception</h4>
                        <p className="text-gray-600">{VENUE_INFO.reception.time}</p>
                        <p className="text-gray-600">{VENUE_INFO.reception.name}</p>
                      </div>
                    </div>
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
            
            {/* Google Maps Placeholder */}
            <motion.div 
              className="bg-gray-200 rounded-lg shadow-lg overflow-hidden h-96 lg:h-full min-h-[400px]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-wedding-gold mx-auto mb-4" />
                  <h4 className="font-playfair text-xl text-wedding-charcoal mb-2">
                    Interactive Map
                  </h4>
                  <p className="text-gray-600 mb-4">JMC Church, Rongai</p>
                  <Button 
                    className="bg-wedding-gold hover:bg-wedding-dark-gold text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300"
                    onClick={() => window.open('https://maps.google.com/?q=JMC+Church+Rongai', '_blank')}
                  >
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-wedding-pink to-wedding-gold text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="font-dancing text-4xl mb-4">Vanessa & Augustine</h3>
            <p className="text-lg opacity-90">July 29th, 2025</p>
          </motion.div>
          
          <motion.p 
            className="opacity-75"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Made with <Heart className="inline w-4 h-4 text-red-300" /> for our special day
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
