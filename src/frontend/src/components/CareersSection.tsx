import { ExternalLink } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface Props {
  isVisible: boolean;
}

const jobs = [
  {
    title: "MEP Design Engineer",
    location: "Madurai, India",
    type: "Full Time",
    dept: "Engineering",
  },
  {
    title: "Electrical Engineer",
    location: "Madurai, India",
    type: "Full Time",
    dept: "Electrical",
  },
  {
    title: "Project Coordinator",
    location: "Madurai, India",
    type: "Full Time",
    dept: "Operations",
  },
];

function applyHoverIn(e: React.MouseEvent) {
  (e.currentTarget as HTMLElement).style.borderBottomColor = "white";
}
function applyHoverOut(e: React.MouseEvent) {
  (e.currentTarget as HTMLElement).style.borderBottomColor =
    "rgba(255,255,255,0.25)";
}

export default function CareersSection({ isVisible }: Props) {
  return (
    <div
      className={`section-full ${
        isVisible ? "section-visible" : "section-hidden"
      }`}
    >
      <div
        className="absolute inset-0"
        style={{ background: "oklch(0.07 0.015 240)" }}
      />

      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="careers-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ paddingTop: "var(--nav-height)" }}
          >
            <div className="w-full max-w-5xl mx-auto px-12 flex flex-col gap-10">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <p className="section-label mb-3">We Are Hiring</p>
                <h2
                  style={{
                    fontFamily:
                      "'Bricolage Grotesque', 'Playfair Display', serif",
                    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                    fontWeight: 800,
                    color: "white",
                    lineHeight: 0.9,
                    letterSpacing: "-0.025em",
                    textTransform: "uppercase",
                  }}
                >
                  JOIN OUR
                </h2>
                <h2
                  style={{
                    fontFamily:
                      "'Bricolage Grotesque', 'Playfair Display', serif",
                    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                    fontWeight: 800,
                    color: "oklch(0.65 0.16 215)",
                    lineHeight: 0.9,
                    letterSpacing: "-0.025em",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                  }}
                >
                  TEAM
                </h2>
                <span className="accent-line" />
                <p
                  style={{
                    color: "rgba(255,255,255,0.42)",
                    fontSize: "0.82rem",
                    letterSpacing: "0.04em",
                    marginTop: "4px",
                  }}
                >
                  Talented engineers and professionals — Aura MEP is always
                  growing.
                </p>
              </motion.div>

              {/* Job list */}
              <div className="flex flex-col">
                {jobs.map((job, i) => (
                  <motion.div
                    key={job.title}
                    data-ocid={`careers.item.${i + 1}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    className="flex items-center justify-between py-6"
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.07)",
                      borderTop:
                        i === 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
                    }}
                  >
                    <div className="flex flex-col gap-1">
                      <span
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          color: "white",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {job.title}
                      </span>
                      <div className="flex items-center gap-4">
                        <span
                          style={{
                            fontSize: "0.65rem",
                            fontWeight: 600,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.32)",
                          }}
                        >
                          {job.dept}
                        </span>
                        <span
                          style={{
                            width: "3px",
                            height: "3px",
                            borderRadius: "50%",
                            background: "rgba(255,255,255,0.2)",
                            display: "inline-block",
                          }}
                        />
                        <span
                          style={{
                            fontSize: "0.65rem",
                            fontWeight: 600,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.32)",
                          }}
                        >
                          {job.location}
                        </span>
                        <span
                          style={{
                            width: "3px",
                            height: "3px",
                            borderRadius: "50%",
                            background: "rgba(255,255,255,0.2)",
                            display: "inline-block",
                          }}
                        />
                        <span
                          style={{
                            fontSize: "0.65rem",
                            fontWeight: 600,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: "oklch(0.65 0.16 215)",
                          }}
                        >
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <a
                      href="mailto:careers@auramep.com"
                      data-ocid={`careers.apply.button.${i + 1}`}
                      className="flex items-center gap-2"
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "white",
                        textDecoration: "none",
                        borderBottom: "1px solid rgba(255,255,255,0.25)",
                        paddingBottom: "1px",
                        transition: "border-color 0.2s",
                      }}
                      onMouseEnter={applyHoverIn}
                      onMouseLeave={applyHoverOut}
                    >
                      Apply Now <ExternalLink size={10} />
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Footer note */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                style={{
                  color: "rgba(255,255,255,0.3)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.04em",
                }}
              >
                Send your CV to{" "}
                <a
                  href="mailto:careers@auramep.com"
                  style={{
                    color: "oklch(0.65 0.16 215)",
                    textDecoration: "underline",
                  }}
                >
                  careers@auramep.com
                </a>
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
