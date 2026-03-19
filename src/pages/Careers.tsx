import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openings = [
  {
    title: "Senior ML Engineer",
    team: "AI Engineering",
    location: "San Francisco / Remote",
    type: "Full-time",
    description: "Design and deploy production ML systems for enterprise clients.",
  },
  {
    title: "Cloud Architect",
    team: "Infrastructure",
    location: "New York / Remote",
    type: "Full-time",
    description: "Architect multi-cloud environments for Fortune 500 organizations.",
  },
  {
    title: "Security Engineer",
    team: "Cybersecurity",
    location: "London / Remote",
    type: "Full-time",
    description: "Build zero-trust security frameworks for critical infrastructure.",
  },
  {
    title: "Data Platform Engineer",
    team: "Data Engineering",
    location: "Berlin / Remote",
    type: "Full-time",
    description: "Design scalable data architectures processing billions of events daily.",
  },
  {
    title: "Technical Program Manager",
    team: "Delivery",
    location: "San Francisco / Remote",
    type: "Full-time",
    description: "Lead complex multi-workstream engagements from strategy to delivery.",
  },
  {
    title: "Frontend Engineer",
    team: "Product",
    location: "Remote",
    type: "Full-time",
    description: "Build internal tools and client-facing dashboards with modern web technologies.",
  },
];

const perks = [
  "Competitive equity packages",
  "Unlimited learning budget",
  "Remote-first culture",
  "Annual offsite retreats",
  "Premium health coverage",
  "Flexible schedules",
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="container-wide px-6 md:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-sm text-primary font-medium tracking-wide uppercase">Careers</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient max-w-3xl mb-6">
              Work on problems that matter.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Join a team where technical excellence is the baseline and impact is the goal.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-wide">
          <AnimatedSection>
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">Open Positions</h2>
          </AnimatedSection>
          <div className="space-y-3">
            {openings.map((job, i) => (
              <AnimatedSection key={job.title} delay={i * 0.05}>
                <div className="glass-card-hover rounded-xl p-6 group cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-display font-semibold text-foreground">{job.title}</h3>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">{job.team}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{job.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><MapPin size={12} />{job.location}</span>
                        <span className="flex items-center gap-1"><Clock size={12} />{job.type}</span>
                      </div>
                    </div>
                    <ArrowRight size={18} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
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
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">Why ELPHA AI</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {perks.map((perk, i) => (
              <AnimatedSection key={perk} delay={i * 0.05}>
                <div className="glass-card rounded-xl p-5 text-center">
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
            <div className="glass-card rounded-2xl p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4">Don't see your role?</h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">We're always interested in exceptional people. Send us a note.</p>
              <Link to="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all">
                Get in Touch <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
