import { Header } from "@/components/Header";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Footer } from "@/components/Footer";

export default function Lab() {
  return (
    <main className="min-h-screen selection:bg-black selection:text-white bg-white flex flex-col">
      <Header />
      <ProjectGrid />
      <Footer />
    </main>
  );
}
