import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface Props {
  isVisible: boolean;
  onExploreServices: () => void;
}

const slides = [
  {
    bg: "/assets/generated/aura-mep-hero-bg-v2.dim_1920x1080.jpg",
    headline: "ENGINEERING\nTHE FUTURE",
    sub: "MEP Consultancy Excellence",
    num: "01",
    isVideo: true,
  },
  {
    bg: "/assets/generated/aura-mep-hero-bg.dim_1920x1080.jpg",
    headline: "PRECISION\nMEP DESIGN",
    sub: "Mechanical · Electrical · Plumbing",
    num: "02",
    isVideo: false,
  },
  {
    bg: "/assets/generated/mep-systems.dim_800x600.jpg",
    headline: "BUILT\nON TRUST",
    sub: "A ProLeed Group Company · Madurai",
    num: "03",
    isVideo: false,
  },
];

export default function HomeSection({ isVisible, onExploreServices }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!isVisible) return;
    timerRef.current = setInterval(() => {
      setPrevSlide(currentSlide);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isVisible, currentSlide]);

  const slide = slides[currentSlide];

  return (
    <div
      className={`section-full ${
        isVisible ? "section-visible" : "section-hidden"
      }`}
    >
      {/* Slide backgrounds */}
      {slides.map((s, i) => (
        <div
          key={s.bg}
          className="absolute inset-0 overflow-hidden"
          style={{
            opacity: i === currentSlide ? 1 : 0,
            transition: "opacity 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
            zIndex: i === currentSlide ? 1 : i === prevSlide ? 0 : 0,
          }}
        >
          {i === 0 ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover hero-slide-bg"
              style={{ transformOrigin: "center center" }}
            >
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-buildings-in-a-city-4474-large.mp4"
                type="video/mp4"
              />
              <img
                src="/assets/generated/aura-mep-hero-bg-v2.dim_1920x1080.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </video>
          ) : (
            <img
              src={s.bg}
              alt=""
              className="hero-slide-bg absolute inset-0 w-full h-full object-cover"
              style={{ transformOrigin: "center center" }}
            />
          )}
        </div>
      ))}

      {/* Ambient glow orbs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1, overflow: "hidden" }}
      >
        <div
          className="shimmer-orb"
          style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: 320,
            height: 320,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(101,162,215,0.07) 0%, transparent 70%)",
            animation: "floatUp 8s ease-in-out infinite",
          }}
        />
        <div
          className="shimmer-orb"
          style={{
            position: "absolute",
            bottom: "25%",
            right: "15%",
            width: 240,
            height: 240,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(101,162,215,0.05) 0%, transparent 70%)",
            animation: "floatUp 11s ease-in-out infinite 2s",
          }}
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.60) 55%, rgba(0,0,0,0.92) 100%)",
          zIndex: 2,
        }}
      />

      {/* Content */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="home-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex flex-col justify-end"
            style={{ paddingTop: "var(--nav-height)", zIndex: 3 }}
          >
            {/* Main content — left aligned, at bottom area */}
            <div className="px-14 pb-20 max-w-5xl">
              {/* ProLeed label */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`label-${currentSlide}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "oklch(0.65 0.16 215)",
                    marginBottom: "16px",
                  }}
                >
                  A ProLeed Group Company
                </motion.p>
              </AnimatePresence>

              {/* Headline — staggered word animation */}
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`headline-${currentSlide}`}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    fontFamily:
                      "'Bricolage Grotesque', 'Playfair Display', serif",
                    fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.025em",
                    lineHeight: 0.92,
                    color: "white",
                    whiteSpace: "pre-line",
                    marginBottom: "24px",
                  }}
                >
                  {slide.headline.split(/\s+/).map((word, wi) => (
                    <motion.span
                      key={`s${currentSlide}-${word}`}
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.55,
                        delay: wi * 0.12,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{
                        display: "inline-block",
                        marginRight: word === "\n" ? 0 : "0.25em",
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>
              </AnimatePresence>

              {/* Sub */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`sub-${currentSlide}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  style={{
                    fontSize: "clamp(0.65rem, 1vw, 0.82rem)",
                    fontWeight: 300,
                    letterSpacing: "0.12em",
                    color: "rgba(255,255,255,0.65)",
                    marginBottom: "36px",
                    textTransform: "uppercase",
                  }}
                >
                  {slide.sub}
                </motion.p>
              </AnimatePresence>

              {/* CTA */}
              <motion.button
                data-ocid="home.services.primary_button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                onClick={onExploreServices}
                className="group flex items-center gap-3"
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "white",
                    borderBottom: "1px solid rgba(255,255,255,0.35)",
                    paddingBottom: "2px",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.borderBottomColor = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.borderBottomColor =
                      "rgba(255,255,255,0.35)";
                  }}
                >
                  EXPLORE OUR SERVICES
                </span>
                <span
                  style={{ color: "white", fontSize: "1rem", fontWeight: 300 }}
                >
                  →
                </span>
              </motion.button>
            </div>

            {/* Slide counter — bottom right */}
            <div
              className="absolute bottom-20 right-14 flex items-center gap-3"
              style={{ zIndex: 4 }}
            >
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  color: "white",
                }}
              >
                {slide.num}
              </span>
              <span
                style={{
                  width: "32px",
                  height: "1px",
                  background: "rgba(255,255,255,0.4)",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                03
              </span>
            </div>

            {/* Bottom services strip */}
            <div
              className="absolute bottom-0 left-0 right-0 flex items-center px-14 py-4"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(0,0,0,0.45)",
                backdropFilter: "blur(8px)",
              }}
            >
              {[
                "Mechanical",
                "Electrical",
                "Plumbing",
                "Fire Fighting",
                "HVAC",
              ].map((item, i) => (
                <span
                  key={item}
                  style={{
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                    paddingRight: i < 4 ? "2.5rem" : 0,
                    borderRight:
                      i < 4 ? "1px solid rgba(255,255,255,0.12)" : "none",
                    marginRight: i < 4 ? "2.5rem" : 0,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
