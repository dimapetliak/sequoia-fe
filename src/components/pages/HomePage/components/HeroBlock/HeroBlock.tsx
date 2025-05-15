import { Container } from "@/components/UI/atoms/Container";
import styles from "./styles.module.scss";
import { Hero } from "@/components/UI/organisms/Hero";
import Image from "next/image";
import nextConfig from "../../../../../../next.config";

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
              src={`${nextConfig.basePath}/assets/hero/HeroButtonCircle.svg`}
            />
            <div className={styles.cutoutLeft}></div>
            <div className={styles.cutoutRight}></div>
          </div>
        </button>
      </Container>
    </section>
  );
};
