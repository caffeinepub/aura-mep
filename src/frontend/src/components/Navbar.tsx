import { Briefcase, Home, Info, Menu, Phone, Settings, X } from "lucide-react";
import { useState } from "react";
import type { Section } from "../App";

interface NavbarProps {
  activeSection: Section;
  setActiveSection: (s: Section) => void;
}

const navItems: { id: Section; label: string; Icon: React.ElementType }[] = [
  { id: "home", label: "Home", Icon: Home },
  { id: "about", label: "About Us", Icon: Info },
  { id: "services", label: "Services", Icon: Settings },
  { id: "careers", label: "Careers", Icon: Briefcase },
  { id: "contact", label: "Contact", Icon: Phone },
];

export default function Navbar({
  activeSection,
  setActiveSection,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12"
      style={{
        height: "var(--nav-height)",
        background:
          "linear-gradient(to bottom, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.6) 100%)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,180,216,0.12)",
      }}
    >
      {/* Logo */}
      <button
        type="button"
        className="flex items-center gap-3 cursor-pointer bg-transparent border-0 p-0"
        onClick={() => setActiveSection("home")}
        onKeyUp={(e) => e.key === "Enter" && setActiveSection("home")}
      >
        <img
          src="/assets/generated/aura-mep-logo-transparent.dim_400x120.png"
          alt="Aura MEP"
          className="h-10 w-auto object-contain"
        />
      </button>

      {/* Desktop Nav */}
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

      {/* Mobile hamburger */}
      <button
        type="button"
        className="md:hidden p-2 text-white"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile drawer */}
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
              data-ocid={`nav.${id}.link`}
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
