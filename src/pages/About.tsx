import { Link } from "react-router-dom";
import { ArrowRight, Users, Globe, Award, Lightbulb } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingOrb from "@/components/FloatingOrb";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  { icon: Lightbulb, title: "First Principles", description: "We question assumptions and engineer from the ground up." },
  { icon: Users, title: "Client Gravity", description: "Our clients' outcomes are the only metric that matters." },
  { icon: Globe, title: "Global Precision", description: "Distributed teams with unified standards and relentless quality." },
  { icon: Award, title: "Technical Integrity", description: "We recommend what works, not what sells." },
];

const leadership = [
  { name: "Anika Patel", role: "Chief Executive Officer", bio: "20 years scaling enterprise technology organizations." },
  { name: "Marcus Chen", role: "Chief Technology Officer", bio: "Former principal architect at three Fortune 100 companies." },
  { name: "Elena Vasquez", role: "Chief Operating Officer", bio: "Expert in operational systems for global consulting firms." },
  { name: "David Okafor", role: "VP of Engineering", bio: "Led engineering teams delivering AI platforms at scale." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <FloatingOrb size={400} top="-5%" right="-10%" />
        <div className="container-wide px-6 md:px-8 relative z-10">
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-sm text-primary font-medium tracking-wide uppercase">About</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient max-w-3xl mb-6">
              Built by engineers, for enterprise.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              ELPHA AI was founded on the belief that the best consulting happens when deep technical expertise meets genuine care for client outcomes. We don't just advise—we engineer.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-10">Our values.</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="glass-card-hover rounded-xl p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <v.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-10">Leadership.</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {leadership.map((person, i) => (
              <AnimatedSection key={person.name} delay={i * 0.08}>
                <div className="glass-card rounded-xl p-6 h-full">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <span className="font-display font-bold text-foreground">{person.name.split(" ").map(n => n[0]).join("")}</span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{person.name}</h3>
                  <p className="text-xs text-primary mb-2">{person.role}</p>
                  <p className="text-sm text-muted-foreground">{person.bio}</p>
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
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4">Join our trajectory.</h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">We're always looking for exceptional engineers and strategists.</p>
              <Link to="/careers" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all">
                View Open Roles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
