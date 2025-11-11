import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rajneesh",
  initials: "RV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full-Stack & UI Developer skilled in React, Node.js, and MongoDB. Building responsive web apps with clean design and great UX.",
  summary:
    "Full-Stack developer and DevOps engineer. I build production-ready web apps and scalable infrastructure — from pixel-perfect UIs to CI/CD, containers, and cloud deployments.",
  avatarUrl: "/me.png",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Prisma",
    "Docker",
    "Kubernetes",
    "Git",
    "Redis",
    "Tailwind CSS",
    "Python",
    "Go",
    "Rust",
    "Ethereum",
    "Web3",
    "C++",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "myeasylearn",
      href: "https://myeasylearn.com",
      badges: [],
      location: "Remote",
      title: "Founding Engineer",
      logoUrl: "/myeasylearn.png",
      start: "September 2025",
      end: null,
      description:
        "Building scalable ed-tech platform for Africa. Architecting full-stack solutions with modern technologies, implementing DevOps best practices, and establishing CI/CD pipelines for rapid deployment.",
    },
    {
      company: "Craftix Studio",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Software Developer",
      logoUrl: "/craftix.png",
      start: "March 2025",
      end: "August 2025",
      description:
        "Developed custom web applications and client solutions. Built responsive frontends with React and Next.js, implemented backend services with Node.js, and deployed applications using Docker and modern DevOps workflows.",
    },
    {
      company: "Upwork",
      badges: [],
      href: "https://upwork.com",
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/upwork.svg",
      start: "September 2024",
      end: "March 2025",
      description:
        "Delivered full-stack solutions for diverse clients. Built responsive web applications using React, Node.js, and MongoDB. Implemented RESTful APIs, integrated third-party services, and optimized application performance for production environments.",
    },
    {
      company: "Fiverr",
      href: "https://fiverr.com",
      badges: [],
      location: "Remote",
      title: "Backend Developer",
      logoUrl: "/fiverr.svg",
      start: "February 2024",
      end: "August 2024",
      description:
        "Specialized in backend development and API design. Built scalable server-side applications with Node.js and Express, designed database schemas for MongoDB and PostgreSQL, and implemented secure authentication and authorization systems.",
    },
  ],
  education: [
    {
      school: "Sri Ramswaroop Memorial University",
      href: "https://srmu.ac.in",
      degree: "B.Tech in Computer Science and Engineering",
      logoUrl: "/srmu.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Namaste React",
      href: "https://namastedev.com",
      degree: "Complete Node & React - Akshay Saini",
      logoUrl: "/namaste-react.png",
      start: "2024",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "AI Hackathon - Chandigarh University",
      dates: "October 2025",
      location: "Chandigarh, India",
      description:
        "Qualified in the AI Hackathon organized by Chandigarh University. Developed AI-powered solutions and competed with teams from across the region.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/cu-ai.png",
      links: [],
    },
    {
      title: "Smart India Hackathon",
      dates: "August 2025",
      location: "India",
      description:
        "Participated in Smart India Hackathon 2025, India's largest hackathon initiative. Collaborated with team members to develop innovative solutions addressing real-world problems.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/sih.png",
      links: [],
    },
    {
      title: "Smart India Hackathon",
      dates: "August 2024",
      location: "India",
      description:
        "Participated in Smart India Hackathon 2024, working on innovative tech solutions for national-level challenges. Gained experience in rapid prototyping and team collaboration.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/sih.png",
      links: [],
    },
  ],
} as const;
