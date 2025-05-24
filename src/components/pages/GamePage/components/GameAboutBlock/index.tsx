import { Container } from "@/components/UI/atoms/Container";
import { Typography } from "@/components/UI/atoms/Typography";
import { GameAbout } from "@/components/UI/organisms/GameAbout";
import styles from "./styles.module.scss";

export const GameAboutBlock = () => {
  return (
    <section>
      <Container className={styles.container}>
        <Typography font="rattani" textAlign="center" as="h2">
          ABOUT
        </Typography>
        <GameAbout />
      </Container>
    </section>
  );
};
