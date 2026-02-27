import { HeroSection } from "@/components/blocks/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* Some dummy spacing elements to allow for scrolling */}
      <div className="h-screen bg-black" />
    </main>
  );
}
