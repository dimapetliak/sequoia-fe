import clsx from "clsx";
import styles from "./styles.module.scss";
import Image from "next/image";
import nextConfig from "../../../../../next.config";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

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
  animationDuration?: number;
  shouldAnimate?: boolean;
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
  animationDuration = 1.5,
  shouldAnimate,
}: ProgressBarProps) => {
  const normalizedPercent = Math.min(Math.max(currentPercent, 0), 100);

  const percentMotion = useMotionValue(0);
  const scaleXMotion = useTransform(percentMotion, (value) => value / 100);
  const leftMotion = useTransform(percentMotion, (value) => `${value}%`);

  const [displayPercent, setDisplayPercent] = useState(0);
  const [displayValue, setDisplayValue] = useState(minValue);

  useEffect(() => {
    if (!shouldAnimate) {
      percentMotion.set(0);
      setDisplayPercent(0);
      setDisplayValue(minValue);
      return;
    }

    const animation = animate(percentMotion, normalizedPercent, {
      duration: animationDuration,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayPercent(Math.round(latest));
        setDisplayValue(
          Math.round(minValue + (latest / 100) * (maxValue - minValue))
        );
      },
    });
    return () => animation.stop();
  }, [
    normalizedPercent,
    minValue,
    maxValue,
    animationDuration,
    shouldAnimate,
    percentMotion,
  ]);

  const formattedMaxValue = maxValue > 999 ? `${maxValue / 1000}k` : maxValue;

  return (
    <div className={clsx(styles.container, className)}>
      <div className={clsx(styles.titleWrapper, titleClassName)}>
        <span className={styles.currentValue}>{displayPercent}%</span>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <div>
        <div className={clsx(styles.progressWrapper, progressBarClassName)}>
          <motion.div
            className={styles.progressBar}
            style={{
              scaleX: scaleXMotion,
              transformOrigin: "left",
            }}
          />
          {withProgressAnchor && (
            <motion.div
              className={styles.anchorContainer}
              style={{ left: leftMotion }}
            >
              <div className={clsx(styles.anchor, styles[anchorSize])}>
                <div className={styles.iconContainer}>
                  <Image
                    fill
                    loading={"lazy"}
                    style={{ objectFit: "contain" }}
                    src={`${nextConfig.basePath}/assets/sequoiaIcon.png`}
                    alt={"Sequoia tree icon"}
                  />
                </div>
              </div>
              <p>{displayValue}</p>
            </motion.div>
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
