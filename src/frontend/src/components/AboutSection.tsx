import { motion } from "motion/react";

const stats = [
  { value: "2024", label: "Year of Establishment" },
  { value: "50+", label: "Projects Completed" },
  { value: "100+", label: "Happy Clients" },
  { value: "2", label: "Countries Served" },
];

const values = [
  "Dubai-standard engineering practices",
  "End-to-end MEP design & consultancy",
  "Certified & experienced professionals",
  "On-time project delivery",
  "Sustainable & energy-efficient solutions",
];

export default function AboutSection({ isVisible }: { isVisible: boolean }) {
  return (
    <section
      className={`section-full ${isVisible ? "section-visible" : "section-hidden"}`}
      style={{ zIndex: 10 }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 40%, rgba(0,100,160,0.15) 0%, transparent 70%), oklch(0.14 0.06 240)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 600,
          height: 600,
          top: "-10%",
          right: "-10%",
          background:
            "radial-gradient(circle, rgba(0,180,216,0.08) 0%, transparent 70%)",
          animation: "floatOrb 14s ease-in-out infinite",
        }}
      />

      <div
        className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24"
        style={{ paddingTop: "var(--nav-height)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto w-full">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "oklch(var(--aqua-glow))" }}
            >
              About Us
            </p>
            <h2
              className="font-bold mb-4"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                color: "rgba(202,240,248,0.95)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              About Aura MEP
            </h2>
            <p
              className="leading-relaxed mb-4"
              style={{
                color: "rgba(150,220,240,0.72)",
                fontSize: "clamp(0.85rem, 1.4vw, 1rem)",
              }}
            >
              Aura MEP is the Madurai branch of Proleed Engineering Consultancy,
              a Dubai-based MEP firm renowned for delivering premium engineering
              solutions. We bring world-class expertise to India&apos;s rapidly
              growing infrastructure sector.
            </p>
            <p
              className="leading-relaxed"
              style={{
                color: "rgba(130,210,235,0.65)",
                fontSize: "clamp(0.82rem, 1.3vw, 0.95rem)",
              }}
            >
              Our mission is to deliver precision mechanical, electrical, and
              plumbing engineering with uncompromising quality — on time, every
              time. We combine decades of international experience with deep
              local knowledge to serve clients across Tamil Nadu and beyond.
            </p>
          </motion.div>

          {/* Right: stats + values */}
          <div className="flex flex-col gap-6">
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="text-center py-4 px-2 rounded-lg"
                    style={{
                      background: "rgba(0,180,216,0.06)",
                      border: "1px solid rgba(0,180,216,0.12)",
                    }}
                  >
                    <div
                      className="font-bold mb-1"
                      style={{
                        fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                        color: "oklch(var(--aqua-glow))",
                        textShadow: "0 0 20px rgba(0,180,216,0.5)",
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "rgba(150,220,240,0.6)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "oklch(var(--aqua-glow))" }}
              >
                Why Choose Us
              </p>
              <ul className="space-y-2">
                {values.map((v) => (
                  <li key={v} className="flex items-center gap-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "oklch(var(--aqua-glow))" }}
                    />
                    <span
                      style={{
                        fontSize: "0.875rem",
                        color: "rgba(150,220,240,0.78)",
                      }}
                    >
                      {v}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="absolute bottom-4 left-0 right-0 z-10 text-center"
        style={{ fontSize: "0.75rem", color: "rgba(150,220,240,0.3)" }}
      >
        © {new Date().getFullYear()}. Built with love using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "oklch(var(--aqua-glow))", textDecoration: "none" }}
        >
          caffeine.ai
        </a>
      </div>
    </section>
  );
}
