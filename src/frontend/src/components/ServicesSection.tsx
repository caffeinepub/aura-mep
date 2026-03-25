import type { Variants } from "motion/react";
import { motion } from "motion/react";

const services = [
  {
    icon: "⚙️",
    title: "Mechanical Engineering",
    desc: "Comprehensive mechanical systems design and consultancy.",
    points: [
      "HVAC system design & optimization",
      "Ventilation & air distribution",
      "Chilled water systems",
      "Energy performance analysis",
    ],
  },
  {
    icon: "⚡",
    title: "Electrical Engineering",
    desc: "Full-spectrum electrical design for commercial and industrial projects.",
    points: [
      "HV/LV distribution systems",
      "Lighting design & controls",
      "Power factor correction",
      "Emergency backup systems",
    ],
  },
  {
    icon: "🔧",
    title: "Plumbing & Drainage",
    desc: "Water supply and drainage systems built to international standards.",
    points: [
      "Domestic hot & cold water",
      "Sanitary drainage design",
      "Rainwater harvesting",
      "Greywater recycling systems",
    ],
  },
  {
    icon: "🔥",
    title: "Fire Fighting Systems",
    desc: "Life-safety fire protection systems for all building types.",
    points: [
      "Sprinkler system design",
      "Fire hydrant networks",
      "Foam & gas suppression",
      "Fire alarm integration",
    ],
  },
  {
    icon: "❄️",
    title: "HVAC Systems",
    desc: "Advanced climate control for comfort and energy efficiency.",
    points: [
      "VRF / VRV systems",
      "Central chiller plants",
      "BMS integration",
      "ASHRAE-compliant design",
    ],
  },
  {
    icon: "📋",
    title: "Project Management",
    desc: "End-to-end project delivery with precision and accountability.",
    points: [
      "Design coordination",
      "Contractor management",
      "Site supervision",
      "Commissioning & handover",
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesSection({ isVisible }: { isVisible: boolean }) {
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
            "radial-gradient(ellipse 70% 50% at 70% 60%, rgba(0,100,160,0.12) 0%, transparent 70%), oklch(0.14 0.06 240)",
        }}
      />

      <div
        className="relative z-10 h-full flex flex-col px-6 md:px-12 lg:px-20"
        style={{
          paddingTop: "calc(var(--nav-height) + 24px)",
          paddingBottom: "24px",
        }}
      >
        {/* Header */}
        <div className="mb-6 flex-shrink-0">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "oklch(var(--aqua-glow))" }}
          >
            What We Do
          </p>
          <h2
            className="font-bold"
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
              color: "rgba(202,240,248,0.95)",
              letterSpacing: "-0.02em",
            }}
          >
            Our Services
          </h2>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-1 min-h-0"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              data-ocid={`services.item.${i + 1}`}
              className="glass-card p-4 flex flex-col min-h-0"
              variants={cardVariants}
              style={{ cursor: "default" }}
              whileHover={{
                borderColor: "rgba(0,180,216,0.5)",
                boxShadow: "0 0 20px rgba(0,180,216,0.15)",
              }}
            >
              <span className="text-2xl mb-2">{svc.icon}</span>
              <h3
                className="font-semibold mb-1"
                style={{
                  fontSize: "clamp(0.78rem, 1.2vw, 0.95rem)",
                  color: "rgba(202,240,248,0.92)",
                }}
              >
                {svc.title}
              </h3>
              <p
                className="mb-2 leading-snug"
                style={{
                  fontSize: "clamp(0.68rem, 1vw, 0.8rem)",
                  color: "rgba(150,220,240,0.55)",
                }}
              >
                {svc.desc}
              </p>
              <ul className="space-y-1">
                {svc.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <span
                      className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                      style={{
                        background: "oklch(var(--aqua-glow))",
                        opacity: 0.8,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "clamp(0.65rem, 0.9vw, 0.76rem)",
                        color: "rgba(130,210,235,0.62)",
                      }}
                    >
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
