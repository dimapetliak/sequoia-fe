import { GameHero } from "@/components/UI/organisms/GameHero";
import styles from "./styles.module.scss";
import { Container } from "@/components/UI/atoms/Container";

export const GameHeroBlock = () => {
  return (
    <section>
      <Container className={styles.container}>
        <GameHero />
      </Container>
    </section>
  );
};
