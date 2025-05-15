"use client";

import { ProgressBar } from "@/components/UI/molecules/ProgressBar";
import styles from "./styles.module.scss";
import { Typography } from "../../atoms/Typography";
import Image from "next/image";
import nextConfig from "../../../../../next.config";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  Variants,
  useAnimation,
} from "framer-motion";
import { useRef, useEffect } from "react";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useSpring(useTransform(scrollYProgress, [0, 1], [0, 80]), {
    stiffness: 50,
    damping: 20,
  });
  const yImage = useSpring(useTransform(scrollYProgress, [0, 1], [0, 50]), {
    stiffness: 40,
    damping: 25,
  });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.98, skewY: 0 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      skewY: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const controls = useAnimation();
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div ref={ref} className={styles.container}>
      <motion.div
        className={styles.textWrapper}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        style={{ y: yText }}
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <motion.div className={styles.textContainer}>
          <motion.div variants={childVariants}>
            <Typography as="h4">A breath of fresh air with</Typography>
          </motion.div>

          <motion.div
            variants={childVariants}
            style={{ y: yImage }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 10,
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <Image
                className={styles.heroImage}
                alt={`sequoia game`}
                width={1100}
                height={272}
                src={`${nextConfig.basePath}/assets/largeLogo.svg`}
              />
            </motion.div>
          </motion.div>

          <motion.div variants={childVariants}>
            <Typography as="p">
              Environmentally oriented eco-system built using WEB3 technology
            </Typography>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className={styles.trees} />

      <motion.div className={styles.progressBarWrapper}>
        <ProgressBar
          className={styles.progressBar}
          titleClassName={styles.progressBarTitle}
          currentPercent={60}
          minValue={0}
          maxValue={1000}
          subtitle={"sequoias planted"}
        />
      </motion.div>
    </div>
  );
};
