import type { LocalizedString } from "@/lib/i18n";
import type { Experience } from "./types";

const l = (en: string, zh: string): LocalizedString => ({ en, zh });

export const experiences: Experience[] = [
  {
    id: "bytedance-seed-aigc",
    season: "01",
    year: "2026",
    company: l("ByteDance (Seed)", "字节跳动 (Seed)"),
    division: "Seed",
    role: l("AIGC Model Product Manager", "AIGC模型产品经理"),
    period: "2026.08-Present",
    location: l("Beijing", "北京"),
    description: l(
      "Contributing to Seedance capability development through caption-data strategy optimization and an automated workflow from implementation to launch, within the boundaries of the applicable confidentiality agreement.",
      "推进 Seedance 相关能力建设，包括 Caption 数据策略优化、自动化工作流搭建与上线闭环；因受保密协议约束，具体细节不作展开。"
    ),
    highlights: [
      l(
        "○ Seedance capability development: Advancing caption-data strategy optimization and building an automated workflow through implementation and launch. Further details are omitted under the applicable confidentiality agreement.",
        "○Seedance相关能力建设：推进Caption数据策略优化、自动化工作流搭建与上线闭环（因受保密协议约束，具体细节不作展开）。"
      )
    ],
    tags: [l("AIGC", "AIGC"), l("Seedance", "Seedance"), l("Data Strategy", "数据策略")]
  },
  {
    id: "tiktok-ai-advertising",
    season: "02",
    year: "2026",
    company: l("ByteDance (TikTok)", "字节跳动 (TikTok)"),
    division: "Global Monetization Product and Technology",
    role: l("AI Advertising Product Manager", "AI广告产品经理"),
    period: "2026.06-2026.08",
    location: l("Beijing", "北京"),
    description: l(
      "Improved the EQ, evaluation system, agent memory, safety interception, and user journey of a lead-generation DM model, contributing to a statistically significant +4.54% lift in CVR2.",
      "围绕线索广告 DM 模型推进 EQ、评测体系、Agent 记忆、安全拦截与用户旅程优化，带动 CVR2 +4.54% 置信正向。"
    ),
    highlights: [
      l(
        "○ DM model EQ launch: Contributed to SFT for Qwen3.5-397B, raising its EQ score from 50.07 to 64.37. Combined with lead-capture frequency optimization, the launch delivered a statistically significant +4.54% lift in CVR2.",
        "○DM模型EQ优化上线：参与Qwen3.5-397B的SFT微调，EQ评分由50.07提升至64.37，叠加留资频次优化，带动CVR2 +4.54%置信正向。"
      ),
      l(
        "○ DM model v2.0 iteration: At the foundation-model layer, identified Qwen3.5-397B's high cost, lack of audio/video capabilities, and latency constraints; helped restart the foundation-model and workflow discussion and define evaluation dimensions covering DM capability, cost, latency, multilingual support, and multimodality. At the evaluation layer, diagnosed overlapping v1.0 EQ rubrics and an LLM judge that was not aligned with human review; contributed to rebuilding Golden Data and the rubric system from scratch, stratifying SFT training data and benchmark distributions by user intent × vertical, and introducing an iterative human-model alignment workflow. The first Golden Data version has been completed.",
        "○DM模型v2.0迭代拆解：①基模层面识别Qwen3.5-397B的高成本/无音视频能力/时延问题，推动重新启动基模+工作流讨论，梳理评估维度（DM能力/成本/时延/多语种/多模态）；②评估层面诊断v1.0 EQ Rubrics重合+LLM-Judge未人工对齐的问题，参与从0到1重构Golden Data与Rubrics体系，按用户意图×垂类分层设计SFT训练数据与Benchmark分布，引入人机多轮迭代对齐流程，已产出GoldenData初版。"
      ),
      l(
        "○ Agent flow optimization: Contributed to launching a dynamic knowledge base and memory mechanism for merchants' personalized bot-reply styles. The system summarizes business knowledge and messaging preferences on a T+1 basis from advertiser webpages and real conversations, addressing the stateless nature of LLMs. Led SBS human evaluation, which showed materially stronger cross-session coherence and personalization than the baseline, and advanced the solution into an A/B test.",
        "○Agent链路优化：针对商家对Bot回复风格的个性化需求，参与上线动态知识库+Memory机制，基于广告主网页与真实对话数据做T+1业务知识与话术偏好总结，解决大模型无状态（Stateless）痛点；主导SBS人工评估验证跨会话连贯性与个性化体验显著优于基线，并上线A/B实验。"
      ),
      l(
        "○ Machine-evaluation interception: Contributed to an S0-S3 bad-case severity framework and rolled out full machine evaluation for S0/S1 cases, reducing latency from 16 seconds to 5 seconds while meeting safety requirements.",
        "○机器评估拦截链路：参与制定Badcase判定S0-S3分级框架，推全S0/S1全量机器评估，安全性达标的情况下，压缩时延从16s到5s。"
      ),
      l(
        "○ User journey optimization: Identified lead loss outside business hours and launched a configurable night-shift mode to take over high-potential nighttime leads and recover otherwise lost customers.",
        "○用户旅程优化：定位非工作时段线索流失痛点，上线支持自定义时间的夜班模式，实现夜间高潜线索接管，召回流失客户。"
      )
    ],
    tags: [l("AI Agent", "AI Agent"), l("Lead Generation", "线索转化"), l("Commercial", "商业化")]
  },
  {
    id: "tiktok-aigc-model",
    season: "03",
    year: "2026",
    company: l("ByteDance (TikTok)", "字节跳动 (TikTok)"),
    division: "Global Monetization Product and Technology",
    role: l("AIGC Model Product Manager", "AIGC模型产品经理"),
    period: "2026.04-2026.06",
    location: l("Beijing", "北京"),
    description: l(
      "Led the iteration of Nebula AI short drama generation workspace and coordinated workflow and model evaluation.",
      "主导Nebula AI短剧生成工作台迭代，统筹AI短剧工作流的效果评估闭环。"
    ),
    highlights: [
      l(
        "○ Short drama generation platform: Led the iteration of Nebula AI short drama generation workspace, implemented Master-Sub-Worker Agent architecture and HITL mechanism, connected script structuring, asset generation, storyboard and video generation workflows, unified management of Workflow Snapshot and Provider Job status, achieved partial repainting and breakpoint resume, reduced computing power loss, and supported product Dogfooding.",
        "○短剧生成平台：主导Nebula AI短剧生成工作台迭代，落地Master-Sub-Worker Agent架构与HITL机制，打通剧本结构化、资产生成、分镜与视频生成链路，统一管理Workflow Snapshot与Provider Job状态，实现局部重绘与断点续跑，降低算力损耗，支撑产品Dogfooding。"
      ),
      l(
        "○ Short drama workflow evaluation: Coordinated the effect evaluation closed loop of AI short drama workflow, designed and carried out SBS evaluation at both Clip and Episode granularities, continuously guiding the tuning of Agent workflows.",
        "○短剧工作流评测：统筹AI短剧工作流的效果评估闭环，设计并开展Clip与Episode双重粒度的SBS评测，持续指导Agent工作流的调优。"
      ),
      l(
        "○ Digital-human model data preparation: Contributed deeply to the business definition of a 1.6B talking-head model. Built a live-stream micro-action dataset from scratch, systematically defining proprietary head, micro-expression, and hand-action standards together with prompt-mapping logic; called Seedance 2.0 and Kling v3 at scale to batch-generate training videos.",
        "○数字人模型数据准备：深入参与1.6B数字人口播模型的业务定义。从0到1搭建直播微动作数据集，体系化定义头部、微表情、手部专有动作规范及Prompt映射逻辑；规模化调用Seedance 2.0/ Kling v3等模型批量生成训练视频。"
      ),
      l(
        "○ Bernini video-editing model evaluation: Advanced SBS evaluation for source-video + prompt video-redrawing tasks. Built an evaluation set of nearly 1,300 cases, benchmarked Bernini closely against Kling V3 Omni, Wan 2.7, Grok Imagine, and other models, calculated human-preference win rates through blind labeling, provided a quantitative view of model capability, and selected showcase examples.",
        "○Bernini视频编辑模型评测：推动Bernini的SBS评估。针对源视频+Prompt视频重绘任务，建立近1300条评测集，深度对齐Kling V3 Omni、Wan 2.7、Grok Imagine等模型，通过盲测打标计算人工偏好胜率（Win Rate），为模型能力提供量化依据，并遴选Showcase。"
      ),
      l(
        "○ Short drama market Agent: For overseas markets, transformed multi-source unstructured data into standardized short drama genre clustering weekly reports, and accumulated visual recognition, weight calculation, genre labeling and quality review mechanisms.",
        "○短剧市场Agent：针对海外市场，将多源非结构化数据转化为标准化短剧题材聚类周报，沉淀视觉识别、权重计算、题材打标与质量复核机制。"
      )
    ],
    tags: [l("AIGC", "AIGC"), l("Model Evaluation", "模型评测"), l("Multimodal", "多模态")]
  },
  {
    id: "xiaomi-ai-hardware",
    season: "04",
    year: "2025",
    company: l("Xiaomi Technology Co., Ltd.", "小米科技有限责任公司"),
    division: l("Group Technical Committee", "集团技术委员会"),
    role: l("AI Hardware Product Manager", "AI硬件产品经理"),
    period: "2025.08-2026.01",
    location: l("Beijing", "北京"),
    description: l(
      "Delivered the AI recording bracelet “Memora” from 0 to 1 and passed real testing by 28 executives.",
      "从0到1交付AI录音手环「Memora」并通过28位高管实测（累计录音7634h，日均>7.5h）。"
    ),
    highlights: [
      l(
        "○ Core achievement: Delivered the AI recording bracelet “Memora” from 0 to 1 and passed real testing by 28 executives (cumulative recording 7634h, daily average >7.5h), building Xiaomi AI differentiation barriers with “on-device capability + Human-Car-Home ecosystem Agent”; and advanced the breakdown of commercial model and KOL pilot plans.",
        "○核心成果：从0到1交付AI录音手环「Memora」并通过28位高管实测（累计录音7634h，日均>7.5h），以“端侧能力+人车家生态Agent”构建小米AI差异化壁垒；并推进商业模型与KOL试点方案拆解。"
      ),
      l(
        "○ Multimodal perception and end-to-end understanding: Used Gemini 2.5 Pro (cloud) / MiMo-Audio (on-device) to conduct end-to-end understanding of day-level audio, outputting time-location-event structured scripts; established event segmentation benchmark, with average Precision 0.67 / Recall0.85 / Temporal IoU 0.63.",
        "○多模态感知与端到端理解：采用Gemini 2.5 Pro（云端）/ MiMo-Audio（端侧）对天级音频进行端到端理解，输出时间—地点—事件结构化剧本；建立事件切分benchmark，平均精准率Precision 0.67 / 召回率Recall0.85 / 时序交并比Temporal IoU 0.63。"
      ),
      l(
        "○ Memory construction and proactive intelligence: Designed and implemented hierarchical storage architecture, stored episodic memory based on file architecture, and extracted SVO triples through Graphiti to build graph-based semantic memory. Based on daily event flow, designed Agent-driven plugin distribution strategy to support personalized recall and push, and implemented sliding card interaction, with favorite rate increased by 25%.",
        "○记忆构建与主动智能：设计并落地分层存储架构，基于文件架构存储情节记忆（Episodic），并通过Graphiti提取SVO三元组构建图谱化语义记忆（Semantic）。基于每日事件流设计Agent驱动的插件分发策略，支撑个性化召回与推送，并落地滑动卡片交互，收藏率提升25%。"
      ),
      l(
        "○ Hardware engineering and data link optimization: Deeply participated in the definition of Wi-Fi transmission protocol based on ESP32-S3, and tackled technical problems around binary stream upload, sequence exception and breakpoint resume. By optimizing double-buffer logic and concurrency strategy, improved upload energy efficiency ratio from 3:1 to 10:1, achieved upload success rate of 92.5%, and shortened average closure time of key P0 failures to 0.5 days.",
        "○硬件工程与数据链路优化：深度参与基于ESP32-S3的Wi-Fi传输协议定义，针对二进制流上传、序列异常及断点续传进行技术攻坚。通过优化双缓冲区逻辑与并发策略，将上传能效比从3:1提升至10:1，上传成功率达92.5%，关键P0故障平均闭环耗时缩短至0.5天。"
      ),
      l(
        "○ Full-scenario ecosystem and plugin system: Built Xiaomi’s next-generation AI super entry based on user data. Wrote 7,000+ lines of full-stack code and developed plugins: ① AI Werewolf: supports users interacting with friends’ digital humans in the same session; ② Life recommendation: integrates Amap POI to realize proactive recommendation and one-click navigation, and expands task flows for Xiaomi “Human-Car-Home” ecosystem, verifying the scalable path from “plugin → action”.",
        "○全场景生态与插件系统：基于用户数据打造小米下一代AI超级入口。全栈编写7,000+行代码，开发插件：①AI狼人杀：支持用户与好友数字人同场互动；②生活推荐：接入高德POI实现主动推荐与一键导航，并面向小米“人车家”生态扩展任务链路，验证“插件→行动”的可扩展路径。"
      ),
      l(
        "○ Security architecture and privacy compliance: Promoted the implementation of hardware-level TEE encryption link, realized end-to-cloud full-link source-file encryption, and ensured data privacy security at storage and transmission levels in highly sensitive scenarios.",
        "○安全架构与隐私合规：推动硬件级TEE加密链路落地，实现端到云的全链路源文件加密，在高敏场景下确保存储与传输层面的数据隐私安全性。"
      )
    ],
    tags: [l("AI Hardware", "AI 硬件"), l("Edge AI", "端侧 AI"), l("Consumer", "消费级")]
  },
  {
    id: "xiaomi-automotive-data",
    season: "05",
    year: "2025",
    company: l("Xiaomi Technology Co., Ltd.", "小米科技有限责任公司"),
    division: l("Automotive Department", "汽车部"),
    role: l("Data Product Manager", "数据产品经理"),
    period: "2025.04-2025.07",
    location: l("Beijing", "北京"),
    description: l(
      "Promoted the construction of Xiaomi Auto public opinion and media digitalization system.",
      "推动搭建小米汽车舆情与媒介数字化体系，利用LLM+大数据架构实现千万级数据精准挖掘与公关实时监测处理闭环。"
    ),
    highlights: [
      l(
        "○ Core achievement: Promoted the construction of Xiaomi Auto public opinion and media digitalization system, using LLM + big data architecture to realize precise mining of tens of millions of data and closed-loop real-time PR monitoring and processing.",
        "○核心成果：推动搭建小米汽车舆情与媒介数字化体系，利用LLM+大数据架构实现千万级数据精准挖掘与公关实时监测处理闭环。"
      ),
      l(
        "○ Architecture design and data governance: Led the R&D of “Echo Public Opinion KOL Management Platform”, designed automated data collection and preprocessing system, solved external heterogeneous data synchronization bottlenecks; designed KOL rating model based on multidimensional weighted algorithm, quantified operating indicators (CPM/CPE/CPC) across Douyin, Weibo, Bilibili and other multi-source platforms, and drove media placement strategy from experience-oriented to algorithm-oriented.",
        "○架构设计与数据治理：主导「Echo舆情KOL管理平台」研发，设计自动化数据采集与预处理体系，解决外部异构数据同步瓶颈；设计基于多维加权算法的KOL评级模型，量化抖音、微博、B站等多源平台经营指标（CPM/CPE/CPC），驱动媒介投放策略从经验导向转向算法导向。"
      ),
      l(
        "○ High-performance system iteration: Deeply participated in the data architecture upgrade of “Echo Public Opinion 2.0”, designed and implemented MySQL + Elasticsearch (ES) heterogeneous data synchronization link; introduced Kafka message queue to realize asynchronous decoupling and peak shaving, supporting hourly incremental updates of tens of millions of indexes; promoted microservice decoupling of system architecture, improving functional module reuse rate by 40% through API orchestration.",
        "○高性能系统迭代：深度参与「Echo舆情2.0」数据架构升级，设计并落地MySQL+Elasticsearch (ES) 异构数据同步链路；引入Kafka消息队列实现异步解耦与削峰填谷，支撑千万级索引的小时级增量更新；推动系统架构微服务化解耦，通过API编排提升了40%的功能模块复用率。"
      ),
      l(
        "○ LLM-driven data mining: For intelligent driving accident scenarios, used SQL complex queries and feature engineering to pre-screen tens of millions of video samples; adopted GPT-4o mini combined with Few-shot Prompting and CoT to optimize labeling logic, collaborated with algorithm team to iterate recall model (Recall), and improved recognition accuracy of key driving accident scenarios to 81.29%.",
        "○LLM 驱动的数据挖掘：针对智能驾驶事故场景，利用SQL复杂查询与特征工程预筛选千万级视频样本；采用GPT-4o mini结合Few-shot Prompting 与CoT优化标注逻辑，与算法团队协同迭代召回模型（Recall），将关键驾驶事故场景识别准确率提升至81.29%。"
      ),
      l(
        "○ Agentic intelligent tool flow: Self-developed Weibo public opinion automated governance Bot “Heimi Terminator”, built Agent based on DeepSeek-R1, mounted Xiaomi vehicle model knowledge base and PR wording constraints through RAG, realized highly controllable copy generation; connected real-time public opinion API stream, building a second-level automated PR closed loop of “monitoring-analysis-response”.",
        "○Agentic 智能工具链路：自研微博舆情自动化治理Bot「黑米终结者」，基于DeepSeek-R1构建Agent，通过RAG挂载小米车型知识库与PR 话术约束，实现高度可控的文案生成；对接实时舆情API流，构建“监测-分析-响应”的秒级自动化公关闭环。"
      )
    ],
    tags: [l("Automotive", "汽车"), l("Data Product", "数据产品"), l("LLM", "LLM")]
  },
  {
    id: "fsg-ai-product",
    season: "06",
    year: "2023",
    company: l("Shanghai FSG Software Co., Ltd.", "上海复深蓝软件股份有限公司"),
    division: l("Strategic R&D Department", "战略研发部"),
    role: l("AI Product Manager", "AI产品经理"),
    period: "2023.07-2023.11",
    location: l("Shanghai", "上海"),
    description: l(
      "Led the development of “Yijia” AI development platform and provided highly available privatized AI solutions for 5 leading insurance companies.",
      "主导开发“易架”AI开发平台，为5家头部保险公司提供高可用的私有化AI解决方案"
    ),
    highlights: [
      l(
        "○ Product design: Led the development of “Yijia” AI development platform, completed requirement research, PRD document writing and prototype design (Figma), performed instruction fine-tuning based on LLaMA2 and StableDiffusionV2 models, supported users without computer background to develop AI workflows in an integrated way, improved enterprise efficiency by more than 30%, and provided highly available privatized AI solutions for 5 leading insurance companies.",
        "○产品设计：主导开发“易架”AI开发平台，完成需求调研、PRD文档撰写及原型设计（Figma），基于LLaMA2、StableDiffusionV2模型指令精调，支持无计算机背景用户一体化开发AI工作流，提升企业效率30%以上，为5家头部保险公司提供高可用的私有化AI解决方案"
      ),
      l(
        "○ Full-stack function integration: Led instruction fine-tuning based on LLaMA2 and Stable Diffusion, built 17 high-quality SFT datasets for the financial insurance industry, successfully achieved semantic alignment of models in vertical domains. Defined and implemented more than 30 core components, covering RAG knowledge base, automated data cleaning and image creation modules, and designed and implemented low-code AI workflows.",
        "○全栈功能集成：主导基于LLaMA2和Stable Diffusion的指令微调，针对金融保险行业构建17种高质量SFT数据集，成功实现模型在垂直领域的语义对齐。定义并落地 30 余项核心组件，涵盖RAG知识库、自动化数据清洗及图像创作模块，设计并实现低代码AI工作流。"
      ),
      l(
        "○ Model privatized deployment: Led the deployment solution design of FSG 13B/33B privatized large models. For the bottleneck of financial long-document parsing, introduced FlashAttention and dynamic VRAM management technology, supporting stable 8K-context inference. Through optimization of the model inference acceleration engine, improved system response speed by 32% and significantly reduced privatized computing power cost.",
        "○模型私有化部署：主导复深蓝13B/33B私有化大模型的部署方案设计，针对金融长文档解析瓶颈，引入FlashAttention与动态显存管理技术，支持 8K 上下文稳定推理。通过对模型推理加速引擎的优化，将系统响应速度提升 32%，显著降低了私有化算力成本。"
      )
    ],
    tags: [l("LLM", "大模型"), l("Low-Code", "低代码"), l("Enterprise", "企业服务")]
  },
  {
    id: "shanghai-zhipu-film-business-operations",
    season: "07",
    year: "2022",
    company: "Shanghai Zhipu Film",
    division: l("Internship", "实习"),
    role: l("Business Operations Analyst", "Business Operations Analyst"),
    period: "2022.08-2022.09",
    duration: "2 mos",
    location: l("Shanghai, China · On-site", "上海，中国 · 现场"),
    description: l(
      "Maintained and optimized the company website, developed a Content Management API, and implemented SEO and performance monitoring.",
      "维护并优化公司网站，开发内容管理 API，并落地 SEO 与性能监控。"
    ),
    highlights: [
      l(
        "○ Maintained & optimized the company’s website using React & Django, improving loading speed by 30%.",
        "○维护并优化公司网站，使用 React & Django 将加载速度提升 30%。"
      ),
      l(
        "○ Developed a Content Management API using Node.js & PostgreSQL, enabling automated content updates for company news, artist profile and film details.",
        "○使用 Node.js & PostgreSQL 开发 Content Management API，实现公司新闻、艺人资料和电影详情的自动化内容更新。"
      ),
      l(
        "○ Implemented SEO & performance monitoring using Google Analytics, enhancing page ranking by 20%.",
        "○使用 Google Analytics 落地 SEO 与性能监控，使页面排名提升 20%。"
      ),
      l("○ Skill association: Business Research and Software Design.", "○技能关联：Business Research and Software Design。")
    ],
    tags: [l("Business Research and Software Design", "Business Research and Software Design"), l("React", "React"), l("Django", "Django")]
  },
  {
    id: "agricultural-bank-business-operations",
    season: "08",
    year: "2022",
    company: l("Agricultural Bank of China", "中国农业银行"),
    division: l("Internship", "实习"),
    role: l("Business Operations", "Business Operations"),
    period: "2022.07-2022.08",
    duration: "2 mos",
    location: l("Shanghai, China · On-site", "上海，中国 · 现场"),
    description: l("Business Operations internship at Agricultural Bank of China.", "中国农业银行 Business Operations 实习。"),
    highlights: [l("○ Skill association: Finance and Business.", "○技能关联：Finance and Business。")],
    tags: [l("Finance and Business", "Finance and Business")]
  },
  {
    id: "pharmadeer-data-analyst",
    season: "09",
    year: "2021",
    company: "PharmaDeer",
    division: l("Part-time", "兼职"),
    role: l("Data Analyst", "Data Analyst"),
    period: "2021.08",
    duration: "1 mo",
    location: l("Shanghai, China · Hybrid", "上海，中国 · 混合办公"),
    description: l("Part-time Data Analyst role at PharmaDeer.", "PharmaDeer 数据分析兼职。"),
    highlights: [l("○ Skill association: Databases and Data Analysis.", "○技能关联：Databases and Data Analysis。")],
    tags: [l("Databases and Data Analysis", "Databases and Data Analysis")]
  }
];
