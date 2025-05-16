import clsx from "clsx";
import styles from "./styles.module.scss";
import Image from "next/image";
import nextConfig from "../../../../../next.config";
import { motion, AnimationControls } from "framer-motion";

type ProgressBarProps = {
  currentPercent: number;
  minValue: number;
  maxValue: number;
  subtitle: string;
  withProgressAnchor?: boolean;
  anchorSize?: "default" | "large";
  className?: string;
  progressBarClassName?: string;
  titleClassName?: string;
  progressControlsAnimation?: AnimationControls;
};

export const ProgressBar = ({
  currentPercent,
  minValue,
  maxValue,
  subtitle,
  withProgressAnchor = true,
  anchorSize = "default",
  progressBarClassName,
  titleClassName,
  className,
  progressControlsAnimation,
}: ProgressBarProps) => {
  const normalizedPercent = Math.min(Math.max(currentPercent, 0), 100);
  const currentValue = Math.round(
    minValue + (normalizedPercent / 100) * (maxValue - minValue)
  );

  const formattedMaxValue = maxValue > 999 ? `${maxValue / 1000}k` : maxValue;

  return (
    <div className={`${styles.container} ${className || ""}`}>
      <div className={clsx(styles.titleWrapper, titleClassName)}>
        <span className={styles.currentValue}>{currentPercent}%</span>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <div>
        <div className={clsx(styles.progressWrapper, progressBarClassName)}>
          {progressControlsAnimation ? (
            <motion.div
              className={styles.progressBar}
              initial={{ width: "0%" }}
              animate={progressControlsAnimation}
            />
          ) : (
            <div
              className={styles.progressBar}
              style={{ width: `${normalizedPercent}%` }}
            />
          )}
          {withProgressAnchor && (
            <div
              className={styles.anchorContainer}
              style={{
                left: `${normalizedPercent}%`,
              }}
            >
              <div className={clsx(styles.anchor, styles[anchorSize])}>
                <div className={styles.iconContainer}>
                  <Image
                    fill
                    loading={"lazy"}
                    style={{
                      objectFit: "contain",
                    }}
                    src={`${nextConfig.basePath}/assets/sequoiaIcon.png`}
                    alt={"Sequoia tree icon"}
                  />
                </div>
              </div>

              {currentValue > 0 && <p>{currentValue}</p>}
            </div>
          )}
        </div>
        <div className={styles.valueLabels}>
          <p>{minValue}</p>
          <p>{formattedMaxValue}</p>
        </div>
      </div>
    </div>
  );
};
