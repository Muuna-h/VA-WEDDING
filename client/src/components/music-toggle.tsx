import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Music, Pause } from "lucide-react";

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      // In production, would pause actual audio
      console.log("Pausing wedding music...");
    } else {
      // In production, would play actual audio file
      console.log("Playing wedding music...");
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Button
      onClick={toggleMusic}
      variant="outline"
      size="icon"
      className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-md hover:bg-white/95 border-wedding-pink shadow-lg"
    >
      {isPlaying ? (
        <Pause className="h-5 w-5 text-wedding-gold" />
      ) : (
        <Music className="h-5 w-5 text-wedding-gold" />
      )}
    </Button>
  );
}
