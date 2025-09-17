import Header from "@/components/Blocks/Header";
import { CTA } from "@/components/Blocks/CTA";
import { HeroSection } from "@/components/Blocks/Hero";
import { Footer } from "@/components/Blocks/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <CTA />
      <Footer />
    </>
  );
}
