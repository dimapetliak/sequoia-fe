"use client";

import { Typography } from "@/components/UI/atoms/Typography";
import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import useMousePosition from "@/hooks/useMousePosition";
import Image from "next/image";
import nextConfig from "../../../../../next.config";
import { motion } from "framer-motion";
import { ArrowRight } from "../../atoms/Icons";

export const PortfolioGrid = () => {
  const { x, y } = useMousePosition();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isInsideContainer, setIsInsideContainer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768 || "ontouchstart" in window);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const dynamicClass =
    (activeIndex !== null ? styles[`hoveredBlock${activeIndex + 1}`] : "") ||
    (hoveredIndex !== null ? styles[`hoveredBlock${hoveredIndex + 1}`] : "");

  const handleContainerMouseEnter = () => {
    setIsInsideContainer(true);
  };

  const handleContainerMouseLeave = () => {
    setIsInsideContainer(false);
    setHoveredIndex(null);
    if (!isMobile) {
      setActiveIndex(null);
    }
  };

  const handleTileMouseEnter = (index: number) => {
    if (!isMobile) {
      setHoveredIndex(index);
      setActiveIndex(index);
    }
  };

  const handleTileMouseLeave = () => {
    if (!isMobile) {
      setHoveredIndex(null);
      setActiveIndex(null);
    }
  };

  const handleTileClick = (index: number) => {
    if (isMobile) {
      setActiveIndex((prev) => (prev === index ? null : index));
      setHoveredIndex(null);
    }
  };

  return (
    <div
      className={`${styles.container} ${dynamicClass}`}
      onMouseEnter={handleContainerMouseEnter}
      onMouseLeave={handleContainerMouseLeave}
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
        onMouseEnter={() => handleTileMouseEnter(0)}
        onMouseLeave={handleTileMouseLeave}
        onClick={() => handleTileClick(0)}
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
        onMouseEnter={() => handleTileMouseEnter(1)}
        onMouseLeave={handleTileMouseLeave}
        onClick={() => handleTileClick(1)}
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
        onMouseEnter={() => handleTileMouseEnter(2)}
        onMouseLeave={handleTileMouseLeave}
        onClick={() => handleTileClick(2)}
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
