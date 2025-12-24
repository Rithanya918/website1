import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import ThoughtLeadershipSection from "@/components/portfolio/ThoughtLeadershipSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Ambient red light effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top left glow */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-pulse-glow" />
        {/* Top right glow */}
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-accent/25 rounded-full blur-[120px] animate-float" />
        {/* Center left glow */}
        <div className="absolute top-[30%] -left-32 w-[400px] h-[400px] bg-deep-red/20 rounded-full blur-[100px]" />
        {/* Center right glow */}
        <div className="absolute top-[50%] -right-20 w-[450px] h-[450px] bg-primary/15 rounded-full blur-[130px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        {/* Middle glow */}
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-maroon/15 rounded-full blur-[150px]" />
        {/* Bottom left glow */}
        <div className="absolute bottom-[20%] -left-20 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[140px] animate-float" style={{ animationDelay: '3s' }} />
        {/* Bottom right glow */}
        <div className="absolute -bottom-40 right-10 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[160px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        {/* Extra scattered lights */}
        <div className="absolute top-[15%] left-1/4 w-[200px] h-[200px] bg-crimson/15 rounded-full blur-[80px]" />
        <div className="absolute top-[75%] right-1/4 w-[250px] h-[250px] bg-deep-red/15 rounded-full blur-[90px]" />
        <div className="absolute top-[40%] left-[60%] w-[180px] h-[180px] bg-maroon/20 rounded-full blur-[70px]" />
      </div>
      
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ThoughtLeadershipSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
