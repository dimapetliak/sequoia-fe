"use client";

import Image from "next/image";
import { Container } from "../../atoms/Container";
import styles from "./styles.module.scss";
import { Logo } from "../../atoms/Logo";
import { Button } from "../../molecules/Button";
import { Typography } from "../../atoms/Typography";
import { FooterColumnLinks } from "../../molecules/FooterColumnLinks";
import { SocialLinks } from "../../molecules/SocialLinks";
import { ArrowUpRight } from "../../atoms/Icons";
import nextConfig from "../../../../../next.config";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.1 });

  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer
      ref={footerRef}
      className={styles.footer}
      variants={footerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Container className={styles.container}>
        <motion.div className={styles.rowContainer} variants={childVariants}>
          <Logo size={"medium"} />
          <div className={styles.rowContainer}>
            <SocialLinks className={styles.socialLinks} />
            <Button
              className={styles.button}
              label={"WHITE PAPER"}
              variant="filled"
              rightIcon={<ArrowUpRight />}
            />
          </div>
        </motion.div>
        <motion.div variants={childVariants}>
          <FooterColumnLinks />
        </motion.div>
        <motion.div variants={childVariants}>
          <SocialLinks className={styles.mobileSocialLinks} />
        </motion.div>
        <motion.div className={styles.imageContainer} variants={imageVariants}>
          <Image
            fill
            loading={"lazy"}
            style={{
              objectFit: "cover",
            }}
            src={`${nextConfig.basePath}/assets/logoNature.png`}
            alt={"Sequoia Nature Logo"}
          />
        </motion.div>
        <motion.div variants={childVariants}>
          <Typography textAlign="center" as={"p"} className={styles.copyright}>
            2025 © All rights reserved.
          </Typography>
        </motion.div>
      </Container>
    </motion.footer>
  );
};
