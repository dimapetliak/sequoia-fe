import { Container } from "@/components/UI/atoms/Container";
import { BlogCarousel } from "@/components/UI/organisms/BlogCarousel";

import styles from "./styles.module.scss";
import { Typography } from "@/components/UI/atoms/Typography";
import { MOCKED_POSTS } from "@/components/pages/BlogPage/constants";

type BlogBlockProps = {
  posts: unknown[];
};

export const BlogBlock = ({}: BlogBlockProps) => {
  return (
    <section>
      <Container className={styles.blogCarouselContainer}>
        <Typography textAlign="center" as="h2" font="rattani">
          BLOG
        </Typography>
        <BlogCarousel posts={MOCKED_POSTS} />
      </Container>
    </section>
  );
};
