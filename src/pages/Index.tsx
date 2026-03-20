import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Cloud, Shield, Database, Cpu, BarChart3, ChevronRight, Zap, Target, Layers } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingOrb from "@/components/FloatingOrb";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const capabilities = [
  { icon: Brain, title: "AI Engineering", description: "Custom machine learning systems that transform raw data into strategic advantage." },
  { icon: Cloud, title: "Cloud Architecture", description: "Scalable infrastructure designed for resilience, speed, and global reach." },
  { icon: Shield, title: "Cybersecurity", description: "Zero-trust frameworks that protect your most critical digital assets." },
  { icon: Database, title: "Data Platforms", description: "End-to-end data ecosystems built for real-time intelligence and scale." },
  { icon: Cpu, title: "Systems Integration", description: "Unified architectures connecting legacy systems with modern infrastructure." },
  { icon: BarChart3, title: "Digital Strategy", description: "Technology roadmaps that align engineering capability with business outcomes." },
];

const processSteps = [
  { number: "01", title: "Discovery", description: "Deep analysis of systems, constraints, and opportunity spaces." },
  { number: "02", title: "Architecture", description: "Designing systems with precision, scalability, and future-readiness." },
  { number: "03", title: "Engineering", description: "Building with rigor, leveraging the best tools for each challenge." },
  { number: "04", title: "Evolution", description: "Continuous optimization driven by real-world performance data." },
];

const caseHighlights = [
  { industry: "Financial Services", title: "Autonomous risk detection platform", metric: "94% faster threat identification", description: "Built an ML-powered system that processes millions of transactions in real-time." },
  { industry: "Healthcare", title: "Patient data intelligence network", metric: "3.2M records unified", description: "Designed a compliant data mesh connecting 47 hospital systems." },
  { industry: "Manufacturing", title: "Predictive maintenance engine", metric: "62% downtime reduction", description: "IoT-driven analytics platform preventing equipment failures before they occur." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <FloatingOrb size={500} top="-10%" right="-5%" className="hidden sm:block" />
        <FloatingOrb size={250} top="60%" left="-10%" delay={3} className="hidden sm:block" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="container-wide px-4 sm:px-6 md:px-8 pt-24 sm:pt-32 pb-16 sm:pb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs sm:text-sm text-primary font-medium tracking-wide uppercase">AI-Powered Consulting</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight mb-4 sm:mb-6">
              <span className="text-gradient">Engineering</span>
              <br />
              <span className="text-gradient">the future</span>
              <br />
              <span className="text-gradient-accent">of enterprise.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-8 sm:mb-10">
              We architect intelligent systems that transform how organizations operate, compete, and scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all duration-300 animate-pulse-glow"
              >
                Start a Conversation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            {[
              { value: "150+", label: "Enterprise Clients" },
              { value: "98%", label: "Retention Rate" },
              { value: "12", label: "Global Offices" },
              { value: "500+", label: "Engineers" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section-padding relative">
        <div className="container-wide">
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-sm text-primary font-medium tracking-wide uppercase">Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-gradient mb-4">What we build.</h2>
            <p className="text-muted-foreground max-w-lg mb-8 sm:mb-12">
              Deep technical expertise across the full spectrum of modern enterprise technology.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {capabilities.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={i * 0.08}>
                <div className="glass-card-hover rounded-xl p-5 sm:p-6 h-full group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <cap.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-semibold text-foreground mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding relative overflow-hidden">
        <FloatingOrb size={400} top="20%" right="-15%" delay={2} className="hidden md:block" />
        <div className="container-wide relative z-10">
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-sm text-primary font-medium tracking-wide uppercase">Process</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-gradient mb-8 sm:mb-12">How we operate.</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.1}>
                <div className="relative">
                  <span className="text-5xl sm:text-6xl font-display font-bold text-muted/50">{step.number}</span>
                  <h3 className="text-lg sm:text-xl font-display font-semibold text-foreground mt-2 mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-3">
                      <ChevronRight size={16} className="text-muted-foreground/30" />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Highlights */}
      <section className="section-padding">
        <div className="container-wide">
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-sm text-primary font-medium tracking-wide uppercase">Selected Work</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-gradient">Impact at scale.</h2>
              <Link to="/case-studies" className="text-sm text-primary flex items-center gap-1 mt-4 md:mt-0 hover:gap-2 transition-all">
                View all case studies <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {caseHighlights.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="glass-card-hover rounded-xl p-5 sm:p-6 h-full group cursor-pointer">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">{item.industry}</span>
                  <h3 className="text-base sm:text-lg font-display font-semibold text-foreground mt-3 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <div className="pt-4 border-t border-border/50">
                    <span className="text-xl sm:text-2xl font-display font-bold text-foreground">{item.metric}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding relative">
        <div className="container-wide">
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-sm text-primary font-medium tracking-wide uppercase">Industries</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-gradient mb-8 sm:mb-12">Sector expertise.</h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: Zap, label: "Financial Services" },
              { icon: Target, label: "Healthcare" },
              { icon: Layers, label: "Manufacturing" },
              { icon: Cpu, label: "Technology" },
            ].map((ind, i) => (
              <AnimatedSection key={ind.label} delay={i * 0.08}>
                <div className="glass-card-hover rounded-xl p-4 sm:p-6 text-center group cursor-pointer">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <ind.icon size={20} className="text-primary" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-foreground">{ind.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <FloatingOrb size={500} top="-20%" left="30%" delay={1} className="hidden sm:block" />
        <div className="container-tight relative z-10">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-gradient mb-4">
                  Ready to build what's next?
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto mb-6 sm:mb-8">
                  Let's discuss how intelligent systems can accelerate your organization's trajectory.
                </p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all duration-300 animate-pulse-glow"
                >
                  Request Consideration
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;