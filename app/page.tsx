import Hero from "@/components/home/Hero";
import WorkPreview from "@/components/home/WorkPreview";
import Capabilities from "@/components/home/Capabilities";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6">
      <Hero />
      <WorkPreview />
      <Capabilities />
    </main>
  );
}
