import { AnimatePresence, motion } from "motion/react";

interface Props {
  isVisible: boolean;
}

const services = [
  {
    title: "Mechanical Engineering",
    desc: "HVAC, load calculations, equipment sizing & energy analysis",
    image: "/assets/generated/mep-systems.dim_800x600.jpg",
    gradient:
      "linear-gradient(135deg, oklch(0.12 0.04 245) 0%, oklch(0.08 0.02 240) 100%)",
  },
  {
    title: "Electrical Engineering",
    desc: "LV/MV power, lighting design, earthing & emergency systems",
    image: "/assets/generated/electrical-service.dim_600x400.jpg",
    gradient:
      "linear-gradient(135deg, oklch(0.12 0.06 220) 0%, oklch(0.08 0.02 240) 100%)",
  },
  {
    title: "Plumbing & Drainage",
    desc: "Water supply, sewerage, hot water & rainwater harvesting",
    image: "/assets/generated/plumbing-service.dim_600x400.jpg",
    gradient:
      "linear-gradient(135deg, oklch(0.10 0.05 235) 0%, oklch(0.07 0.02 240) 100%)",
  },
  {
    title: "Fire Fighting Systems",
    desc: "Sprinkler design, fire alarm, suppression & code compliance",
    image: null,
    gradient:
      "linear-gradient(135deg, oklch(0.13 0.04 15) 0%, oklch(0.08 0.02 240) 100%)",
  },
  {
    title: "HVAC Systems",
    desc: "Central AC, ventilation, chiller design & BMS integration",
    image: "/assets/generated/hvac-service.dim_600x400.jpg",
    gradient:
      "linear-gradient(135deg, oklch(0.11 0.05 200) 0%, oklch(0.07 0.02 240) 100%)",
  },
  {
    title: "Project Management",
    desc: "Design coordination, site supervision, BOQ & as-built docs",
    image: null,
    gradient:
      "linear-gradient(135deg, oklch(0.12 0.03 55) 0%, oklch(0.08 0.02 240) 100%)",
  },
];

const marqueeItems = [
  "Mechanical Engineering",
  "Electrical Systems",
  "Plumbing & Drainage",
  "Fire Fighting",
  "HVAC Design",
  "Project Management",
  "MEP Consultancy",
  "ProLeed Group",
];

export default function ServicesSection({ isVisible }: Props) {
  return (
    <div
      className={`section-full ${isVisible ? "section-visible" : "section-hidden"}`}
    >
      {/* Deep dark background */}
      <div
        className="absolute inset-0"
        style={{ background: "oklch(0.07 0.015 240)" }}
      />

      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="services-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex flex-col"
            style={{ paddingTop: "var(--nav-height)" }}
          >
            <div className="flex flex-col h-full max-w-7xl mx-auto w-full px-12 pt-6 pb-4 min-h-0">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mb-3 flex-shrink-0"
              >
                <p className="section-label mb-1">What We Do</p>
                <h2
                  style={{
                    fontFamily:
                      "'Bricolage Grotesque', 'Playfair Display', serif",
                    fontSize: "clamp(1.6rem, 2.8vw, 2.75rem)",
                    fontWeight: 800,
                    color: "white",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  OUR SERVICES
                </h2>
                <span className="accent-line-blue" />

                {/* Marquee tagline strip */}
                <div
                  className="overflow-hidden mt-2 mb-1"
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    padding: "6px 0",
                  }}
                >
                  <div
                    className="marquee-track"
                    style={{
                      display: "flex",
                      gap: "4rem",
                      whiteSpace: "nowrap",
                      animation: "marqueeScroll 22s linear infinite",
                    }}
                  >
                    {[...marqueeItems, ...marqueeItems].map((t, idx) => (
                      <span
                        key={
                          idx < marqueeItems.length
                            ? `first-${t}`
                            : `second-${t}`
                        }
                        style={{
                          fontSize: "0.6rem",
                          fontWeight: 700,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.22)",
                          flexShrink: 0,
                        }}
                      >
                        {t}{" "}
                        <span
                          style={{
                            color: "oklch(0.65 0.16 215)",
                            marginLeft: "4rem",
                          }}
                        >
                          ·
                        </span>
                      </span>
                    ))}
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "rgba(255,255,255,0.45)",
                    letterSpacing: "0.04em",
                    marginTop: "3px",
                  }}
                >
                  Delivering precision-engineered MEP solutions across India and
                  the Middle East
                </p>
              </motion.div>

              {/* Grid — flex-1 min-h-0 so it fills remaining space without overflow */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 flex-1 min-h-0 overflow-hidden">
                {services.map((service, i) => (
                  <motion.div
                    key={service.title}
                    data-ocid={`services.item.${i + 1}`}
                    initial={{ opacity: 0, y: 32, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      delay: 0.1 + i * 0.08,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="service-card group relative overflow-hidden"
                    whileHover={{ scale: 1.015 }}
                  >
                    {/* Background */}
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div
                        className="absolute inset-0"
                        style={{ background: service.gradient }}
                      />
                    )}

                    {/* Content over overlay */}
                    <div
                      className="relative flex flex-col justify-end h-full p-4"
                      style={{ zIndex: 1 }}
                    >
                      <h3
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontSize: "0.85rem",
                          fontWeight: 700,
                          color: "white",
                          letterSpacing: "0.02em",
                          lineHeight: 1.2,
                          marginBottom: "4px",
                          textTransform: "uppercase",
                        }}
                      >
                        {service.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.68rem",
                          color: "rgba(255,255,255,0.55)",
                          lineHeight: 1.4,
                          letterSpacing: "0.02em",
                        }}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
