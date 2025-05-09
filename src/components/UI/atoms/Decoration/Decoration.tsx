"use client";

import React, { ReactNode, useCallback, useState } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

interface DecorationProps {
  children?: ReactNode;
  variant?: "filled" | "outline";
  shape?: "round" | "oval" | "default";
  emoji?: string;
  className?: string;
  decorationWrapperClassName?: string;
}

// const getEmojiForIcon = (iconType: any): string => {
//   const iconName = iconType?.type?.name;

//   switch (iconName) {
//     case "Sun":
//       return "☀️";
//     case "Bitcoin":
//       return "💰";
//     case "Sprout":
//       return "🌱";
//     case "Stars":
//       return "✨";
//     default:
//       return "❤️";
//   }
// };

type FloatingEmoji = {
  id: number;
  emoji: string;
  x: number;
  y: number;
};

export const Decoration: React.FC<DecorationProps> = ({
  children,
  variant = "filled",
  shape = "round",
  emoji: providedEmoji,
  className,
  decorationWrapperClassName,
}) => {
  const [floatingEmojis, setFloatingEmojis] = useState<FloatingEmoji[]>([]);
  const [counter, setCounter] = useState(0);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (emoji) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const offsetX = x + (Math.random() * 40 - 20);
      const offsetY = y + (Math.random() * 10 - 20);

      const newEmoji = {
        id: counter,
        emoji,
        x: offsetX,
        y: offsetY,
      };

      setFloatingEmojis((prev) => [...prev, newEmoji]);
      setCounter((prev) => prev + 1);

      setTimeout(() => {
        setFloatingEmojis((prev) => prev.filter((e) => e.id !== newEmoji.id));
      }, 1000);
    }
  };

  const emoji = providedEmoji;

  const renderEmojis = useCallback(() => {
    return floatingEmojis.map((item) => (
      <div
        key={item.id}
        className={styles.floatingEmoji}
        style={{
          position: "absolute",
          left: `${item.x}px`,
          top: `${item.y}px`,
          pointerEvents: "none",
          zIndex: 1000,
        }}
      >
        {item.emoji}
      </div>
    ));
  }, [floatingEmojis]);

  return (
    <div
      onClick={handleClick}
      style={emoji ? { cursor: "pointer" } : undefined}
      className={clsx(
        styles.decoration,
        variant && styles[variant],
        shape && styles[shape],
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

      {renderEmojis()}
    </div>
  );
};
