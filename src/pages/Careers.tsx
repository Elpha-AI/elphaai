import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, X, CheckCircle, Upload } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openings = [
  { title: "Senior ML Engineer", team: "AI Engineering", location: "San Francisco / Remote", type: "Full-time", description: "Design and deploy production ML systems for enterprise clients." },
  { title: "Cloud Architect", team: "Infrastructure", location: "New York / Remote", type: "Full-time", description: "Architect multi-cloud environments for Fortune 500 organizations." },
  { title: "Security Engineer", team: "Cybersecurity", location: "London / Remote", type: "Full-time", description: "Build zero-trust security frameworks for critical infrastructure." },
  { title: "Data Platform Engineer", team: "Data Engineering", location: "Berlin / Remote", type: "Full-time", description: "Design scalable data architectures processing billions of events daily." },
  { title: "Technical Program Manager", team: "Delivery", location: "San Francisco / Remote", type: "Full-time", description: "Lead complex multi-workstream engagements from strategy to delivery." },
  { title: "Frontend Engineer", team: "Product", location: "Remote", type: "Full-time", description: "Build internal tools and client-facing dashboards with modern web technologies." },
];

const perks = [
  "Competitive equity packages", "Unlimited learning budget", "Remote-first culture",
  "Annual offsite retreats", "Premium health coverage", "Flexible schedules",
];

interface ApplicationForm {
  name: string; email: string; phone: string; coverLetter: string; resume: File | null;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_FILE_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<ApplicationForm>({ name: "", email: "", phone: "", coverLetter: "", resume: null });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (form.name.trim().length > 100) e.name = "Name must be under 100 characters";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (form.phone.trim() && !/^[\d\s\-+()]{7,20}$/.test(form.phone.trim())) e.phone = "Enter a valid phone number";
    if (!form.resume) {
      e.resume = "Resume is required";
    } else {
      if (!ALLOWED_FILE_TYPES.includes(form.resume.type)) e.resume = "Only PDF or Word files accepted";
      if (form.resume.size > MAX_FILE_SIZE) e.resume = "File must be under 5MB";
    }
    if (form.coverLetter.length > 2000) e.coverLetter = "Must be under 2000 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setSubmitted(false);
    setForm({ name: "", email: "", phone: "", coverLetter: "", resume: null });
    setErrors({});
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setForm({ ...form, resume: file });
    if (errors.resume) setErrors({ ...errors, resume: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="container-wide px-4 sm:px-6 md:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-sm text-primary font-medium tracking-wide uppercase">Careers</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-gradient max-w-3xl mb-4 sm:mb-6">
              Work on problems that matter.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
              Join a team where technical excellence is the baseline and impact is the goal.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-wide">
          <AnimatedSection>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-4 sm:mb-6">Open Positions</h2>
          </AnimatedSection>
          <div className="space-y-3">
            {openings.map((job, i) => (
              <AnimatedSection key={job.title} delay={i * 0.05}>
                <div
                  onClick={() => setSelectedJob(job.title)}
                  className="glass-card-hover rounded-xl p-4 sm:p-6 group cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                        <h3 className="text-base sm:text-lg font-display font-semibold text-foreground">{job.title}</h3>
                        <span className="text-xs px-2 sm:px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">{job.team}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{job.description}</p>
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><MapPin size={12} />{job.location}</span>
                        <span className="flex items-center gap-1"><Clock size={12} />{job.type}</span>
                      </div>
                    </div>
                    <ArrowRight size={18} className="hidden sm:block text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <AnimatedSection>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-6 sm:mb-8">Why ELPHA AI</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {perks.map((perk, i) => (
              <AnimatedSection key={perk} delay={i * 0.05}>
                <div className="glass-card rounded-xl p-4 sm:p-5 text-center">
                  <span className="text-sm text-foreground">{perk}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8 sm:p-12 md:p-16 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gradient mb-4">Don't see your role?</h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto mb-6 sm:mb-8">We're always interested in exceptional people. Send us a note.</p>
              <Link to="/contact" className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all">
                Get in Touch <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-background/80 backdrop-blur-sm"
            onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass-card rounded-2xl p-5 sm:p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto relative"
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 sm:py-8"
                  >
                    <CheckCircle size={40} className="text-primary mx-auto mb-4 sm:size-12" />
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-2">Application submitted!</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-6">
                      Thank you for applying for <span className="text-foreground font-medium">{selectedJob}</span>. We'll review your application and get back to you soon.
                    </p>
                    <button
                      onClick={closeModal}
                      className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-5"
                  >
                    <div>
                      <h3 className="text-lg sm:text-xl font-display font-bold text-foreground mb-1">Apply for {selectedJob}</h3>
                      <p className="text-sm text-muted-foreground">Fill in your details below.</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
                      <input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-secondary/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                        placeholder="Your full name"
                        maxLength={100}
                      />
                      {errors.name && <span className="text-xs text-destructive mt-1 block">{errors.name}</span>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-secondary/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                        placeholder="you@email.com"
                        maxLength={255}
                      />
                      {errors.email && <span className="text-xs text-destructive mt-1 block">{errors.email}</span>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Phone *</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-secondary/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                        placeholder="+1 (555) 000-0000"
                        maxLength={20}
                      />
                      {errors.phone && <span className="text-xs text-destructive mt-1 block">{errors.phone}</span>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Resume * <span className="text-muted-foreground font-normal">(PDF or Word, max 5MB)</span></label>
                      <label className="flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-secondary/50 border border-border cursor-pointer hover:border-primary/50 transition-all">
                        <Upload size={16} className="text-muted-foreground flex-shrink-0" />
                        <span className="text-sm text-muted-foreground truncate">
                          {form.resume ? form.resume.name : "Choose file..."}
                        </span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                      {errors.resume && <span className="text-xs text-destructive mt-1 block">{errors.resume}</span>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Cover Letter <span className="text-muted-foreground font-normal">(optional)</span></label>
                      <textarea
                        value={form.coverLetter}
                        onChange={(e) => setForm({ ...form, coverLetter: e.target.value })}
                        rows={3}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-secondary/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                        placeholder="Tell us why you're interested in this role..."
                        maxLength={2000}
                      />
                      {errors.coverLetter && <span className="text-xs text-destructive mt-1 block">{errors.coverLetter}</span>}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 sm:py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all"
                    >
                      Submit Application
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Careers;