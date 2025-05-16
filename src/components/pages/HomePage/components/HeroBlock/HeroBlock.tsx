import { Container } from "@/components/UI/atoms/Container";
import styles from "./styles.module.scss";
import { Hero } from "@/components/UI/organisms/Hero";
import Image from "next/image";
import nextConfig from "../../../../../../next.config";
import { ArrowUpRight } from "@/components/UI/atoms/Icons";

export const HeroBlock = () => {
  return (
    <section>
      <Container className={styles.container}>
        <Hero />
        <button className={styles.button}>
          <div className={styles.buttonWrapper}>
            <Image
              alt={`sequoia game`}
              width={180}
              height={180}
              className={styles.img}
              src={`${nextConfig.basePath}/assets/hero/buttonCircle.svg`}
            />
            <ArrowUpRight size={22} className={styles.icon} />
            <div className={styles.cutoutLeft}></div>
            <div className={styles.cutoutRight}></div>
            <div className={styles.cutoutLeftMob}></div>
            <div className={styles.cutoutRightMob}></div>
          </div>
        </button>
      </Container>
    </section>
  );
};
