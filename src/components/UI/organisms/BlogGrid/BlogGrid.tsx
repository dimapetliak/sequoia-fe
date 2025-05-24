"use client";

import styles from "./styles.module.scss";
import { BlogCard } from "../../molecules/BlogCard";
import { ButtonControls } from "../../molecules/ButtonControls";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { BlogPost } from "@/types";

type BlogGridProps = {
  posts: BlogPost[];
  currentOffset?: number;
  totalCount?: number;
  isLoading?: boolean;
  onOffsetChange?: (offset: number) => void;
};

export const BlogGrid = ({
  posts,
  currentOffset = 0,
  totalCount = 0,
  onOffsetChange,
}: BlogGridProps) => {
  const PAGE_SIZE = 6;
  const showControls = totalCount || posts.length > PAGE_SIZE;

  const handleMoveBackward = () => {
    if (onOffsetChange && currentOffset > 0) {
      onOffsetChange(currentOffset - 1);
    }
  };

  const handleMoveForward = () => {
    if (onOffsetChange && currentOffset + PAGE_SIZE < totalCount) {
      onOffsetChange(currentOffset + 1);
    }
  };

  return (
    <motion.div
      className={styles.blogGridContainer}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div className={styles.blogGrid} layout>
        <AnimatePresence>
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                type: "spring",
                stiffness: 80,
              }}
            >
              <BlogCard
                title={post.title}
                image={post.image}
                tags={post.tags}
                publishedAt={post.publishedAt}
                href={`/blog/${post.slug}`}
                bannerTitle={post.bannerTitle}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {showControls && (
        <ButtonControls
          onMoveBackward={handleMoveBackward}
          onMoveForward={handleMoveForward}
          disableBackward={currentOffset === 0}
          disableForward={currentOffset + PAGE_SIZE >= totalCount}
        >
          <nav className={styles.pagination}>
            <ul className={styles.paginationList}>
              {Array.from(
                { length: Math.ceil(totalCount / PAGE_SIZE) },
                (_, index) => (
                  <li
                    className={clsx(styles.paginationItem, {
                      [styles.active]: index === currentOffset,
                    })}
                    key={index}
                    onClick={() => onOffsetChange && onOffsetChange(index)}
                  >
                    {index + 1}
                  </li>
                )
              )}
            </ul>
          </nav>
        </ButtonControls>
      )}
    </motion.div>
  );
};
