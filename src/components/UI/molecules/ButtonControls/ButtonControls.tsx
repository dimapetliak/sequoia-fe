"use client";

import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import { Button } from "../Button/Button";
import { ArrowLeft, ArrowRight } from "../../atoms/Icons";
import clsx from "clsx";

type ButtonControlsProps = PropsWithChildren & {
  onMoveBackward: () => void;
  onMoveForward: () => void;
  className?: string;
  disableBackward?: boolean;
  disableForward?: boolean;
};

export const ButtonControls = ({
  children,
  onMoveBackward,
  onMoveForward,
  className,
  disableBackward,
  disableForward,
}: ButtonControlsProps) => {
  return (
    <div className={clsx(styles.controlsContainer, className)}>
      <Button
        variant="outlined"
        onClick={onMoveBackward}
        leftIcon={<ArrowLeft />}
        isDisabled={disableBackward}
      />
      {children}
      <Button
        variant="outlined"
        onClick={onMoveForward}
        rightIcon={<ArrowRight />}
        isDisabled={disableForward}
      />
    </div>
  );
};
