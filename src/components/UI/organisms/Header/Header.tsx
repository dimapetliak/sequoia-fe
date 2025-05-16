"use client";

import styles from "./styles.module.scss";
import { NavigationBar } from "../../molecules/NavigationBar/NavigationBar";
import { Button } from "../../molecules/Button";
import { ArrowUpRight, Close, Menu } from "../../atoms/Icons";
import { Logo } from "../../atoms/Logo";
import { ElementWrapper } from "../../atoms/ElementWrapper";
import clsx from "clsx";
import { useState } from "react";
import { SocialLinks } from "../../molecules/SocialLinks";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const NAVIGATION_LINKS = [
  {
    title: "Garden",
    url: "/",
  },
  {
    title: "NFTs",
    url: "/",
  },
  {
    title: "Game",
    url: "/",
  },
  {
    title: "Blog",
    url: "/",
  },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [fixedToTop, setFixedToTop] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrolled = latest > 84;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }

    const shouldBeFixed = latest > 84;
    if (shouldBeFixed !== fixedToTop) {
      setFixedToTop(shouldBeFixed);
    }
  });

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <motion.header
      className={clsx(styles.header, {
        // [styles.fixedToTop]: fixedToTop,
      })}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <ElementWrapper
        id={"header"}
        className={clsx(styles.container, { [styles.scrolled]: scrolled })}
        variants={scrolled ? "black" : "glass"}
        borderRadius="rounded"
      >
        <div className={styles.leftContainer}>
          <Logo color="white" />
          <NavigationBar
            ariaLabel="Main Navigation"
            className={styles.navbar}
            linkItems={NAVIGATION_LINKS}
          />
        </div>
        <div className={styles.buttonsContainer}>
          <Button variant="outlined" label={"WHITEPAPER"} />
          <Button label={"CONNECT WALLET"} rightIcon={<ArrowUpRight />} />
        </div>

        <button
          className={styles.burger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <Close /> : <Menu />}
        </button>

        {isOpen && (
          <ElementWrapper
            variants={scrolled ? "black" : "glass"}
            borderRadius="small"
            className={clsx(styles.mobileMenu, {
              [styles.open]: isOpen,
            })}
          >
            <NavigationBar
              ariaLabel="Mobile Navigation"
              className={styles.mobileNavbar}
              linkItems={NAVIGATION_LINKS}
            />
            <div className={styles.mobileButtonsContainer}>
              <Button variant="outlined" label={"WHITEPAPER"} href={"/"} />
              <Button
                label={"CONNECT WALLET"}
                href={"/"}
                rightIcon={<ArrowUpRight />}
              />
            </div>

            <SocialLinks className={styles.socialLinks} />
          </ElementWrapper>
        )}
      </ElementWrapper>
    </motion.header>
  );
};
