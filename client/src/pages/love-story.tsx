import { motion } from "framer-motion";

const storyEvents = [
  {
    title: "How We Met",
    date: "March 15, 2020",
    description: "It was a beautiful Sunday morning at church when our eyes first met across the sanctuary. Vanessa's radiant smile caught Augustine's attention during the worship service, and he knew from that moment that she was someone special. Little did they know that this chance encounter would be the beginning of their greatest love story.",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    reverse: false
  },
  {
    title: "Our First Date",
    date: "June 8, 2020",
    description: "After weeks of friendly conversations after church services, Augustine finally gathered the courage to ask Vanessa out for coffee. Their first official date was at a cozy café in Nairobi, where they talked for hours about their dreams, faith, and future aspirations. The connection was undeniable, and both knew this was the start of something beautiful.",
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    reverse: true
  },
  {
    title: "The Proposal",
    date: "December 24, 2024",
    description: "On a magical evening at sunset point overlooking the Rift Valley, Augustine surprised Vanessa with the most romantic proposal. Surrounded by candles and rose petals, he got down on one knee and asked her to be his wife forever. Through tears of joy, she said YES! It was a moment they will treasure for the rest of their lives.",
    image: "https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    reverse: false
  }
];

export default function LoveStory() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-b from-white to-[#FEC5E5]/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl  text-[#d4af37] mb-4">
              Our Love Story
            </h2>
            <div className="w-24 h-1 bg- text-[#d4af37] mx-auto" />
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {storyEvents.map((event, index) => (
                <motion.div 
                  key={event.title}
                  className={`flex flex-col ${event.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                >
                  <div className="md:w-1/2">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="rounded-xl shadow-lg w-full h-auto"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="font-dancing text-3xl text-wedding-gold mb-4">
                      {event.title}
                    </h3>
                    <p className="text-lg text-wedding-charcoal leading-relaxed mb-4">
                      {event.description}
                    </p>
                    <div className="text-wedding-pink font-semibold">
                      {event.date}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
