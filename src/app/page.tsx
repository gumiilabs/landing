import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ArtisticAccents } from "@/components/ArtisticAccents";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-accent selection:text-white bg-white">
      <ArtisticAccents />
      <Header />
      <Hero />
      <ProjectGrid />
      <Footer />
    </main>
  );
}
