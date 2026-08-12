import type { LocalizedString } from "@/lib/i18n";
import type { AwardItem, EducationItem, ResearchItem } from "./types";

const l = (en: string, zh: string): LocalizedString => ({ en, zh });

export const educationItems: EducationItem[] = [
  {
    id: "nus-master",
    year: "2024",
    institution: l("National University of Singapore (QS10)", "新加坡国立大学（QS10）"),
    programme: l("Master of Computing", "计算机硕士｜Master of Computing"),
    period: "2024.08-2027.06",
    result: "GPA: 4.0/5.0",
    status: "in-progress",
    notes: [
      l(
        "Main courses: Machine Learning, Neural Networks and Deep Learning, Reinforcement Learning, Probability and Mathematical Statistics, Advanced Software Development.",
        "2024.08-2027.06 主修课程：机器学习、神经网络与深度学习、强化学习、概率论与数理统计、高级软件研发。"
      )
    ],
    coursework: [
      l("Machine Learning", "机器学习"),
      l("Neural Networks and Deep Learning", "神经网络与深度学习"),
      l("Reinforcement Learning", "强化学习"),
      l("Probability and Mathematical Statistics", "概率论与数理统计"),
      l("Advanced Software Development", "高级软件研发")
    ],
    credentialNote: l("QS10", "QS10"),
    tags: [l("Computing", "计算机"), l("AI Systems", "AI 系统"), l("Agent", "智能体"), l("Multimodal", "多模态")]
  },
  {
    id: "sta-bachelor",
    year: "2020",
    institution: l("Shanghai Theatre Academy", "上海戏剧学院"),
    programme: l("Bachelor of Arts", "艺术学学士"),
    field: l("Dramatic Literature", "戏剧影视文学"),
    period: "2020.10-2024.06",
    result: l("GPA: 4.25/5.0 (Ranked first in major, Shanghai Outstanding Graduate)", "GPA：4.25/5.0 （专业第一名，上海市优秀毕业生）"),
    rank: "专业第一名",
    status: "completed",
    notes: [
      l(
        "Main courses: Game Planning and Development (Unity&Python), Art and Artificial Intelligence, Film Screenwriting.",
        "2020.10-2024.06 主修课程：游戏策划与开发 (Unity&Python)、艺术与人工智能、电影编剧。"
      )
    ],
    coursework: [
      l("Game Planning and Development (Unity&Python)", "游戏策划与开发 (Unity&Python)"),
      l("Art and Artificial Intelligence", "艺术与人工智能"),
      l("Film Screenwriting", "电影编剧")
    ],
    credentialNote: l("Ranked first in major · Shanghai Outstanding Graduate", "专业第一名，上海市优秀毕业生"),
    tags: [l("Dramatic Literature", "戏剧影视文学"), l("Narrative", "叙事"), l("AI & Art", "艺术与人工智能")]
  },
  {
    id: "leeds-exchange",
    year: "2023",
    institution: l("University of Leeds, UK (QS77)", "英国利兹大学（QS77）"),
    programme: l("Undergraduate Overseas Exchange", "本科海外交换"),
    field: l("School of Computer Science", "计算机学院"),
    period: "2023.01-2023.06",
    result: l("GPA: 70.4/100 (First-class degree)", "GPA：70.4/100（一等学位）"),
    status: "completed",
    notes: [
      l(
        "Main courses: Computer Principles, Operating Systems, Databases, Discrete Mathematics, Data Structures and Algorithms.",
        "2023.01-2023.06 主修课程：计算机原理、操作系统、数据库、离散数学、数据结构与算法。"
      )
    ],
    coursework: [
      l("Computer Principles", "计算机原理"),
      l("Operating Systems", "操作系统"),
      l("Databases", "数据库"),
      l("Discrete Mathematics", "离散数学"),
      l("Data Structures and Algorithms", "数据结构与算法")
    ],
    credentialNote: l("QS77 · First-class degree", "QS77 · 一等学位"),
    tags: [l("Exchange", "交换"), l("Computer Science", "计算机"), l("Technology", "技术")],
    exchange: true
  }
];

export const researchItems: ResearchItem[] = [
  {
    id: "agentic-video-tracking",
    title: l("Agentic AI for Object Tracking in Videos", "Agentic AI for Object Tracking in Videos"),
    type: l("Multimodal Agent System and Computer Vision｜Graduation Thesis", "多模态Agent系统与计算机视觉｜毕业论文"),
    period: "2025.04-2025.9",
    status: "completed",
    description: l(
      "Build an intelligent-agent closed loop based on React-Loop, reconstruct video object tracking into an Agentic AI process that is “plannable, verifiable, and self-checking”, lower the barrier for non-experts in category selection, threshold tuning and ID assignment, and realize an end-to-end experience of “natural-language target specification → automatic tracking → automatic editing output”.",
      "构建基于React-Loop的智能体闭环，将视频目标追踪重构为“可规划、可验证、可自校验”的Agentic AI过程，降低非专家在类别选择、阈值调参与ID分配上的门槛，实现“自然语言指定目标→自动追踪→自动剪辑输出”的端到端体验。"
    ),
    highlights: [
      l(
        "○ Project goal: Build an intelligent-agent closed loop based on React-Loop, reconstruct video object tracking into an Agentic AI process that is “plannable, verifiable, and self-checking”, lower the barrier for non-experts in category selection, threshold tuning and ID assignment, and realize an end-to-end experience of “natural-language target specification → automatic tracking → automatic editing output”.",
        "○项目目标：构建基于React-Loop的智能体闭环，将视频目标追踪重构为“可规划、可验证、可自校验”的Agentic AI过程，降低非专家在类别选择、阈值调参与ID分配上的门槛，实现“自然语言指定目标→自动追踪→自动剪辑输出”的端到端体验。"
      ),
      l(
        "○ System/algorithm design: Build a cascaded system of “instruction parsing → existence verification → detection-tracking-reverification closed loop → trajectory bridging and editing”: use DeepSeek to parse natural language to generate YOLO category sets and CLIP prompts; introduce Gemini-2.5 Flash for target existence verification and initial detection parameter recommendation; the execution layer adopts YOLO multi-scale detection + ByteTrack identity preservation (scene-change reset + CLIP semantic filtering and cross-segment global ID merging), and exports temporally coherent video clips aligned with intent through trajectory bridging.",
        "○系统/算法设计：构建“指令解析→存在性验证→检测-追踪-重验证闭环→轨迹桥接与剪辑”级联系统：使用 DeepSeek解析自然语言生成YOLO类别集合与CLIP提示；引入Gemini-2.5 Flash进行目标存在性核验并推荐初始检测参数；执行层采用YOLO多尺度检测+ByteTrack身份保持（场景变化reset+CLIP语义过滤与跨片段全局ID合并），并通过轨迹桥接导出与意图对齐的时序连贯视频片段。"
      ),
      l(
        "○ Effects and contribution: Achieved average Recall 75.6% / Precision 92.7% / Coverage 92.5% on 14 test cases; verified the feasibility of the paradigm of “semantic-guided tracking + closed-loop reverification + automatic editing”, and identified the main bottlenecks of multimodal matching in scenarios with overly strong attribute descriptions / semantic ambiguity.",
        "○效果与贡献：在 14 个测试用例上取得平均召回率Recall 75.6% / 精准率Precision 92.7% / 覆盖率Coverage 92.5%；验证“语义引导追踪+闭环重验证+自动剪辑”范式的可行性，并识别多模态匹配在属性描述过强/语义歧义场景下的主要瓶颈。"
      )
    ],
    tags: [l("Multimodal Agent", "多模态Agent"), l("Computer Vision", "计算机视觉"), l("Graduation Thesis", "毕业论文")]
  }
];

export const awards: AwardItem[] = [
  {
    id: "shanghai-outstanding-graduate",
    title: l("Shanghai Outstanding Graduate", "上海市优秀毕业生"),
    issuer: "Shanghai Theatre Academy",
    year: "2024"
  }
];
