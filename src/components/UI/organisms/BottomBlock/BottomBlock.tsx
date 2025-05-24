"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { ArrowUpRight } from "../../atoms/Icons";
import { Typography } from "../../atoms/Typography";
import { Button } from "../../molecules/Button";
import styles from "./styles.module.scss";

type BottomBlockProps = {
  title: string;
  subtitle: string;
  buttonLabel?: string;
  className?: string;
  href?: string;
  onClick?: () => void;
};

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const BottomBlock = ({
  title,
  subtitle,
  buttonLabel,
  className,
  onClick,
  href,
}: BottomBlockProps) => {
  return (
    <motion.div
      className={clsx(styles.bottomBlockContainer, className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }} // triggers when 40% is in view, only once
    >
      <motion.div variants={itemVariants}>
        <Typography font={"rattani"} as="h2">
          {title}
        </Typography>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Typography as="p">{subtitle}</Typography>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Button
          href={href}
          onClick={onClick}
          label={buttonLabel || "JOIN COMMUNITY"}
          rightIcon={<ArrowUpRight />}
        />
      </motion.div>
    </motion.div>
  );
};
