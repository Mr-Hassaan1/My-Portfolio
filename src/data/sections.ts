export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { label: "Years of Experience", value: "1+" },
  { label: "Projects Delivered", value: "7+" },
  { label: "Open Source", value: "5+" },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", level: "Expert", icon: "SiHtml5" },
      { name: "CSS", level: "Expert", icon: "SiCss3" },
      { name: "Sass", level: "Advanced", icon: "SiSass" },
      { name: "Tailwind CSS", level: "Advanced", icon: "SiTailwindcss" },
      { name: "Bootstrap", level: "Advanced", icon: "SiBootstrap" },
      { name: "React", level: "Expert", icon: "SiReact" },
      { name: "Next.js", level: "Advanced", icon: "SiNextdotjs" },
      { name: "Vite", level: "Advanced", icon: "SiVite" },
      {
        name: "Styled Components",
        level: "Advanced",
        icon: "SiStyledcomponents",
      },
      { name: "Context API", level: "Advanced", icon: "SiReact" },
      { name: "React Query", level: "Advanced", icon: "SiReactquery" },
      { name: "Redux", level: "Advanced", icon: "SiRedux" },
      { name: "Redux Toolkit", level: "Advanced", icon: "SiRedux" },
      { name: "React Hook Form", level: "Advanced", icon: "SiReacthookform" },
      { name: "React Router", level: "Advanced", icon: "SiReactrouter" },
      { name: "shadcn/ui", level: "Advanced", icon: "SiShadcnui" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: "Advanced", icon: "SiNodedotjs" },
      { name: "Express.js", level: "Advanced", icon: "SiExpress" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", level: "Advanced", icon: "SiMongodb" },
      { name: "MySQL", level: "Intermediate", icon: "SiMysql" },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "JavaScript", level: "Expert", icon: "SiJavascript" },
      { name: "TypeScript", level: "Advanced", icon: "SiTypescript" },
      { name: "Python", level: "Advanced", icon: "SiPython" },
      { name: "C++", level: "Intermediate", icon: "SiCplusplus" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: "Expert", icon: "SiGit" },
      { name: "GitHub", level: "Expert", icon: "SiGithub" },
      { name: "GitLab", level: "Advanced", icon: "SiGitlab" },
      { name: "VS Code", level: "Advanced", icon: "SiVisualstudiocode" },
      { name: "Postman", level: "Intermediate", icon: "SiPostman" },
      { name: "Vercel", level: "Advanced", icon: "SiVercel" },
      { name: "Babel", level: "Intermediate", icon: "SiBabel" },
      { name: "GitHub Pages", level: "Intermediate", icon: "SiGithubpages" },
      { name: "Gitpod", level: "Intermediate", icon: "SiGitpod" },
    ],
  },
];

export const projects = [
  {
    title: "Blogify",
    description:
      "A full-stack MERN blog platform featuring secure authentication, image uploads, likes, comments, user profiles, and an intuitive dashboard.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
    demoUrl: "https://blogifypk.vercel.app/",
    repoUrl: "https://github.com/Mr-Hassaan1/Blogify-Frontend",
    image: "/images/projects/blogify.png",
  },
  {
    title: "Music Academy",
    description:
      "A modern online learning platform built with Next.js, featuring responsive design and a clean user experience.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    demoUrl: "https://musicacademy-pk.vercel.app/",
    repoUrl: "https://github.com/Mr-Hassaan1/Music-Academy",
    image: "/images/projects/music-academy.png",
  },
  {
    title: "Blog App",
    description:
      "A responsive React blog application with a clean interface for browsing and reading blog posts.",
    tech: ["React", "React Router", "Tailwind CSS"],
    demoUrl: "https://blog-app-pk.vercel.app/",
    repoUrl: "https://github.com/Mr-Hassaan1/Blog-App",
    image: "/images/projects/blog-app.png",
  },
];
