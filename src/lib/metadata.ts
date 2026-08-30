import type { Metadata } from "next";
import { getLocalizedText, localizePath, type Locale, type LocalizedString } from "@/lib/i18n";

type LocalizedMetadataInput = {
  locale: Locale;
  pathname: string;
  title: LocalizedString;
  description: LocalizedString;
};

export const pageMetadata = {
  home: {
    title: { en: "Home", zh: "首页" },
    description: {
      en: "Caroline Xia's AI product manager portfolio, covering experience, selected work, education, and research.",
      zh: "夏静远的 AI 产品经理作品集，涵盖实习经历、精选项目、教育与研究。"
    }
  },
  experience: {
    title: { en: "Internship Experience", zh: "实习经历" },
    description: {
      en: "Caroline Xia's internship experience across AI products, model products, AI hardware, business operations, and data analysis.",
      zh: "夏静远在 AI 产品、模型产品、智能硬件、商业运营与数据分析方向的实习经历。"
    }
  },
  projects: {
    title: { en: "Projects", zh: "项目经历" },
    description: {
      en: "Caroline Xia's AI product project archive across consumer AI, interactive media, agents, and multimodal experiences.",
      zh: "夏静远的 AI 产品项目档案，覆盖消费级 AI、互动内容、智能体与多模态体验。"
    }
  },
  education: {
    title: { en: "Education & Research", zh: "教育与研究" },
    description: {
      en: "Caroline Xia's education and research background, including NUS, Shanghai Theatre Academy, and video object tracking research.",
      zh: "夏静远的教育与研究经历，包括新加坡国立大学、上海戏剧学院及视频目标跟踪研究。"
    }
  },
  contact: {
    title: { en: "Contact", zh: "联系" },
    description: {
      en: "Contact Caroline Xia for AI product, agent systems, model evaluation, multimodal AI, and product collaboration.",
      zh: "联系夏静远，交流 AI 产品、智能体系统、模型评测、多模态 AI 与产品合作。"
    }
  }
} satisfies Record<string, { title: LocalizedString; description: LocalizedString }>;

export function buildLocalizedMetadata({ locale, pathname, title, description }: LocalizedMetadataInput): Metadata {
  const localizedTitle = getLocalizedText(title, locale);
  const localizedDescription = getLocalizedText(description, locale);
  const canonical = localizePath(pathname, locale);

  return {
    title: localizedTitle,
    description: localizedDescription,
    alternates: {
      canonical,
      languages: {
        en: localizePath(pathname, "en"),
        "zh-CN": localizePath(pathname, "zh"),
        "x-default": localizePath(pathname, "zh")
      }
    },
    openGraph: {
      title: localizedTitle,
      description: localizedDescription,
      locale: locale === "zh" ? "zh_CN" : "en_US",
      alternateLocale: locale === "zh" ? ["en_US"] : ["zh_CN"],
      type: "website",
      url: canonical
    }
  };
}
