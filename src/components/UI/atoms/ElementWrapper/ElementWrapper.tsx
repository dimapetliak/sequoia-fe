import { forwardRef, HTMLProps, PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

type ElementWrapperProps = PropsWithChildren &
  HTMLProps<HTMLDivElement> & {
    variants?: "glass" | "black" | "transparent";
    borderRadius?: "none" | "small" | "medium" | "large" | "rounded";
    innerShadow?: boolean;
    outerShadow?: boolean;
    className?: string;
    backgroundImageUrl?: string;
  };

export const ElementWrapper = forwardRef<HTMLDivElement, ElementWrapperProps>(
  (
    {
      variants = "glass",
      borderRadius = "medium",
      innerShadow,
      outerShadow,
      children,
      backgroundImageUrl,
      className,
      ...props
    },
    ref
  ) => {
    const elementClasses = clsx(
      styles.elementWrapper,
      styles[variants],
      innerShadow && styles.innerShadow,
      outerShadow && styles.outerShadow,
      styles[borderRadius],
      className
    );

    return (
      <div
        ref={ref}
        className={elementClasses}
        {...(backgroundImageUrl && {
          style: {
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          },
        })}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ElementWrapper.displayName = "ElementWrapper";
