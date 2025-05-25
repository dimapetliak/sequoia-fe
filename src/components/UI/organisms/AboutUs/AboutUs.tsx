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
import { MarkdownRenderer } from "../../atoms/MarkdownRenderer";
import { useState } from "react";

const GRID_ITEMS = [
  {
    id: 1,
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
  {
    id: 3,
    backgroundImage: `${nextConfig.basePath}/assets/aboutImage1.png`,
    title: "Mighty keepers",
    description:
      "Storyline and gameplay mechanics are both inspired by the mighty Sequoias intertwined with mysterious yet engaging ancient tribal Shamanic practices and beliefs. \n  Storyline and gameplay mechanics are both inspired by the mighty Sequoias intertwined with mysterious yet engaging ancient tribal Shamanic practices and beliefs.",
    decorationsActive: [],
    decorationsDefault: [],
  },
];

const DEFAULT_ACTIVE_TILE = GRID_ITEMS[0];

export const AboutUs = () => {
  const [activeTile, setActiveTile] = useState(DEFAULT_ACTIVE_TILE);

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

  const tileChangeVariants = {
    initial: { opacity: 0.6, scale: 0.98 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: {
      opacity: 0.6,
      scale: 0.98,
      transition: { duration: 0.5 },
    },
  };

  const handleActiveTile = (tileId: number) => () => {
    const selectedTile = GRID_ITEMS.find((tile) => tile.id === tileId);
    if (selectedTile && selectedTile !== activeTile) {
      setActiveTile(selectedTile);
    } else {
      setActiveTile(DEFAULT_ACTIVE_TILE);
    }
  };

  const renderActiveTile = () => {
    return (
      <ParallaxWrapper
        intensity={4}
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
            <MarkdownRenderer content={activeTile.description} />
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
      <motion.div
        className={styles.tileMainWrapper}
        key={activeTile.id}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={tileChangeVariants}
        onClick={handleActiveTile(1)}
      >
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
        onClick={handleActiveTile(2)}
      >
        <ParallaxWrapper
          intensity={4}
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
        onClick={handleActiveTile(1)}
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
        onClick={handleActiveTile(3)}
      >
        <ParallaxWrapper
          intensity={4}
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
