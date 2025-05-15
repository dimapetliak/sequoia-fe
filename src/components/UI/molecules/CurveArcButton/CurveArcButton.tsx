"use client";

import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { useMemo } from "react";

type CurvedArcButtonProps = {
  text: string;
  href: string;
  radius?: number;
  className?: string;
};

export const CurvedArcButton = ({
  text,
  href,
  radius = 120,
  className,
}: CurvedArcButtonProps) => {
  const characters = useMemo(() => text.split(""), [text]);

  const arcCharacters = characters.map((char, i) => {
    const angle = (i / (characters.length - 1)) * 180 - 90;
    // const x = radius * Math.cos((angle * Math.PI) / 180);
    // const y = radius * Math.sin((angle * Math.PI) / 180);
    return (
      <motion.span
        key={i}
        className={styles.char}
        style={{
          transform: `rotate(${angle}deg) translate(${radius}px) rotate(${90}deg)`,
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
      >
        {char}
      </motion.span>
    );
  });

  return (
    <motion.a
      href={href}
      className={clsx(styles.button, className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={styles.arc}>{arcCharacters}</div>
    </motion.a>
  );
};
