"use client";

import { usePathname } from "next/navigation";
import { SocialLinks } from "../../molecules/SocialLinks";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import clsx from "clsx";

export const SideMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        const scrollPosition = window.scrollY;
        console.log("scrollPosition: ", scrollPosition);
        setIsScrolled(scrollPosition > 200);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  return (
    <div
      className={`${styles.sideMenuContainer}  ${
        isScrolled ? styles.scrolled : styles.initial
      }`}
    >
      <SocialLinks
        excludedLinks={["linkedin"]}
        className={clsx(
          styles.linkContainer,
          isScrolled ? styles.scrolled : styles.initial
        )}
        linkClassName={styles.link}
      />
    </div>
  );
};
