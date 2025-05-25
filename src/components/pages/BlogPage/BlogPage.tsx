"use client";

import { Container } from "@/components/UI/atoms/Container";
import { Typography } from "@/components/UI/atoms/Typography";
import { Tag } from "@/components/UI/molecules/Tag";
import { BlogGrid } from "@/components/UI/organisms/BlogGrid";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import {
  containerVariants,
  MOCKED_POSTS,
  TAGS,
  tagVariants,
  TOTAL_COUNT,
} from "./constants";

export const BlogPage = ({}) => {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [currentOffset, setCurrentOffset] = useState(0);

  const onAddTag = (tag: string) => () => {
    setActiveTags([...activeTags, tag]);
  };

  const onRemoveTag = (tag: string) => () => {
    if (activeTags.includes(tag)) {
      const filteredTags = activeTags.filter((t) => t !== tag);
      setActiveTags(filteredTags);
    }
  };

  return (
    <section>
      <Container
        variant={containerVariants}
        className={styles.blogPageContainer}
      >
        <div className={styles.blogPageHeader}>
          <Typography font="rattani" as={"h1"}>
            BLOG
          </Typography>
          <motion.div
            className={styles.tagsContainer}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {TAGS.map((tag) => (
              <motion.div key={tag} variants={tagVariants}>
                <Tag
                  variant="glass"
                  onClick={onAddTag(tag)}
                  onRemove={onRemoveTag(tag)}
                  isActive={activeTags.includes(tag)}
                  label={tag}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <BlogGrid
          onOffsetChange={setCurrentOffset}
          currentOffset={currentOffset}
          totalCount={TOTAL_COUNT}
          posts={MOCKED_POSTS}
        />
      </Container>
    </section>
  );
};
