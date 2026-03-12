import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import CareersSection from "./components/CareersSection";
import ContactSection from "./components/ContactSection";
import HomeSection from "./components/HomeSection";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";

export type Section = "home" | "about" | "services" | "careers" | "contact";

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("home");

  useEffect(() => {
    const updateScale = () => {
      const scale = Math.min(
        window.innerWidth / 1280,
        window.innerHeight / 720,
      );
      document.documentElement.style.setProperty(
        "--scale-factor",
        String(scale),
      );
      const root = document.getElementById("root");
      if (root) {
        root.style.height = `${window.innerHeight / scale}px`;
      }
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: "100%",
        height: "100%",
        background: "oklch(0.14 0.06 240)",
      }}
    >
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <HomeSection
        isVisible={activeSection === "home"}
        onExploreServices={() => setActiveSection("services")}
      />
      <AboutSection isVisible={activeSection === "about"} />
      <ServicesSection isVisible={activeSection === "services"} />
      <CareersSection isVisible={activeSection === "careers"} />
      <ContactSection isVisible={activeSection === "contact"} />

      <Toaster richColors position="top-right" />
    </div>
  );
}
