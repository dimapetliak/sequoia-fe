"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

interface CircularArcButtonProps {
  href: string;
  icon: ReactNode;
  texts: string[];
  size?: number;
  speed?: number; // seconds per full rotation
}

export const CircularButton: React.FC<CircularArcButtonProps> = ({
  href,
  icon,
  texts,
  size = 200,
  speed = 10,
}) => {
  const radius = size / 2 - 10;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.circularArcButton}
      style={{ width: size, height: size }}
    >
      <motion.svg
        className={styles.svgContainer}
        viewBox={`0 0 ${size} ${size}`}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
      >
        <defs>
          <path
            id="arcPath"
            d={`M ${size / 2} ${
              size / 2
            } m -${radius},0 a ${radius},${radius} 0 1,1 ${
              radius * 2
            },0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
            fill="transparent"
          />
        </defs>
        <text>
          <textPath href="#arcPath" startOffset="50%" textAnchor="middle">
            {Array.isArray(texts) ? texts.map((t) => `${t} `) : texts}
          </textPath>
        </text>
      </motion.svg>
      {icon}
    </a>
  );
};
