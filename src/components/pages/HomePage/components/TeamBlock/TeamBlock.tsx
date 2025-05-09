import { Container } from "@/components/UI/atoms/Container";
import styles from "./styles.module.scss";
import { Typography } from "@/components/UI/atoms/Typography";
import { TeamMembers } from "@/components/UI/organisms/TeamMembers";

export const TeamBlock = () => {
  return (
    <section>
      <Container className={styles.teamContainer}>
        <Typography textAlign="center" as="h2">
          OUR TEAM
        </Typography>

        <TeamMembers />
      </Container>
    </section>
  );
};
