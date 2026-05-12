import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import OutcomesSection from "@/components/sections/OutcomesSection";
import ProgramSection from "@/components/sections/ProgramSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ScienceFounderSection from "@/components/sections/ScienceFounderSection";
import PartnerSection from "@/components/sections/PartnerSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <OutcomesSection />
        <ProgramSection />
        <HowItWorksSection />
        <ScienceFounderSection />
        <PartnerSection />
      </main>
      <Footer />
    </>
  );
}
