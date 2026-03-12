import { AnimatePresence, motion } from "motion/react";

interface Props {
  isVisible: boolean;
}

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "10+", label: "Years Experience" },
  { value: "100+", label: "Clients Served" },
  { value: "2", label: "Countries" },
];

export default function AboutSection({ isVisible }: Props) {
  return (
    <div
      className={`section-full ${isVisible ? "section-visible" : "section-hidden"}`}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: "oklch(0.07 0.015 240)" }}
      />
      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 65% 50%, rgba(101,162,215,0.05) 0%, transparent 60%)",
        }}
      />

      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="about-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ paddingTop: "var(--nav-height)" }}
          >
            <div className="w-full max-w-7xl mx-auto px-12">
              {/* Two-column grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left text */}
                <motion.div
                  initial={{ opacity: 0, x: -32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15, duration: 0.7 }}
                  className="flex flex-col"
                >
                  <p className="section-label mb-3">Our Story</p>
                  <h2
                    style={{
                      fontFamily:
                        "'Bricolage Grotesque', 'Playfair Display', serif",
                      fontSize: "clamp(2.2rem, 4vw, 3.75rem)",
                      fontWeight: 800,
                      color: "white",
                      lineHeight: 0.95,
                      letterSpacing: "-0.025em",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    Building India's
                  </h2>
                  <h2
                    style={{
                      fontFamily:
                        "'Bricolage Grotesque', 'Playfair Display', serif",
                      fontSize: "clamp(2.2rem, 4vw, 3.75rem)",
                      fontWeight: 800,
                      color: "oklch(0.65 0.16 215)",
                      lineHeight: 0.95,
                      letterSpacing: "-0.025em",
                      textTransform: "uppercase",
                      marginBottom: "0",
                    }}
                  >
                    MEP Future
                  </h2>
                  <span className="accent-line" style={{ marginTop: "20px" }} />

                  <p
                    style={{
                      color: "rgba(255,255,255,0.62)",
                      lineHeight: 1.85,
                      fontSize: "0.875rem",
                      marginTop: "4px",
                      marginBottom: "28px",
                      maxWidth: "480px",
                    }}
                  >
                    Aura MEP is a premier MEP engineering consultancy
                    headquartered in Madurai, Tamil Nadu. As a proud branch of
                    ProLeed Engineering Consultancy — one of Dubai's most
                    respected engineering firms — we bring international
                    standards and global expertise to India's growing
                    infrastructure sector.
                  </p>

                  {/* Stats */}
                  <div
                    className="grid grid-cols-4 gap-0"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    {stats.map((s, i) => (
                      <div
                        key={s.label}
                        className="flex flex-col pt-5"
                        style={{
                          paddingRight: i < 3 ? "24px" : 0,
                          borderRight:
                            i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
                          paddingLeft: i > 0 ? "24px" : 0,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Bricolage Grotesque', serif",
                            fontSize: "2rem",
                            fontWeight: 800,
                            color: "white",
                            lineHeight: 1,
                            letterSpacing: "-0.02em",
                          }}
                        >
                          {s.value}
                        </span>
                        <span
                          style={{
                            fontSize: "0.6rem",
                            fontWeight: 600,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.35)",
                            marginTop: "6px",
                          }}
                        >
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Right image */}
                <motion.div
                  initial={{ opacity: 0, x: 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="relative hidden lg:block"
                >
                  <div
                    style={{
                      border: "1px solid rgba(255,255,255,0.07)",
                      overflow: "hidden",
                      borderRadius: "2px",
                    }}
                  >
                    <img
                      src="/assets/generated/aura-construction-panel.dim_800x900.jpg"
                      alt="Aura MEP Team"
                      className="w-full object-cover"
                      style={{ maxHeight: "520px", display: "block" }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(7,9,14,0.5) 0%, transparent 50%)",
                      }}
                    />
                  </div>
                  {/* Caption bar */}
                  <div
                    className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-3"
                    style={{
                      background: "rgba(7,9,14,0.88)",
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.35)",
                      }}
                    >
                      Aura MEP · Madurai
                    </span>
                    <span
                      style={{
                        fontSize: "0.6rem",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        color: "oklch(0.65 0.16 215)",
                        textTransform: "uppercase",
                      }}
                    >
                      A ProLeed Group Company
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Tagline banner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="w-full mt-6 overflow-hidden"
                style={{
                  borderRadius: "2px",
                  maxHeight: "120px",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <img
                  src="/assets/generated/aura-tagline-banner.dim_1920x400.jpg"
                  alt="Where Precision Meets Purpose"
                  className="w-full object-cover object-center"
                  style={{ maxHeight: "120px", display: "block" }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
