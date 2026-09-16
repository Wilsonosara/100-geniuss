import { useParams } from "react-router-dom"
import AppLayout from "@/Components/AppLayout"
import CareerCTASection from "../CareerCTASection"
import FaqSection from "../FaqSection"
import programsData from "@/programmeData"
import HeroSection from "../HeroSection"
import JourneySection from "./JourneySection"
import BenefitsSection from "./BenefitsSection"

export default function ProgrammesPage() {
  const { slug } = useParams();

const programme = programsData.find(
  (programme) => programme.slug === slug
);


console.log(programme)
  return (
     <AppLayout header={<HeroSection  key={programme.slug} programme={programme} />}>
      < JourneySection programme={programme}/>
      <BenefitsSection programme={programme}/>
      <FaqSection faqs={programme.faqs}/>
      <CareerCTASection slug={slug}/>
     </AppLayout>
  )
}
