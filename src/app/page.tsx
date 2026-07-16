"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import {
  FaCss3,
  FaGithub,
  FaLaptopCode,
} from "react-icons/fa";
import { SectionHeading } from "@/components/SectionHeading";
import { FloatingShape } from "@/components/FloatingShape";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import { AnimatedTyping } from "@/components/AnimatedTyping";
import { Navbar } from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { HeroPulse } from "@/components/HeroPulse";
import { projects, skills, stats } from "@/data/sections";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiSass,
  SiVite,
  SiStyledcomponents,
  SiReactquery,
  SiRedux,
  SiReacthookform,
  SiReactrouter,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPython,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiGitlab,
  SiPostman,
  SiVercel,
  SiBabel,
  SiGithubpages,
  SiGitpod,
} from "react-icons/si";

const iconMap = {
  SiHtml5,
  SiCss3: FaCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiSass,
  SiVite,
  SiStyledcomponents,
  SiReactquery,
  SiRedux,
  SiReacthookform,
  SiReactrouter,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPython,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiGitlab,
  SiVisualstudiocode: FaLaptopCode,
  SiPostman,
  SiVercel,
  SiBabel,
  SiGithubpages,
  SiGitpod,
};

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <main className="relative overflow-hidden px-6 pb-28 pt-8 sm:px-10 lg:px-16">
        <Navbar />

        <section
          id="home"
          className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-slate-950/70 px-6 py-16 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:px-10 lg:px-16"
        >
          <FloatingShape size={220} style={{ top: -40, left: -40 }} delay={0} />
          <FloatingShape size={180} style={{ top: 80, right: -60 }} delay={2} />
          <FloatingShape
            size={140}
            style={{ bottom: 20, left: 32 }}
            delay={1}
          />
          <HeroPulse />

          <div className="flex justify-center text-center">
            <div className="max-w-3xl space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full bg-sky-400/10 px-4 py-2 text-sm text-sky-200 ring-1 ring-sky-400/20 backdrop-blur-xl">
                <span className="h-2.5 w-2.5 rounded-full bg-sky-300 shadow-glow" />
                Software Developer
              </div>
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <p className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  I'm{" "}
                  <span className="text-sky-300">Muhammad Hassaan Tahir</span>,
                  a Full-Stack Web Developer passionate about building fast,
                  scalable, and visually engaging digital experiences.
                </p>
                <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                  I transform ideas into modern web applications with clean
                  code, intuitive design, and exceptional performance.
                </p>
                <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                  I design and build fast, accessible, and scalable web
                  applications that combine clean architecture, thoughtful user
                  experiences, and modern technologies to solve real-world
                  problems.
                </p>
              </motion.div>

              <AnimatedTyping />
            </div>
          </div>
        </section>

        <motion.section
          id="about"
          className="mt-16 max-w-7xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            align="center"
            eyebrow="About"
            title="A future-focused engineer with a product mindset"
            description="I combine clean interfaces, motion, and performance engineering to create digital products that feel fast, modern, and memorable."
          />
          <div className="grid gap-10 lg:grid-cols-[0.9fr_0.55fr]">
            <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
              <p className="text-base leading-8 text-slate-300">
                I am a senior software engineer who loves transforming ambitious
                ideas into elegant web experiences. My work spans product design
                systems, developer tools, and polished interfaces with
                animation, accessibility, and performance at the core.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center"
                  >
                    <p className="text-3xl font-semibold text-white">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Education</h3>
                <p className="text-slate-300">
                  Bachelor of Computer Science focused on software architecture
                  and modern web systems.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Experience</h3>
                <p className="text-slate-300">
                  Delivered end-to-end product launches, UI systems, and
                  platform tooling for engineering teams across startups and
                  high-growth design studios.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Passion</h3>
                <p className="text-slate-300">
                  I care deeply about accessibility, motion that serves clarity,
                  and building websites that feel premium without compromising
                  speed.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="mt-20 max-w-7xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            align="center"
            eyebrow="Skills"
            title="Modern stack, polished workflow"
            description="A collection of frontend, backend, database, and tooling skills used to build fast and delightful digital products."
          />
          <div className="space-y-6">
            {skills.map((category) => (
              <div
                key={category.category}
                className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:p-6"
              >
                <h3 className="mb-5 text-center text-xl font-semibold text-white">
                  {category.category}
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {category.items.map((item) => {
                    const Icon = iconMap[
                      item.icon as keyof typeof iconMap
                    ] as unknown as React.ComponentType<{ className?: string }>;
                    return (
                      <SkillCard
                        key={item.name}
                        name={item.name}
                        level={item.level}
                        Icon={Icon}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="mt-20 max-w-7xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            align="center"
            eyebrow="Projects"
            title="Open-source and product work with polish"
            description="Selected project work featuring motion-led interfaces, modern architecture, and UI crafted for premium digital experiences."
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="mx-auto mt-20 max-w-2xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            align="center"
            eyebrow="Get in touch"
            title="Let’s build the next premium experience together"
            description="Reach out for full-stack, design-driven web development, open-source collaboration, or contract leadership."
          />
          <div>
            <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 text-center shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.35em] text-sky-300/70">
                  Get in touch
                </p>
                <h3 className="text-2xl font-semibold text-white">
                  Contact details
                </h3>
              </div>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-center justify-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-4">
                  <Mail className="h-5 w-5 text-sky-300" />
                  <span>md.hassaan.tahir@email.com</span>
                </div>

                <div className="flex items-center justify-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-4">
                  <FaGithub className="h-5 w-5 text-sky-300" />
                  <a
                    href="https://github.com/Mr-Hassaan1"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-200 hover:text-white"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
