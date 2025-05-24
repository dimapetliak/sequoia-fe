import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./styles.module.scss";

type MarkdownRendererProps = {
  content: string;
  className?: string;
};

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  className,
}) => (
  <div className={`${styles.markdown} ${className ? className : ""}`}>
    <ReactMarkdown>{content}</ReactMarkdown>
  </div>
);
