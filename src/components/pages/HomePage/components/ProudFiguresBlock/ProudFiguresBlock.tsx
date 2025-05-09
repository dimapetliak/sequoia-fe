import { Container } from "@/components/UI/atoms/Container";
import styles from "./styles.module.scss";
import { Typography } from "@/components/UI/atoms/Typography";
import { FiguresGrid } from "@/components/UI/organisms/FiguresGrid";

export const ProudFiguresBlock = () => {
  return (
    <section>
      <Container className={styles.container}>
        <Typography textAlign="center" as="h2">
          PROUD IN OUR FIGURES
        </Typography>
        <FiguresGrid />
      </Container>
    </section>
  );
};
