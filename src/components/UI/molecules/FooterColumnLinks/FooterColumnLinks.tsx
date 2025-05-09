import React from "react";
import { Typography } from "../../atoms/Typography";
import styles from "./styles.module.scss";
import Link from "next/link";

type LinkProps = {
  title: string;
  href: string;
};

type ColumnLinksProps = {
  columnTitle: string;
  links: LinkProps[];
};

const FOOTER_COLUMN_LINKS: ColumnLinksProps[] = [
  {
    columnTitle: "Contact us",
    links: [
      {
        title: "132 My Street, Kingston, New York 12401",
        href: "www.google.com",
      },
      { title: "emailexample@gmail.com", href: "emailexample@gmail.com" },
    ],
  },
  {
    columnTitle: "Our Services",
    links: [
      { title: "Development", href: "www.google.com" },
      { title: "Design", href: "www.google.com" },
      { title: "Devops", href: "www.google.com" },
    ],
  },
  {
    columnTitle: "Products",
    links: [
      { title: "WEB3", href: "www.google.com" },
      { title: "NFT", href: "www.google.com" },
      { title: "Apps", href: "www.google.com" },
    ],
  },
  {
    columnTitle: "Partners",
    links: [{ title: "Apps", href: "www.google.com" }],
  },
  {
    columnTitle: "Company",
    links: [
      { title: "Terms of use", href: "www.google.com" },
      { title: "Privacy policy", href: "www.google.com" },
      { title: "Blog", href: "www.google.com" },
      { title: "About", href: "www.google.com" },
    ],
  },
];

export const FooterColumnLinks = () => {
  return (
    <div className={styles.wrapper}>
      {FOOTER_COLUMN_LINKS.map(({ columnTitle, links }) => (
        <div key={columnTitle} className={styles.columnContainer}>
          <Typography as={"span"} className={styles.columnTitle}>
            {columnTitle}
          </Typography>
          <ul>
            {links.map(({ title, href }) => (
              <li key={title} className={styles.linkContainer}>
                <Link className={styles.columnText} href={href}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
