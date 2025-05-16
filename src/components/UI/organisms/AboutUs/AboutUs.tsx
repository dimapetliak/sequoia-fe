"use client";

import Image from "next/image";
import { Diamond, Feather, Moon, Stars, Wigwam } from "../../atoms/Icons";
import { IconWithMask } from "../../atoms/IconWithMask";
import { ParallaxWrapper } from "../../atoms/ParallaxWrapper";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { Typography } from "../../atoms/Typography";
import nextConfig from "../../../../../next.config";
import { motion } from "framer-motion";
import { useState } from "react";

const GRID_ITEMS = [
  {
    id: 1,
    backgroundImage: `${nextConfig.basePath}/assets/aboutImage1.png`,
    title: "Mighty keepers",
    description:
      "Storyline and gameplay mechanics are both inspired by the mighty Sequoias intertwined with mysterious yet engaging ancient tribal Shamanic practices and beliefs. \n  Storyline and gameplay mechanics are both inspired by the mighty Sequoias intertwined with mysterious yet engaging ancient tribal Shamanic practices and beliefs.",
    decorationsActive: [],
    decorationsDefault: [],
  },
  {
    id: 2,
    backgroundImage: `${nextConfig.basePath}/assets/aboutImage.png`,
    title: "Mighty keepers",
    description:
      "Storyline and gameplay mechanics are both inspired by the mighty Sequoias intertwined with mysterious yet engaging ancient tribal Shamanic practices and beliefs.",
  },
  {
    id: 2,
    backgroundImage: `${nextConfig.basePath}/assets/aboutImage2.png`,
    title: "Mighty keepers",
    description:
      "Storyline and gameplay mechanics are both inspired by the mighty Sequoias intertwined with mysterious yet engaging ancient tribal Shamanic practices and beliefs.",
  },
];

export const AboutUs = () => {
  const [activeTile, _] = useState(GRID_ITEMS[1]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const renderActiveTile = () => {
    return (
      <ParallaxWrapper
        intensity={8}
        initialBackgroundPosition={"50% 50%"}
        className={styles.tileMain}
        style={{
          backgroundImage: `url(${activeTile.backgroundImage})`,
        }}
      >
        <motion.div
          className={styles.textContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div variants={textVariants}>
            <Typography as={"h4"} textAlign={"left"}>
              {activeTile.title}
            </Typography>
          </motion.div>

          <motion.div variants={textVariants}>
            <Typography as={"p"}>{activeTile.description}</Typography>
          </motion.div>
        </motion.div>
      </ParallaxWrapper>
    );
  };

  return (
    <motion.div
      className={styles.gridContainer}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className={styles.tileMainWrapper} variants={itemVariants}>
        {renderActiveTile()}
        <IconWithMask
          content={<Stars />}
          variant="filled"
          verticalPosition="top"
          horizontalPosition="center"
          decorationClassName={styles.starsDecoration}
          customXAxisClassName={styles.starsDecorationXAxis}
          customYAxisClassName={styles.starsDecorationYAxis}
          emoji="✨"
        />

        <IconWithMask
          content={<Wigwam />}
          variant="outline"
          shape={"oval"}
          verticalPosition="middle"
          horizontalPosition="left"
          decorationClassName={styles.wigwamDecoration}
          customXAxisClassName={styles.wigwamDecorationXAxis}
          customYAxisClassName={styles.wigwamDecorationYAxis}
        />
      </motion.div>

      <motion.div
        className={styles.tileSecondaryWrapper}
        variants={itemVariants}
      >
        <ParallaxWrapper
          intensity={8}
          initialBackgroundPosition={"center top"}
          className={styles.tileSecondary}
        >
          <div />
        </ParallaxWrapper>

        <IconWithMask
          content={<Moon />}
          variant="outline"
          shape="oval"
          horizontalPosition="left"
          verticalPosition="top"
          decorationClassName={styles.moonDecoration}
          customXAxisClassName={styles.moonDecorationXAxis}
          customYAxisClassName={styles.moonDecorationYAxis}
        />

        <IconWithMask
          content={
            <div className={styles.imageContainer}>
              <Image
                fill
                loading={"lazy"}
                style={{ objectFit: "cover" }}
                src={`${nextConfig.basePath}/assets/logo.svg`}
                alt={"Sequoia tile logo picture"}
              />
            </div>
          }
          variant="outline"
          shape="oval"
          horizontalPosition="right"
          verticalPosition="bottom"
          decorationWrapperClassName={styles.logoDecorationWrapper}
          decorationClassName={styles.logoDecoration}
          customXAxisClassName={styles.logoDecorationXAxis}
          customYAxisClassName={styles.logoDecorationYAxis}
        />
      </motion.div>

      <motion.div
        className={clsx(styles.mobileMainTile)}
        variants={itemVariants}
      >
        {renderActiveTile()}
        <IconWithMask
          content={<Stars />}
          variant="filled"
          verticalPosition="top"
          horizontalPosition="right"
          emoji="✨"
        />

        <IconWithMask
          content={<Wigwam />}
          variant="outline"
          shape={"oval"}
          verticalPosition="bottom"
          horizontalPosition="left"
          decorationClassName={styles.wigwamDecoration}
          customXAxisClassName={styles.wigwamDecorationXAxis}
          customYAxisClassName={styles.wigwamDecorationYAxis}
        />
      </motion.div>

      <motion.div
        className={styles.tileTertiaryWrapper}
        variants={itemVariants}
      >
        <ParallaxWrapper
          intensity={8}
          initialBackgroundPosition={"center top"}
          className={styles.tileTertiary}
        >
          <div />
        </ParallaxWrapper>

        <IconWithMask
          content={<Diamond />}
          variant="filled"
          horizontalPosition="right"
          verticalPosition="top"
          emoji="💎"
        />

        <IconWithMask
          content={<Feather />}
          variant="outline"
          shape="oval"
          horizontalPosition="left"
          verticalPosition="bottom"
          decorationClassName={styles.featherDecoration}
          customXAxisClassName={styles.featherDecorationXAxis}
          customYAxisClassName={styles.featherDecorationYAxis}
        />
      </motion.div>
    </motion.div>
  );
};
