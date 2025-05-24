import clsx from "clsx";
import styles from "./styles.module.scss";
import { Button } from "../Button";
import { motion } from "framer-motion";

export type NavigationLinkItem = {
  title: string;
  url: string;
};

type NavigationBarProps = {
  linkItems: NavigationLinkItem[];
  ariaLabel?: string;
  className?: string;
  enableMobileAnimations?: boolean;
};

const mobileNavItemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
    rotateX: -10,
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      damping: 20,
      stiffness: 300,
    },
  }),
  exit: {
    opacity: 0,
    x: -20,
    rotateX: -10,
    transition: {
      duration: 0.2,
    },
  },
};

export const NavigationBar = ({
  linkItems,
  ariaLabel,
  className,
  enableMobileAnimations = false,
}: NavigationBarProps) => {
  if (!linkItems.length) return;

  return (
    <div className={clsx(styles.container, className)}>
      <nav aria-label={ariaLabel}>
        <ul>
          {linkItems.map(({ title, url }, index) => {
            const content = (
              <Button href={url} variant={"text"} label={title} />
            );

            return enableMobileAnimations ? (
              <motion.li
                key={title}
                variants={mobileNavItemVariants}
                custom={index}
              >
                {content}
              </motion.li>
            ) : (
              <li key={title}>{content}</li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
