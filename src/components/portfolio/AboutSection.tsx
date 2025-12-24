import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Target, Rocket, Brain } from "lucide-react";

const values = [
  {
    icon: Brain,
    title: "Systems Thinking",
    description: "Understanding complex systems and their interconnections to solve problems holistically.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly exploring new technologies and methodologies to push boundaries.",
  },
  {
    icon: Target,
    title: "Impact-Driven",
    description: "Focused on delivering measurable business outcomes and real-world solutions.",
  },
  {
    icon: Rocket,
    title: "Growth Mindset",
    description: "Embracing challenges as opportunities to learn and evolve continuously.",
  },
];

const timelineEvents = [
  { year: "2018", title: "Started Journey", description: "Began career in data analytics" },
  { year: "2020", title: "AI Specialization", description: "Deep dive into machine learning" },
  { year: "2022", title: "Tech Strategy", description: "Leading digital transformation" },
  { year: "2024", title: "Innovation Lead", description: "Driving AI-first solutions" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A technology professional passionate about leveraging AI and analytics to solve complex business challenges.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">
              My Journey
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 6 years of experience in the technology sector, I've developed a unique perspective that bridges the gap between technical implementation and business strategy.
              </p>
              <p>
                My journey began in data analytics, where I discovered the power of transforming raw data into meaningful insights. This foundation led me to explore artificial intelligence and machine learning, enabling me to build intelligent systems that automate decision-making and drive efficiency.
              </p>
              <p>
                Today, I work at the intersection of AI, analytics, and business strategy, helping organizations harness the power of their data to make smarter decisions and achieve sustainable growth.
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
            
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div className="glass rounded-lg p-4 glass-hover">
                    <span className="text-primary font-semibold">{event.year}</span>
                    <h4 className="text-foreground font-medium mt-1">{event.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="glass rounded-xl p-6 glass-hover group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
