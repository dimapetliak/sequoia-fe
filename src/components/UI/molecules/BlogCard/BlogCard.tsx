import styles from "./styles.module.scss";
import Link from "next/link";
import clsx from "clsx";
import { Tag } from "../Tag";
import { Typography } from "../../atoms/Typography";
import { ElementWrapper } from "../../atoms/ElementWrapper";
import nextConfig from "../../../../../next.config";

type BlogCardProps = {
  title: string;
  thumbnail: string;
  tags: string[];
  publishedAt: string;
  href: string;
  bannerTitle?: string;
  className?: string;
};

export const BlogCard = ({
  title,
  thumbnail,
  tags,
  publishedAt,
  href,
  bannerTitle = "NEW NFT COLLECTION",
  className,
}: BlogCardProps) => {
  const readableDate = new Date(publishedAt).toLocaleDateString('en-US', {
    year: "numeric",
    month: "long",
  });

  return (
    <article className={clsx(styles.card, className)}>
      <Link
        href={href}
        className={styles.link}
        aria-label={`Read blog post: ${title}`}
      >
        <ElementWrapper
          variants="transparent"
          borderRadius="small"
          backgroundImageUrl={
            thumbnail || `${nextConfig.basePath}/assets/waterTile.png`
          }
          className={styles.thumbnail}
        >
          <Typography as={"h3"} className={styles.heading} font="rattani">
            {bannerTitle}
          </Typography>
        </ElementWrapper>

        <div className={styles.content}>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <Tag label={tag} key={tag} />
            ))}
          </div>

          <Typography as={"h4"} className={styles.title}>
            {title}
          </Typography>

          <time dateTime={publishedAt} className={styles.date}>
            {readableDate}
          </time>
        </div>
      </Link>
    </article>
  );
};
