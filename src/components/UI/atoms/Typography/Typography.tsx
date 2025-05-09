import { createElement, JSX } from "react";
import styles from "./styles.module.scss";

import clsx from "clsx";

type FontVariant = "poppins" | "rattani";

type TypographyProps<T extends keyof JSX.IntrinsicElements> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
  textAlign?: "left" | "center" | "right";
  font?: FontVariant;
} & JSX.IntrinsicElements[T];

export const Typography = <T extends keyof JSX.IntrinsicElements = "p">({
  as: Tag = "p" as T,
  children,
  className,
  textAlign = "left",
  font = "poppins",
  ...props
}: TypographyProps<T>) => {
  return createElement(
    Tag,
    {
      className: clsx(
        font === "poppins" && styles["font-poppins"],
        font === "rattani" && styles["font-rattani"],
        className
      ),
      style: {
        textAlign: textAlign,
      },
      ...props,
    },
    children
  );
};
