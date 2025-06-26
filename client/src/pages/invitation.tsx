import { EnvelopeAnimation } from "@/components/envelope-animation";
import { MusicToggle } from "@/components/music-toggle";

export default function Landing() {
  return (
    <div className="min-h-screen">
      <MusicToggle />
      <EnvelopeAnimation />
    </div>
  );
}
