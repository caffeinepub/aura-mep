import { AnimatePresence, motion } from "motion/react";

interface Props {
  isVisible: boolean;
}

export default function AboutSection({ isVisible }: Props) {
  return (
    <div
      className={`section-full ${isVisible ? "section-visible" : "section-hidden"}`}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.10 0.04 245) 0%, oklch(0.16 0.07 230) 50%, oklch(0.12 0.05 240) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(0,119,182,0.12) 0%, transparent 60%)",
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
            className="absolute inset-0 flex items-center"
            style={{ paddingTop: "var(--nav-height)" }}
          >
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full py-12">
              {/* Left text */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="flex flex-col gap-6"
              >
                <div
                  className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full w-fit"
                  style={{
                    background: "rgba(0,180,216,0.1)",
                    border: "1px solid rgba(0,180,216,0.3)",
                    color: "oklch(0.85 0.12 198)",
                  }}
                >
                  Our Story
                </div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    fontWeight: 700,
                    color: "white",
                    lineHeight: 1.1,
                  }}
                >
                  About{" "}
                  <span style={{ color: "oklch(0.72 0.16 210)" }}>
                    Aura MEP
                  </span>
                </h2>
                <p
                  style={{
                    color: "rgba(202,240,248,0.8)",
                    lineHeight: 1.8,
                    fontSize: "0.95rem",
                  }}
                >
                  Aura MEP is a premier MEP engineering consultancy
                  headquartered in Madurai, Tamil Nadu. As a proud branch of
                  ProLeed Engineering Consultancy — one of Dubai's most
                  respected engineering firms — we bring international standards
                  and global expertise to India's growing infrastructure sector.
                  Our team of highly qualified engineers specializes in
                  delivering end-to-end Mechanical, Electrical, and Plumbing
                  solutions for residential, commercial, and industrial
                  projects.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { value: "50+", label: "Projects" },
                    { value: "10+", label: "Years Experience" },
                    { value: "100+", label: "Clients" },
                    { value: "2", label: "Countries" },
                  ].map((s) => (
                    <div key={s.label} className="glass-card p-4 text-center">
                      <div
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "1.75rem",
                          fontWeight: 700,
                          color: "oklch(0.85 0.14 205)",
                        }}
                      >
                        {s.value}
                      </div>
                      <div
                        style={{
                          color: "rgba(202,240,248,0.6)",
                          fontSize: "0.75rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                <p
                  style={{
                    color: "rgba(202,240,248,0.6)",
                    lineHeight: 1.7,
                    fontSize: "0.875rem",
                  }}
                >
                  ProLeed Engineering Consultancy, our parent company based in
                  Dubai, UAE, has established a strong legacy in delivering
                  world-class MEP consultancy services across the Middle East
                  and beyond. Aura MEP was established to extend this excellence
                  to South India and beyond.
                </p>
              </motion.div>

              {/* Right image */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="relative hidden lg:block"
              >
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    border: "1px solid rgba(0,180,216,0.2)",
                    boxShadow:
                      "0 24px 80px rgba(0,0,0,0.5), 0 0 60px rgba(0,119,182,0.15)",
                  }}
                >
                  <img
                    src="/assets/generated/mep-team.dim_800x600.jpg"
                    alt="Aura MEP Team"
                    className="w-full h-full object-cover"
                    style={{ maxHeight: "450px" }}
                  />
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10,22,40,0.4) 0%, transparent 60%)",
                    }}
                  />
                </div>
                {/* Decorative accent */}
                <div
                  className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(0,180,216,0.3) 0%, transparent 70%)",
                    filter: "blur(12px)",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
