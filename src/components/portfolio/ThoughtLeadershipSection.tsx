import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, ExternalLink, BookOpen, Lightbulb } from "lucide-react";

const quotes = [
  {
    text: "Data is not just numbers—it's the language of business. Understanding that language is what separates good decisions from great ones.",
    context: "On Data-Driven Decision Making",
  },
  {
    text: "AI doesn't replace human intelligence; it amplifies it. The future belongs to those who learn to collaborate with machines.",
    context: "On Human-AI Collaboration",
  },
  {
    text: "Systems thinking is the meta-skill of our era. Every problem is interconnected, and solutions must be too.",
    context: "On Systems Thinking",
  },
];

const articles = [
  {
    title: "The Future of AI in Business Strategy",
    excerpt: "Exploring how artificial intelligence is reshaping strategic decision-making in modern enterprises.",
    platform: "Medium",
    link: "https://medium.com",
    readTime: "8 min read",
  },
  {
    title: "Building Scalable Data Pipelines",
    excerpt: "A practical guide to designing and implementing data pipelines that grow with your business.",
    platform: "LinkedIn",
    link: "https://linkedin.com",
    readTime: "6 min read",
  },
  {
    title: "Ethics in Machine Learning",
    excerpt: "Navigating the complex landscape of ethical considerations in AI development and deployment.",
    platform: "Medium",
    link: "https://medium.com",
    readTime: "10 min read",
  },
];

const ThoughtLeadershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Thoughts & <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sharing perspectives on technology, innovation, and the future of AI.
          </p>
        </motion.div>

        {/* Quotes Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-8 relative group glass-hover"
              >
                <Quote className="w-10 h-10 text-primary/30 absolute top-6 right-6" />
                <div className="relative z-10">
                  <p className="text-foreground text-lg mb-4 italic leading-relaxed">
                    "{quote.text}"
                  </p>
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-primary" />
                    <span className="text-primary text-sm font-medium">{quote.context}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Articles */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-display font-semibold">Recent Articles</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <motion.a
                key={article.title}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-6 group glass-hover block"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {article.platform}
                  </span>
                  <span className="text-muted-foreground text-xs">{article.readTime}</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4">{article.excerpt}</p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  Read More
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThoughtLeadershipSection;
