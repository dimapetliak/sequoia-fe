import React from "react";
import { SocialLink } from "../../atoms/SocialLink";
import {
  Linkedin,
  Twitter,
  Discord,
  Instagram,
  Telegram,
} from "../../atoms/Icons";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { motion } from "framer-motion";

export const SOCIAL_LINKS = [
  { id: "linkedin", href: "/", icon: <Linkedin />, label: "LinkedIn" },
  { id: "twitter", href: "/2", icon: <Twitter />, label: "X" },
  { id: "discord", href: "/3", icon: <Discord />, label: "Discord" },
  { id: "instagram", href: "/4", icon: <Instagram />, label: "Instagram" },
  { id: "telegram", href: "/8", icon: <Telegram />, label: "Telegram" },
];

type SocialLinksProps = {
  excludedLinks?: string[];
  linkClassName?: string;
  className?: string;
};

export const SocialLinks: React.FC<SocialLinksProps> = ({
  excludedLinks = [],
  linkClassName,
  className,
}) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className={clsx(styles.socialLinksContainer, className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {SOCIAL_LINKS.filter(({ id }) => !excludedLinks.includes(id)).map(
        ({ id, href, icon }) => (
          <motion.div key={id} variants={itemVariants} whileHover="hover">
            <SocialLink
              className={clsx(styles.socialLink, linkClassName)}
              href={href}
              icon={icon}
            />
          </motion.div>
        )
      )}
    </motion.div>
  );
};
