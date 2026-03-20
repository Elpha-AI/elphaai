import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cases = [
  { industry: "Financial Services", title: "Autonomous risk detection platform", metric: "94% faster threat identification", description: "A Tier 1 investment bank needed real-time fraud detection across 12M+ daily transactions. We built an ML pipeline that processes, classifies, and flags anomalies with sub-second latency.", tags: ["Machine Learning", "Real-time Analytics", "Cloud"] },
  { industry: "Healthcare", title: "Patient data intelligence network", metric: "3.2M records unified", description: "A national healthcare provider required a compliant data mesh connecting 47 hospital systems. We designed a HIPAA-compliant architecture that unified patient records while maintaining strict access controls.", tags: ["Data Engineering", "Security", "Integration"] },
  { industry: "Manufacturing", title: "Predictive maintenance engine", metric: "62% downtime reduction", description: "A global manufacturer deployed our IoT analytics platform across 200+ facilities. Predictive models now forecast equipment failures 72 hours in advance.", tags: ["IoT", "AI", "Cloud Architecture"] },
  { industry: "Logistics", title: "Supply chain optimization system", metric: "$34M annual savings", description: "We rebuilt the routing and inventory management system for a logistics enterprise, reducing delivery times by 40% while cutting operational costs.", tags: ["Optimization", "Systems Integration", "Analytics"] },
  { industry: "Energy", title: "Grid intelligence platform", metric: "28% efficiency gain", description: "An energy provider needed smart grid management. We delivered an AI-powered platform that dynamically balances load and predicts demand patterns.", tags: ["AI", "Data Platforms", "Infrastructure"] },
  { industry: "Retail", title: "Personalization engine at scale", metric: "3.8x conversion lift", description: "We engineered a real-time recommendation system processing 50M+ user interactions daily, driving measurable revenue growth across digital channels.", tags: ["Machine Learning", "Real-time", "Cloud"] },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="container-wide px-4 sm:px-6 md:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-sm text-primary font-medium tracking-wide uppercase">Case Studies</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-gradient max-w-3xl mb-4 sm:mb-6">
              Outcomes that speak.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
              Real results from real engagements. Every project here represents a meaningful transformation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {cases.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.06}>
                <div className="glass-card-hover rounded-xl p-5 sm:p-8 h-full group cursor-pointer flex flex-col">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">{c.industry}</span>
                  <h3 className="text-lg sm:text-xl font-display font-semibold text-foreground mt-3 mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{c.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {c.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 sm:px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border/50">
                    <span className="text-xl sm:text-2xl font-display font-bold text-foreground">{c.metric}</span>
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gradient mb-4">Your challenge could be next.</h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto mb-6 sm:mb-8">Tell us what you're working on. We'll tell you how we can help.</p>
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

export default CaseStudies;