import { Link } from "react-router-dom";
import elphaLogo from "@/assets/elpha-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container-wide px-4 sm:px-6 md:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          <div className="sm:col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={elphaLogo} alt="ELPHA AI" className="w-7 h-7 object-contain" />
              <span className="font-display font-semibold text-foreground">ELPHA AI</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Intelligent systems for enterprises that refuse to stand still.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Company</h4>
            <div className="space-y-2.5">
              {["About", "Careers", "Contact"].map((item) => (
                <Link key={item} to={`/${item.toLowerCase()}`} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Services</h4>
            <div className="space-y-2.5">
              {["AI Engineering", "Cloud Architecture", "Data Systems", "Security"].map((item) => (
                <span key={item} className="block text-sm text-muted-foreground">{item}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Resources</h4>
            <div className="space-y-2.5">
              {["Case Studies", "Services"].map((item) => (
                <Link key={item} to={`/${item.toLowerCase().replace(" ", "-")}`} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2020 ELPHA AI. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-xs text-muted-foreground">Privacy</span>
            <span className="text-xs text-muted-foreground">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;