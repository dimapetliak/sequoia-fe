import clsx from "clsx";
import styles from "./styles.module.scss";
import { JSX } from "react";
import Link from "next/link";

type SocialLinkProps = {
  href: string;
  icon: JSX.Element;
  className?: string;
};

export const SocialLink = ({ href, icon, className }: SocialLinkProps) => {
  return (
    icon && (
      <Link href={href} className={clsx(styles.socialLink, className)}>
        {icon}
      </Link>
    )
  );
};
