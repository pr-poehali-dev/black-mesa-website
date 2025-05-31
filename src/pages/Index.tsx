import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import RequirementsSection from "@/components/RequirementsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <AboutSection />
      <ScreenshotsSection />
      <RequirementsSection />
      <Footer />
    </div>
  );
};

export default Index;
