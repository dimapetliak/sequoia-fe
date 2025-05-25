"use client";

import { JSX, useRef, useState, useCallback, useLayoutEffect } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { Typography } from "../../atoms/Typography";
import { motion, Variants } from "framer-motion";
import { isDesktopScreen } from "@/utils";

type RoadmapTileProps = {
  point: string;
  title: string;
  descriptionList: string[];
  icon: JSX.Element;
  parentRef?: React.RefObject<HTMLDivElement | null>;
  isActive?: boolean;
  currentIndex?: number;
  className?: string;
  custom?: number;
  customVariants?: Variants;
};

// Animation variants for staggered children
const pointVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const connectorVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const connectorChildVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

const tileVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export const RoadmapTile = ({
  point,
  title,
  descriptionList,
  icon,
  parentRef,
  isActive,
  currentIndex,
  className,
  customVariants,
}: RoadmapTileProps) => {
  const tileRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [renderAbove, setRenderAbove] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const tileHeight = tileRef?.current?.getBoundingClientRect().height;

  useLayoutEffect(() => {
    const checkOverflow = () => {
      if (tileRef.current && parentRef?.current) {
        const tileRect = tileRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        const isOutOfBottom = tileRect.bottom > parentRect.bottom;
        const isOutOfTop = tileRect.top < parentRect.top;

        setIsOverflowing((prev) => {
          const newValue = isOutOfBottom || isOutOfTop;
          return prev !== newValue ? newValue : prev;
        });

        setRenderAbove((prev) => {
          const newValue = isOutOfBottom;
          return prev !== newValue ? newValue : prev;
        });
      }
    };

    const checkDesktop = () => {
      setIsDesktop(isDesktopScreen());
    };

    checkOverflow();
    checkDesktop();

    window.addEventListener("resize", checkOverflow);
    window.addEventListener("resize", checkDesktop);

    return () => {
      window.removeEventListener("resize", checkOverflow);
      window.removeEventListener("resize", checkDesktop);
    };
  }, [parentRef, currentIndex]);

  const getTileStyle = useCallback(() => {
    if (isActive && !isDesktop) {
      return {
        position: "absolute",
        top:
          isOverflowing && renderAbove && tileHeight
            ? `-${tileHeight - 20}px`
            : "90px",
      } as React.CSSProperties;
    }

    return undefined;
  }, [isActive, isDesktop, isOverflowing, renderAbove, tileHeight]);

  return (
    <motion.div
      variants={customVariants}
      className={clsx(styles.roadmapTileContainer, className)}
    >
      {/* Point - First in stagger sequence */}
      {point && (
        <motion.div className={styles.point} variants={pointVariants}>
          {point}
        </motion.div>
      )}

      {/* Connector - Second in stagger sequence */}
      {icon && (
        <motion.div
          className={clsx(styles.connector, {
            [styles.activeConnector]: isActive,
          })}
          variants={connectorVariants}
        >
          <motion.div
            className={styles.circle}
            variants={connectorChildVariants}
          />
          <motion.div
            className={styles.line}
            variants={connectorChildVariants}
          />
          <motion.div
            className={styles.iconContainer}
            variants={connectorChildVariants}
            animate={
              isActive
                ? {
                    scale: [1, 1.3, 1],
                    rotate: [0, 15, -15, 0],
                    transition: {
                      duration: 0.8,
                      ease: "easeInOut",
                      times: [0, 0.3, 0.6, 1],
                    },
                  }
                : {}
            }
          >
            {icon}
          </motion.div>
        </motion.div>
      )}

      <motion.div
        ref={tileRef}
        className={clsx(styles.tile, {
          [styles.active]: isActive && !isDesktop,
        })}
        style={getTileStyle()}
        variants={tileVariants}
        animate={
          isActive
            ? {
                transform: "translateY(5px)",
                opacity: 1,
                transition: {
                  duration: 0.8,
                  ease: "easeInOut",
                },
              }
            : {}
        }
      >
        {title && (
          <motion.div variants={contentVariants}>
            <Typography as="h4" textAlign="left" className={styles.title}>
              {title}
            </Typography>
          </motion.div>
        )}

        {descriptionList.length > 0 && (
          <motion.ul className={styles.descriptionList}>
            {descriptionList.map((item, index) => (
              <motion.li
                key={index}
                className={styles.descriptionListItem}
                variants={contentVariants}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </motion.div>
    </motion.div>
  );
};
