export const NAVIGATION_LINKS = [
  {
    title: "Garden",
    url: "/sequoia-fe/garden",
  },
  {
    title: "NFTs",
    url: "/sequoia-fe/nfts",
  },
  {
    title: "Game",
    url: "/sequoia-fe/game",
  },
  {
    title: "Blog",
    url: "/sequoia-fe/blog",
  },
];

// Mobile menu animation variants
export const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: -20,
    transformOrigin: "top center",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 400,
      duration: 0.6,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -20,
    transition: {
      duration: 0.3,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const mobileItemVariants = {
  hidden: {
    opacity: 0,
    x: -30,
    rotateY: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300,
    },
  },
  exit: {
    opacity: 0,
    x: -30,
    rotateY: -15,
    transition: {
      duration: 0.2,
    },
  },
};

export const buttonContainerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
};

export const socialLinksVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotateX: -20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300,
      delay: 0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    rotateX: -20,
    transition: {
      duration: 0.2,
    },
  },
};
