import type { LocalizedString, LocalizedValue } from "@/lib/i18n";

export type ContentStatus = "public" | "confidential" | "draft" | "planned" | "completed" | "in-progress";

export type LinkItem = {
  label: LocalizedValue;
  href?: string;
  external?: boolean;
};

export type ProjectMetric = {
  value: LocalizedValue;
  label: LocalizedString;
  context?: LocalizedString;
  verified: boolean;
};

export type ProjectSection = {
  id: string;
  title: LocalizedString;
  body: LocalizedString[];
};

export type DecisionItem = {
  title: LocalizedString;
  rationale: LocalizedString;
  alternative?: LocalizedString;
  tradeoff?: LocalizedString;
};

export type Project = {
  slug: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  organization?: string;
  role?: LocalizedString;
  year?: string;
  dateRange?: string;
  externalUrl?: string;
  status: ContentStatus;
  tags: LocalizedString[];
  categories: LocalizedString[];
  confidential?: boolean;
  metric?: ProjectMetric;
  sections: ProjectSection[];
  decisions: DecisionItem[];
};

export type Experience = {
  id: string;
  season: string;
  year: string;
  company: LocalizedValue;
  division?: LocalizedValue;
  role: LocalizedString;
  period: string;
  duration?: string;
  location: LocalizedString;
  description: LocalizedString;
  highlights?: LocalizedString[];
  tags: LocalizedString[];
  relatedProject?: {
    label: LocalizedValue;
    slug?: string;
  };
};

export type EducationItem = {
  id: string;
  year: string;
  institution: LocalizedValue;
  programme: LocalizedString;
  field?: LocalizedString;
  period: string;
  result?: LocalizedValue;
  rank?: string;
  coursework?: LocalizedString[];
  credentialNote?: LocalizedString;
  status?: ContentStatus;
  notes: LocalizedString[];
  tags: LocalizedString[];
  exchange?: boolean;
};

export type ResearchItem = {
  id: string;
  title: LocalizedString;
  type: LocalizedString;
  period: string;
  status: ContentStatus;
  description: LocalizedString;
  highlights?: LocalizedString[];
  tags: LocalizedString[];
};

export type AwardItem = {
  id: string;
  title: LocalizedString;
  issuer: string;
  year: string;
};
