import Header from "@/components/Blocks/Home/Header";
import { CTA } from "@/components/Blocks/Home/CTA";
import { HeroSection } from "@/components/Blocks/Home/Hero";
import Footer from "@/components/Blocks/Home/Footer";



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
