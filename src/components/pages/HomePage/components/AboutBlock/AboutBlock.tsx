import { Container } from "@/components/UI/atoms/Container";
import styles from "./styles.module.scss";
import { Typography } from "@/components/UI/atoms/Typography";
import { AboutUs } from "@/components/UI/organisms/AboutUs";

export const AboutBlock = () => {
  return (
    <section className={styles.container}>
      <Container>
        <Typography textAlign="center" as="h2" font="rattani">
          ABOUT US
        </Typography>

        <AboutUs />
      </Container>
    </section>
  );
};
