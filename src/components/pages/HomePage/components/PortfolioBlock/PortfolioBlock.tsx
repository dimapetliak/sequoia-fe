import { PortfolioGrid } from "@/components/UI/organisms/PortfolioGrid";
import { Container } from "@/components/UI/atoms/Container";
import { Typography } from "@/components/UI/atoms/Typography";
import styles from "./styles.module.scss";

export const PortfolioBlock = () => {
  return (
    <section>
      <Container className={styles.container}>
        <Typography textAlign="center" as={"h2"} font="rattani">
          PORTFOLIO
        </Typography>
        <PortfolioGrid />
      </Container>
    </section>
  );
};
