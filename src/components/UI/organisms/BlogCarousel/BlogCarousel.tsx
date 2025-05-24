"use client";

import Slider from "react-slick";
import { BlogCard } from "../../molecules/BlogCard";
import { ButtonControls } from "../../molecules/ButtonControls";
import styles from "./styles.module.scss";
import { useRef } from "react";
import { motion } from "framer-motion";
import { BlogPost } from "@/types";

type BlogCarouselProps = {
  posts: BlogPost[];
};

const SLIDER_SETTINGS = {
  dots: false,
  arrows: false,
  infinite: true,
  draggable: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  className: styles.carousel,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const BlogCarousel = ({ posts }: BlogCarouselProps) => {
  const sliderRef = useRef<Slider | null>(null);

  const moveToNext = () => {
    if (sliderRef.current) {
      sliderRef?.current?.slickNext();
    }
  };

  const moveToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <motion.div
      className={styles.blogCarousel}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Slider ref={sliderRef} {...SLIDER_SETTINGS}>
        {posts.map(
          (
            { id, title, image, tags, publishedAt, slug, bannerTitle },
            index
          ) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <BlogCard
                className={styles.card}
                title={title}
                image={image}
                tags={tags}
                publishedAt={publishedAt}
                href={`/blog/${slug}`}
                bannerTitle={bannerTitle}
              />
            </motion.div>
          )
        )}
      </Slider>
      <ButtonControls onMoveBackward={moveToPrev} onMoveForward={moveToNext} />
    </motion.div>
  );
};
