import { ReactNode } from "react";
import styles from "./styles.module.scss";
import { Typography } from "../../atoms/Typography";
import clsx from "clsx";

type GlassTileProps = {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
};

export const GlassTile = ({
  icon,
  title,
  subtitle,
  className,
}: GlassTileProps) => {
  return (
    <div className={clsx(styles.glassTileContainer, className)}>
      <div className={styles.iconContainer}>{icon}</div>
      <div className={styles.textContainer}>
        {title && <Typography as="span">{title}</Typography>}
        {subtitle && <Typography as="p">{subtitle}</Typography>}
      </div>
    </div>
  );
};
