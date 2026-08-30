import type { LocalizedString } from "@/lib/i18n";
import type { Project, ProjectSection } from "./types";

const l = (en: string, zh: string): LocalizedString => ({ en, zh });
const section = (id: string, enTitle: string, zhTitle: string, body: LocalizedString[]): ProjectSection => ({
  id,
  title: l(enTitle, zhTitle),
  body
});

const pdfResources = (href: string, downloadName: string) => [
  { label: l("View project PDF", "查看项目 PDF"), href, type: "pdf" as const, behavior: "open" as const },
  {
    label: l("Download project PDF", "下载项目 PDF"),
    href,
    type: "pdf" as const,
    behavior: "download" as const,
    downloadName
  }
];

export const projects: Project[] = [
  {
    slug: "tonight-wish-card",
    title: l("Tonight Wish Card: Your Instant Guide to Life After Dark", "今夜星愿卡：你的夜生活即时推荐助手"),
    subtitle: l(
      "An AI-native city guide that turns the mood of this exact moment into something worth stepping outside for.",
      "根据此刻的你与今晚的城市，生成一件真正值得出门去做的事。"
    ),
    description: l(
      "Built for urban users aged 20–40, Tonight Wish Card combines time, weather, location, local availability, and active preferences to recommend an experience that only makes sense tonight.",
      "今夜星愿卡面向 20—40 岁都市用户，结合时间、天气、位置、城市供给与主动偏好，生成一件只在今晚成立的城市行动。"
    ),
    role: l("Product Manager", "产品经理"),
    year: "2026",
    dateRange: "2026.07-2026.08",
    status: "completed",
    launchStatus: l(
      "Previously ran in the Douyin AI Feed; no longer publicly accessible",
      "曾在抖音 AI Feed 实际运行，目前不可公开访问"
    ),
    tags: [l("Consumer AI", "消费级 AI"), l("Contextual Recommendation", "情境推荐"), l("Urban Life", "城市生活")],
    categories: [l("Independent", "独立产品"), l("Consumer", "消费级")],
    coverImage: "/images/projects/tonight-wish-card/cover.jpg",
    coverAlt: l("Tonight Wish Card mobile experience", "今夜星愿卡移动端体验"),
    gallery: [
      {
        type: "image",
        src: "/images/projects/tonight-wish-card/ui-flow.png",
        width: 1280,
        height: 724,
        alt: l("Tonight Wish Card end-to-end interface flow", "今夜星愿卡完整界面流程"),
        caption: l("Douyin Feed → Tonight's Action → My Star Map → Shenzhen Shared Star Map.", "抖音 Feed → 今夜行动 → 我的星图 → 深圳共星图。")
      },
      {
        type: "video",
        src: "/videos/projects/tonight-wish-card/city-moment.mp4",
        poster: "/images/projects/tonight-wish-card/city-moment-poster.jpg",
        width: 1280,
        height: 720,
        preview: true,
        alt: l("Tonight Wish Card city story film", "今夜星愿卡城市故事短片"),
        caption: l("A city moment behind the product idea.", "产品概念背后的城市瞬间。")
      },
      {
        type: "video",
        src: "/videos/projects/tonight-wish-card/ui-walkthrough.mp4",
        poster: "/images/projects/tonight-wish-card/ui-walkthrough-poster.jpg",
        width: 1280,
        height: 732,
        preview: true,
        alt: l("Tonight Wish Card interface walkthrough", "今夜星愿卡界面流程演示"),
        caption: l("A walkthrough of the product's core screens and interactions.", "核心界面与交互流程演示。")
      },
      {
        type: "video",
        src: "/videos/projects/tonight-wish-card/product-demo.mp4",
        poster: "/images/projects/tonight-wish-card/product-demo-poster.jpg",
        width: 720,
        height: 1280,
        preview: true,
        alt: l("Tonight Wish Card vertical product demo", "今夜星愿卡竖屏产品演示"),
        caption: l("A vertical demo of the AI-native mobile experience.", "AI 原生移动体验的竖屏演示。")
      }
    ],
    sections: [
      section("overview", "Overview", "项目简介", [l("Tonight Wish Card asks a more immediate question than a popularity list: given who you are, where you are, and how the city feels right now, what is genuinely worth doing tonight?", "今夜星愿卡不提供抽象的热门榜单，而是回答一个更具体的问题：结合此刻的你、所在的位置与今晚的城市，现在真正值得做什么？")]),
      section("role", "My Role", "我的角色", [l("As product manager, I defined the target experience, contextual inputs, recommendation journey, and the loop from real-world action to personal and shared memory.", "作为产品经理，我负责定义目标体验、情境输入与推荐路径，并设计从真实行动到个人及共享记忆的完整闭环。")]),
      section("problem", "Problem", "用户问题", [l("People can consume an endless stream of distant trends yet still struggle to notice nearby places, people, and possibilities. Existing discovery products rarely combine the immediate context needed to make a recommendation truly actionable.", "人们可以不断消费远方的热点，却容易忽略附近具体的人、地点与生活。现有发现类产品也很少综合此刻的情境，让一条推荐真正能够立刻执行。")]),
      section("solution", "Solution", "产品方案", [l("The product combines time, weather, location, local supply, and choices such as mood, companion, and budget. It turns the result into a Wish Card containing a place, activity, route, and clear next action.", "产品结合时间、天气、位置、城市供给，以及心情、同伴、预算等主动选择，将结果整合为包含地点、活动、路线与行动方式的星愿卡。")]),
      section("flow", "Core Flow", "核心流程", [l("Enter from the Douyin Feed → capture the current context → add preferences → infer an action intent → rank nearby options → generate a Wish Card → accept, skip, complete, or share → save the experience to a personal Star Map → aggregate it into the city's shared constellation → use feedback to improve later recommendations.", "从抖音 Feed 进入 → 获取此刻情境 → 补充偏好 → 理解行动意图 → 筛选并排序附近候选 → 生成星愿卡 → 接受、跳过、完成或分享 → 沉淀个人星图 → 聚合城市共星图 → 以反馈影响后续推荐。")]),
      section("outcome", "Outcome", "项目成果", [l("The project delivered a complete four-part mobile experience spanning discovery, action, personal memory, and shared city expression. It previously ran as an AI-native experience in the Douyin Feed and is not currently available for public access.", "项目完成了覆盖发现、行动、个人记忆与城市共享表达的四步移动体验，曾作为 AI 原生体验在抖音 Feed 流中实际运行，目前暂时无法公开访问。")])
    ],
    decisions: []
  },
  {
    slug: "petsona",
    title: l("Petsona: A Social App for Your Pet's AI Persona", "Petsona：宠物 AI 社交应用"),
    subtitle: l("Give every pet an AI persona—and let compatible companions find each other nearby.", "让每只宠物拥有自己的 AI 分身，并在附近找到最合拍的伙伴。"),
    description: l("Petsona builds an expressive, memory-aware AI persona for each pet, then uses location, safety rules, and agent-to-agent evaluation to support more natural social discovery.", "Petsona 为每只宠物建立可表达、具备记忆的 AI 分身，再结合位置、安全规则与 Agent-to-Agent 评估，让附近社交更自然。"),
    role: l("Co-founder, Full-stack Developer", "联合创始人、全栈开发"),
    year: "2026",
    dateRange: "2026.02-2026.06",
    status: "public",
    award: l("3rd Prize, SG TRAE Friend Hackathon", "SG TRAE Friend Hackathon 三等奖"),
    tags: [l("Agent", "Agent"), l("Social", "社交"), l("Nearby Matching", "附近匹配")],
    categories: [l("Independent", "独立产品"), l("Consumer", "消费级")],
    coverImage: "/images/projects/petsona/cover.webp",
    coverAlt: l("Petsona project cover", "Petsona 项目封面"),
    gallery: [
      { type: "image", src: "/images/projects/petsona/persona-flow.webp", width: 1920, height: 1080, alt: l("Petsona persona creation flow", "Petsona 宠物人格创建流程"), caption: l("From pet inputs to a stable, expressive AI persona.", "从宠物信息输入到稳定、可表达的 AI 人格。") },
      { type: "image", src: "/images/projects/petsona/persona-card.webp", width: 1920, height: 1080, alt: l("Petsona personality card", "Petsona 宠物人格卡"), caption: l("A shareable representation of personality, habits, and preferences.", "将性格、习惯与偏好组织为可分享的人格卡。") },
      { type: "image", src: "/images/projects/petsona/matching.webp", width: 1920, height: 1080, alt: l("Petsona nearby matching experience", "Petsona 附近匹配体验"), caption: l("Nearby candidates, compatibility reasoning, and an AI-generated icebreaker.", "附近候选、匹配理由与 AI 生成的破冰话题。") },
      { type: "image", src: "/images/projects/petsona/architecture.webp", width: 1920, height: 1080, alt: l("Petsona agent architecture", "Petsona Agent 架构"), caption: l("The persona, memory, matching, and conversation architecture.", "人格、记忆、匹配与对话架构。") }
    ],
    resources: pdfResources("/documents/projects/petsona.pdf", "petsona-project.pdf"),
    sections: [
      section("overview", "Overview", "项目简介", [l("Petsona explores pet social networking through an identity that belongs to the pet rather than only its owner. The AI persona expresses the pet's habits and temperament while remaining grounded in information provided by the owner.", "Petsona 从属于宠物自身的数字身份出发探索宠物社交。AI 分身表达宠物的习惯与性格，同时以主人提供的信息为事实基础。")]),
      section("role", "My Role", "我的角色", [l("As co-founder and full-stack developer, I shaped the product strategy and implemented the journey from persona creation and candidate discovery to matching and conversation.", "作为联合创始人和全栈开发者，我负责产品策略，并推动从人格创建、候选发现到匹配与对话的完整体验落地。")]),
      section("problem", "Problem", "用户问题", [l("Pet owners want safe, compatible companions nearby but cannot easily judge whether two animals will get along. Starting a conversation with an unfamiliar owner adds another layer of friction.", "宠物主人希望在附近找到安全、合拍的玩伴，却难以提前判断两只宠物是否适合相处；与陌生主人开启交流也存在明显的破冰成本。")]),
      section("solution", "Solution", "产品方案", [l("Photos, a personality questionnaire, and owner descriptions generate a pet persona with an expression style, preferences, and boundaries. Nearby discovery applies rule-based safety filters before personality-aware agents explain compatibility and generate an opening message.", "照片、性格问卷与主人描述共同生成宠物人格、表达风格、喜好与禁忌。附近发现先进行规则与安全过滤，再由具备人格信息的 Agent 评估适配度、解释理由并生成开场白。")]),
      section("flow", "Core Flow", "核心流程", [l("Upload a photo and complete the questionnaire → create the persona and long-term memory → request nearby matching → filter candidates by distance, type, and safety state → pre-rank across five compatibility dimensions → let two pet agents evaluate the match → present a recommendation card and personalized icebreaker → update pet or relationship memory after conversation.", "上传照片并完成问卷 → 建立人格与长期记忆 → 发起附近匹配 → 按距离、类型与安全状态过滤 → 以五维适配度预排序 → 两个宠物 Agent 进行匹配评估 → 生成推荐卡与个性化破冰话题 → 对话后更新宠物或关系记忆。")]),
      section("outcome", "Outcome", "项目成果", [l("Petsona won third prize at the SG TRAE Friend Hackathon.", "Petsona 获得 SG TRAE Friend Hackathon 三等奖。")])
    ],
    decisions: []
  },
  {
    slug: "global-top-star",
    title: l("You Must Become a Global Top Star: An AI Interactive Film-Game", "你一定要成为全球顶流：AI 互动影游"),
    subtitle: l("A power-fantasy interactive story where multimodal stage scoring turns real performance into plot consequences.", "爽剧式互动叙事结合多模态舞台评分，让真实表演直接改变剧情命运。"),
    description: l("Players reclaim the stage through branching choices, singing or dance performance, visible attribute growth, and a personalized ending.", "玩家通过分支选择、唱跳表演、可见的数值成长与专属结局，亲手夺回自己的舞台。"),
    role: l("Project Lead, Full-stack Developer", "项目负责人、全栈开发"),
    year: "2026",
    dateRange: "2026.06-2026.07",
    status: "completed",
    award: l("3rd Prize, Douyin AI Creator Transformation Program · Beijing Haidian Stop 2", "抖音 AI 创变者计划・北京海淀第二站三等奖"),
    tags: [l("Interactive Film", "互动影游"), l("Multimodal AI", "多模态 AI"), l("Dynamic Narrative", "动态叙事")],
    categories: [l("Interactive", "互动"), l("AIGC", "AIGC")],
    coverImage: "/images/projects/global-top-star/cover.webp",
    coverAlt: l("Global Top Star stage experience", "全球顶流舞台体验"),
    gallery: [
      { type: "image", src: "/images/projects/global-top-star/story-flow.webp", width: 950, height: 1820, alt: l("Global Top Star branching story flow", "全球顶流分支剧情流程"), caption: l("The complete dramatic path from comeback to a personalized ending.", "从逆袭开场到专属结局的完整剧情路径。") },
      { type: "image", src: "/images/projects/global-top-star/ending-system.webp", width: 1075, height: 825, alt: l("Global Top Star attributes and ending system", "全球顶流数值与结局系统"), caption: l("Performance and choices update hidden attributes that resolve later branches and endings.", "表演与选择更新隐藏数值，并共同决定后续分支与结局。") }
    ],
    resources: pdfResources("/documents/projects/global-top-star.pdf", "global-top-star-project.pdf"),
    sections: [
      section("overview", "Overview", "项目简介", [l("Players take the role of Lin Zhao, an original singer-trainee returning after three years out of sight. The project combines the emotional momentum of a power-fantasy drama with an interactive system in which performance, evidence, and choices determine what happens next.", "玩家扮演被雪藏三年的原创型练习生林昭。项目将爽剧的情绪推进与互动系统结合，让舞台表现、证据和关键选择共同决定故事走向。")]),
      section("role", "My Role", "我的角色", [l("As project lead and full-stack developer, I led the product concept and connected branching narrative, multimodal evaluation, progression rules, and the playable experience.", "作为项目负责人和全栈开发者，我主导产品概念，并串联分支叙事、多模态评价、成长规则与可玩体验。")]),
      section("problem", "Problem", "用户问题", [l("Entertainment-industry power fantasies often rely on sudden fame or romantic validation while leaving stage ability, public-opinion reversals, and industry pressure abstract. Players can choose dialogue, but their own performance rarely matters.", "传统娱乐圈爽剧常依赖突然爆红或情感认可，舞台能力、舆论反转与资本压力却缺少具体呈现；玩家虽然可以选择对话，自身表演往往并不真正影响结果。")]),
      section("solution", "Solution", "产品方案", [l("Branching cinematic scenes carry the drama, while singing and dance inputs are evaluated for completion, rhythm, and stage presence. Strength, ambition, and scandal values change with every choice, and gesture-based interactions make the player's body part of the story.", "分支式影视场景承载剧情；唱歌与舞蹈输入由多模态模型从完成度、节奏和舞台魅力等维度评分。实力、野心与黑料随每次选择变化，手势交互让玩家的身体也进入故事。")]),
      section("flow", "Core Flow", "核心流程", [l("Choose a story response or submit a performance → load the current node and hidden attributes → route the input → apply narrative rules or multimodal scoring → normalize the result and handle exceptions → update strength, ambition, and scandal → resolve the next branch and ending → generate a personalized ending poster.", "作出剧情选择或提交表演 → 加载当前节点与隐藏属性 → 路由输入 → 执行剧情规则或多模态评分 → 标准化结果并进行异常兜底 → 更新实力、野心与黑料 → 判断下一分支与结局 → 生成专属结局海报。")]),
      section("outcome", "Outcome", "项目成果", [l("The project won third prize at the second Beijing Haidian stop of the Douyin AI Creator Transformation Program.", "项目获得抖音 AI 创变者计划・北京海淀第二站三等奖。")])
    ],
    decisions: []
  },
  {
    slug: "loom",
    title: l("Loom: Your AI Relationship Coach", "Loom：你的恋爱导师"),
    subtitle: l("An AI coach that remembers relationship context and turns uncertainty into grounded, actionable communication.", "一位能够记住关系上下文、将情感困惑转化为有依据行动建议的 AI 恋爱导师。"),
    description: l("Loom combines profile analysis, chat interpretation, date reflection, three-layer memory, RAG, and specialist Skills in one relationship support experience.", "Loom 将画像分析、聊天理解、约会复盘、三级记忆、RAG 与专业 Skill 组合为完整的关系支持体验。"),
    role: l("Product Manager, Front-end Developer", "产品经理、前端开发"),
    year: "2026",
    dateRange: "2026",
    status: "completed",
    launchStatus: l("Completed demo", "已完成 Demo"),
    tags: [l("AI Coach", "AI 教练"), l("RAG & Skills", "RAG 与 Skill"), l("Memory", "三级记忆")],
    categories: [l("Independent", "独立产品"), l("Consumer", "消费级")],
    coverImage: "/images/projects/loom/cover.webp",
    coverAlt: l("Loom AI relationship coach cover", "Loom AI 恋爱导师项目封面"),
    gallery: [
      { type: "image", src: "/images/projects/loom/profile-input.webp", width: 1920, height: 1080, alt: l("Loom relationship profile analysis", "Loom 关系画像分析"), caption: l("Profile analysis grounds guidance in both people and their relationship expectations.", "关系画像让建议建立在双方特征与关系期待之上。") },
      { type: "image", src: "/images/projects/loom/chat-analysis.webp", width: 1920, height: 1080, alt: l("Loom chat analysis", "Loom 聊天分析"), caption: l("Conversation context is translated into signals and practical reply suggestions.", "将对话上下文转化为关系信号与可执行的回复建议。") },
      { type: "image", src: "/images/projects/loom/date-review.webp", width: 1920, height: 1080, alt: l("Loom date reflection", "Loom 约会复盘"), caption: l("Structured reflection helps users interpret signals and prepare the next step.", "结构化复盘帮助用户理解互动信号并准备下一步行动。") },
      { type: "image", src: "/images/projects/loom/memory-system.webp", width: 1920, height: 1080, alt: l("Loom three-layer memory system", "Loom 三级记忆系统"), caption: l("Short-, medium-, and long-term memories preserve context across conversations.", "短期、中期与长期记忆在多次对话间持续保存关系上下文。") },
      { type: "image", src: "/images/projects/loom/backend-flow.webp", width: 1920, height: 1080, alt: l("Loom agent and backend architecture", "Loom Agent 与后端架构"), caption: l("Intent routing, contextual retrieval, specialist Skills, streaming output, and asynchronous memory updates.", "意图路由、上下文检索、专业 Skill、流式输出与异步记忆更新。") },
      { type: "video", src: "/videos/projects/loom/demo.mp4", poster: "/images/projects/loom/demo-poster.jpg", width: 1280, height: 800, preview: true, alt: l("Loom working product demo", "Loom 可运行产品演示"), caption: l("The working demo covers the product's core relationship-support journeys.", "可运行 Demo 覆盖产品核心关系支持流程。") }
    ],
    resources: pdfResources("/documents/projects/loom.pdf", "loom-project.pdf"),
    sections: [
      section("overview", "Overview", "项目简介", [l("Loom is designed for moments when someone needs to understand a potential partner, interpret a conversation, reflect on a date, or prepare the next interaction. It aims to support judgment without deciding whom the user should love.", "Loom 服务于用户需要理解关系对象、分析聊天、复盘约会或准备下一次沟通的时刻。它帮助用户形成判断，但不替用户决定应该爱谁。")]),
      section("role", "My Role", "我的角色", [l("As product manager and front-end developer, I defined the core journeys and translated the agent's memory, knowledge, and routing capabilities into a coherent interface.", "作为产品经理和前端开发者，我定义核心用户流程，并将 Agent 的记忆、知识与路由能力转化为连贯的产品界面。")]),
      section("problem", "Problem", "用户问题", [l("Generic conversational AI can respond immediately but often lacks stable relationship memory, professional grounding, and a durable understanding of the user and each person they discuss.", "通用对话式 AI 可以即时回应，却常常缺少稳定的关系记忆、专业知识依据，以及对用户和不同关系对象的长期理解。")]),
      section("solution", "Solution", "产品方案", [l("Loom supports relationship profile analysis, screenshot-aware chat analysis, and structured date reflection. A curated relationship knowledge base grounds the advice, while separate short-, medium-, and long-term memories preserve the right context over time.", "Loom 支持关系画像分析、聊天截图理解与结构化约会复盘。精选关系知识库为建议提供依据，彼此独立的短期、中期与长期记忆则持续保存恰当的关系上下文。")]),
      section("flow", "Core Flow", "核心流程", [l("Receive a question, screenshot, or date reflection → validate relationship intent → route to coaching, chat analysis, date review, profile, or image mode → assemble profiles, recent turns, summaries, long-term memory, and RAG evidence → call at most one specialist Skill → stream actionable guidance → asynchronously summarize and update separate user and partner memories.", "接收情感问题、聊天截图或约会复盘 → 判断恋爱咨询意图 → 路由至恋爱教练、聊天分析、约会复盘、人物画像或图片分析 → 组装人物画像、近期对话、中期摘要、长期记忆与 RAG 证据 → 至多调用一次专业 Skill → 流式输出可执行建议 → 后台异步总结并分别更新用户与对象记忆。")]),
      section("outcome", "Outcome", "项目成果", [l("A working demo now covers profile analysis, chat analysis, date reflection, and persistent relationship memory.", "目前已经完成可运行 Demo，覆盖画像分析、聊天分析、约会复盘与长期关系记忆等核心体验。")])
    ],
    decisions: []
  },
  {
    slug: "living-chronicles",
    title: l("Living Chronicles: Let AI Preserve Your Old Photos as Living Memories", "Living Chronicles：让 AI 把老照片沉淀成记忆"),
    subtitle: l("Preserve Nanyang stories and let old photographs live again in the digital age.", "留下你的南洋故事，让过去的老照片在数字时代重新鲜活起来。"),
    description: l("A community memory project that uses multimodal AI and a family memory graph to preserve the people, places, relationships, and stories behind old photographs.", "一个利用多模态 AI 与家族记忆图谱，保存老照片背后人物、地点、关系与故事的社区记忆项目。"),
    role: l("Co-founder, Full-stack Developer", "联合创始人、全栈开发"),
    year: "2026",
    dateRange: "2026.02-Present",
    externalUrl: "https://app.familyecho.sg",
    externalLabel: l("Family Echo Workshop", "Family Echo Workshop"),
    status: "public",
    launchStatus: l("Live", "已上线"),
    tags: [l("GraphRAG", "GraphRAG"), l("Memory", "记忆"), l("Community", "社区")],
    categories: [l("Independent", "独立产品"), l("Community", "社区")],
    coverImage: "/images/projects/living-chronicles/cover.webp",
    coverAlt: l("Living Chronicles project cover", "Living Chronicles 项目封面"),
    gallery: [
      { type: "image", src: "/images/projects/living-chronicles/solution.webp", width: 1920, height: 1080, alt: l("Living Chronicles memory preservation solution", "Living Chronicles 记忆保存方案"), caption: l("Old photographs become structured, tellable, and shareable memories.", "让老照片转化为可组织、可讲述、可分享的记忆。") },
      { type: "image", src: "/images/projects/living-chronicles/family-memory.webp", width: 1920, height: 1080, alt: l("Living Chronicles family memory experience", "Living Chronicles 家庭记忆体验"), caption: l("People, places, photographs, and oral histories are connected across generations.", "将人物、地点、照片与口述故事连接为跨代记忆。") },
      { type: "image", src: "/images/projects/living-chronicles/architecture.webp", width: 1920, height: 1080, alt: l("Living Chronicles technical architecture", "Living Chronicles 技术架构"), caption: l("Multimodal ingestion, clarification, a family graph, GraphRAG retrieval, and evidence-grounded answers.", "多模态入库、主动澄清、家族图谱、GraphRAG 检索与证据约束回答。") }
    ],
    resources: pdfResources("/documents/projects/living-chronicles.pdf", "living-chronicles-project.pdf"),
    sections: [
      section("overview", "Overview", "项目简介", [l("Singapore was shaped by generations of migration, yet many personal and Nanyang community histories remain scattered across fading photographs and fragmented oral accounts. Living Chronicles helps families and communities turn those materials into durable digital memory.", "新加坡由一代代移民共同塑造，但许多个人经历与南洋社区记忆仍散落在泛黄照片和零星口述中。Living Chronicles 帮助家庭与社区将这些材料沉淀为可延续的数字记忆。")]),
      section("role", "My Role", "我的角色", [l("As co-founder and full-stack developer, I worked across the product experience, AI workflow, interface design, and implementation.", "作为联合创始人和全栈开发者，我参与产品体验、AI 工作流、界面设计与工程实现。")]),
      section("problem", "Problem", "用户问题", [l("Photographs may survive while names, places, relationships, dialects, and lived stories disappear across generations. Raw media alone cannot preserve the context that gives a family memory meaning.", "照片可能被保存下来，但人物姓名、地点、关系、方言与生活故事会随代际流逝。仅保存原始媒体，无法留住赋予家庭记忆意义的上下文。")]),
      section("solution", "Solution", "产品方案", [l("The experience digitizes photographs, guides memory interviews, organizes verified people and events into a relationship graph, and turns grounded stories into shareable films or digital-human conversations.", "产品将老照片数字化，通过引导式访谈补全记忆，将经确认的人物与事件组织成关系图谱，并把有事实依据的故事转化为可分享的短片或数字人对话。")]),
      section("flow", "Core Flow", "核心流程", [l("Upload a photograph, recording, text, or video → route and parse the media → extract people, time, place, event, and relationships → clarify ambiguous facts with the user → write verified memories to the family graph → retrieve evidence with GraphRAG → reason within that evidence → answer or ask a focused follow-up → write the conversation back to memory.", "上传照片、语音、文字或视频 → 路由并解析媒体 → 提取人物、时间、地点、事件与关系 → 对歧义事实主动追问 → 将确认后的记忆写入家族图谱 → 通过 GraphRAG 检索证据 → 基于证据推理 → 回答或提出针对性追问 → 将本轮对话写回记忆。")]),
      section("outcome", "Outcome", "项目成果", [l("The product is live as Family Echo Workshop, supporting a community-facing approach to preserving family and Nanyang memories.", "产品已作为 Family Echo Workshop 正式上线，为家庭与南洋社区记忆保存提供可公开使用的体验。")])
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
    sections: [section("overview", "Overview", "项目简介", [l("Curious Conch uses AI-guided dialogue and learning activities to help children build habits of questioning, reasoning, and reflection.", "好奇海螺通过 AI 引导式对话与学习活动，帮助儿童建立提问、推理和反思的习惯。")])],
    decisions: []
  }
];

export const featuredProjects = projects.slice(0, 3);
