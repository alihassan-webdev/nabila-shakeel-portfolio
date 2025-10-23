import { Download, Zap, Cloud, Boxes, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const snapshotItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className="container py-12 md:py-20 px-4 md:px-12 lg:px-20">
        <motion.div
          className="grid gap-12 md:grid-cols-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="md:col-span-7">
            <motion.p
              className="text-lg md:text-2xl uppercase tracking-widest text-primary/70 font-semibold leading-none"
              variants={itemVariants}
            >
              HELLO, I'M
            </motion.p>

            <div className="mt-0 -mb-1">
              <motion.h1
                style={{ fontFamily: "Caveat" }}
                className="text-[3.5rem] md:text-[5rem] lg:text-[90px] leading-tight font-extrabold"
                variants={itemVariants}
              >
                Nabila Shakeel
              </motion.h1>
            </div>

            <motion.p
              className="mt-6 max-w-2xl text-foreground/70 leading-relaxed text-lg"
              variants={itemVariants}
            >
              Dedicated Senior QA Engineer passionate about delivering flawless
              digital experiences through precise manual and automation testing
              across web, mobile, and API platforms.
            </motion.p>

            <motion.div className="mt-8" variants={itemVariants}>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg group"
              >
                Download Resume
                <Download className="w-4 h-4 text-primary-foreground transform transition-transform duration-200 group-hover:scale-110" />
              </a>
            </motion.div>
          </div>

          <motion.div className="md:col-span-5" variants={itemVariants}>
            <div className="relative mx-auto max-w-md rounded-[var(--radius)] border bg-gradient-to-br from-card via-card to-accent/5 p-8 card-shadow">
              {/* Years experience badge - automatically calculated from career start year */}
              {(() => {
                const CAREER_START_YEAR = 2018;
                const currentYear = new Date().getFullYear();
                const yearsOfExperience = Math.max(
                  0,
                  currentYear - CAREER_START_YEAR,
                );
                return (
                  <div
                    className="absolute top-4 right-4 flex items-center gap-3 bg-background/90 border border-border px-4 py-2 rounded-[var(--radius)] shadow-sm"
                    aria-hidden="true"
                  >
                    <div className="text-3xl md:text-4xl font-extrabold text-primary leading-none">
                      {yearsOfExperience}
                    </div>
                    <div className="text-xs text-foreground/70 uppercase tracking-wider leading-tight">
                      <div>Years</div>
                      <div>Experience</div>
                    </div>
                  </div>
                );
              })()}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                  Quick Overview
                </span>
              </div>
              <h3 className="font-display font-semibold text-2xl mb-7">
                Snapshot
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    icon: Zap,
                    title: "Manual & Automation Testing",
                    tools: "Selenium, Cypress, Playwright",
                    delay: 0.3,
                  },
                  {
                    icon: Workflow,
                    title: "API Testing",
                    tools: "Postman, REST Assured, GraphQL",
                    delay: 0.4,
                  },
                  {
                    icon: Cloud,
                    title: "CI/CD Pipeline",
                    tools: "Jenkins, GitHub Actions, GitLab CI",
                    delay: 0.5,
                  },
                  {
                    icon: Boxes,
                    title: "Containerization",
                    tools: "Docker, Kubernetes",
                    delay: 0.6,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.li
                      key={item.title}
                      className="flex items-start gap-4 group"
                      variants={snapshotItemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: item.delay }}
                    >
                      <div className="p-2.5 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground leading-relaxed">
                          {item.title}
                        </p>
                        <p className="text-xs text-foreground/60 mt-1">
                          {item.tools}
                        </p>
                      </div>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
