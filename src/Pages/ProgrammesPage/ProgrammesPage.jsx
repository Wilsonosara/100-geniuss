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

  return (
    <>
  <title>
    {programme?.title ? `${programme.title} at 100 Genius` : 'Programme Track'}
  </title>

  <meta 
    name="description" 
    content={programme?.description || "Explore our intensive 12-week tech training tracks at 100 Genius."} 
  />
  <meta name="robots" content="index, follow" />

  <meta property="og:type" content="website" />
  <meta 
    property="og:title" 
    content={programme?.title ? `${programme.title} Track | 100 Genius` : 'Programme Track'} 
  />
  <meta 
    property="og:description" 
    content={programme?.description || "Explore our intensive 12-week tech training tracks at 100 Genius."} 
  />
  <meta property="og:url" content={`https://100genius.africa{programme?.slug || ''}`} />

  {/* Twitter */}
  <meta 
    name="twitter:title" 
    content={programme?.title ? `${programme.title} Track | 100 Genius` : 'Programme Track'} 
  />
  <meta 
    name="twitter:description" 
    content={programme?.description || "Explore our intensive 12-week tech training tracks at 100 Genius."} 
  />

     <AppLayout header={<HeroSection  key={programme.slug} programme={programme} />}>
      < JourneySection programme={programme}/>
      <BenefitsSection programme={programme}/>
      <FaqSection faqs={programme.faqs}/>
      <CareerCTASection slug={slug}/>
     </AppLayout>
     </>
  )
}
