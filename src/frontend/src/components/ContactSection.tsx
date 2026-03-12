import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContactForm } from "../hooks/useQueries";

export default function ContactSection({ isVisible }: { isVisible: boolean }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { mutate, isPending } = useSubmitContactForm();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    mutate(form, {
      onSuccess: () => {
        toast.success("Message sent! We'll be in touch soon.");
        setForm({ name: "", email: "", phone: "", message: "" });
      },
      onError: () => toast.error("Failed to send. Please try again."),
    });
  }

  const inputStyle = {
    background: "rgba(0,180,216,0.06)",
    border: "1px solid rgba(0,180,216,0.2)",
    color: "rgba(202,240,248,0.9)",
    borderRadius: 8,
    fontSize: "0.875rem",
  };

  const labelStyle = {
    fontSize: "0.72rem",
    color: "rgba(202,240,248,0.5)",
    letterSpacing: "0.05em",
    textTransform: "uppercase" as const,
  };

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
            "radial-gradient(ellipse 70% 50% at 20% 70%, rgba(0,100,180,0.12) 0%, transparent 70%), oklch(0.14 0.06 240)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 450,
          height: 450,
          top: "10%",
          right: "-5%",
          background:
            "radial-gradient(circle, rgba(0,180,216,0.1) 0%, transparent 70%)",
          animation: "floatOrb 14s ease-in-out infinite 1s",
        }}
      />

      <div
        className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24"
        style={{ paddingTop: "var(--nav-height)" }}
      >
        {/* Header */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "oklch(var(--aqua-glow))" }}
          >
            Get In Touch
          </p>
          <h2
            className="font-bold"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              color: "rgba(220,240,255,0.95)",
              letterSpacing: "-0.02em",
            }}
          >
            Contact Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
          {/* Left: contact info */}
          <motion.div
            className="glass-card p-6 flex flex-col gap-5"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3
              className="font-semibold mb-1"
              style={{ fontSize: "1rem", color: "rgba(220,240,255,0.9)" }}
            >
              Aura MEP — Madurai Branch
            </h3>
            <p
              style={{
                fontSize: "0.82rem",
                color: "rgba(202,240,248,0.58)",
                lineHeight: 1.6,
              }}
            >
              Branch of Proleed Engineering Consultancy, Dubai. Delivering
              precision MEP engineering across South India.
            </p>

            {[
              { Icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX" },
              { Icon: Mail, label: "Email", value: "info@auramep.com" },
              {
                Icon: MapPin,
                label: "Address",
                value: "Madurai, Tamil Nadu, India",
              },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    background: "rgba(0,180,216,0.12)",
                    border: "1px solid rgba(0,180,216,0.2)",
                  }}
                >
                  <Icon
                    size={14}
                    style={{ color: "oklch(var(--aqua-glow))" }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "0.7rem",
                      color: "rgba(202,240,248,0.45)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(202,240,248,0.8)",
                    }}
                  >
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: contact form */}
          <motion.form
            className="glass-card p-6 flex flex-col gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block mb-1"
                  style={labelStyle}
                >
                  Name
                </label>
                <Input
                  id="contact-name"
                  data-ocid="contact.input"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  required
                  style={inputStyle}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block mb-1"
                  style={labelStyle}
                >
                  Email
                </label>
                <Input
                  id="contact-email"
                  data-ocid="contact.input"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  required
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-phone"
                className="block mb-1"
                style={labelStyle}
              >
                Phone
              </label>
              <Input
                id="contact-phone"
                data-ocid="contact.input"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={form.phone}
                onChange={(e) =>
                  setForm((p) => ({ ...p, phone: e.target.value }))
                }
                style={inputStyle}
              />
            </div>

            <div className="flex-1">
              <label
                htmlFor="contact-message"
                className="block mb-1"
                style={labelStyle}
              >
                Message
              </label>
              <Textarea
                id="contact-message"
                data-ocid="contact.textarea"
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={(e) =>
                  setForm((p) => ({ ...p, message: e.target.value }))
                }
                required
                rows={4}
                style={{ ...inputStyle, resize: "none" }}
              />
            </div>

            <button
              type="submit"
              data-ocid="contact.submit_button"
              className="aqua-btn justify-center"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={15} />
                </>
              )}
            </button>

            {isPending && (
              <p
                data-ocid="contact.loading_state"
                className="text-center"
                style={{ fontSize: "0.75rem", color: "rgba(202,240,248,0.4)" }}
              >
                Submitting your enquiry...
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
