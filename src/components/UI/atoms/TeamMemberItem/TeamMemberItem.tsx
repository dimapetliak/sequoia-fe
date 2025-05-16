import clsx from "clsx";
import styles from "./styles.module.scss";
import Image from "next/image";
import { forwardRef, ForwardedRef } from "react";
import { BackgroundColorVariant } from "@/types";
import { backgroundMapper } from "@/utils";
import nextConfig from "../../../../../next.config";

type TeamMemberItemProps = {
  imageUrl?: string;
  className?: string;
  backgroundColor?: BackgroundColorVariant;
  onClick?: () => void;
  isActive?: boolean;
};

export const TeamMemberItem = forwardRef(function TeamMemberItem(
  {
    imageUrl,
    className,
    backgroundColor = "blue",
    onClick,
    isActive = false,
  }: TeamMemberItemProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      onClick={onClick}
      className={clsx(
        styles.teamMemberItemContainer,
        isActive && styles.active,
        className
      )}
      style={{
        backgroundImage: `url(${nextConfig.basePath}${backgroundMapper[backgroundColor]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "bottom center",
      }}
    >
      <div onClick={onClick} className={styles.clippedShape}>
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
