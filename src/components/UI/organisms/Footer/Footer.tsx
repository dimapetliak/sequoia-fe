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

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.rowContainer}>
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
        </div>
        <FooterColumnLinks />
        <SocialLinks className={styles.mobileSocialLinks} />
        <div className={styles.imageContainer}>
          <Image
            fill
            loading={"lazy"}
            style={{
              objectFit: "cover",
            }}
            src={`${nextConfig.basePath}/assets/logoNature.png`}
            alt={"Sequoia Nature Logo"}
          />
        </div>
        <Typography textAlign="center" as={"p"} className={styles.copyright}>
          2025 © All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};
