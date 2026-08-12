import type { LocalizedString } from "@/lib/i18n";
import type { Project } from "./types";

const l = (en: string, zh: string): LocalizedString => ({ en, zh });

export const projects: Project[] = [
  {
    slug: "petsona",
    title: l("Petsona: Pet MBTI Social App", "Petsona：宠物MBTI社交应用"),
    subtitle: l("Co-founder, Full-stack Developer.", "联合创始人、全栈开发。"),
    description: l(
      "Won the third prize of TRAE Friends Hackathon with “AI + pet social networking”; currently incubating jointly with a hardware company in Shenzhen for commercialization in the global market.",
      "凭借“AI+宠物社交”荣获TRAE Friends Hackathon三等奖；目前与深圳某硬件企业联合孵化，针对全球市场进行商业化落地。"
    ),
    role: l("Co-founder, Full-stack Developer", "联合创始人、全栈开发"),
    year: "2026",
    dateRange: "2026.02-Present",
    externalUrl: "http://43.135.181.240/",
    status: "public",
    tags: [l("Consumer AI", "消费级 AI"), l("Social", "社交"), l("Full-stack", "全栈")],
    categories: [l("Independent", "独立产品"), l("Consumer", "消费级")],
    sections: [
      {
        id: "project-content",
        title: l("Project Content", "项目内容"),
        body: [
          l(
            "○ Honors and incubation: Won the third prize of TRAE Friends Hackathon with “AI + pet social networking”; currently incubating jointly with a hardware company in Shenzhen for commercialization in the global market.",
            "○荣誉与孵化：凭借“AI+宠物社交”荣获TRAE Friends Hackathon三等奖；目前与深圳某硬件企业联合孵化，针对全球市场进行商业化落地。"
          ),
          l(
            "○ Product strategy: Define a pet version of Tinder, focusing on the “nearby dogs” feature. Through LBS and pet MBTI algorithm, realize precise matching and solve pet owners’ “ice-breaking” pain point in offline social networking.",
            "○产品策略： 定义宠物版Tinder，主打“附近的狗”功能。通过LBS与宠物MBTI算法实现精准匹配，解决宠物主在线下社交中的“破冰”痛点。"
          ),
          l(
            "○ Business model design: Planned and implemented a dual-driven profit system. Designed tiered membership subscription; and built location-based pet communities, realizing traffic monetization through community operation and collaboration with surrounding businesses.",
            "○商业模式设计：规划并落地双驱动盈利体系。设计分层会员订阅；并搭建基于地理位置的宠物社群，通过社群运营与周边商业联动实现流量变现。"
          )
        ]
      }
    ],
    decisions: []
  },
  {
    slug: "curious-conch",
    title: l("Curious Conch: Children’s AI Critical Thinking Education Platform", "好奇海螺：少儿AI思辨教育平台"),
    subtitle: l("Co-founder, Full-stack Developer｜Third Prize, 11th Shanghai “Huichuang Youth” — College Students’ Cultural and Creative Works.", "联合创始人、全栈开发｜第十一届上海市“汇创青春”——大学生文化创意作品三等奖。"),
    description: l(
      "Co-founder, Full-stack Developer｜Third Prize, 11th Shanghai “Huichuang Youth” — College Students’ Cultural and Creative Works｜2026.02-Present.",
      "联合创始人、全栈开发｜第十一届上海市“汇创青春”——大学生文化创意作品三等奖｜2026.02-至今"
    ),
    role: l("Co-founder, Full-stack Developer", "联合创始人、全栈开发"),
    year: "2026",
    dateRange: "2026.02-Present",
    status: "completed",
    tags: [l("AI Education", "AI 教育"), l("Critical Thinking", "思辨教育"), l("Full-stack", "全栈")],
    categories: [l("Education", "教育"), l("Independent", "独立产品")],
    sections: [],
    decisions: []
  },
  {
    slug: "global-top-star",
    title: l("You Must Become a Global Top Star: AI Interactive Film-Game", "你一定要成为全球顶流：AI互动影游"),
    subtitle: l("Lead, Full-stack Developer｜Douyin AI Creator Transformation Program · Beijing Haidian Second Station Third Prize.", "负责人、全栈开发｜抖音AI创变者计划・北京海淀第二站三等奖。"),
    description: l(
      "Lead, Full-stack Developer｜Douyin AI Creator Transformation Program · Beijing Haidian Second Station Third Prize｜2026.06-Present.",
      "负责人、全栈开发｜抖音AI创变者计划・北京海淀第二站三等奖｜2026.06-至今"
    ),
    role: l("Lead, Full-stack Developer", "负责人、全栈开发"),
    year: "2026",
    dateRange: "2026.06-Present",
    status: "completed",
    tags: [l("AI Interactive Film-Game", "AI互动影游"), l("Full-stack", "全栈"), l("AIGC", "AIGC")],
    categories: [l("Interactive", "互动"), l("AIGC", "AIGC")],
    sections: [],
    decisions: []
  },
  {
    slug: "living-chronicles",
    title: l("Living chronicles: Let AI Deposit Your Old Photos into Memories", "Living chronicles：让AI把你的老照片沉淀成记忆"),
    subtitle: l("Co-founder, Full-stack Developer｜Singapore Community Elderly-care Public Welfare Project.", "联合创始人、全栈开发｜新加坡社区敬老公益项目。"),
    description: l(
      "Co-founder, Full-stack Developer｜Singapore Community Elderly-care Public Welfare Project｜2026.02-Present.",
      "联合创始人、全栈开发｜新加坡社区敬老公益项目｜2026.02-至今"
    ),
    role: l("Co-founder, Full-stack Developer", "联合创始人、全栈开发"),
    year: "2026",
    dateRange: "2026.02-Present",
    status: "public",
    tags: [l("Memory", "记忆"), l("Public Welfare", "公益"), l("Full-stack", "全栈")],
    categories: [l("Independent", "独立产品"), l("Community", "社区")],
    sections: [],
    decisions: []
  }
];

export const featuredProjects = projects.slice(0, 3);
