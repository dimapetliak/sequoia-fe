import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

type CurveMaskProps = PropsWithChildren & {
  position?: "top" | "middle" | "bottom";
  side?: "left" | "right";
  xAxisClassName?: string;
  yAxisClassName?: string;
};

export const CurveMask = ({
  position = "top",
  side = "left",
  xAxisClassName,
  yAxisClassName,
  children,
}: CurveMaskProps) => {
  return (
    <>
      {children}
      <div
        className={clsx(
          styles.xAxisContainer,
          styles[position],
          styles[side],
          xAxisClassName
        )}
      />
      <div
        className={clsx(
          styles.yAxisContainer,
          styles[position],
          styles[side],
          yAxisClassName
        )}
      />
    </>
  );
};
