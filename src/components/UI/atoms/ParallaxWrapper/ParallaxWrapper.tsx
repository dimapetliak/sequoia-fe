"use client";

import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  ReactNode,
} from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { motion, MotionProps } from "framer-motion";

interface ParallaxWrapperProps extends MotionProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  reverse?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
  initialBackgroundPosition?: string | { x: number; y: number };
}

export const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({
  children,
  className,
  intensity = 20,
  reverse = false,
  disabled = false,
  style,
  onClick,
  initialBackgroundPosition = { x: 50, y: 50 },
  ...motionProps
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // Convert string position to object if needed
  const getPositionObject = useCallback(() => {
    if (typeof initialBackgroundPosition === "string") {
      const parts = initialBackgroundPosition.split(" ");

      // Parse position values
      const parsePositionValue = (value: string): number => {
        if (value === "center") return 50;
        if (value === "top" || value === "left") return 0;
        if (value === "bottom" || value === "right") return 100;
        // Remove % if present and parse
        return parseInt(value.replace("%", "")) || 50;
      };

      return {
        x: parsePositionValue(parts[0] || "center"),
        y: parsePositionValue(parts.length > 1 ? parts[1] : "center"),
      };
    }
    return initialBackgroundPosition;
  }, [initialBackgroundPosition]);

  // Store the initial position in a ref for calculations
  const initialPositionRef = useRef(getPositionObject());

  // Initialize state position with the initial position
  const [position, setPosition] = useState(getPositionObject());
  const [isMobile, setIsMobile] = useState(false);

  // For animation
  const requestRef = useRef<number | null>(null);
  const targetPositionRef = useRef(getPositionObject());

  // Update initialPositionRef if initialBackgroundPosition changes
  useEffect(() => {
    initialPositionRef.current = getPositionObject();
    setPosition(getPositionObject()); // Reset current position
    targetPositionRef.current = getPositionObject(); // Reset target position
  }, [initialBackgroundPosition, getPositionObject]);

  // Detect if device is mobile/tablet
  useEffect(() => {
    const checkIfMobile = () => {
      const mobileBreakpoint = 1440;
      setIsMobile(window.innerWidth <= mobileBreakpoint);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Animation function
  const positionRef = useRef(getPositionObject());

  // Update positionRef when position state changes
  useEffect(() => {
    positionRef.current = position;
  }, [position]);

  const animate = useCallback(() => {
    // If mobile/tablet, don't animate
    if (isMobile) return;

    // Use a faster easing when hovering and slower when exiting
    const ease = isExiting ? 0.05 : 0.15;

    const dx = targetPositionRef.current.x - positionRef.current.x;
    const dy = targetPositionRef.current.y - positionRef.current.y;

    // Only update if there's a significant change
    if (Math.abs(dx) > 0.01 || Math.abs(dy) > 0.01) {
      // Calculate new position
      const newX = positionRef.current.x + dx * ease;
      const newY = positionRef.current.y + dy * ease;

      // Important: Update ref immediately so calculations stay accurate
      positionRef.current = { x: newX, y: newY };

      // Then schedule state update (which won't cause immediate re-render)
      setPosition({ x: newX, y: newY });
    } else if (isExiting) {
      // Once we're close enough to the center, stop the exiting state
      setIsExiting(false);
    }

    requestRef.current = requestAnimationFrame(animate);
  }, [isExiting, isMobile]); // Removed position from dependencies

  // Start/stop animation
  useEffect(() => {
    if (!isMobile) {
      requestRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animate, isMobile]);

  const handleMouseEnter = () => {
    if (disabled || isMobile) return;
    setIsHovering(true);
    setIsExiting(false);
  };

  const handleMouseLeave = () => {
    if (disabled || isMobile) return;
    setIsHovering(false);
    setIsExiting(true);
    // Reset to initial position when mouse leaves
    targetPositionRef.current = initialPositionRef.current;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !isHovering || !wrapperRef.current || isMobile) return;

    const rect = wrapperRef.current.getBoundingClientRect();

    // Calculate relative position (0-1)
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;

    // Direction modifier
    const dir = reverse ? -1 : 1;

    // Get initial position
    const baseX = initialPositionRef.current.x;
    const baseY = initialPositionRef.current.y;

    // Calculate new position based on initial position as the center point
    // This is key - we're now calculating the movement AROUND the initial position
    const offsetX = dir * (relX - 0.5) * intensity;
    const offsetY = dir * (relY - 0.5) * intensity;

    const newX = baseX + offsetX;
    const newY = baseY + offsetY;

    // Update target (actual animation happens in the animate function)
    targetPositionRef.current = { x: newX, y: newY };
  };

  // Format the background position for CSS
  const getBackgroundPositionStyle = (pos: { x: number; y: number }) => {
    // For pixel values (like "-80px -525px"), we'll convert them differently
    if (
      typeof initialBackgroundPosition === "string" &&
      initialBackgroundPosition.includes("px")
    ) {
      // Extract pixel values and add offsets
      const initialPos = initialPositionRef.current;
      const offsetX = pos.x - initialPos.x;
      const offsetY = pos.y - initialPos.y;

      // Apply offsets to original pixel positions
      const parts = initialBackgroundPosition.split(" ");
      const originalX = parseInt(parts[0]);
      const originalY = parseInt(parts[1]);

      return `${originalX + offsetX}px ${originalY + offsetY}px`;
    }

    // Standard percentage values
    return `${pos.x}% ${pos.y}%`;
  };

  return (
    <motion.div
      onClick={onClick}
      {...(motionProps as MotionProps)}
      ref={wrapperRef}
      className={clsx(styles.parallaxWrapper, className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        ...style,
        ...(isMobile
          ? {
              backgroundPosition:
                typeof initialBackgroundPosition === "string"
                  ? initialBackgroundPosition
                  : `${initialPositionRef.current.x}% ${initialPositionRef.current.y}%`,
            }
          : {
              cursor: onClick ? "pointer" : "none",
              backgroundPosition: getBackgroundPositionStyle(position),
              transition: "none",
            }),
      }}
    >
      {children}
    </motion.div>
  );
};
