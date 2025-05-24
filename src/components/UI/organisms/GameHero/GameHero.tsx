"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { Collection, Price, Quantity, Types } from "../../atoms/Icons";
import { Typography } from "../../atoms/Typography";
import { GlassTile } from "../../molecules/GlassTile";
import styles from "./styles.module.scss";

const tileVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, type: "spring", stiffness: 120 },
  }),
};

export const GameHero = () => {
  return (
    <motion.div
      className={styles.background}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className={styles.heroContent}
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
      >
        <Typography font="rattani" as={"h1"} textAlign="left">
          GAME
        </Typography>
        <Typography as={"p"} textAlign="left">
          {`You gotta breathe in the game too! \n Make yourself known on the world
          map!`}
        </Typography>
      </motion.div>

      <div className={clsx(styles.glassTileContainer, styles.leftTiles)}>
        {[
          { icon: <Collection />, title: "Collection", subtitle: "Type" },
          { icon: <Quantity />, title: "1000", subtitle: "Quantity" },
        ].map((tile, i) => (
          <motion.div
            key={tile.title}
            custom={i}
            variants={tileVariants}
            initial="hidden"
            animate="visible"
          >
            <GlassTile {...tile} />
          </motion.div>
        ))}
        <div className={styles.leftTileCutoutTop} />
        <div className={styles.leftTileCutoutBottom} />
      </div>

      <div className={clsx(styles.glassTileContainer, styles.rightTiles)}>
        {[
          { icon: <Types />, title: "4 types", subtitle: "Rarity" },
          { icon: <Price />, title: "285$", subtitle: "Price" },
        ].map((tile, i) => (
          <motion.div
            key={tile.title}
            custom={i}
            variants={tileVariants}
            initial="hidden"
            animate="visible"
          >
            <GlassTile {...tile} />
          </motion.div>
        ))}
        <div className={styles.rightTileCutoutTop} />
        <div className={styles.rightTileCutoutBottom} />
      </div>
    </motion.div>
  );
};
