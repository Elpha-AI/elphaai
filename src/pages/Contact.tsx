import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "", type: "general" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="container-wide px-6 md:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-sm text-primary font-medium tracking-wide uppercase">Contact</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient max-w-3xl mb-6">
              Let's build something.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Share your challenge. We'll respond within 24 hours with a clear, considered perspective.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-card rounded-xl p-12 text-center"
                  >
                    <CheckCircle size={48} className="text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-display font-bold text-foreground mb-2">Message received.</h3>
                    <p className="text-muted-foreground">We'll be in touch within 24 hours.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="glass-card rounded-xl p-8 space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                        <input
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                          placeholder="Your name"
                        />
                        {errors.name && <span className="text-xs text-destructive mt-1">{errors.name}</span>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                        <input
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                          placeholder="you@company.com"
                        />
                        {errors.email && <span className="text-xs text-destructive mt-1">{errors.email}</span>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                      <input
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                        placeholder="Your organization"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Inquiry Type</label>
                      <div className="flex flex-wrap gap-2">
                        {["General", "Project", "Partnership", "Careers"].map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setForm({ ...form, type: t.toLowerCase() })}
                            className={`px-4 py-2 rounded-lg text-sm transition-all ${
                              form.type === t.toLowerCase()
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                        placeholder="Tell us about your challenge..."
                      />
                      {errors.message && <span className="text-xs text-destructive mt-1">{errors.message}</span>}
                    </div>
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all"
                    >
                      Send Message
                      <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            <div className="space-y-6">
              <AnimatedSection delay={0.1}>
                <div className="glass-card rounded-xl p-6">
                  <h3 className="font-display font-semibold text-foreground mb-3">Direct Contact</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>hello@elpha.ai</p>
                    <p>+1 (415) 555-0192</p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="glass-card rounded-xl p-6">
                  <h3 className="font-display font-semibold text-foreground mb-3">Headquarters</h3>
                  <p className="text-sm text-muted-foreground">
                    548 Market Street, Suite 400<br />
                    San Francisco, CA 94104
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className="glass-card rounded-xl p-6">
                  <h3 className="font-display font-semibold text-foreground mb-3">Response Time</h3>
                  <p className="text-sm text-muted-foreground">
                    We respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
