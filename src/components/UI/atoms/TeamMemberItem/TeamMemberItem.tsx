"use client";

import clsx from "clsx";
import styles from "./styles.module.scss";
import Image from "next/image";
import {
  forwardRef,
  ForwardedRef,
  useRef,
  useState,
  useLayoutEffect,
  memo,
} from "react";
import { BackgroundColorVariant } from "@/types";
import { backgroundMapper } from "@/utils";
import nextConfig from "../../../../../next.config";

type TeamMemberItemProps = {
  imageUrl?: string;
  className?: string;
  backgroundColor?: BackgroundColorVariant;
  onClick?: () => void;
};

export const TeamMemberItem = forwardRef(function TeamMemberItem(
  {
    imageUrl,
    className,
    backgroundColor = "blue",
    onClick,
  }: TeamMemberItemProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [clipPath, setClipPath] = useState("");

  useLayoutEffect(() => {
    const updateClipPath = () => {
      if (!containerRef.current) return;

      const el = containerRef.current;
      const width = el.offsetWidth;
      const height = el.offsetHeight;

      // Original dimensions of path
      const origW = 248;
      const origH = 282;

      // Scaling factors
      const scaleX = width / origW;
      const scaleY = height / origH;

      const scale = (x: number, y: number) =>
        `${(x * scaleX).toFixed(2)} ${(y * scaleY).toFixed(2)}`;

      const path = [
        `M0 0H${(248 * scaleX).toFixed(2)}V${(167 * scaleY).toFixed(2)}H0V0Z`,
        `M${scale(248, 159)}C${scale(248, 226.274)} ${scale(
          192.274,
          282
        )} ${scale(125, 282)}C${scale(57.7258, 282)} ${scale(
          2,
          226.274
        )} ${scale(2, 159)}C${scale(2, 91.7258)} ${scale(57.7258, 36)} ${scale(
          125,
          36
        )}C${scale(192.274, 36)} ${scale(248, 91.7258)} ${scale(248, 159)}Z`,
      ].join(" ");

      setClipPath(`path("${path}")`);
    };

    updateClipPath();
    window.addEventListener("resize", updateClipPath);
    return () => window.removeEventListener("resize", updateClipPath);
  }, []);

  console.log("clipPath: ", clipPath);

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={clsx(styles.teamMemberItemContainer, className)}
      style={{
        backgroundImage: `url(${nextConfig.basePath}${backgroundMapper[backgroundColor]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "bottom center",
      }}
    >
      <div
        ref={containerRef}
        onClick={onClick}
        style={{
          clipPath: clipPath,
          cursor: "pointer",
          width: "100%",
          height: "100%",
        }}
        // className={styles.clippedShape}
      >
        <div className={styles.imageContainer}>
          <Image
            fill
            src={imageUrl ?? `${nextConfig.basePath}/assets/memberImage.png`}
            alt="Team member item picture"
          />
        </div>
      </div>
    </div>
  );
});

export default memo(TeamMemberItem);
