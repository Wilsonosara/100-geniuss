import { lazy, Suspense } from "react";
import SmoothScroll from "./Components/animations/SmoothScroll";
import { Route, Routes } from "react-router-dom";
import NavBar from "@/Components/NavBar";
import WhatsAppIcon from "./Components/WhatsAppIcon";
import PageLoader from "./Components/PageLoader";
import PageTransition from "./Components/animations/PageTransition";
// Pages
const HomePage = lazy(() => import("./Pages/HomePage"));
const ProgrammesPage = lazy(
  () => import("./Pages/ProgrammesPage/ProgrammesPage"),
);
const ApplyPage = lazy(() => import("./Pages/ApplyPage/ApplyPage"));
const AboutPage = lazy(() => import("./Pages/AboutPage/AboutPage"));
const HowItWorksPage = lazy(
  () => import("./Pages/HowItWorksPage/HowItWorksPage"),
);
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage"));
const ComingSoon = lazy(() => import("./Components/ComingSoon"));

function App() {
  return (
    <>
      <SmoothScroll />
      <NavBar></NavBar>
      <WhatsAppIcon />
      <Suspense fallback={<PageLoader />}>
        <PageTransition>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/programme/:slug" element={<ProgrammesPage />} />
            <Route path="/apply" element={<ApplyPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/opportunities" element={<ComingSoon />} />
            <Route path="/scholarships" element={<ComingSoon />} />
            <Route path="/privacy-policy" element={<ComingSoon />} />
            <Route path="/terms-of-use" element={<ComingSoon />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PageTransition>
      </Suspense>
    </>
  );
}

export default App;
