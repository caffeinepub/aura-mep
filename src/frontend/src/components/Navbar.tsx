import { Briefcase, Home, Info, Menu, Phone, Settings, X } from "lucide-react";
import { useState } from "react";
import type { Section } from "../App";

const navItems = [
  { id: "home" as Section, label: "Home", Icon: Home },
  { id: "about" as Section, label: "About Us", Icon: Info },
  { id: "services" as Section, label: "Services", Icon: Settings },
  { id: "careers" as Section, label: "Careers", Icon: Briefcase },
  { id: "contact" as Section, label: "Contact", Icon: Phone },
];

export default function Navbar({
  activeSection,
  setActiveSection,
}: { activeSection: Section; setActiveSection: (s: Section) => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12"
      style={{
        height: "var(--nav-height)",
        background:
          "linear-gradient(to bottom, rgba(10,22,40,0.95), rgba(10,22,40,0.6))",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,180,216,0.12)",
      }}
    >
      <button
        type="button"
        className="bg-transparent border-0 p-0 cursor-pointer flex items-center"
        onClick={() => setActiveSection("home")}
      >
        <img
          src="/assets/generated/aura-mep-droplet-logo-transparent.dim_400x140.png"
          alt="Aura MEP"
          className="h-14 w-auto object-contain"
        />
      </button>
      <div className="hidden md:flex items-center gap-1">
        {navItems.map(({ id, label, Icon }) => (
          <button
            type="button"
            key={id}
            data-ocid={`nav.${id}.link`}
            className={`nav-link${activeSection === id ? " active" : ""}`}
            onClick={() => setActiveSection(id)}
          >
            <Icon size={14} />
            {label}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="md:hidden p-2 text-white"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {mobileOpen && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col gap-1 p-4"
          style={{
            background: "rgba(10,22,40,0.97)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(0,180,216,0.2)",
          }}
        >
          {navItems.map(({ id, label, Icon }) => (
            <button
              type="button"
              key={id}
              className={`nav-link w-full justify-start${activeSection === id ? " active" : ""}`}
              onClick={() => {
                setActiveSection(id);
                setMobileOpen(false);
              }}
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
