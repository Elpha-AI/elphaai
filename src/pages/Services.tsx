import { Link } from "react-router-dom";
import { ArrowRight, Brain, Cloud, Shield, Database, Code2, Network } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingOrb from "@/components/FloatingOrb";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Brain, title: "AI & Machine Learning",
    description: "From predictive analytics to generative AI, we design and deploy models that drive measurable outcomes.",
    features: ["Custom ML pipelines", "NLP & computer vision", "MLOps & monitoring", "AI strategy consulting"],
  },
  {
    icon: Cloud, title: "Cloud Architecture",
    description: "Multi-cloud and hybrid strategies engineered for performance, compliance, and cost efficiency.",
    features: ["Cloud migration", "Kubernetes orchestration", "Infrastructure as Code", "Cost optimization"],
  },
  {
    icon: Shield, title: "Cybersecurity",
    description: "Proactive defense architectures that protect critical systems and ensure regulatory compliance.",
    features: ["Zero-trust implementation", "Threat detection systems", "Compliance frameworks", "Incident response"],
  },
  {
    icon: Database, title: "Data Engineering",
    description: "Scalable data platforms that turn raw information into strategic intelligence.",
    features: ["Data lakehouse design", "Real-time streaming", "ETL/ELT pipelines", "Data governance"],
  },
  {
    icon: Code2, title: "Software Engineering",
    description: "High-performance applications built with modern architectures and engineering discipline.",
    features: ["Microservices", "Event-driven systems", "API platforms", "Legacy modernization"],
  },
  {
    icon: Network, title: "Systems Integration",
    description: "Connecting disparate systems into unified, efficient technology ecosystems.",
    features: ["Enterprise integration", "API gateways", "Middleware design", "Data synchronization"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <FloatingOrb size={400} top="-5%" right="-10%" className="hidden sm:block" />
        <div className="container-wide px-4 sm:px-6 md:px-8 relative z-10">
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-sm text-primary font-medium tracking-wide uppercase">Services</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-gradient max-w-3xl mb-4 sm:mb-6">
              Deep expertise, delivered precisely.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Every engagement is engineered around your specific technical landscape, constraints, and ambitions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-4 sm:space-y-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.06}>
                <div className="glass-card-hover rounded-xl p-5 sm:p-8 group">
                  <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                          <service.icon size={20} className="text-primary" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-display font-semibold text-foreground">{service.title}</h3>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                    <div className="lg:w-64 flex-shrink-0">
                      <ul className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gradient mb-4">Need something specific?</h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto mb-6 sm:mb-8">We architect custom solutions for challenges that don't fit a standard playbook.</p>
              <Link to="/contact" className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all">
                Start a Conversation <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;