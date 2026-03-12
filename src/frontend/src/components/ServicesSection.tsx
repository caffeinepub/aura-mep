import { BarChart3, Droplets, Flame, Settings, Wind, Zap } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface Props {
  isVisible: boolean;
}

const services = [
  {
    title: "Mechanical Engineering",
    image: "/assets/generated/mep-systems.dim_800x600.jpg",
    desc: "Complete mechanical system design, analysis & optimization",
    features: [
      "HVAC System Design",
      "Energy Efficiency Analysis",
      "Mechanical Load Calculations",
      "Equipment Selection & Sizing",
    ],
    Icon: Settings,
  },
  {
    title: "Electrical Engineering",
    image: "/assets/generated/electrical-service.dim_600x400.jpg",
    desc: "Full-spectrum electrical design for commercial & industrial projects",
    features: [
      "LV/MV Power Distribution",
      "Lighting Design & Control",
      "Earthing & Lightning Protection",
      "Emergency Power Systems",
    ],
    Icon: Zap,
  },
  {
    title: "Plumbing & Drainage",
    image: "/assets/generated/plumbing-service.dim_600x400.jpg",
    desc: "Efficient water supply and drainage solutions",
    features: [
      "Domestic Water Supply Design",
      "Drainage & Sewerage Systems",
      "Hot Water System Design",
      "Rainwater Harvesting",
    ],
    Icon: Droplets,
  },
  {
    title: "Fire Fighting Systems",
    image: null,
    desc: "Life safety and fire protection engineering",
    features: [
      "Sprinkler System Design",
      "Fire Alarm & Detection",
      "Fire Suppression Systems",
      "Compliance & Code Review",
    ],
    Icon: Flame,
  },
  {
    title: "HVAC Systems",
    image: "/assets/generated/hvac-service.dim_600x400.jpg",
    desc: "Thermal comfort and indoor air quality solutions",
    features: [
      "Central Air Conditioning",
      "Ventilation & Air Quality",
      "Chiller & AHU Design",
      "BMS Integration",
    ],
    Icon: Wind,
  },
  {
    title: "Project Management",
    image: null,
    desc: "End-to-end project coordination and delivery",
    features: [
      "Design Coordination",
      "Site Supervision & QA/QC",
      "Cost Estimation & BOQ",
      "As-Built Documentation",
    ],
    Icon: BarChart3,
  },
];

export default function ServicesSection({ isVisible }: Props) {
  return (
    <div
      className={`section-full ${isVisible ? "section-visible" : "section-hidden"}`}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.10 0.04 245) 0%, oklch(0.14 0.07 230) 40%, oklch(0.11 0.05 242) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 60%, rgba(0,119,182,0.1) 0%, transparent 55%)",
        }}
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
            <div className="flex flex-col h-full max-w-7xl mx-auto w-full px-6 md:px-12 py-8">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-center mb-8"
              >
                <div
                  className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3"
                  style={{
                    background: "rgba(0,180,216,0.1)",
                    border: "1px solid rgba(0,180,216,0.3)",
                    color: "oklch(0.85 0.12 198)",
                  }}
                >
                  What We Do
                </div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                    fontWeight: 700,
                    color: "white",
                    lineHeight: 1.1,
                  }}
                >
                  Our{" "}
                  <span style={{ color: "oklch(0.72 0.16 210)" }}>
                    Services
                  </span>
                </h2>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "rgba(144,224,239,0.65)",
                    marginTop: "0.5rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  Delivering precision-engineered MEP solutions across
                  residential, commercial &amp; industrial projects.
                </p>
              </motion.div>

              {/* Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-1 overflow-auto">
                {services.map((service, i) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                    className="glass-card overflow-hidden group relative cursor-default"
                    style={{ minHeight: "140px" }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 8px 40px rgba(0,119,182,0.3)",
                    }}
                  >
                    {service.image ? (
                      <div className="absolute inset-0">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover opacity-30 group-hover:opacity-45 transition-opacity duration-300"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(to top, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.4) 100%)",
                          }}
                        />
                      </div>
                    ) : (
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(0,119,182,0.08) 0%, rgba(0,40,80,0.3) 100%)",
                        }}
                      />
                    )}

                    <div className="relative z-10 p-5 flex flex-col gap-3 h-full">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          background: "rgba(0,180,216,0.15)",
                          border: "1px solid rgba(0,180,216,0.3)",
                        }}
                      >
                        <service.Icon
                          size={18}
                          style={{ color: "oklch(0.85 0.14 205)" }}
                        />
                      </div>
                      <div>
                        <h3
                          className="font-semibold text-white mb-1"
                          style={{
                            fontSize: "0.9rem",
                            letterSpacing: "0.02em",
                          }}
                        >
                          {service.title}
                        </h3>
                        <p
                          style={{
                            color: "rgba(202,240,248,0.6)",
                            fontSize: "0.78rem",
                            lineHeight: 1.5,
                          }}
                        >
                          {service.desc}
                        </p>
                        <div className="flex flex-col gap-0.5 mt-2">
                          {service.features.map((feature) => (
                            <span
                              key={feature}
                              style={{
                                fontSize: "0.72rem",
                                color: "rgba(202,240,248,0.55)",
                                lineHeight: 1.6,
                              }}
                            >
                              <span
                                style={{
                                  color: "rgba(0,180,216,0.7)",
                                  marginRight: "0.35rem",
                                }}
                              >
                                •
                              </span>
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
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
