import clsx from "clsx";
import styles from "./styles.module.scss";
import Image from "next/image";
import { forwardRef, ForwardedRef } from "react";
import { BackgroundColorVariant } from "@/types";
import { backgroundMapper } from "@/utils";

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
  return (
    <div
      ref={ref}
      onClick={onClick}
      className={clsx(styles.teamMemberItemContainer, className)}
      style={{
        backgroundImage: `url(${backgroundMapper[backgroundColor]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "bottom center",
      }}
    >
      <div onClick={onClick} className={styles.clippedShape}>
        <div className={styles.imageContainer}>
          <Image
            fill
            src={imageUrl ?? "/assets/memberImage.png"}
            alt="Team member item picture"
          />
        </div>
      </div>
    </div>
  );
});
