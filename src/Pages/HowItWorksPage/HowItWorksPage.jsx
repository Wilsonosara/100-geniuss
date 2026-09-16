import AppLayout from "@/Components/AppLayout";
import HowItWorksStep from "./HowItWorksStep";
import CareerCTASection from "../CareerCTASection";

export default function HowItWorksPage() {
  return (
    <>
      <title>How It Works | Learn. Build. Share. Get Hired. | 100 Genius</title>
      <meta
        name="description"
        content="See how 100 Genius helps you learn practical skills, build real-world projects, share your knowledge and work, and get hired for meaningful opportunities."
      />

      <AppLayout
        header={
          <HowItWorksStep
            number="01"
            eyebrow="How it works"
            title="Start with where you want to go."
            description="Choose a programme built around the skills and direction you want to develop."
            image="https://onesim-production.s3.ap-southeast-1.amazonaws.com/onesim/media/ge-university-partners-listing/dd%20scholarship/csit%20scholarship/csit-scholarship-01-1200x800.jpg?ext=.jpg"
            imageAlt="Students collaborating on a programming project"
            cta={{
              label: "Explore programmes",
              href: "/programmes",
            }}
            hero
            brandPosition="right"
          />
        }
      >
        <HowItWorksStep
          number="02"
          eyebrow="Apply"
          title="Take the first step."
          description="Apply to the track that fits your goals and get started with the 100 Genius community."
          image="https://images.shiksha.com/mediadata/images/articles/1733048556php04QLnU.jpeg"
          imageAlt="Student completing an application"
          reverse
          brandPosition="left"
        />

        <HowItWorksStep
          number="03"
          eyebrow="Learn"
          title="Build skills that move you forward."
          description="Learn through practical experiences designed around real-world problems."
          image="https://www.exeter.ac.uk/v8media/specificsites/strategy2030/images/24834_%281%29.jpg"
          imageAlt="Students learning and working on a technology project"
          brandPosition="right"
        />

        <HowItWorksStep
          number="04"
          eyebrow="Build together"
          title="Make something real, together."
          description="Work on projects with teammates, exchange ideas, solve problems, and learn by building."
          image="https://ymx.yokogawa.com/content/S637483928588246995/AdobeStock_167160211.jpeg"
          imageAlt="Software developers collaborating on a project"
          reverse
          brandPosition="left"
        />

        <HowItWorksStep
          number="05"
          eyebrow="Share your journey"
          title="Let people see what you're building."
          description="Share your progress, projects, lessons, and wins with your community and on your socials."
          image="https://www.universityframes.com/blog/Uploads/networking.png"
          imageAlt="Young professionals connecting and sharing ideas"
          brandPosition="right"
        />

        <HowItWorksStep
          number="06"
          eyebrow="Get supported"
          title="You're never building alone."
          description="Get encouragement, feedback, and guidance from fellow 100 Genius members, peers, and staff."
          image="https://wearethecity.com/wp-content/uploads/2024/04/mentoring.jpg"
          imageAlt="Professional mentoring and guidance"
          reverse
          brandPosition="left"
        />

        <HowItWorksStep
          number="07"
          eyebrow="Opportunities"
          title="Take your skills into the real world."
          description="Apply for gigs, internships, freelance projects, and other opportunities as you grow."
          image="https://www.openreach.com/careers/career-programmes/office-graduate-roles/_jcr_content/root/main-content-section/container_1726669399/container/container_copy/image_b698b6.coreimg.jpeg/1693970934723/1178148651-764x528-gettyimages.jpeg"
          imageAlt="Young professional beginning their career"
          brandPosition="right"
        />

        <CareerCTASection />
      </AppLayout>
    </>
  );
}
