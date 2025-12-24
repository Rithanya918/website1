import { motion } from "framer-motion";
import { Award, ExternalLink, Sparkles } from "lucide-react";
import profilePicture from "@/assets/profile-picture.png";

const certifications = [
  {
    name: "Oracle APEX Cloud Developer Professional",
    link: "#"
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Data Science Professional",
    link: "#"
  },
  {
    name: "Lean Six Sigma Black Belt – Level III",
    link: "#"
  },
  {
    name: "Microsoft Business Analyst Professional",
    link: "#"
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          {/* Profile Picture */}
          <div className="relative mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Gradient ring */}
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-full p-1 bg-gradient-to-br from-primary via-accent to-primary">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <img
                    src={profilePicture}
                    alt="Rithanya Sekar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Sparkle decoration */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </motion.div>
              {/* Name badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute top-4 -right-16 md:-right-24 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border/50 text-sm text-muted-foreground"
              >
                Rithanya Sekar
              </motion.div>
            </motion.div>
          </div>

          {/* Name and Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4"
          >
            Rithanya Sekar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-medium text-foreground mb-2"
          >
            Turning Data into Decisions
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-12"
          >
            Blending AI, Insight, and Imagination
          </motion.p>

          {/* Certifications Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-full max-w-3xl"
          >
            <div className="relative p-1 rounded-2xl bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50">
              <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center justify-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Certifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <motion.a
                      key={index}
                      href={cert.link}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="group flex items-center gap-3 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 border border-border/30 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <span className="flex-1 text-sm text-foreground/90 text-left">
                        {cert.name}
                      </span>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
