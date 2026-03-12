import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import AboutSection from "./components/AboutSection";
import CareersSection from "./components/CareersSection";
import ContactSection from "./components/ContactSection";
import HomeSection from "./components/HomeSection";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";

export type Section = "home" | "about" | "services" | "careers" | "contact";

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("home");

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{ background: "oklch(0.14 0.06 240)" }}
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
