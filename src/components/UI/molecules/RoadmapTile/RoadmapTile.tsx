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
import { motion, useAnimation } from "framer-motion";
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
  // variants?: {};
};

// Animation variants
const pointVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const connectorVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
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
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.8,
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1,
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

// Enhanced active state animation variants
const activeConnectorVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

const activeConnectorChildVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const activeTileVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const activeContentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
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
}: // variants,
RoadmapTileProps) => {
  const tileRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [renderAbove, setRenderAbove] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const tileHeight = tileRef?.current?.getBoundingClientRect().height;

  // Animation controls for sequencing
  const connectorControls = useAnimation();
  const tileControls = useAnimation();

  useLayoutEffect(() => {
    const checkOverflow = () => {
      if (tileRef.current && parentRef?.current) {
        const tileRect = tileRef?.current?.getBoundingClientRect();
        const parentRect = parentRef.current?.getBoundingClientRect();

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

      if (isActive) {
        connectorControls.set("hidden");
        tileControls.set("hidden");

        await new Promise((resolve) => requestAnimationFrame(resolve));

        if (!isMounted) return;

        await connectorControls.start("visible");

        if (!isMounted) return;

        // Then animate tile
        await tileControls.start("visible");
      } else {
        connectorControls.start("visible");
        tileControls.start("visible");
      }
    };

    animateSequence();

    return () => {
      isMounted = false;
    };
  }, [isActive, currentIndex, connectorControls, tileControls]);

  // Helper functions to select the appropriate animation variants
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
      // variants={variants}
      className={clsx(styles.roadmapTileContainer, className)}
    >
      {point && (
        <motion.div
          className={styles.point}
          initial="hidden"
          animate="visible"
          variants={pointVariants}
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
      >
        {title && (
          <motion.div variants={getContentVariants()}>
            <Typography as="h4" textAlign="left" className={styles.title}>
              {title}
            </Typography>
          </motion.div>
        )}

        {descriptionList.length ? (
          <motion.ul className={styles.descriptionList}>
            {descriptionList.map((item, index) => (
              <motion.li
                key={index}
                className={styles.descriptionListItem}
                variants={getContentVariants()}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        ) : null}
      </motion.div>
    </motion.div>
  );
};
