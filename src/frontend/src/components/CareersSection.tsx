import { Briefcase, MapPin, Send } from "lucide-react";
import { motion } from "motion/react";

const jobs = [
  {
    title: "MEP Design Engineer",
    dept: "Engineering",
    location: "Madurai, India",
    type: "Full-time",
    desc: "Design and coordinate MEP systems for commercial and residential projects using AutoCAD and Revit.",
  },
  {
    title: "Electrical Engineer",
    dept: "Electrical",
    location: "Madurai, India",
    type: "Full-time",
    desc: "Develop electrical layouts, load calculations, and coordinate with project teams on site.",
  },
  {
    title: "HVAC Engineer",
    dept: "Mechanical",
    location: "Madurai, India",
    type: "Full-time",
    desc: "Design HVAC systems, perform heat load calculations, and prepare equipment schedules.",
  },
];

export default function CareersSection({ isVisible }: { isVisible: boolean }) {
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
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(0,100,160,0.12) 0%, transparent 70%), oklch(0.14 0.06 240)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 400,
          height: 400,
          bottom: "5%",
          left: "5%",
          background:
            "radial-gradient(circle, rgba(0,180,216,0.1) 0%, transparent 70%)",
          animation: "floatOrb 12s ease-in-out infinite 2s",
        }}
      />

      <div
        className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24"
        style={{ paddingTop: "var(--nav-height)" }}
      >
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "oklch(var(--aqua-glow))" }}
          >
            Work With Us
          </p>
          <h2
            className="font-bold"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              color: "rgba(220,240,255,0.95)",
              letterSpacing: "-0.02em",
            }}
          >
            Join Our Team
          </h2>
          <p
            className="mt-2"
            style={{
              fontSize: "clamp(0.82rem, 1.3vw, 0.95rem)",
              color: "rgba(202,240,248,0.6)",
              maxWidth: 500,
            }}
          >
            Be part of a growing team delivering world-class MEP engineering
            across India.
          </p>
        </motion.div>

        {/* Job cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl">
          {jobs.map((job, i) => (
            <motion.div
              key={job.title}
              data-ocid={`careers.item.${i + 1}`}
              className="glass-card p-6 flex flex-col gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.15 * (i + 1) }}
              whileHover={{ boxShadow: "0 0 24px rgba(0,180,216,0.15)" }}
            >
              <div className="flex items-center gap-2">
                <Briefcase
                  size={16}
                  style={{ color: "oklch(var(--aqua-glow))" }}
                />
                <span
                  className="text-xs font-semibold tracking-wider uppercase"
                  style={{ color: "oklch(var(--aqua-glow))" }}
                >
                  {job.dept}
                </span>
              </div>

              <h3
                className="font-bold"
                style={{
                  fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
                  color: "rgba(220,240,255,0.92)",
                }}
              >
                {job.title}
              </h3>

              <p
                style={{
                  fontSize: "0.82rem",
                  color: "rgba(202,240,248,0.62)",
                  lineHeight: 1.5,
                }}
              >
                {job.desc}
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <span
                  className="flex items-center gap-1"
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(202,240,248,0.5)",
                  }}
                >
                  <MapPin size={12} /> {job.location}
                </span>
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(0,180,216,0.12)",
                    border: "1px solid rgba(0,180,216,0.25)",
                    color: "oklch(var(--aqua-glow))",
                  }}
                >
                  {job.type}
                </span>
              </div>

              <a
                href={`mailto:careers@auramep.com?subject=Application: ${encodeURIComponent(job.title)}`}
                data-ocid={`careers.item.${i + 1}`}
                className="aqua-btn justify-center mt-1 no-underline"
                style={{
                  textDecoration: "none",
                  fontSize: "0.78rem",
                  padding: "9px 20px",
                }}
              >
                Apply Now <Send size={13} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
