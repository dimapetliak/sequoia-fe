"use client";

import React, { ReactNode } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

interface FigureItemProps {
  className?: string;
  value?: string | number;
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
}) => {
  return (
    <div
      className={clsx(styles.figureItem, isMobile && styles.mobile, className)}
    >
      {children ||
        (value && description && (
          <div className={styles.content}>
            <span>{value}</span>
            <p>{description}</p>
          </div>
        ))}
    </div>
  );
};
