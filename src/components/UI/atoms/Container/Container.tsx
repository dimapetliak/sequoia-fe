import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

type ContainerProps = PropsWithChildren & {
  verticalPadding?: "small" | "medium" | "large";
  className?: string;
};

export const Container = ({
  verticalPadding = "medium",
  children,
  className,
}: ContainerProps) => {
  return (
    <div className={clsx(styles.container, styles[verticalPadding], className)}>
      {children}
    </div>
  );
};
