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
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { usePathname } from "next/navigation";
import {
  buttonContainerVariants,
  mobileItemVariants,
  mobileMenuVariants,
  NAVIGATION_LINKS,
  socialLinksVariants,
} from "./constanst";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [fixedToTop, setFixedToTop] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const isHomePage = pathname === "/";

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
      className={clsx(
        styles.header,
        isHomePage ? styles.homePageHeader : styles.defaultHeader,
        {
          [styles.fixedToTop]: fixedToTop,
        }
      )}
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <ElementWrapper
        id={"header"}
        className={clsx(
          styles.container,
          isHomePage ? styles.homeContainer : styles.defaultContainer,
          {
            [styles.scrolled]: scrolled,
          }
        )}
        variants={!isHomePage ? "black" : "glass"}
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

        <motion.button
          className={styles.burger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <Close /> : <Menu />}
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={clsx(styles.mobileMenu, {
                [styles.scrolled]: scrolled,
                [styles.open]: isOpen,
              })}
            >
              <ElementWrapper
                variants={"black"}
                borderRadius="small"
                className={clsx(styles.mobileMenuWrapper, {
                  [styles.homePageMenuWrapper]: isHomePage,
                  [styles.mobileScrolled]: scrolled,
                })}
              >
                <motion.div variants={mobileItemVariants}>
                  <NavigationBar
                    ariaLabel="Mobile Navigation"
                    className={styles.mobileNavbar}
                    linkItems={NAVIGATION_LINKS}
                    enableMobileAnimations={true}
                  />
                </motion.div>

                <motion.div
                  className={styles.mobileButtonsContainer}
                  variants={buttonContainerVariants}
                >
                  <motion.div variants={mobileItemVariants}>
                    <Button
                      variant="outlined"
                      label={"WHITEPAPER"}
                      href={"/"}
                    />
                  </motion.div>
                  <motion.div variants={mobileItemVariants}>
                    <Button
                      label={"CONNECT WALLET"}
                      href={"/"}
                      rightIcon={<ArrowUpRight />}
                    />
                  </motion.div>
                </motion.div>

                <motion.div variants={socialLinksVariants}>
                  <SocialLinks className={styles.socialLinks} />
                </motion.div>
              </ElementWrapper>
            </motion.div>
          )}
        </AnimatePresence>
      </ElementWrapper>
    </motion.header>
  );
};
