import Image from "next/image";
import AboutSection from "../../components/AboutSection";
import VisionSection from "../../components/VisionSection";
import HeroSection from "../../components/HeroSection";
import CoreValuesSection from "../../components/CoreValuesSection";


export default function Home() {
  return (
    <>
      <HeroSection/>
      <VisionSection />
      {/* <AboutSection />  */}
      <CoreValuesSection />
    </>
  );
}