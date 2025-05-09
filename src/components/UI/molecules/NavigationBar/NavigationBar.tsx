import clsx from "clsx";
import styles from "./styles.module.scss";
import { Button } from "../Button";

export type NavigationLinkItem = {
  title: string;
  url: string;
};

type NavigationBarProps = {
  linkItems: NavigationLinkItem[];
  ariaLabel?: string;
  className?: string;
};

export const NavigationBar = ({
  linkItems,
  ariaLabel,
  className,
}: NavigationBarProps) => {
  if (!linkItems.length) return;

  return (
    <div className={clsx(styles.container, className)}>
      <nav aria-label={ariaLabel}>
        <ul>
          {linkItems.map(({ title, url }) => (
            <li key={title}>
              <Button href={url} variant={"text"} label={title} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
