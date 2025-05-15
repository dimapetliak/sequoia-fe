"use client";

import React, { ReactNode } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { motion, MotionProps } from "framer-motion";

interface FigureItemProps extends MotionProps {
  className?: string;
  value?: string | number | ReactNode;
  description?: string;
  children?: ReactNode;
  isMobile?: boolean;
}

export const FigureItem: React.FC<FigureItemProps> = ({
  className,
  value,
  description,
  children,
  isMobile = false,
  ...motionProps
}) => {
  return (
    <motion.div
      className={clsx(styles.figureItem, isMobile && styles.mobile, className)}
      {...motionProps}
    >
      {children ||
        (value && description && (
          <div className={styles.content}>
            <span>{value}</span>
            <p>{description}</p>
          </div>
        ))}
    </motion.div>
  );
};
