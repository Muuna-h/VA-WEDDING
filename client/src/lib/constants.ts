export const WEDDING_DATE = "2025-07-29T16:00:00";

export const WEDDING_COLORS = {
  pink: "hsl(330, 68%, 85%)",
  gold: "hsl(51, 100%, 50%)",
  blush: "hsl(330, 100%, 88%)",
  darkGold: "hsl(43, 74%, 42%)",
  charcoal: "hsl(210, 14%, 29%)",
  white: "hsl(0, 0%, 100%)"
} as const;

export const VENUE_INFO = {
  ceremony: {
    name: "JMC Church",
    location: "Rongai, Kajiado County, Kenya",
    time: "4:00 PM"
  },
  reception: {
    name: "JMC Church Hall",
    location: "Rongai, Kajiado County, Kenya", 
    time: "6:00 PM - 11:00 PM"
  }
} as const;

export const CONTACT_INFO = {
  bride: {
    name: "Vanessa",
    phone: "+254 700 000 001"
  },
  groom: {
    name: "Augustine", 
    phone: "+254 700 000 002"
  },
  email: "vanessa.augustine@wedding.com"
} as const;
