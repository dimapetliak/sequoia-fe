"use client";

import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";

type ContainerProps = PropsWithChildren & {
  verticalPadding?: "small" | "medium" | "large";
  className?: string;
  variant?: Variants;
};

export const Container = ({
  verticalPadding = "medium",
  children,
  className,
  variant,
}: ContainerProps) => {
  return (
    <motion.div
      variants={variant}
      className={clsx(styles.container, styles[verticalPadding], className)}
    >
      {children}
    </motion.div>
  );
};
