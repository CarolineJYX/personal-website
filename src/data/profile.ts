import type { LinkItem } from "./types";

const l = (en: string, zh: string) => ({ en, zh });

export const profile = {
  name: {
    en: "Caroline Xia",
    zh: "夏静远"
  },
  role: {
    en: "AI Product Manager",
    zh: "AI 产品经理"
  },
  jobIntent: {
    en: "AI Product Manager",
    zh: "AI产品经理"
  },
  statement: {
    en: "Turning model capability into measurable, shippable, and scalable AI products.",
    zh: "让模型能力成为可评测、可上线、可增长的产品体验。"
  },
  extendedStatement: {
    en: "Bridging foundational model potential and production-ready product systems across agents, evaluation, multimodal AI, and human-centered workflows.",
    zh: "连接基础模型潜力与真实产品结果，覆盖智能体系统、模型评测、多模态 AI 与以人为中心的产品流程。"
  },
  focusAreas: [
    { en: "Agent Systems", zh: "智能体系统" },
    { en: "Model Evaluation", zh: "模型评测" },
    { en: "Context Engineering", zh: "上下文工程" },
    { en: "Multimodal AI", zh: "多模态 AI" }
  ],
  strengths: [
    l(
      "Master the principles of deep learning and large models, with experience working in model teams and business implementation, familiar with the core processes from Pre-training data preparation to Post-training/SFT and model evaluation. Have Agent system design experience based on LangGraph, familiar with Context Engineering (Prompt, RAG, memory construction), and able to complete business-scenario Agent design and model tuning. Have software, mobile-end and smart hardware product experience, good at cross-algorithm, R&D and business collaboration, and promoting model capabilities into product value.",
      "掌握深度学习与大模型原理，具备模型团队工作经历与业务落地经验，熟悉从Pre-training数据准备到Post-training/SFT、模型评测的核心流程。具备基于LangGraph的Agent系统设计经验，熟悉Context Engineering（Prompt、RAG、记忆构建），能完成业务场景Agent设计及模型调优。具备软件、移动端及智能硬件产品经验，擅长跨算法、研发与业务协同，推动模型能力向产品价值转化。"
    )
  ],
  locationLine: {
    en: "Singapore · Beijing · Shanghai",
    zh: "新加坡 · 北京 · 上海"
  },
  email: "caroline.jy.xia@gmail.com",
  linkedin: "https://www.linkedin.com/in/jingyuan-xia",
  github: "https://github.com/CarolineJYX",
  resumeUrl: undefined as string | undefined
};

export const contactLinks: LinkItem[] = [
  {
    label: { en: "Email", zh: "邮箱" },
    href: `mailto:${profile.email}`,
    external: false
  },
  {
    label: { en: "LinkedIn", zh: "LinkedIn" },
    href: profile.linkedin,
    external: true
  },
  {
    label: { en: "GitHub", zh: "GitHub" },
    href: profile.github,
    external: true
  },
  {
    label: { en: "Resume", zh: "简历" },
    href: profile.resumeUrl,
    external: false
  }
];
