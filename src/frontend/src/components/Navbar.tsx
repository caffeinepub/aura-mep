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
          "linear-gradient(to bottom, rgba(0,20,30,0.97), rgba(0,20,30,0.65))",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,180,200,0.15)",
      }}
    >
      <button
        type="button"
        className="bg-transparent border-0 p-0 cursor-pointer flex items-center gap-2"
        onClick={() => setActiveSection("home")}
        data-ocid="nav.home.link"
      >
        {/* Water droplet with buildings icon */}
        <img
          src="/assets/generated/aura-mep-peacock-logo-transparent-transparent.dim_300x160.png"
          alt="Aura MEP Droplet"
          style={{ height: "44px", width: "auto", objectFit: "contain" }}
        />
        {/* Bold text always visible regardless of image */}
        <div className="flex flex-col leading-none">
          <span
            style={{
              fontFamily: "'Segoe UI', Arial, sans-serif",
              fontSize: "18px",
              fontWeight: "900",
              letterSpacing: "3px",
              color: "#ffffff",
              textShadow: "0 0 8px rgba(255,255,255,0.4)",
              lineHeight: 1.1,
            }}
          >
            AURA
          </span>
          <span
            style={{
              fontFamily: "'Segoe UI', Arial, sans-serif",
              fontSize: "14px",
              fontWeight: "900",
              letterSpacing: "4px",
              color: "#00e5ff",
              textShadow: "0 0 10px rgba(0,229,255,0.7)",
              lineHeight: 1.1,
            }}
          >
            MEP
          </span>
        </div>
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
            background: "rgba(0,20,30,0.97)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(0,180,200,0.2)",
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
