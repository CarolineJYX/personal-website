import type { Locale } from "@/lib/i18n";
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
    en: "Turning model capabilities into measurable, shippable, and scalable AI products.",
    zh: "推动模型能力转化为可评测、可上线、可增长的产品价值。"
  },
  extendedStatement: {
    en: "From pre-training data and post-training/SFT to benchmarks, evaluation loops, and agent design, I connect model development with real product outcomes across software, mobile, and smart hardware.",
    zh: "从 Pre-training 数据准备、Post-training/SFT 到 Benchmark、模型评测闭环与 Agent 设计，我持续连接模型研发与软件、移动端及智能硬件中的真实产品结果。"
  },
  homeStrengths: [
    {
      title: l("Model Data & Training", "模型数据与训练"),
      description: l(
        "Deep-learning and LLM fundamentals, model-team experience, and data preparation from pre-training through business-side post-training/SFT.",
        "理解深度学习与大模型原理，具备模型团队经验，熟悉从 Pre-training 到业务侧 Post-training/SFT 的数据准备。"
      )
    },
    {
      title: l("Benchmarks & Evaluation", "Benchmark 与模型评测"),
      description: l(
        "Benchmark-system design and the core feedback loop that turns model evaluation into actionable iteration.",
        "擅长 Benchmark 体系建立与模型评测核心闭环，让评测结果能够持续指导模型迭代。"
      )
    },
    {
      title: l("Context, Harness & Agents", "Context、Harness 与 Agent"),
      description: l(
        "Context and Harness Engineering for designing and tuning agents around real business scenarios.",
        "熟悉 Context / Harness Engineering，能够面向真实业务场景完成 Agent 设计与调优。"
      )
    },
    {
      title: l("Product Delivery", "产品落地与协同"),
      description: l(
        "Product experience across software, mobile, and smart hardware, aligning algorithm, engineering, and business teams to deliver value.",
        "具备软件、移动端及智能硬件产品经验，擅长协同算法、研发与业务团队，将模型能力转化为产品价值。"
      )
    }
  ],
  focusAreas: [
    { en: "Agent Design & Tuning", zh: "Agent 设计与调优" },
    { en: "Benchmarks & Evaluation", zh: "Benchmark 与模型评测" },
    { en: "Context / Harness Engineering", zh: "Context / Harness Engineering" },
    { en: "Multimodal AI", zh: "多模态 AI" }
  ],
  strengths: [
    l(
      "I understand the principles behind deep learning and large language models, with hands-on experience in model teams and production delivery. I am familiar with data preparation from pre-training through business-side post-training/SFT, and I specialize in building benchmark systems and closing the model-evaluation loop. I work with Context and Harness Engineering to design and tune agents for real business scenarios. With product experience across software, mobile, and smart hardware, I align algorithm, engineering, and business teams to turn model capabilities into product value.",
      "了解深度学习与大模型原理，具备模型团队工作经历与业务落地经验；熟悉从模型 Pre-training 到业务侧 Post-training/SFT 的数据准备，擅长 Benchmark 体系建立以及模型评测的核心闭环。熟悉 Context / Harness Engineering，能完成业务场景 Agent 设计以及调优。具备软件、移动端及智能硬件产品经验，擅长跨算法、研发与业务协同，推动模型能力向产品价值转化。"
    )
  ],
  locationLine: {
    en: "Singapore · Beijing · Shanghai",
    zh: "新加坡 · 北京 · 上海"
  },
  email: "caroline.jy.xia@gmail.com",
  linkedin: "https://www.linkedin.com/in/jingyuan-xia",
  github: "https://github.com/CarolineJYX",
  resumeUrls: {} as Partial<Record<Locale, string>>
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
  }
];
