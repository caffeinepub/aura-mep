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
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        height: "var(--nav-height)",
        background: "rgba(7, 9, 14, 0.96)",
        backdropFilter: "blur(16px)",
      }}
    >
      {/* Top info bar */}
      <div
        className="w-full flex items-center justify-between px-8 md:px-14"
        style={{
          height: "32px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <span
          style={{
            fontSize: "0.62rem",
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.38)",
          }}
        >
          Madurai, India&nbsp;&nbsp;|&nbsp;&nbsp;A ProLeed Group Company
        </span>
        <a
          href="mailto:info@auramep.com"
          style={{
            fontSize: "0.62rem",
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.38)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.color = "rgba(255,255,255,0.8)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.color = "rgba(255,255,255,0.38)";
          }}
        >
          info@auramep.com
        </a>
      </div>

      {/* Main nav row */}
      <div
        className="flex items-center justify-between px-8 md:px-14"
        style={{
          height: "calc(var(--nav-height) - 32px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Logo */}
        <button
          type="button"
          className="flex items-center cursor-pointer bg-transparent border-0 p-0"
          onClick={() => setActiveSection("home")}
          data-ocid="nav.home.link"
        >
          <img
            src="/assets/generated/aura-mep-logo-transparent.dim_400x120.png"
            alt="Aura MEP"
            className="h-9 w-auto object-contain"
          />
        </button>

        {/* Desktop Nav — text only, no icons */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map(({ id, label }) => (
            <button
              type="button"
              key={id}
              data-ocid={`nav.${id}.link`}
              className={`nav-link${activeSection === id ? " active" : ""}`}
              onClick={() => setActiveSection(id)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            color: "rgba(255,255,255,0.7)",
            background: "transparent",
            border: "none",
          }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col gap-0"
          style={{
            background: "rgba(7, 9, 14, 0.99)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {navItems.map(({ id, label, Icon }) => (
            <button
              type="button"
              key={id}
              data-ocid={`nav.${id}.link`}
              onClick={() => {
                setActiveSection(id);
                setMobileOpen(false);
              }}
              className="flex items-center gap-3 px-8 py-4 w-full text-left"
              style={{
                background: "transparent",
                border: "none",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                color:
                  activeSection === id ? "white" : "rgba(255,255,255,0.55)",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              <Icon size={13} style={{ opacity: 0.7 }} />
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
