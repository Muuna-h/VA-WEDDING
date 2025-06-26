import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Music, Pause } from "lucide-react";

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/final.mp3"); // Use the correct relative path
    audioRef.current.loop = true;
    audioRef.current.volume = 1.0;

    // Attempt to play music automatically
    audioRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch((err) => {
      console.error("Autoplay failed:", err);
      // Autoplay failed, keep isPlaying as false, user can manually play
      setIsPlaying(false);
    });

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.error("Audio playback failed:", err);
      });
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <Button
      onClick={toggleMusic}
      variant="outline"
      size="icon"
      className="fixed bottom-4 left-4 z-50 bg-white/90 backdrop-blur-md hover:bg-white/95 border-[#FEC5E5] shadow-lg"
    >
      {isPlaying ? (
        <Pause className="h-5 w-5 text-[#d4af37]" />
      ) : (
        <Music className="h-5 w-5 text-[#d4af37]" />
      )}
    </Button>
  );
}
