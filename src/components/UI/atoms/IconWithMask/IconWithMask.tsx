import { ReactNode } from "react";
import { CurveMask } from "../CurveMask/CurveMask";
import { Decoration } from "../Decoration";
import styles from "./styles.module.scss";
import clsx from "clsx";

export type IconWithMaskProps = {
  content: ReactNode;
  variant?: "filled" | "outline";
  shape?: "round" | "oval";
  horizontalPosition?: "left" | "right" | "center";
  verticalPosition?: "top" | "middle" | "bottom";
  emoji?: string;
  customXAxisClassName?: string;
  customYAxisClassName?: string;
  className?: string;
  decorationClassName?: string;
  decorationWrapperClassName?: string;
};

export const IconWithMask = ({
  content,
  variant,
  shape,
  horizontalPosition = "left",
  verticalPosition = "top",
  emoji,
  decorationClassName,
  customXAxisClassName,
  customYAxisClassName,
  decorationWrapperClassName,
}: IconWithMaskProps) => {
  return (
    <CurveMask
      xAxisClassName={customXAxisClassName}
      yAxisClassName={customYAxisClassName}
      side={horizontalPosition === "center" ? undefined : horizontalPosition}
      position={verticalPosition}
    >
      <Decoration
        emoji={emoji}
        variant={variant}
        shape={shape}
        decorationWrapperClassName={decorationWrapperClassName}
        className={clsx(
          styles.decoration,
          styles[`${horizontalPosition}Position`],
          styles[`${verticalPosition}Position`],
          decorationClassName
        )}
      >
        {content}
      </Decoration>
    </CurveMask>
  );
};
