"use client";

import Slider from "react-slick";
import { BlogCard } from "../../molecules/BlogCard";
import { ButtonControls } from "../../molecules/ButtonControls";
import styles from "./styles.module.scss";
import { useRef } from "react";

type BlogCarouselProps = {
  posts: [];
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

const MOCK_POSTS = [
  {
    title: "How to Build Accessible Blog Cards in React",
    thumbnail: "",
    tags: ["Accessibility", "React", "SEO"],
    publishedAt: "2025-04-29",
    href: "/blog/accessibility-guide",
  },
  {
    title: "10 Tips for Writing Clean Code in JavaScript",
    thumbnail: "",
    tags: ["JavaScript", "Best Practices", "Coding"],
    publishedAt: "2025-03-15",
    href: "/blog/clean-code-tips",
  },
  {
    title: "Understanding React Hooks: A Beginner's Guide",
    thumbnail: "",
    tags: ["React", "Hooks", "JavaScript"],
    publishedAt: "2025-02-10",
    href: "/blog/react-hooks-guide",
  },
  {
    title: "Improving Web Performance with Lazy Loading",
    thumbnail: "",
    tags: ["Performance", "Web Development", "Optimization"],
    publishedAt: "2025-01-20",
    href: "/blog/lazy-loading",
  },
  {
    title: "Mastering CSS Grid for Responsive Design",
    thumbnail: "",
    tags: ["CSS", "Responsive Design", "Frontend"],
    publishedAt: "2024-12-05",
    href: "/blog/css-grid-guide",
  },
];

export const BlogCarousel = ({}: BlogCarouselProps) => {
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
    <div className={styles.blogCarousel}>
      <Slider ref={sliderRef} {...SLIDER_SETTINGS}>
        {MOCK_POSTS.map((post, index) => (
          <BlogCard
            className={styles.card}
            key={index}
            title={post.title}
            thumbnail={post.thumbnail}
            tags={post.tags}
            publishedAt={post.publishedAt}
            href={post.href}
          />
        ))}
      </Slider>
      <ButtonControls onMoveBackward={moveToPrev} onMoveForward={moveToNext} />
    </div>
  );
};
