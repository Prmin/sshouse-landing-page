import Image from "next/image";
import AboutSection from "../../components/AboutSection";
import HeroSection from "../../components/HeroSection";

// import HeroSection from "@/components/HeroSection"; // สมมติว่าคุณมี Hero Section
// <-- Import เข้ามา
// import Footer from "@/components/Footer"; // สมมติว่าคุณมี Footer

export default function Home() {
  return (
    <>
      <HeroSection/>
      <AboutSection /> {/* <-- เรียกใช้งานตรงนี้ */}
      {/* ส่วนอื่นๆ ของ Landing Page */}
      {/* <Footer /> */}
    </>
  );
}