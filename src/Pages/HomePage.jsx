import AppLayout from "@/Components/AppLayout";
import HeroSection from "./HeroSection";
import ProgrammesSection from "./ProgrammesSection";
import FaqSection from "./FaqSection";
import MentorSection from "./MentorSection";
import ProgramFeaturesSection from "./ProgramFeaturesSection";
import CareerCTASection from "./CareerCTASection";
import OutcomesSection from "./OutcomesSection";
import faqs from "@/faqData";


export default function HomePage() {
  return (
    <AppLayout header={<HeroSection />}>
      <OutcomesSection/>
      <ProgrammesSection />
      <ProgramFeaturesSection />
      <MentorSection />
      <FaqSection faqs={faqs} />
      <CareerCTASection />
    </AppLayout>
  );
}
