import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function RSVP() {
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
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-[#d4af37] mb-4">
              RSVP
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-wedding-gold mx-auto mb-4 sm:mb-6" />
            <p className="text-base sm:text-lg text-wedding-charcoal max-w-2xl mx-auto">
              We can't wait to celebrate with you! Please let us know if you'll be joining us on our special day.
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-pink-50 to-white shadow-lg">
              <CardContent className="p-4 sm:p-8">
                <form action="https://formsubmit.co/vdvanessad@gmail.com" method="POST" className="space-y-4 sm:space-y-6">
                  <input type="hidden" name="_subject" value="Wedding RSVP - Vanessa & Augustine" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value={`${window.location.origin}/home?rsvp=success`} />
                  
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <Label htmlFor="first_name" className="text-sm sm:text-base">First Name *</Label>
                      <Input 
                        type="text" 
                        name="first_name" 
                        id="first_name"
                        required 
                        className="mt-1 sm:mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="last_name" className="text-sm sm:text-base">Last Name *</Label>
                      <Input 
                        type="text" 
                        name="last_name" 
                        id="last_name"
                        required 
                        className="mt-1 sm:mt-2"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      type="email" 
                      name="email" 
                      id="email"
                      required 
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-base font-semibold">Will you be attending? *</Label>
                    <RadioGroup name="attendance" className="mt-3" required>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="yes" />
                        <Label htmlFor="yes">Yes, I'll be there!</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="no" />
                        <Label htmlFor="no">Sorry, I can't make it</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div>
                    <Label htmlFor="guest_count">Number of Guests</Label>
                    <Select name="guest_count">
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select number of guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                        <SelectItem value="5+">5+ Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  
                  <div>
                    <Label htmlFor="message">Special Message</Label>
                    <Textarea 
                      name="message" 
                      id="message"
                      placeholder="Share your excitement, well wishes, or any special requests..."
                      className="mt-2 resize-none"
                      rows={4}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-wedding-gold hover:bg-wedding-dark-gold text-[#d4af37] py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Send RSVP
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
