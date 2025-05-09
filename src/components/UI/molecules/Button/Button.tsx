"use client";

import clsx from "clsx";
import styles from "./styles.module.scss";
import { Typography } from "@/components/UI/atoms/Typography";

type Props = {
  label?: string;
  variant?: "filled" | "outlined" | "text";
  href?: string;
  isDisabled?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export const Button = ({
  label,
  variant = "filled",
  href,
  onClick,
  isDisabled = false,
  rightIcon,
  leftIcon,
  className = "",
  type = "button",
}: Props) => {
  const buttonClasses = clsx(
    styles.container,
    styles[variant],
    isDisabled && styles[`${variant}--disabled`],
    className
  );

  const content = (
    <>
      {leftIcon && leftIcon}
      {label && <Typography as="span">{label}</Typography>}
      {rightIcon && rightIcon}
    </>
  );

  return href ? (
    <a
      className={buttonClasses}
      href={href}
      aria-disabled={isDisabled}
      onClick={(e) => isDisabled && e.preventDefault()}
    >
      {content}
    </a>
  ) : (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={isDisabled}
      type={type}
    >
      {content}
    </button>
  );
};
