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
        className="bg-transparent border-0 p-0 cursor-pointer flex items-center gap-3"
        onClick={() => setActiveSection("home")}
      >
        {/* Droplet icon */}
        <svg
          role="img"
          aria-label="Aura MEP droplet icon"
          width="36"
          height="44"
          viewBox="0 0 36 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 2 C18 2, 2 18, 2 28 C2 37 9.1 42 18 42 C26.9 42 34 37 34 28 C34 18 18 2 18 2Z"
            fill="url(#dropGrad)"
            stroke="rgba(0,180,216,0.6)"
            strokeWidth="1"
          />
          {/* Buildings silhouette inside droplet */}
          <g clipPath="url(#dropClip)">
            <rect
              x="5"
              y="30"
              width="4"
              height="10"
              fill="rgba(0,180,216,0.5)"
            />
            <rect
              x="11"
              y="24"
              width="4"
              height="16"
              fill="rgba(0,180,216,0.6)"
            />
            <rect
              x="17"
              y="20"
              width="4"
              height="20"
              fill="rgba(0,180,216,0.7)"
            />
            <rect
              x="23"
              y="26"
              width="4"
              height="14"
              fill="rgba(0,180,216,0.55)"
            />
            <rect
              x="29"
              y="31"
              width="3"
              height="9"
              fill="rgba(0,180,216,0.45)"
            />
          </g>
          <defs>
            <linearGradient
              id="dropGrad"
              x1="18"
              y1="2"
              x2="18"
              y2="42"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="rgba(0,50,80,0.85)" />
              <stop offset="100%" stopColor="rgba(0,20,40,0.9)" />
            </linearGradient>
            <clipPath id="dropClip">
              <path d="M18 2 C18 2, 2 18, 2 28 C2 37 9.1 42 18 42 C26.9 42 34 37 34 28 C34 18 18 2 18 2Z" />
            </clipPath>
          </defs>
        </svg>
        {/* Text logo */}
        <span className="flex items-baseline gap-0.5">
          <span
            style={{
              fontWeight: 800,
              fontSize: "1.5rem",
              color: "#ffffff",
              letterSpacing: "0.06em",
              textShadow:
                "0 1px 4px rgba(0,0,0,0.8), 0 0 12px rgba(0,180,216,0.3)",
            }}
          >
            AURA
          </span>
          <span
            style={{
              fontWeight: 800,
              fontSize: "1.5rem",
              color: "#00B4D8",
              letterSpacing: "0.06em",
              textShadow:
                "0 1px 4px rgba(0,0,0,0.8), 0 0 16px rgba(0,180,216,0.9)",
            }}
          >
            MEP
          </span>
        </span>
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
