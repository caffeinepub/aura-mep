import { ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface Props {
  isVisible: boolean;
  onExploreServices: () => void;
}

export default function HomeSection({ isVisible, onExploreServices }: Props) {
  return (
    <div
      className={`section-full ${isVisible ? "section-visible" : "section-hidden"}`}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://assets.mixkit.co/videos/preview/mixkit-construction-of-a-building-on-a-city-1894-large.mp4"
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,22,40,0.75) 0%, rgba(0,40,80,0.55) 50%, rgba(10,22,40,0.8) 100%)",
        }}
      />
      {/* Water shimmer overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 80%, rgba(0,119,182,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0,180,216,0.1) 0%, transparent 50%)",
        }}
      />

      {/* Content */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="home-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
            style={{ paddingTop: "var(--nav-height)" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: "rgba(0,180,216,0.15)",
                border: "1px solid rgba(0,180,216,0.4)",
                color: "oklch(0.85 0.12 198)",
              }}
            >
              A ProLeed Group Company
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(3rem, 9vw, 7rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1,
                color: "white",
                textShadow: "0 4px 40px rgba(0,0,0,0.5)",
              }}
            >
              AURA{" "}
              <span
                style={{ color: "oklch(0.85 0.14 205)", display: "inline" }}
              >
                MEP
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-4 mb-2"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                color: "rgba(202,240,248,0.9)",
                letterSpacing: "0.08em",
                fontWeight: 300,
              }}
            >
              Engineering Excellence. Built on Trust.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              style={{
                color: "rgba(144,224,239,0.7)",
                fontSize: "0.9rem",
                letterSpacing: "0.12em",
              }}
            >
              MEP Consultancy | Madurai | A ProLeed Group Company
            </motion.p>

            {/* CTA */}
            <motion.button
              data-ocid="home.services.primary_button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 40px rgba(0,180,216,0.5)",
              }}
              whileTap={{ scale: 0.97 }}
              onClick={onExploreServices}
              className="mt-10 flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-widest uppercase"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.45 0.18 225) 0%, oklch(0.62 0.18 210) 100%)",
                color: "white",
                border: "1px solid rgba(0,180,216,0.5)",
                boxShadow: "0 4px 24px rgba(0,119,182,0.4)",
                cursor: "pointer",
              }}
            >
              Explore Our Services <ChevronRight size={16} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom bar */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-8 py-4 px-6"
        style={{
          background:
            "linear-gradient(to top, rgba(10,22,40,0.92) 0%, transparent 100%)",
          backdropFilter: "blur(4px)",
        }}
      >
        {["Mechanical", "Electrical", "Plumbing", "Fire Fighting", "HVAC"].map(
          (item) => (
            <span
              key={item}
              className="text-xs font-semibold tracking-widest uppercase hidden sm:block"
              style={{
                color: "rgba(144,224,239,0.7)",
                borderRight: "1px solid rgba(0,180,216,0.2)",
                paddingRight: "2rem",
              }}
            >
              {item}
            </span>
          ),
        )}
      </div>
    </div>
  );
}
