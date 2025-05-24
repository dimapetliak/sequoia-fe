export type BackgroundColorVariant =
  | "blue"
  | "green"
  | "purple"
  | "yellow"
  | "pink";

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  tags: string[];
  date: string;
  author: string;
  slug: string;
  publishedAt: string;
  bannerTitle?: string;
  content: string;
  href?: string;
};
