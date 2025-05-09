import React from "react";
import { SocialLink } from "../../atoms/SocialLink";
import {
  Linkedin,
  Twitter,
  Discord,
  Instagram,
  Telegram,
} from "../../atoms/Icons";
import styles from "./styles.module.scss";
import clsx from "clsx";

const SOCIAL_LINKS = [
  { id: "linkedin", href: "/", icon: <Linkedin /> },
  { id: "twitter", href: "/2", icon: <Twitter /> },
  { id: "discord", href: "/3", icon: <Discord /> },
  { id: "instagram", href: "/4", icon: <Instagram /> },
  { id: "telegram", href: "/8", icon: <Telegram /> },
];

type SocialLinksProps = {
  excludedLinks?: string[];
  linkClassName?: string;
  className?: string;
};

export const SocialLinks: React.FC<SocialLinksProps> = ({
  excludedLinks = [],
  linkClassName,
  className,
}) => {
  return (
    <div className={clsx(styles.socialLinksContainer, className)}>
      {SOCIAL_LINKS.filter(({ id }) => !excludedLinks.includes(id)).map(
        ({ id, href, icon }) => (
          <SocialLink
            className={clsx(styles.socialLink, linkClassName)}
            key={id}
            href={href}
            icon={icon}
          />
        )
      )}
    </div>
  );
};
