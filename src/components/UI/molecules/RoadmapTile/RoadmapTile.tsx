"use client";

import {
  JSX,
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
  useEffect,
} from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { Typography } from "../../atoms/Typography";
import { motion, useAnimation, Variants } from "framer-motion";
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

// Animation variants
const pointVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.05, // Reduced delay to make it appear first
    },
  }),
};

const connectorVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1, // No additional delay needed as we're controlling sequence in useEffect
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  }),
};

const connectorChildVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

const tileVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: i * 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  }),
};

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

// Enhanced active state variants
const activeConnectorVariants = connectorVariants;
const activeConnectorChildVariants = connectorChildVariants;
const activeTileVariants = tileVariants;
const activeContentVariants = contentVariants;

export const RoadmapTile = ({
  point,
  title,
  descriptionList,
  icon,
  parentRef,
  isActive,
  currentIndex,
  className,
  custom = 0,
  customVariants,
}: RoadmapTileProps) => {
  const tileRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [renderAbove, setRenderAbove] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const tileHeight = tileRef?.current?.getBoundingClientRect().height;

  const connectorControls = useAnimation();
  const tileControls = useAnimation();

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

  useEffect(() => {
    let isMounted = true;

    const animateSequence = async () => {
      if (!isMounted) return;

      // Reset all animations to hidden state
      if (isActive) {
        // Set all animations to hidden initially
        connectorControls.set("hidden");
        tileControls.set("hidden");

        await new Promise((resolve) => requestAnimationFrame(resolve));
        if (!isMounted) return;

        // Point animation happens automatically with its own variants

        // Wait a bit for point to appear before starting connector
        await new Promise((resolve) => setTimeout(resolve, 500));
        if (!isMounted) return;

        // Animate connector next
        await connectorControls.start("visible");
        if (!isMounted) return;

        // Wait a bit before animating the tile
        await new Promise((resolve) => setTimeout(resolve, 300));
        if (!isMounted) return;

        // Finally animate the tile
        await tileControls.start("visible");
      } else {
        // For non-active items, we'll still maintain the sequence but with shorter delays
        connectorControls.set("hidden");
        tileControls.set("hidden");

        await new Promise((resolve) => setTimeout(resolve, 100 * custom));
        if (!isMounted) return;

        await connectorControls.start("visible");

        await new Promise((resolve) => setTimeout(resolve, 150));
        if (!isMounted) return;

        await tileControls.start("visible");
      }
    };

    animateSequence();

    return () => {
      isMounted = false;
    };
  }, [isActive, currentIndex, connectorControls, tileControls, custom]);

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

  const getConnectorVariants = useCallback(() => {
    return isActive ? activeConnectorVariants : connectorVariants;
  }, [isActive]);

  const getConnectorChildVariants = useCallback(() => {
    return isActive ? activeConnectorChildVariants : connectorChildVariants;
  }, [isActive]);

  const getTileVariants = useCallback(() => {
    return isActive ? activeTileVariants : tileVariants;
  }, [isActive]);

  const getContentVariants = useCallback(() => {
    return isActive ? activeContentVariants : contentVariants;
  }, [isActive]);

  return (
    <motion.div
      variants={customVariants}
      className={clsx(styles.roadmapTileContainer, className)}
    >
      {point && (
        <motion.div
          className={styles.point}
          initial="hidden"
          animate="visible"
          variants={pointVariants}
          custom={custom}
        >
          {point}
        </motion.div>
      )}

      {icon && (
        <motion.div
          className={clsx(styles.connector, {
            [styles.activeConnector]: isActive,
          })}
          initial="hidden"
          animate={connectorControls}
          variants={getConnectorVariants()}
          custom={custom}
        >
          <motion.div
            className={styles.circle}
            variants={getConnectorChildVariants()}
          />
          <motion.div
            className={styles.line}
            variants={getConnectorChildVariants()}
          />
          <motion.div
            className={styles.iconContainer}
            variants={getConnectorChildVariants()}
            whileHover={{
              scale: 1.2,
              rotate: [0, 10, -10, 0],
              transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 300,
                damping: 10,
              },
            }}
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
        initial="hidden"
        animate={tileControls}
        variants={getTileVariants()}
        custom={custom}
      >
        {title && (
          <motion.div variants={getContentVariants()} custom={custom}>
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
                variants={getContentVariants()}
                custom={custom}
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
