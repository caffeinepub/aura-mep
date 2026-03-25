import { ArrowRight } from "lucide-react";

interface HomeSectionProps {
  isVisible: boolean;
  onExploreServices: () => void;
}

export default function HomeSection({
  isVisible,
  onExploreServices,
}: HomeSectionProps) {
  return (
    <section
      className={`section-full ${isVisible ? "section-visible" : "section-hidden"}`}
      style={{ zIndex: 10 }}
    >
      {/* Building background image with Ken Burns */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/assets/generated/building-bg.dim_1920x1080.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            animation: "kenBurns 20s ease-in-out infinite alternate",
            transformOrigin: "center center",
          }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,12,18,0.85) 0%, rgba(15,18,28,0.55) 50%, rgba(10,12,18,0.92) 100%)",
          }}
        />

        {/* Subtle gold glow orbs */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 500,
            height: 500,
            top: "10%",
            left: "60%",
            background:
              "radial-gradient(circle, rgba(0,180,216,0.10) 0%, rgba(0,150,200,0.03) 60%, transparent 80%)",
            animation:
              "floatOrb 12s ease-in-out infinite, shimmerPulse 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 350,
            height: 350,
            bottom: "20%",
            right: "15%",
            background:
              "radial-gradient(circle, rgba(0,200,240,0.08) 0%, rgba(0,180,216,0.03) 60%, transparent 80%)",
            animation:
              "floatOrb 16s ease-in-out infinite reverse, shimmerPulse 8s ease-in-out infinite 2s",
          }}
        />
      </div>

      {/* Main content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
        style={{ paddingTop: "var(--nav-height)" }}
      >
        {/* Badge */}
        <div
          className="mb-5 px-5 py-2 rounded-full border text-xs font-bold tracking-widest uppercase"
          style={{
            color: "oklch(var(--aqua-glow))",
            borderColor: "rgba(0,180,216,0.45)",
            background: "rgba(0,180,216,0.08)",
            backdropFilter: "blur(8px)",
            animation: isVisible ? "fadeSlideUp 0.6s ease forwards" : "none",
            opacity: 0,
          }}
        >
          A ProLeed Group Company
        </div>

        {/* Headline */}
        <h1
          className="font-bold leading-none mb-4"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 7rem)",
            letterSpacing: "-0.02em",
            fontFamily: "'DM Sans', sans-serif",
            animation: isVisible
              ? "fadeSlideUp 0.7s ease 0.1s forwards"
              : "none",
            opacity: 0,
          }}
        >
          <span
            style={{
              color: "rgba(240,245,255,0.97)",
              textShadow: "0 2px 30px rgba(0,0,0,0.7)",
            }}
          >
            AURA{" "}
          </span>
          <span
            style={{
              color: "oklch(var(--aqua-glow))",
              textShadow: "0 0 40px rgba(0,180,216,0.7)",
            }}
          >
            MEP
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="font-medium mb-3"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
            color: "rgba(220,235,255,0.92)",
            letterSpacing: "0.01em",
            animation: isVisible
              ? "fadeSlideUp 0.7s ease 0.2s forwards"
              : "none",
            opacity: 0,
          }}
        >
          Engineering Excellence. Built on Trust.
        </p>

        {/* Sub-tagline */}
        <p
          className="mb-8"
          style={{
            fontSize: "clamp(0.75rem, 1.5vw, 0.95rem)",
            color: "rgba(180,210,240,0.6)",
            letterSpacing: "0.03em",
            animation: isVisible
              ? "fadeSlideUp 0.7s ease 0.3s forwards"
              : "none",
            opacity: 0,
          }}
        >
          MEP Consultancy | Madurai | A ProLeed Group Company
        </p>

        {/* CTA */}
        <button
          type="button"
          data-ocid="home.services.primary_button"
          onClick={onExploreServices}
          className="flex items-center gap-2 font-bold uppercase tracking-widest"
          style={{
            fontSize: "0.8rem",
            padding: "14px 36px",
            borderRadius: 50,
            background:
              "linear-gradient(135deg, rgba(0,180,216,0.9), rgba(0,140,180,0.95))",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 24px rgba(0,180,216,0.45)",
            transition: "all 0.3s ease",
            animation: isVisible
              ? "fadeSlideUp 0.7s ease 0.4s forwards"
              : "none",
            opacity: 0,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              "0 6px 32px rgba(0,180,216,0.7)";
            (e.currentTarget as HTMLButtonElement).style.transform =
              "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              "0 4px 24px rgba(0,180,216,0.45)";
            (e.currentTarget as HTMLButtonElement).style.transform =
              "translateY(0)";
          }}
        >
          Explore Our Services
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Bottom services bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{
          background: "rgba(10,12,18,0.88)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(0,180,216,0.15)",
          padding: "14px 24px",
        }}
      >
        <div className="flex items-center justify-center gap-3 md:gap-6 flex-wrap">
          {[
            "Mechanical",
            "Electrical",
            "Plumbing",
            "Fire Fighting",
            "HVAC",
          ].map((svc, i, arr) => (
            <span key={svc} className="flex items-center gap-3">
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "rgba(150,220,240,0.65)" }}
              >
                {svc}
              </span>
              {i < arr.length - 1 && (
                <span style={{ color: "rgba(0,180,216,0.4)" }}>·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
