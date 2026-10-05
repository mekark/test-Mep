import Cta from "./components/Cta";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import HowWeDeliver from "./components/HowWeDeliver";
import ProjectsGallery from "./components/ProjectsGallery";
import ScrollToTop from "./components/ScrollToTop";
import TrustBar from "./components/TrustBar";
import WhyTrust from "./components/WhyTrust";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TrustBar />
        <HowWeDeliver />
        <WhyTrust />
        <ProjectsGallery />
        <Faq />
        <Cta />
      </main>
      <ScrollToTop />
    </>
  );
}
