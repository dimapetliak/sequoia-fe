import { Container } from "@/components/UI/atoms/Container";
import { BlogCarousel } from "@/components/UI/organisms/BlogCarousel";

import styles from "./styles.module.scss";
import { Typography } from "@/components/UI/atoms/Typography";

type BlogBlockProps = {
  posts: unknown[];
};

export const BlogBlock = ({}: BlogBlockProps) => {
  return (
    <section>
      <Container className={styles.blogCarouselContainer}>
        <Typography textAlign="center" as="h2">
          BLOG
        </Typography>
        <BlogCarousel posts={[]} />
      </Container>
    </section>
  );
};
