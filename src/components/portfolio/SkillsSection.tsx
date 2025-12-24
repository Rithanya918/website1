import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Brain, 
  Database, 
  Cloud, 
  Code, 
  BarChart3, 
  Cpu,
  Layers,
  Workflow
} from "lucide-react";

const skillCategories = [
  {
    title: "Artificial Intelligence",
    icon: Brain,
    skills: [
      { name: "Machine Learning", level: 90 },
      { name: "Deep Learning", level: 85 },
      { name: "Natural Language Processing", level: 80 },
      { name: "Computer Vision", level: 75 },
    ],
  },
  {
    title: "Analytics & BI",
    icon: BarChart3,
    skills: [
      { name: "Data Visualization", level: 95 },
      { name: "Statistical Analysis", level: 90 },
      { name: "Predictive Modeling", level: 85 },
      { name: "A/B Testing", level: 88 },
    ],
  },
  {
    title: "Programming",
    icon: Code,
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 92 },
      { name: "JavaScript/TypeScript", level: 80 },
      { name: "R", level: 75 },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 85 },
      { name: "Azure", level: 80 },
      { name: "GCP", level: 75 },
      { name: "Docker/Kubernetes", level: 78 },
    ],
  },
];

const tools = [
  { name: "TensorFlow", category: "AI" },
  { name: "PyTorch", category: "AI" },
  { name: "Scikit-learn", category: "AI" },
  { name: "Tableau", category: "Analytics" },
  { name: "Power BI", category: "Analytics" },
  { name: "Apache Spark", category: "Data" },
  { name: "PostgreSQL", category: "Data" },
  { name: "MongoDB", category: "Data" },
  { name: "React", category: "Dev" },
  { name: "FastAPI", category: "Dev" },
  { name: "Git", category: "Dev" },
  { name: "Airflow", category: "Ops" },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-foreground">{name}</span>
        <span className="text-sm text-primary">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24 bg-card/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI, analytics, and modern technology stack.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeCategory === index
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <category.icon size={20} />
              <span className="font-medium">{category.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Skill Bars */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              {(() => {
                const Icon = skillCategories[activeCategory].icon;
                return <Icon className="w-6 h-6 text-primary" />;
              })()}
              {skillCategories[activeCategory].title}
            </h3>
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={index * 0.1}
              />
            ))}
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <Layers className="w-6 h-6 text-primary" />
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 rounded-lg bg-secondary/50 text-sm font-medium text-foreground border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
                >
                  {tool.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="glass rounded-xl p-6 text-center glass-hover">
            <Database className="w-10 h-10 text-primary mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Data Engineering</h4>
            <p className="text-muted-foreground text-sm">Building robust data pipelines and ETL processes</p>
          </div>
          <div className="glass rounded-xl p-6 text-center glass-hover">
            <Cpu className="w-10 h-10 text-primary mx-auto mb-4" />
            <h4 className="font-semibold mb-2">MLOps</h4>
            <p className="text-muted-foreground text-sm">Deploying and monitoring ML models in production</p>
          </div>
          <div className="glass rounded-xl p-6 text-center glass-hover">
            <Workflow className="w-10 h-10 text-primary mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Process Automation</h4>
            <p className="text-muted-foreground text-sm">Streamlining workflows with intelligent automation</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
