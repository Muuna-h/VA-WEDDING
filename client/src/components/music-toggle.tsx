import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Music, Pause } from "lucide-react";

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/final.mp3");
    audio.loop = true;
    audio.volume = 1.0;
    audio.muted = true; // Start muted for autoplay

    audio
      .play()
      .then(() => {
        audio.muted = false; // Unmute after successful autoplay
        setIsPlaying(true);
      })
      .catch((err) => {
        console.warn("Autoplay failed. User interaction required.", err);
        setIsPlaying(false);
      });

    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Audio playback failed:", err);
        });
    }
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
