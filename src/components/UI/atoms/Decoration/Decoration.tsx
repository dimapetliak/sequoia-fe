"use client";

import React, { ReactNode, useState } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

interface DecorationProps {
  children?: ReactNode;
  variant?: "filled" | "outline";
  shape?: "round" | "oval" | "default";
  emoji?: string;
  className?: string;
  decorationWrapperClassName?: string;
}

type EmojiParticle = {
  id: number;
  x: number;
  y: number;
  rotate: number;
  delay: number;
  scale: number;
  opacity: number;
};

const EMOJI_SIZE = 40;
const PARTICLE_COUNT = 12;
const ANIMATION_DURATION = 1200;

export const Decoration: React.FC<DecorationProps> = ({
  children,
  variant = "filled",
  shape = "round",
  emoji: providedEmoji,
  className,
  decorationWrapperClassName,
}) => {
  const [particles, setParticles] = useState<EmojiParticle[]>([]);
  const [burstOrigin, setBurstOrigin] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [burstId, setBurstId] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!providedEmoji || isAnimating) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - EMOJI_SIZE / 2;
    const y = event.clientY - rect.top - EMOJI_SIZE / 2;

    setBurstOrigin({ x, y });

    const newParticles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 360, // more area
      y: (Math.random() - 0.5) * 360,
      rotate: Math.random() * 1440 - 720, // -720 to 720 degrees
      delay: Math.random() * 0.2,
      scale: 1 + Math.random() * 0.8, // 1.0 to 1.8
      opacity: 0.6 + Math.random() * 0.4, // 0.6 to 1.0
    }));

    setParticles(newParticles);
    setBurstId((prev) => prev + 1);
    setIsAnimating(true);

    setTimeout(() => {
      setParticles([]);
      setBurstOrigin(null);
      setIsAnimating(false);
    }, ANIMATION_DURATION);
  };

  return (
    <div
      onClick={handleClick}
      style={
        providedEmoji ? { cursor: "pointer", overflow: "visible" } : undefined
      }
      className={clsx(
        styles.decoration,
        variant && styles[variant],
        shape && styles[shape],
        providedEmoji && styles.hovering,
        className
      )}
    >
      {shape === "oval" ? (
        <div className={clsx(styles.ovalWrapper, decorationWrapperClassName)}>
          {children}
        </div>
      ) : (
        children
      )}

      <AnimatePresence>
        {burstOrigin &&
          particles.map((particle) => (
            <motion.div
              key={`${burstId}-${particle.id}`}
              initial={{
                opacity: particle.opacity,
                scale: 0.5,
                x: 0,
                y: 0,
                rotate: 0,
              }}
              animate={{
                opacity: 0,
                scale: particle.scale,
                x: particle.x,
                y: particle.y,
                rotate: particle.rotate,
              }}
              transition={{
                duration: 2,
                delay: particle.delay,
                ease: "easeOut",
              }}
              style={{
                position: "absolute",
                left: burstOrigin.x,
                top: burstOrigin.y,
                fontSize: "2.5rem",
                pointerEvents: "none",
                userSelect: "none",
                zIndex: 1000,
              }}
            >
              {providedEmoji}
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
};
