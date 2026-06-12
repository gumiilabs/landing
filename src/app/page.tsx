import { Header } from "@/components/Header";
import { Carousel } from "@/components/Carousel";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="h-[100dvh] w-full overflow-hidden selection:bg-black selection:text-white bg-white relative">
      <Header />
      <div className="absolute inset-0">
        <Carousel />
      </div>
      <Footer />
    </main>
  );
}
