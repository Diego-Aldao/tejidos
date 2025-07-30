import Navbar from "@/components/layout/Navbar/Navbar";
import Crochet from "@/components/Sections/Crochet";
import DosAgujas from "@/components/Sections/DosAgujas";
import Footer from "@/components/layout/Footer";
import Nosotros from "@/components/Sections/Nosotros";
import Contacto from "@/components/Sections/Contacto";
import Hero from "@/components/Sections/Hero";
import SeparadorSections from "@/components/SeparadorSections";

export default function Home() {
  return (
    <main
      id="inicio"
      className="w-full min-h-screen bg-background overflow-x-hidden flex flex-col gap-16 lg:gap-20"
    >
      <Navbar />
      <Hero />
      <Nosotros />
      <Crochet />
      <SeparadorSections />
      <DosAgujas />
      <Contacto />
      <Footer />
    </main>
  );
}
