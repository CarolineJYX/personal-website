import { experiences } from "@/data/experience";
import { awards, educationItems, researchItems } from "@/data/education";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import type { LocalizedString, LocalizedValue } from "@/lib/i18n";

export type WorldPanel = {
  id: string;
  title: LocalizedValue;
  subtitle: LocalizedValue;
  href?: string;
  external?: boolean;
  image?: string;
};

export type InteractiveZone = {
  id: "entry" | "experience" | "projects" | "education" | "contact";
  index: string;
  label: LocalizedString;
  title: LocalizedValue;
  description: LocalizedString;
  panels: WorldPanel[];
};

export function getInteractiveZones(): InteractiveZone[] {
  return [
    {
      id: "entry",
      index: "01",
      label: { en: "Hello", zh: "你好" },
      title: { en: "Hello, I'm Caroline Xia!", zh: "你好，我是夏静远！" },
      description: { en: "Let me introduce myself.", zh: "让我来介绍一下自己。" },
      panels: [
        {
          id: "profile",
          title: profile.role,
          subtitle: profile.locationLine,
          image: "/images/profile-caroline-xia.jpg"
        }
      ]
    },
    {
      id: "experience",
      index: "02",
      label: { en: "Work", zh: "经历" },
      title: { en: "I turn AI capabilities into real products.", zh: "我把 AI 能力变成真正可用的产品。" },
      description: {
        en: "A passage through the teams, systems, and outcomes that shaped my product practice.",
        zh: "穿过塑造我产品实践的团队、系统与真实成果。"
      },
      panels: experiences.slice(0, 3).map((experience) => ({
        id: experience.id,
        title: experience.role,
        subtitle: experience.company,
        href: "/experience"
      }))
    },
    {
      id: "projects",
      index: "03",
      label: { en: "Build", zh: "项目" },
      title: { en: "I also build ideas of my own.", zh: "我也把自己的想法做成产品。" },
      description: {
        en: "Products where agents, multimodal AI, and human intent meet in a usable form.",
        zh: "让智能体、多模态 AI 与人的真实意图在产品中相遇。"
      },
      panels: projects.map((project) => ({
        id: project.slug,
        title: project.title,
        subtitle: project.subtitle,
        href: `/projects/${project.slug}`,
        image: project.coverImage
      }))
    },
    {
      id: "education",
      index: "04",
      label: { en: "Learn", zh: "学习" },
      title: { en: "I connect computation with storytelling.", zh: "我在计算与叙事之间搭起连接。" },
      description: {
        en: "Degrees, research, and recognition arranged as one working blueprint.",
        zh: "将教育、研究与荣誉整理为一张持续展开的工作蓝图。"
      },
      panels: [
        ...educationItems.map((item) => ({
          id: item.id,
          title: item.institution,
          subtitle: item.programme,
          href: "/education"
        })),
        ...researchItems.map((item) => ({
          id: item.id,
          title: item.title,
          subtitle: item.type,
          href: "/education"
        })),
        ...awards.map((item) => ({
          id: item.id,
          title: item.title,
          subtitle: item.issuer,
          href: "/education"
        }))
      ]
    },
    {
      id: "contact",
      index: "05",
      label: { en: "Connect", zh: "联系" },
      title: { en: "If you're building what comes next, let's talk.", zh: "如果你也在创造下一件事，来聊聊吧。" },
      description: {
        en: "Leave the guided path and begin a real conversation.",
        zh: "走出导览路径，开始一场真实的对话。"
      },
      panels: [
        { id: "email", title: { en: "Email", zh: "邮箱" }, subtitle: profile.email, href: `mailto:${profile.email}` },
        { id: "linkedin", title: "LinkedIn", subtitle: { en: "Professional profile", zh: "职业主页" }, href: profile.linkedin, external: true },
        { id: "github", title: "GitHub", subtitle: { en: "Code & experiments", zh: "代码与实验" }, href: profile.github, external: true }
      ]
    }
  ];
}
