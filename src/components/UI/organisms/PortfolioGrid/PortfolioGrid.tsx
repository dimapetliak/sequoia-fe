"use client";

import { Typography } from "@/components/UI/atoms/Typography";
import styles from "./styles.module.scss";
import { useState } from "react";
import useMousePosition from "@/hooks/useMousePosition";
import Image from "next/image";
import nextConfig from "../../../../../next.config";
import { motion } from "framer-motion";
import { ArrowRight } from "../../atoms/Icons";

export const PortfolioGrid = () => {
  const { x, y } = useMousePosition();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isInsideContainer, setIsInsideContainer] = useState(false);
  const dynamicClass =
    hoveredIndex !== null ? styles[`hoveredBlock${hoveredIndex + 1}`] : "";

  return (
    <div
      className={`${styles.container} ${dynamicClass}`}
      onMouseEnter={() => setIsInsideContainer(true)}
      onMouseLeave={() => setIsInsideContainer(false)}
    >
      {isInsideContainer && (
        <motion.button
          animate={{
            left: x,
            top: y,
            x: "-50%",
            y: "-50%",
          }}
          initial={{
            left: x,
            top: y,
            x: "-50%",
            y: "-50%",
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 300,
            mass: 0.5,
          }}
          className={styles.button}
          style={{
            position: "fixed",
            pointerEvents: "none",
            WebkitMaskPosition: `${x}px ${y}px`,
          }}
        >
          <div className={styles.buttonWrapper}>
            <Image
              alt={`sequoia game`}
              width={180}
              height={180}
              className={styles.img}
              src={`${nextConfig.basePath}/assets/portfolio/circleButton.svg`}
            />
            <ArrowRight size={22} className={styles.icon} />
          </div>
        </motion.button>
      )}

      <div
        className={styles.child1}
        onMouseEnter={() => setHoveredIndex(0)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div className={styles.backgroundHover}>
          <Typography
            textAlign="left"
            as={"h3"}
            font="rattani"
            className={styles.title}
          >
            PARK
          </Typography>
          <div className={styles.hoverBlockText}>
            <Typography textAlign="left" as={"p"}>
              Beyond the game we are growing a park with 1,000 Sequoiadendron
              giganteum trees. Beyond the game we are growing a park with 1,000
              Sequoiadendron giganteum trees.
            </Typography>
            <Typography textAlign="left" as={"p"}>
              Beyond the game we are growing a park with 1,000 Sequoiadendron
              giganteum trees. Beyond the game we are growing a park with 1,000
              Sequoiadendron giganteum trees. Beyond the game we are growing a
              park with 1,000 Sequoiadendron giganteum trees.
            </Typography>
            <Typography textAlign="left" as={"p"}>
              Beyond the game we are growing a park with 1,000 Sequoiadendron
              giganteum trees.
            </Typography>
          </div>
        </div>
      </div>

      <div
        className={styles.child2}
        onMouseEnter={() => setHoveredIndex(1)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div className={styles.backgroundHover}>
          <Typography
            textAlign="left"
            as={"h3"}
            font="rattani"
            className={styles.title}
          >
            NFT
          </Typography>
          <div className={styles.hoverBlockText}>
            <Typography textAlign="left" as={"p"}>
              Beyond the game we are growing a park with 1,000 Sequoiadendron
              giganteum trees. Beyond the game we are growing a park with 1,000
              Sequoiadendron giganteum trees.
            </Typography>
            <Typography textAlign="left" as={"p"}>
              Beyond the game we are growing a park with 1,000 Sequoiadendron
              giganteum trees. Beyond the game we are growing a park with 1,000
              Sequoiadendron giganteum trees. Beyond the game we are growing a
              park with 1,000 Sequoiadendron giganteum trees.
            </Typography>
            <Typography textAlign="left" as={"p"}>
              Beyond the game we are growing a park with 1,000 Sequoiadendron
              giganteum trees.
            </Typography>
          </div>
        </div>
        <div className={styles.cutoutsWrapper}>
          <div className={styles.cutoutRightTop}></div>
          <div className={styles.cutoutRightBottom}></div>
          <div className={styles.cutoutLeftTop}></div>
          <div className={styles.cutoutLeftTopMob}></div>
          <div className={styles.cutoutLeftBottom}></div>
          <div className={styles.cutoutLeftBottomMob}></div>
        </div>
      </div>

      <div
        className={styles.child3}
        onMouseEnter={() => setHoveredIndex(2)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div className={styles.backgroundHover}>
          <Typography
            textAlign="left"
            as={"h3"}
            font="rattani"
            className={styles.title}
          >
            GAME
          </Typography>
          <div className={styles.hoverBlockText}>
            <Typography textAlign="left" as={"p"}>
              Beyond the game we are growing a park with 1,000 Sequoiadendron
              giganteum trees. Beyond the game we are growing a park with 1,000
              Sequoiadendron giganteum trees.
            </Typography>
            <Typography textAlign="left" as={"p"}>
              Beyond the game we are growing a park with 1,000 Sequoiadendron
              giganteum trees. Beyond the game we are growing a park with 1,000
              Sequoiadendron giganteum trees. Beyond the game we are growing a
              park with 1,000 Sequoiadendron giganteum trees.
            </Typography>
            <Typography textAlign="left" as={"p"}>
              Beyond the game we are growing a park with 1,000 Sequoiadendron
              giganteum trees.
            </Typography>
          </div>
        </div>
        <div className={styles.cutoutLeftBottom}></div>
      </div>
    </div>
  );
};
