import FounderSection from "./FounderSection";
import AppLayout from "@/Components/AppLayout";
import AboutHeroSection from "./HeroSection";
import VisionSection from "./VisionSection";

export default function AboutPage() {
  return (
    <>
      <title>About 100 Genius | Learn. Build. Share. Get Hired.</title>
      <meta
        name="description"
        content="100 Genius is building a community where people can learn practical skills, build real-world experience, share what they know, and get hired for opportunities that matter."
      />

      <AppLayout>
        <AboutHeroSection />
        <VisionSection />
        <FounderSection />
      </AppLayout>
    </>
  );
}
