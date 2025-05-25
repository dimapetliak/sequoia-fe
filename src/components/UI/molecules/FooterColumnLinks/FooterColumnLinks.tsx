import React from "react";
import { Typography } from "../../atoms/Typography";
import styles from "./styles.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

type LinkProps = {
  title: string;
  href: string;
};

type ColumnLinksProps = {
  columnTitle: string;
  links: LinkProps[];
};

const FOOTER_COLUMN_LINKS: ColumnLinksProps[] = [
  {
    columnTitle: "Contact us",
    links: [
      {
        title: "132 My Street, Kingston, New York 12401",
        href: "www.google.com",
      },
      { title: "emailexample@gmail.com", href: "emailexample@gmail.com" },
    ],
  },
  {
    columnTitle: "Our Services",
    links: [
      { title: "Development", href: "www.google.com" },
      { title: "Design", href: "www.google.com" },
      { title: "Devops", href: "www.google.com" },
    ],
  },
  {
    columnTitle: "Products",
    links: [
      { title: "WEB3", href: "www.google.com" },
      { title: "NFT", href: "www.google.com" },
      { title: "Apps", href: "www.google.com" },
    ],
  },
  {
    columnTitle: "Partners",
    links: [{ title: "Apps", href: "www.google.com" }],
  },
  {
    columnTitle: "Company",
    links: [
      { title: "Terms of use", href: "www.google.com" },
      { title: "Privacy policy", href: "www.google.com" },
      { title: "Blog", href: "www.google.com" },
      { title: "About", href: "www.google.com" },
    ],
  },
];

export const FooterColumnLinks = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.05,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
    hover: {
      x: 5,
      color: "#7cb57e", // Add a color change on hover
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div className={styles.wrapper} variants={containerVariants}>
      {FOOTER_COLUMN_LINKS.map(({ columnTitle, links }, columnIndex) => (
        <motion.div
          key={columnTitle}
          className={styles.columnContainer}
          variants={columnVariants}
          custom={columnIndex}
        >
          <Typography as={"span"} className={styles.columnTitle}>
            {columnTitle}
          </Typography>
          <motion.ul>
            {links.map(({ title, href }, linkIndex) => (
              <motion.li
                key={title}
                className={styles.linkContainer}
                variants={linkVariants}
                custom={linkIndex}
                whileHover="hover"
              >
                <Link className={styles.columnText} href={href}>
                  {title}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      ))}
    </motion.div>
  );
};
