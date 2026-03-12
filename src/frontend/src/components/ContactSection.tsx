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

function hoverIn(e: React.MouseEvent) {
  (e.currentTarget as HTMLElement).style.color = "white";
}
function hoverOut(e: React.MouseEvent) {
  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)";
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
      className={`section-full ${
        isVisible ? "section-visible" : "section-hidden"
      }`}
    >
      <div
        className="absolute inset-0"
        style={{ background: "oklch(0.07 0.015 240)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(101,162,215,0.05) 0%, transparent 50%)",
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
            <div className="w-full max-w-6xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start h-full py-10">
              {/* Left: Info */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="flex flex-col"
              >
                <p className="section-label mb-3">Get In Touch</p>
                <h2
                  style={{
                    fontFamily:
                      "'Bricolage Grotesque', 'Playfair Display', serif",
                    fontSize: "clamp(2rem, 3.5vw, 3.25rem)",
                    fontWeight: 800,
                    color: "white",
                    lineHeight: 0.95,
                    letterSpacing: "-0.02em",
                    textTransform: "uppercase",
                  }}
                >
                  Request A
                </h2>
                <h2
                  style={{
                    fontFamily:
                      "'Bricolage Grotesque', 'Playfair Display', serif",
                    fontSize: "clamp(2rem, 3.5vw, 3.25rem)",
                    fontWeight: 800,
                    color: "oklch(0.65 0.16 215)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.02em",
                    textTransform: "uppercase",
                    marginBottom: "4px",
                  }}
                >
                  Callback
                </h2>
                <span className="accent-line" />

                <div className="flex flex-col mt-6">
                  {[
                    {
                      Icon: MapPin,
                      label: "Aura MEP",
                      value: "Madurai, Tamil Nadu, India",
                      href: undefined,
                    },
                    {
                      Icon: MapPin,
                      label: "ProLeed Engineering Consultancy",
                      value: "Dubai, UAE (Parent Company)",
                      href: undefined,
                    },
                    {
                      Icon: Mail,
                      label: "Email",
                      value: "info@auramep.com",
                      href: "mailto:info@auramep.com",
                    },
                    {
                      Icon: Phone,
                      label: "Phone",
                      value: "+91 452 000 0000",
                      href: undefined,
                    },
                    {
                      Icon: Globe,
                      label: "Website",
                      value: "proleed.com",
                      href: "https://proleed.com",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 py-4"
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <item.Icon
                        size={13}
                        style={{
                          color: "oklch(0.65 0.16 215)",
                          marginTop: "3px",
                          flexShrink: 0,
                        }}
                      />
                      <div>
                        <p
                          style={{
                            fontSize: "0.6rem",
                            fontWeight: 700,
                            letterSpacing: "0.16em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.3)",
                            marginBottom: "2px",
                          }}
                        >
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={
                              item.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel="noopener noreferrer"
                            style={{
                              color: "rgba(255,255,255,0.75)",
                              fontSize: "0.85rem",
                              textDecoration: "none",
                            }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p
                            style={{
                              color: "rgba(255,255,255,0.75)",
                              fontSize: "0.85rem",
                            }}
                          >
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social */}
                <div className="flex items-center gap-4 mt-5">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={hoverIn}
                    onMouseLeave={hoverOut}
                  >
                    <SiLinkedin size={16} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={hoverIn}
                    onMouseLeave={hoverOut}
                  >
                    <SiInstagram size={16} />
                  </a>
                </div>
              </motion.div>

              {/* Right: Form */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
              >
                <p className="section-label mb-6">Send A Message</p>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col"
                  style={{ gap: "0" }}
                >
                  {[
                    {
                      id: "name" as const,
                      placeholder: "Your Name",
                      type: "text",
                      required: true,
                      ocid: "contact.name.input",
                    },
                    {
                      id: "email" as const,
                      placeholder: "Email Address",
                      type: "email",
                      required: true,
                      ocid: "contact.email.input",
                    },
                    {
                      id: "phone" as const,
                      placeholder: "Phone Number",
                      type: "tel",
                      required: false,
                      ocid: "contact.phone.input",
                    },
                  ].map((field) => (
                    <div
                      key={field.id}
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                        marginBottom: "4px",
                      }}
                    >
                      <Input
                        data-ocid={field.ocid}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.id]}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, [field.id]: e.target.value }))
                        }
                        required={field.required}
                        style={{
                          background: "transparent",
                          border: "none",
                          borderRadius: 0,
                          color: "white",
                          padding: "14px 0",
                          fontSize: "0.875rem",
                          boxShadow: "none",
                        }}
                        className="placeholder:text-white/30 focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                  ))}

                  <div
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                      marginBottom: "28px",
                    }}
                  >
                    <Textarea
                      data-ocid="contact.message.textarea"
                      placeholder="Your Message"
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      required
                      rows={3}
                      style={{
                        background: "transparent",
                        border: "none",
                        borderRadius: 0,
                        color: "white",
                        padding: "14px 0",
                        fontSize: "0.875rem",
                        resize: "none",
                        boxShadow: "none",
                      }}
                      className="placeholder:text-white/30 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>

                  {isPending && (
                    <div
                      data-ocid="contact.loading_state"
                      className="flex items-center gap-2 mb-3"
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "0.8rem",
                      }}
                    >
                      <Loader2 size={13} className="animate-spin" />
                      Sending your message...
                    </div>
                  )}
                  {isError && (
                    <div
                      data-ocid="contact.error_state"
                      className="mb-3 px-4 py-2"
                      style={{
                        background: "rgba(220,50,50,0.12)",
                        borderLeft: "2px solid rgba(220,50,50,0.6)",
                        color: "#fc8181",
                        fontSize: "0.8rem",
                      }}
                    >
                      Failed to send. Please try again.
                    </div>
                  )}
                  {isSuccess && (
                    <div
                      data-ocid="contact.success_state"
                      className="mb-3 px-4 py-2"
                      style={{
                        background: "rgba(0,180,100,0.10)",
                        borderLeft: "2px solid rgba(0,180,100,0.5)",
                        color: "#68d391",
                        fontSize: "0.8rem",
                      }}
                    >
                      Message sent successfully!
                    </div>
                  )}

                  <button
                    data-ocid="contact.submit_button"
                    type="submit"
                    disabled={isPending}
                    className="flex items-center gap-3"
                    style={{
                      background: "transparent",
                      border: "none",
                      cursor: isPending ? "not-allowed" : "pointer",
                      padding: 0,
                      width: "fit-content",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: isPending ? "rgba(255,255,255,0.3)" : "white",
                        borderBottom: "1px solid rgba(255,255,255,0.35)",
                        paddingBottom: "2px",
                      }}
                    >
                      {isPending ? "Sending..." : "Send Message →"}
                    </span>
                    {isPending && (
                      <Loader2
                        size={12}
                        className="animate-spin"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                      />
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-3"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          color: "rgba(255,255,255,0.25)",
          fontSize: "0.7rem",
          letterSpacing: "0.08em",
          gap: "4px",
        }}
      >
        © {new Date().getFullYear()} Aura MEP. Built with ❤️ using
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "oklch(0.65 0.16 215)",
            textDecoration: "none",
          }}
        >
          caffeine.ai
        </a>
      </div>
    </div>
  );
}
