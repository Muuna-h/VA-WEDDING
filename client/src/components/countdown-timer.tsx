import { useCountdown } from "@/hooks/use-countdown";
import { Card, CardContent } from "@/components/ui/card";

export function CountdownTimer() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown();

  if (isExpired) {
    return (
      <div className="text-center">
        <h2 className="text-4xl font-dancing text-[#d4af37]">We're Married!</h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
      <Card className="transform hover:scale-105 transition-transform duration-300">
        <CardContent className="p-6 text-center">
          <div className="text-4xl md:text-5xl font-bold text-[#FEC5E5] mb-2">
            {days.toString().padStart(3, "0")}
          </div>
          <div className="text-lg text-wedding-charcoal font-semibold">Days</div>
        </CardContent>
      </Card>
      
      <Card className="transform hover:scale-105 transition-transform duration-300">
        <CardContent className="p-6 text-center">
          <div className="text-4xl md:text-5xl font-bold text-[#FEC5E5] mb-2">
            {hours.toString().padStart(2, "0")}
          </div>
          <div className="text-lg text-wedding-charcoal font-semibold">Hours</div>
        </CardContent>
      </Card>
      
      <Card className="transform hover:scale-105 transition-transform duration-300">
        <CardContent className="p-6 text-center">
          <div className="text-4xl md:text-5xl font-bold text-[#FEC5E5] mb-2">
            {minutes.toString().padStart(2, "0")}
          </div>
          <div className="text-lg text-wedding-charcoal font-semibold">Minutes</div>
        </CardContent>
      </Card>
      
      <Card className="transform hover:scale-105 transition-transform duration-300">
        <CardContent className="p-6 text-center">
          <div className="text-4xl md:text-5xl font-bold text-[#FEC5E5] mb-2">
            {seconds.toString().padStart(2, "0")}
          </div>
          <div className="text-lg text-wedding-charcoal font-semibold">Seconds</div>
        </CardContent>
      </Card>
    </div>
  );
}
