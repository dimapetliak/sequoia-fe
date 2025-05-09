"use client";

import { FC } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { Close } from "../../atoms/Icons";

type TagVariant = "default" | "outline";

type TagProps = {
  label: string;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
  variant?: TagVariant;
  className?: string;
};

export const Tag: FC<TagProps> = ({
  label,
  isActive = false,
  isDisabled = false,
  onClick,
  onRemove = () => {},
  variant = "default",
  className,
}) => {
  const handleClick = () => {
    if (!isDisabled && onClick) onClick();
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isDisabled && onRemove) onRemove();
  };

  return (
    <span
      className={clsx(
        styles.tag,
        styles[variant],
        isActive && styles.active,
        isDisabled && styles.disabled,
        className
      )}
      onClick={handleClick}
      aria-disabled={isDisabled}
    >
      {label}
      {isActive && (
        <button
          className={styles.removeBtn}
          onClick={handleRemove}
          aria-label="Remove tag"
        >
          <Close />
        </button>
      )}
    </span>
  );
};
