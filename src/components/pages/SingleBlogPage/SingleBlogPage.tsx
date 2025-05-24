"use client";

import { BlogPost } from "@/types";
import styles from "./styles.module.scss";
import { Container } from "@/components/UI/atoms/Container";
import { MarkdownRenderer } from "@/components/UI/atoms/MarkdownRenderer";
import { Typography } from "@/components/UI/atoms/Typography";
import { BlogCarousel } from "@/components/UI/organisms/BlogCarousel";
import { MOCKED_POSTS } from "../BlogPage/constants";
import nextConfig from "../../../../next.config";
import { Tag } from "@/components/UI/molecules/Tag";
import { SOCIAL_LINKS } from "@/components/UI/molecules/SocialLinks/SocialLinks";
import clsx from "clsx";
import { Fragment, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

type SingleBlogPageProps = {
  post: BlogPost | null;
};

export const SingleBlogPage = ({ post }: SingleBlogPageProps) => {
  const {
    title,
    bannerTitle,
    content,
    publishedAt,
    // image,
    author,
    href,
    tags,
  } = post || {};

  // Animation references and controls
  const articleRef = useRef<HTMLDivElement>(null);
  const relatedPostsRef = useRef<HTMLElement>(null);
  const isArticleInView = useInView(articleRef, { once: true, amount: 0.2 });
  const isRelatedInView = useInView(relatedPostsRef, {
    once: true,
    amount: 0.2,
  });

  const readableDate =
    publishedAt &&
    new Date(publishedAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });

  // Animation variants
  const bannerVariants: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const socialLinkVariants: Variants = {
    hover: {
      scale: 1.1,
      y: -3,
      transition: { type: "spring", stiffness: 400 },
    },
  };

  const relatedPostsVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <Container className={styles.singleBlogPageContainer}>
      <motion.div
        className={styles.banner}
        style={{
          backgroundImage: `url(${nextConfig.basePath}/assets/waterTile.png)`,
        }}
        initial="hidden"
        animate="visible"
        variants={bannerVariants}
      >
        {bannerTitle && (
          <Typography as="h1" font="rattani" className={styles.bannerTitle}>
            {bannerTitle}
          </Typography>
        )}

        <motion.time
          dateTime={publishedAt}
          className={styles.date}
          variants={itemVariants}
        >
          {readableDate}
        </motion.time>

        <motion.div
          className={styles.tags}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          {tags?.map((tag, index) => (
            <motion.div key={tag} variants={itemVariants} custom={index}>
              <Tag label={tag} variant="glass" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {content && (
        <motion.article
          className={styles.article}
          ref={articleRef}
          initial="hidden"
          animate={isArticleInView ? "visible" : "hidden"}
          variants={contentVariants}
        >
          {title && (
            <motion.div variants={itemVariants}>
              <Typography as="h2">{title}</Typography>
            </motion.div>
          )}

          {author && (
            <motion.a
              href={`/sequoia-fe/${href}`}
              className={styles.link}
              variants={itemVariants}
            >
              {author}
            </motion.a>
          )}

          <motion.div variants={itemVariants}>
            <MarkdownRenderer className={styles.content} content={content} />
          </motion.div>

          <motion.div className={styles.socialLinks} variants={contentVariants}>
            {SOCIAL_LINKS.filter((el) => el.id !== "telegram").map((link) => (
              <Fragment key={link.id}>
                <motion.a
                  href={link.href}
                  className={clsx(styles.link, styles.socialLink)}
                  variants={socialLinkVariants}
                  whileHover="hover"
                >
                  {link.label}
                </motion.a>
              </Fragment>
            ))}
          </motion.div>
        </motion.article>
      )}

      <motion.section
        ref={relatedPostsRef}
        initial="hidden"
        animate={isRelatedInView ? "visible" : "hidden"}
        variants={relatedPostsVariants}
      >
        <motion.div variants={itemVariants}>
          <Typography
            className={styles.blogTitle}
            textAlign="center"
            font="rattani"
            as="h2"
          >
            YOU MIGHT BE INTERESTED
          </Typography>
        </motion.div>
        <BlogCarousel posts={MOCKED_POSTS} />
      </motion.section>
    </Container>
  );
};
