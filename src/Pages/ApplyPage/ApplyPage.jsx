import AppLayout from "@/Components/AppLayout";
import ApplicationSection from "./ApplicationSection";

export default function ApplyPage() {
  return (
    <>
      <title>Apply to 100 Genius | Learn. Build. Share. Get Hired.</title>
      <meta
        name="description"
        content="Start your journey with 100 Genius. Learn practical skills, build real-world projects, share your work, connect with opportunities, and get hired."
      />

      <AppLayout header={<ApplicationSection />}></AppLayout>
    </>
  );
}
