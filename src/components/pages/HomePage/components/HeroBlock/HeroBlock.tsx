import { Container } from "@/components/UI/atoms/Container";
import styles from "./styles.module.scss";
import { Hero } from "@/components/UI/organisms/Hero";
import Image from "next/image";

export const HeroBlock = () => {
  return (
    <section>
      <Container className={styles.container}>
        <Hero />
        <button className={styles.button}>
          <Image
            alt={`sequoia game`}
            width={180}
            height={180}
            src={`/assets/hero/HeroButtonCircle.svg`}
          />
        </button>
      </Container>
    </section>
  );
};
