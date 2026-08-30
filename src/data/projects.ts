import type { LocalizedString } from "@/lib/i18n";
import type { Project, ProjectSection } from "./types";

const l = (en: string, zh: string): LocalizedString => ({ en, zh });
const section = (id: string, enTitle: string, zhTitle: string, en: string, zh: string): ProjectSection => ({
  id,
  title: l(enTitle, zhTitle),
  body: [l(en, zh)]
});

export const projects: Project[] = [
  {
    slug: "tonight-wish-card",
    title: l("Tonight Wish Card: An AI Guide to Your City After Dark", "今夜星愿图：你的夜生活即时推荐助手"),
    subtitle: l(
      "An AI-native feed that turns a fleeting evening mood into a real, actionable city experience.",
      "一款把短暂情绪触动转化为真实城市行动的 AI 原生 Feed 体验。"
    ),
    description: l(
      "Designed for urban users aged 20–40, Tonight Wish Card combines time, weather, local offerings, and intentional user choices to create a recommendation card that could only exist tonight.",
      "今夜星愿卡面向 20—40 岁都市用户，结合当下时间、天气、城市供给与用户主动留下的选择，生成一张只在今晚成立的星愿卡。"
    ),
    year: "2026",
    status: "in-progress",
    tags: [l("Consumer AI", "消费级 AI"), l("Recommendation", "智能推荐"), l("Urban Life", "城市生活")],
    categories: [l("Independent", "独立产品"), l("Consumer", "消费级")],
    coverImage: "/images/projects/tonight-wish-card/cover.jpg",
    coverAlt: l("Tonight Wish Card mobile product flow", "今夜星愿卡移动端产品流程"),
    gallery: [{
      type: "image",
      src: "/images/projects/tonight-wish-card/cover.jpg",
      alt: l("Tonight Wish Card feed, action, star map, and shared constellation screens", "今夜星愿卡的推荐、行动、星图与共星图界面"),
      caption: l("From an AI recommendation to a shared map of tonight's experiences.", "从 AI 推荐出发，将今晚的真实行动沉淀为共享星图。")
    }],
    sections: [
      section("overview", "Overview", "项目简介", "Most city recommendation products optimize for an abstract list of popular places. Tonight Wish Card starts with a more immediate question: given who you are, where you are, and how tonight feels, what is worth doing right now?", "多数城市推荐产品优化的是抽象的热门榜单。今夜星愿卡从一个更即时的问题出发：结合此刻的你、所在城市与今晚的情绪，现在最值得做什么？"),
      section("solution", "Solution", "产品方案", "The AI-native feed combines contextual signals with choices the user actively leaves behind, then generates a time-sensitive Wish Card instead of an endless stream of generic content.", "AI 原生 Feed 将时间、天气、城市供给等情境信号与用户主动留下的选择结合，生成具有时效性的星愿卡，而不是无尽的通用内容流。"),
      section("flow", "Core Flow", "核心流程", "Users discover a card in the feed, take the suggested action, save the experience to a personal star map, and connect it with other people's experiences through a shared constellation.", "用户从推荐 Feed 发现星愿卡，完成真实行动后将体验记录到个人星图，并通过共星图与他人的城市经历产生连接。"),
      section("outcome", "Current Outcome", "当前成果", "The current concept package includes a complete four-step mobile experience covering discovery, action, personal memory, and shared community expression.", "当前方案已经形成完整的四步移动端体验，覆盖发现、行动、个人记忆沉淀与社区共享表达。")
    ],
    decisions: []
  },
  {
    slug: "petsona",
    title: l("Petsona: A Social App for Your Pet's AI Persona", "Petsona：宠物 AI 社交应用"),
    subtitle: l("An AI pet persona that finds the most compatible companions nearby for your furry friend.", "一个宠物 Agent 分身社交应用，为你的毛孩子匹配“附近”最适合的小伙伴。"),
    description: l("Petsona gives every pet an AI persona and uses location and personality signals to make nearby social discovery easier for pets and their owners.", "Petsona 为每只宠物创建 AI Agent 分身，并结合位置与性格信息，帮助宠物和主人更自然地发现附近伙伴。"),
    role: l("Co-founder, Full-stack Developer", "联合创始人、全栈开发"),
    year: "2026",
    dateRange: "2026.02-2026.06",
    externalUrl: "http://43.135.181.240/",
    status: "public",
    award: l("3rd Prize, SG TRAE Friend Hackathon (February 2026)", "SG TRAE Friend Hackathon（2026.02）三等奖"),
    tags: [l("Agent", "Agent"), l("Social", "社交"), l("Location", "附近匹配")],
    categories: [l("Independent", "独立产品"), l("Consumer", "消费级")],
    sections: [
      section("overview", "Overview", "项目简介", "Petsona explores what social networking looks like when the pet—not only the owner—has an expressive digital identity.", "Petsona 探索当宠物拥有可表达的数字身份时，宠物社交能够形成怎样的新体验。"),
      section("role", "My Role", "我的角色", "As co-founder and full-stack developer, I shaped the product strategy and built the experience from matching logic to user-facing flows.", "作为联合创始人和全栈开发者，我负责产品策略，并推动从匹配逻辑到用户端流程的完整落地。"),
      section("problem", "Problem", "用户问题", "Pet owners often want safe, compatible playmates nearby, but initiating an offline conversation with strangers creates friction.", "宠物主人经常希望在附近找到安全、合适的玩伴，但与陌生人开启线下交流存在明显的破冰成本。"),
      section("solution", "Solution", "产品方案", "Pet AI personas, nearby discovery, and personality-based matching give owners a natural reason to connect while keeping the pet at the center of the interaction.", "宠物 AI 分身、附近发现与性格匹配为主人提供自然的交流理由，同时始终让宠物成为互动中心。"),
      section("outcome", "Outcome", "项目成果", "The project won third prize at the SG TRAE Friend Hackathon in February 2026.", "项目获得 SG TRAE Friend Hackathon（2026 年 2 月）三等奖。")
    ],
    decisions: []
  },
  {
    slug: "global-top-star",
    title: l("You Must Become a Global Top Star: An AI Interactive Film-Game", "你一定要成为全球顶流：AI 互动影游"),
    subtitle: l("Power-fantasy interactive storytelling meets multimodal stage scoring—so you can become your own idol.", "爽文互动影游 + 多模态舞台评分，让你成为自己的 idol！"),
    description: l("An AI interactive film-game that combines branching power-fantasy storytelling with multimodal performance evaluation.", "一款将爽文式分支叙事与多模态舞台评分结合的 AI 互动影游。"),
    role: l("Lead, Full-stack Developer", "负责人、全栈开发"),
    year: "2026",
    dateRange: "2026.06-2026.07",
    status: "completed",
    award: l("3rd Prize, Douyin AI Creator Transformation Program · Beijing Haidian Stop 2", "抖音 AI 创变者计划・北京海淀第二站三等奖"),
    tags: [l("Interactive Film", "互动影游"), l("Multimodal AI", "多模态 AI"), l("AIGC", "AIGC")],
    categories: [l("Interactive", "互动"), l("AIGC", "AIGC")],
    sections: [
      section("overview", "Overview", "项目简介", "The experience lets players step into a dramatic rise-to-fame story and make choices that shape their path to becoming a top idol.", "体验让玩家进入一段高密度的成名叙事，通过选择塑造自己成为顶流偶像的路径。"),
      section("role", "My Role", "我的角色", "I led the project and worked across product design, interactive narrative, multimodal evaluation, and full-stack implementation.", "我负责项目整体推进，并覆盖产品设计、互动叙事、多模态评价与全栈实现。"),
      section("solution", "Solution", "产品方案", "Branching cinematic scenes deliver the emotional momentum of power-fantasy fiction, while multimodal AI turns the player's stage performance into visible feedback and progression.", "分支式影视场景承载爽文叙事的情绪推进，多模态 AI 则将玩家的舞台表现转化为可见的评分反馈与成长进程。"),
      section("outcome", "Outcome", "项目成果", "The project received third prize at the second Beijing Haidian stop of the Douyin AI Creator Transformation Program.", "项目获得抖音 AI 创变者计划・北京海淀第二站三等奖。")
    ],
    decisions: []
  },
  {
    slug: "loom",
    title: l("Loom: Your AI Relationship Coach", "Loom：你的恋爱导师"),
    subtitle: l("How should you communicate with them? A relationship coach grounded in multiple knowledge bases helps you move forward with clarity.", "如何和 TA 相处？内置多种知识库的恋爱导师，助力你的幸福。"),
    description: l("Loom turns relationship questions into grounded, actionable guidance by drawing on multiple curated knowledge bases.", "Loom 利用多种精选知识库，将亲密关系中的困惑转化为有依据、可行动的沟通建议。"),
    year: "2026",
    status: "public",
    tags: [l("AI Coach", "AI 教练"), l("Knowledge Base", "知识库"), l("Relationships", "亲密关系")],
    categories: [l("Independent", "独立产品"), l("Consumer", "消费级")],
    sections: [
      section("overview", "Overview", "项目简介", "Loom is an AI relationship coach for the moments when users need to understand a situation, prepare for a conversation, or decide what to do next.", "Loom 是一位 AI 恋爱导师，服务于用户需要理解关系、准备沟通或判断下一步行动的关键时刻。"),
      section("problem", "Problem", "用户问题", "Generic conversational AI can sound reassuring without giving advice that is structured, grounded, or appropriate to a user's relationship context.", "通用对话式 AI 可能提供安慰，却不一定给出结构清晰、有依据且适合具体关系语境的建议。"),
      section("solution", "Solution", "产品方案", "Multiple curated knowledge bases give the coach distinct lenses for understanding communication patterns and turning reflection into practical next steps.", "多种精选知识库为导师提供不同的关系理解视角，并将反思进一步转化为可实践的沟通步骤。"),
      section("outcome", "Current Outcome", "当前成果", "A product introduction and working demo have been prepared; public media will be added after the source package is reviewed and optimized.", "目前已形成产品介绍与可运行演示；公开媒体将在源文件包完成审核和优化后补充。")
    ],
    decisions: []
  },
  {
    slug: "living-chronicles",
    title: l("Living Chronicles: Let AI Preserve Your Old Photos as Living Memories", "Living Chronicles：让 AI 把你的老照片沉淀成记忆"),
    subtitle: l("Preserve your Nanyang stories and bring old photographs back to life in the digital age.", "留下你的南洋故事记忆，让过去的老照片在数字时代栩栩如生。"),
    description: l("A community memory project that uses AI to help people preserve the stories behind old photographs and share them across generations.", "一个利用 AI 帮助人们保存老照片背后的故事、推动记忆跨代传递的社区项目。"),
    role: l("Co-founder, Full-stack Developer", "联合创始人、全栈开发"),
    year: "2026",
    dateRange: "2026.02-Present",
    status: "in-progress",
    launchStatus: l("Planned for mid-August", "计划于 8 月中旬上线"),
    tags: [l("Memory", "记忆"), l("Community", "社区"), l("Generative AI", "生成式 AI")],
    categories: [l("Independent", "独立产品"), l("Community", "社区")],
    sections: [
      section("overview", "Overview", "项目简介", "Living Chronicles focuses on the memories carried by old photographs, especially personal and community stories rooted in Nanyang life.", "Living Chronicles 关注老照片所承载的记忆，尤其是扎根于南洋生活的个人与社区故事。"),
      section("role", "My Role", "我的角色", "As co-founder and full-stack developer, I worked across the product experience, AI workflow, interface design, and implementation.", "作为联合创始人和全栈开发者，我参与产品体验、AI 工作流、界面设计与工程实现。"),
      section("problem", "Problem", "用户问题", "Old photographs often survive without the voices, places, and relationships that give them meaning, making community memory fragile across generations.", "老照片往往被保存下来，但赋予它们意义的人物、地点与关系却逐渐遗失，使社区记忆难以跨代延续。"),
      section("solution", "Solution", "产品方案", "The experience pairs photographs with guided storytelling and AI-assisted restoration or animation, helping people turn scattered materials into living, shareable chronicles.", "体验将照片、引导式叙事与 AI 辅助修复或动态化结合，帮助人们把零散资料沉淀为鲜活、可分享的记忆档案。"),
      section("outcome", "Current Outcome", "当前成果", "The Figma experience and project presentation are complete, with launch planned for mid-August.", "Figma 体验设计和项目介绍已经完成，计划于 8 月中旬上线。")
    ],
    decisions: []
  },
  {
    slug: "curious-conch",
    title: l("Curious Conch: Children's AI Critical Thinking Education Platform", "好奇海螺：少儿 AI 思辨教育平台"),
    subtitle: l("Co-founder, Full-stack Developer · Third Prize, 11th Shanghai Huichuang Youth Competition.", "联合创始人、全栈开发｜第十一届上海市“汇创青春”大学生文化创意作品三等奖。"),
    description: l("An AI education platform designed to help children practice inquiry and critical thinking.", "一个帮助儿童练习提问、论证与思辨能力的 AI 教育平台。"),
    role: l("Co-founder, Full-stack Developer", "联合创始人、全栈开发"),
    year: "2026",
    dateRange: "2026.02-2026.05",
    status: "completed",
    award: l("3rd Prize, 11th Shanghai Huichuang Youth Competition", "第十一届上海市“汇创青春”大学生文化创意作品三等奖"),
    tags: [l("AI Education", "AI 教育"), l("Critical Thinking", "思辨教育"), l("Full-stack", "全栈")],
    categories: [l("Education", "教育"), l("Independent", "独立产品")],
    sections: [section("overview", "Overview", "项目简介", "Curious Conch uses AI-guided dialogue and learning activities to help children build habits of questioning, reasoning, and reflection.", "好奇海螺通过 AI 引导式对话与学习活动，帮助儿童建立提问、推理和反思的习惯。")],
    decisions: []
  }
];

export const featuredProjects = projects.slice(0, 3);
