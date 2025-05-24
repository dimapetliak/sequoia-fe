// Animation variants
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const tagVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 24 },
  },
};

export const MOCKED_POSTS = [
  {
    id: 1,
    title: "Upcoming major update for our games and garden in March 2025 ",
    excerpt:
      "A quick dive into React Server Components and how they change the way we build apps.",
    image: "/images/blog/react-server-components.jpg",
    tags: ["News", "Game"],
    date: "2025-05-20",
    author: "Jane Doe",
    slug: "article-1",
    publishedAt: "2025-05-20T10:00:00Z",
  },
  {
    id: 2,
    title: "Upcoming major update for our games and garden in March 2025 ",
    excerpt:
      "A quick dive into React Server Components and how they change the way we build apps.",
    image: "/images/blog/react-server-components.jpg",
    tags: ["News", "Game"],
    date: "2025-05-20",
    author: "Jane Doe",
    slug: "article-1",
    publishedAt: "2025-05-20T10:00:00Z",
  },
  {
    id: 3,
    title: "Upcoming major update for our games and garden in March 2025 ",
    excerpt:
      "A quick dive into React Server Components and how they change the way we build apps.",
    image: "/images/blog/react-server-components.jpg",
    tags: ["News", "Game"],
    date: "2025-05-20",
    author: "Jane Doe",
    slug: "article-1",
    publishedAt: "2025-05-20T10:00:00Z",
  },
  {
    id: 4,
    title: "Upcoming major update for our games and garden in March 2025 ",
    excerpt:
      "A quick dive into React Server Components and how they change the way we build apps.",
    image: "/images/blog/react-server-components.jpg",
    tags: ["News", "Game"],
    date: "2025-05-20",
    author: "Jane Doe",
    slug: "article-1",
    publishedAt: "2025-05-20T10:00:00Z",
  },
  {
    id: 5,
    title: "Upcoming major update for our games and garden in March 2025 ",
    excerpt:
      "A quick dive into React Server Components and how they change the way we build apps.",
    image: "/images/blog/react-server-components.jpg",
    tags: ["News", "Game"],
    date: "2025-05-20",
    author: "Jane Doe",
    slug: "article-1",
    publishedAt: "2025-05-20T10:00:00Z",
  },
  {
    id: 6,
    title: "Upcoming major update for our games and garden in March 2025 ",
    excerpt:
      "A quick dive into React Server Components and how they change the way we build apps.",
    image: "/images/blog/react-server-components.jpg",
    tags: ["News", "Game"],
    date: "2025-05-20",
    author: "Jane Doe",
    slug: "article-1",
    publishedAt: "2025-05-20T10:00:00Z",
  },
  {
    id: 7,
    title: "Upcoming major update for our games and garden in March 2025 ",
    excerpt:
      "A quick dive into React Server Components and how they change the way we build apps.",
    image: "/images/blog/react-server-components.jpg",
    tags: ["News", "Game"],
    date: "2025-05-20",
    author: "Jane Doe",
    slug: "article-1",
    publishedAt: "2025-05-20T10:00:00Z",
  },
  {
    id: 8,
    title: "Upcoming major update for our games and garden in March 2025 ",
    excerpt:
      "A quick dive into React Server Components and how they change the way we build apps.",
    image: "/images/blog/react-server-components.jpg",
    tags: ["News", "Game"],
    date: "2025-05-20",
    author: "Jane Doe",
    slug: "article-1",
    publishedAt: "2025-05-20T10:00:00Z",
  },
];

export const TAGS = ["News", "Game", "NFTs", "Garden", "Popular", "Tutorials"];

export const TOTAL_COUNT = MOCKED_POSTS.length;
