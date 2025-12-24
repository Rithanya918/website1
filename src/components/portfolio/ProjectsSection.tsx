import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time analytics platform with predictive insights and automated reporting using machine learning algorithms.",
    tech: ["Python", "React", "TensorFlow", "AWS"],
    category: "AI",
    github: "https://github.com",
    live: "https://demo.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Customer Churn Prediction System",
    description: "ML model achieving 94% accuracy in predicting customer churn, saving $2M annually in retention costs.",
    tech: ["Python", "Scikit-learn", "PostgreSQL", "Docker"],
    category: "AI",
    github: "https://github.com",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Natural Language Query Engine",
    description: "Conversational interface allowing users to query databases using natural language, powered by GPT-4.",
    tech: ["Python", "OpenAI", "FastAPI", "React"],
    category: "AI",
    github: "https://github.com",
    live: "https://demo.com",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Automated ETL Pipeline",
    description: "Scalable data pipeline processing 10TB+ daily, with automated quality checks and error handling.",
    tech: ["Apache Spark", "Airflow", "AWS Glue", "Python"],
    category: "Analytics",
    github: "https://github.com",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Real-time Fraud Detection",
    description: "Streaming analytics system detecting fraudulent transactions with sub-second latency.",
    tech: ["Kafka", "Spark Streaming", "Python", "Redis"],
    category: "Analytics",
    github: "https://github.com",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Business Intelligence Suite",
    description: "Comprehensive BI platform with interactive dashboards, KPI tracking, and executive reporting.",
    tech: ["Tableau", "Python", "dbt", "Snowflake"],
    category: "Analytics",
    github: "https://github.com",
    live: "https://demo.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: 7,
    title: "Workflow Automation Platform",
    description: "No-code automation tool reducing manual tasks by 70% across departments.",
    tech: ["Node.js", "React", "MongoDB", "n8n"],
    category: "Automation",
    github: "https://github.com",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
  },
  {
    id: 8,
    title: "Document Processing AI",
    description: "Intelligent document extraction system using OCR and NLP for automated data entry.",
    tech: ["Python", "Tesseract", "spaCy", "Azure"],
    category: "Automation",
    github: "https://github.com",
    live: "https://demo.com",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=600&h=400&fit=crop",
  },
];

const categories = ["All", "AI", "Analytics", "Automation"];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="glass rounded-xl overflow-hidden glass-hover">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
          
          {/* Overlay on hover */}
          <motion.div
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4"
          >
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-primary/20 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Github size={20} />
            </motion.a>
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-primary/20 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <ExternalLink size={20} />
              </motion.a>
            )}
          </motion.div>

          {/* Category Badge */}
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-medium">
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded bg-secondary/50 text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in AI, analytics, and automation.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <Filter className="w-5 h-5 text-muted-foreground self-center mr-2" />
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "hero" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="glass" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" size={20} />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
