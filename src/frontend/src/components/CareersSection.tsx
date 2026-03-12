import { ExternalLink, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface Props {
  isVisible: boolean;
}

const jobs = [
  { title: "MEP Design Engineer", location: "Madurai", type: "Full Time" },
  { title: "Electrical Engineer", location: "Madurai", type: "Full Time" },
  { title: "Project Coordinator", location: "Madurai", type: "Full Time" },
];

export default function CareersSection({ isVisible }: Props) {
  return (
    <div
      className={`section-full ${isVisible ? "section-visible" : "section-hidden"}`}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.10 0.04 245) 0%, oklch(0.18 0.08 225) 50%, oklch(0.12 0.05 238) 100%)",
        }}
      />
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,119,182,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            left: "-10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,180,216,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

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
            <div className="w-full max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center gap-8">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div
                  className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
                  style={{
                    background: "rgba(0,180,216,0.1)",
                    border: "1px solid rgba(0,180,216,0.3)",
                    color: "oklch(0.85 0.12 198)",
                  }}
                >
                  We Are Hiring
                </div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    fontWeight: 700,
                    color: "white",
                    lineHeight: 1.1,
                  }}
                >
                  Join Our{" "}
                  <span style={{ color: "oklch(0.72 0.16 210)" }}>Team</span>
                </h2>
                <p
                  className="mt-3"
                  style={{
                    color: "rgba(202,240,248,0.7)",
                    maxWidth: "500px",
                    lineHeight: 1.7,
                    fontSize: "0.95rem",
                  }}
                >
                  We are always looking for talented engineers and professionals
                  to join the Aura MEP family.
                </p>
              </motion.div>

              {/* Job cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
                {jobs.map((job, i) => (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    className="glass-card p-6 flex flex-col gap-4"
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 12px 40px rgba(0,119,182,0.35)",
                    }}
                  >
                    <div>
                      <h3
                        className="font-semibold text-white mb-2"
                        style={{ fontSize: "1rem" }}
                      >
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span
                          className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full"
                          style={{
                            background: "rgba(0,180,216,0.15)",
                            color: "oklch(0.85 0.12 198)",
                            border: "1px solid rgba(0,180,216,0.25)",
                          }}
                        >
                          <MapPin size={10} />
                          {job.location}
                        </span>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{
                            background: "rgba(0,119,182,0.12)",
                            color: "rgba(202,240,248,0.7)",
                          }}
                        >
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <a
                      href="mailto:careers@auramep.com"
                      data-ocid={`careers.apply.button.${i + 1}`}
                      className="flex items-center gap-2 justify-center py-2.5 rounded-lg font-semibold text-sm transition-all duration-200"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.45 0.18 225) 0%, oklch(0.60 0.18 210) 100%)",
                        color: "white",
                        border: "1px solid rgba(0,180,216,0.3)",
                        textDecoration: "none",
                      }}
                    >
                      Apply Now <ExternalLink size={12} />
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Footer note */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                style={{ color: "rgba(144,224,239,0.6)", fontSize: "0.875rem" }}
              >
                Send your CV to{" "}
                <a
                  href="mailto:careers@auramep.com"
                  style={{
                    color: "oklch(0.85 0.14 205)",
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
