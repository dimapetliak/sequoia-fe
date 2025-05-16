"use client";

import clsx from "clsx";
import styles from "./styles.module.scss";
import { ProgressBar } from "../../molecules/ProgressBar";
import { FigureItem } from "../../molecules/FigureItem";
import { Bitcoin, Stars, Sun } from "../../atoms/Icons";
import { ParallaxWrapper } from "../../atoms/ParallaxWrapper";
import { IconWithMask } from "../../atoms/IconWithMask";
import {
  motion,
  useAnimation,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

const AnimatedCounter = ({
  to,
  delay = 0,
  duration = 1,
}: {
  to: number;
  delay?: number;
  duration?: number;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    });

    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, delay, duration, rounded, to]);

  return <span>{display}</span>;
};

export const FiguresGrid = () => {
  const rootRef = useRef(null);
  const inView = useInView(rootRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  const leftGridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const rightGridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 70,
        damping: 20,
      },
    },
  };

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      ref={rootRef}
      className={styles.container}
      initial="hidden"
      animate={controls}
    >
      <motion.div
        className={styles.leftGrid}
        variants={leftGridVariants}
        initial="hidden"
        animate={controls}
      >
        <FigureItem className={styles.firstFigure} variants={itemVariants}>
          <ProgressBar
            titleClassName={styles.progressBarTitle}
            className={styles.progressBar}
            currentPercent={60}
            minValue={0}
            maxValue={1000}
            subtitle={"sequoias planted"}
          />
        </FigureItem>

        <FigureItem
          className={styles.secondFigure}
          value={<AnimatedCounter to={5} delay={1.2} />}
          description={"years of experience"}
          variants={itemVariants}
        />

        <ParallaxWrapper
          initialBackgroundPosition="-80px -625px"
          className={styles.thirdFigure}
          intensity={8}
          variants={itemVariants}
        >
          <IconWithMask
            content={<Bitcoin />}
            variant="filled"
            horizontalPosition="left"
            verticalPosition="top"
            emoji="💰"
          />
          <FigureItem
            value={">$190k"}
            description={"earned\n in carbon credits"}
          />
        </ParallaxWrapper>

        <FigureItem
          className={clsx(styles.secondFigure, styles.mobileFigure)}
          value={<AnimatedCounter to={5} delay={1.4} />}
          description={"years of experience"}
          isMobile
          variants={itemVariants}
        />
      </motion.div>

      <motion.div
        className={styles.rightGrid}
        variants={rightGridVariants}
        initial="hidden"
        animate={controls}
      >
        <ParallaxWrapper
          initialBackgroundPosition="-1502px -90px"
          className={styles.firstFigure}
          intensity={8}
          variants={itemVariants}
        >
          <IconWithMask
            content={<Sun />}
            variant="filled"
            horizontalPosition="left"
            verticalPosition="top"
            emoji="🌞"
          />
          <FigureItem value={">50k"} description={"trees\nplanted"} />
        </ParallaxWrapper>

        <div className={styles.column}>
          <ParallaxWrapper
            initialBackgroundPosition="-360px -20px"
            className={styles.secondFigure}
            intensity={8}
            variants={itemVariants}
          >
            <IconWithMask
              content={<Stars />}
              variant="filled"
              horizontalPosition="right"
              verticalPosition="top"
              emoji="✨"
            />
            <FigureItem value={"20k"} description={"NFTs\ncreated"} />
          </ParallaxWrapper>

          <FigureItem
            className={styles.thirdFigure}
            value={<AnimatedCounter to={3} delay={1.6} />}
            description={"countries"}
            variants={itemVariants}
          />

          <ParallaxWrapper
            initialBackgroundPosition="-360px -20px"
            className={clsx(styles.secondFigure, styles.mobileFigure)}
            intensity={8}
            variants={itemVariants}
          >
            <IconWithMask
              content={<Stars />}
              variant="filled"
              horizontalPosition="right"
              verticalPosition="top"
              emoji="✨"
            />
            <FigureItem value={"20k"} description={"NFTs\ncreated"} />
          </ParallaxWrapper>
        </div>
      </motion.div>
    </motion.div>
  );
};
