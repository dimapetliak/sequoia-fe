import React from "react";
// import styles from "./styles.module.scss";

interface StatFigureProps {
  value: string | number;
  description: string;
  className?: string;
}

export const StatFigure: React.FC<StatFigureProps> = ({
  value,
  description,
  className,
}) => {
  return (
    <div className={className}>
      <span>{value}</span>
      <p>{description}</p>
    </div>
  );
};
