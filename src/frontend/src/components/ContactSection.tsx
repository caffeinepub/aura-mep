import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Globe, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SiInstagram, SiLinkedin } from "react-icons/si";
import { toast } from "sonner";
import { useSubmitContactForm } from "../hooks/useQueries";

interface Props {
  isVisible: boolean;
}

export default function ContactSection({ isVisible }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { mutate, isPending, isSuccess, isError } = useSubmitContactForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form, {
      onSuccess: () => {
        toast.success("Message sent! We'll get back to you soon.");
        setForm({ name: "", email: "", phone: "", message: "" });
      },
      onError: () => {
        toast.error("Failed to send message. Please try again.");
      },
    });
  };

  return (
    <div
      className={`section-full ${isVisible ? "section-visible" : "section-hidden"}`}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.09 0.04 245) 0%, oklch(0.15 0.06 230) 50%, oklch(0.11 0.04 242) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 80%, rgba(0,119,182,0.1) 0%, transparent 55%)",
        }}
      />

      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="contact-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex items-center"
            style={{ paddingTop: "var(--nav-height)" }}
          >
            <div className="w-full max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full py-8">
              {/* Left: Company Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <div
                    className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
                    style={{
                      background: "rgba(0,180,216,0.1)",
                      border: "1px solid rgba(0,180,216,0.3)",
                      color: "oklch(0.85 0.12 198)",
                    }}
                  >
                    Get In Touch
                  </div>
                  <h2
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                      fontWeight: 700,
                      color: "white",
                      lineHeight: 1.1,
                    }}
                  >
                    Contact{" "}
                    <span style={{ color: "oklch(0.72 0.16 210)" }}>Us</span>
                  </h2>
                </div>

                <div className="glass-card p-6 flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={16}
                      style={{
                        color: "oklch(0.85 0.14 205)",
                        marginTop: "2px",
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <p
                        style={{
                          color: "white",
                          fontWeight: 600,
                          fontSize: "0.875rem",
                        }}
                      >
                        Aura MEP
                      </p>
                      <p
                        style={{
                          color: "rgba(202,240,248,0.7)",
                          fontSize: "0.8rem",
                        }}
                      >
                        Madurai, Tamil Nadu, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin
                      size={16}
                      style={{
                        color: "oklch(0.72 0.16 210)",
                        marginTop: "2px",
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <p
                        style={{
                          color: "white",
                          fontWeight: 600,
                          fontSize: "0.875rem",
                        }}
                      >
                        ProLeed Engineering Consultancy
                      </p>
                      <p
                        style={{
                          color: "rgba(202,240,248,0.7)",
                          fontSize: "0.8rem",
                        }}
                      >
                        Dubai, UAE (Parent Company)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail
                      size={16}
                      style={{ color: "oklch(0.85 0.14 205)", flexShrink: 0 }}
                    />
                    <a
                      href="mailto:info@auramep.com"
                      style={{
                        color: "rgba(202,240,248,0.8)",
                        fontSize: "0.875rem",
                        textDecoration: "none",
                      }}
                    >
                      info@auramep.com
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone
                      size={16}
                      style={{ color: "oklch(0.85 0.14 205)", flexShrink: 0 }}
                    />
                    <span
                      style={{
                        color: "rgba(202,240,248,0.8)",
                        fontSize: "0.875rem",
                      }}
                    >
                      +91 452 000 0000
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Globe
                      size={16}
                      style={{ color: "oklch(0.85 0.14 205)", flexShrink: 0 }}
                    />
                    <a
                      href="https://proleed.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "oklch(0.85 0.14 205)",
                        fontSize: "0.875rem",
                      }}
                    >
                      proleed.com
                    </a>
                  </div>

                  {/* Social */}
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                      style={{
                        background: "rgba(0,180,216,0.15)",
                        border: "1px solid rgba(0,180,216,0.3)",
                      }}
                    >
                      <SiLinkedin
                        size={16}
                        style={{ color: "oklch(0.85 0.14 205)" }}
                      />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                      style={{
                        background: "rgba(0,180,216,0.15)",
                        border: "1px solid rgba(0,180,216,0.3)",
                      }}
                    >
                      <SiInstagram
                        size={16}
                        style={{ color: "oklch(0.85 0.14 205)" }}
                      />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Right: Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="glass-card p-8"
              >
                <h3
                  className="font-semibold text-white mb-6"
                  style={{ fontSize: "1.125rem" }}
                >
                  Send us a message
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <Input
                      data-ocid="contact.name.input"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      required
                      style={{
                        background: "rgba(0,40,80,0.4)",
                        border: "1px solid rgba(0,180,216,0.25)",
                        color: "white",
                      }}
                    />
                  </div>
                  <div>
                    <Input
                      data-ocid="contact.email.input"
                      type="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      required
                      style={{
                        background: "rgba(0,40,80,0.4)",
                        border: "1px solid rgba(0,180,216,0.25)",
                        color: "white",
                      }}
                    />
                  </div>
                  <div>
                    <Input
                      data-ocid="contact.phone.input"
                      type="tel"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, phone: e.target.value }))
                      }
                      style={{
                        background: "rgba(0,40,80,0.4)",
                        border: "1px solid rgba(0,180,216,0.25)",
                        color: "white",
                      }}
                    />
                  </div>
                  <div>
                    <Textarea
                      data-ocid="contact.message.textarea"
                      placeholder="Your Message"
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      required
                      rows={4}
                      style={{
                        background: "rgba(0,40,80,0.4)",
                        border: "1px solid rgba(0,180,216,0.25)",
                        color: "white",
                        resize: "none",
                      }}
                    />
                  </div>

                  {/* States */}
                  {isPending && (
                    <div
                      data-ocid="contact.loading_state"
                      className="flex items-center gap-2 text-sm"
                      style={{ color: "rgba(202,240,248,0.7)" }}
                    >
                      <Loader2 size={14} className="animate-spin" />
                      Sending your message...
                    </div>
                  )}
                  {isError && (
                    <div
                      data-ocid="contact.error_state"
                      className="text-sm px-3 py-2 rounded"
                      style={{
                        background: "rgba(220,50,50,0.15)",
                        color: "#fc8181",
                        border: "1px solid rgba(220,50,50,0.3)",
                      }}
                    >
                      Failed to send. Please try again.
                    </div>
                  )}
                  {isSuccess && (
                    <div
                      data-ocid="contact.success_state"
                      className="text-sm px-3 py-2 rounded"
                      style={{
                        background: "rgba(0,180,100,0.15)",
                        color: "#68d391",
                        border: "1px solid rgba(0,180,100,0.3)",
                      }}
                    >
                      Message sent successfully!
                    </div>
                  )}

                  <Button
                    data-ocid="contact.submit_button"
                    type="submit"
                    disabled={isPending}
                    className="w-full py-3 font-semibold text-sm tracking-wider uppercase"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.45 0.18 225) 0%, oklch(0.60 0.18 210) 100%)",
                      color: "white",
                      border: "none",
                      cursor: isPending ? "not-allowed" : "pointer",
                    }}
                  >
                    {isPending ? (
                      <Loader2 size={14} className="mr-2 animate-spin" />
                    ) : null}
                    {isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <div
        className="absolute bottom-0 left-0 right-0 text-center py-3"
        style={{ color: "rgba(144,224,239,0.4)", fontSize: "0.75rem" }}
      >
        © {new Date().getFullYear()}. Built with ❤️ using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "oklch(0.72 0.16 210)", textDecoration: "none" }}
        >
          caffeine.ai
        </a>
      </div>
    </div>
  );
}
