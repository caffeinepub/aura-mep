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

function AuraMepLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <svg
        role="img"
        aria-label="Aura MEP water droplet logo"
        width="36"
        height="44"
        viewBox="0 0 36 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <title>Aura MEP water droplet logo</title>
        <path
          d="M18 2 C18 2, 4 16, 4 26 A14 14 0 0 0 32 26 C32 16, 18 2, 18 2Z"
          fill="rgba(0,180,200,0.25)"
          stroke="#00b4c8"
          strokeWidth="1.5"
        />
        <rect
          x="9"
          y="28"
          width="4"
          height="8"
          fill="#00e5ff"
          opacity="0.9"
          rx="0.5"
        />
        <rect
          x="11"
          y="24"
          width="2"
          height="4"
          fill="#00e5ff"
          opacity="0.9"
          rx="0.5"
        />
        <rect
          x="15"
          y="26"
          width="3"
          height="10"
          fill="#00cfff"
          opacity="0.85"
          rx="0.5"
        />
        <rect
          x="16"
          y="22"
          width="1.5"
          height="4"
          fill="#00cfff"
          opacity="0.85"
          rx="0.5"
        />
        <rect
          x="20"
          y="27"
          width="4"
          height="9"
          fill="#00b4c8"
          opacity="0.9"
          rx="0.5"
        />
        <rect
          x="21.5"
          y="23"
          width="1.5"
          height="4"
          fill="#00b4c8"
          opacity="0.9"
          rx="0.5"
        />
        <path
          d="M18 2 C18 2, 4 16, 4 26 A14 14 0 0 0 32 26 C32 16, 18 2, 18 2Z"
          fill="none"
          stroke="#00b4c8"
          strokeWidth="1.5"
        />
        <ellipse
          cx="13"
          cy="18"
          rx="2.5"
          ry="3.5"
          fill="rgba(255,255,255,0.15)"
          transform="rotate(-20 13 18)"
        />
      </svg>
      <div
        style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}
      >
        <span
          style={{
            fontFamily: "'Segoe UI', Arial, sans-serif",
            fontSize: "18px",
            fontWeight: "900",
            letterSpacing: "3px",
            color: "#ffffff",
            textShadow: "0 0 8px rgba(255,255,255,0.4)",
          }}
        >
          AURA
        </span>
        <span
          style={{
            fontFamily: "'Segoe UI', Arial, sans-serif",
            fontSize: "13px",
            fontWeight: "900",
            letterSpacing: "5px",
            color: "#00e5ff",
            textShadow: "0 0 12px rgba(0,229,255,0.8)",
          }}
        >
          MEP
        </span>
      </div>
    </div>
  );
}

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
        className="bg-transparent border-0 p-0 cursor-pointer"
        onClick={() => setActiveSection("home")}
        data-ocid="nav.home.link"
      >
        <AuraMepLogo />
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
