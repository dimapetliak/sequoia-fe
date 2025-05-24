import { Container } from "@/components/UI/atoms/Container";
import styles from "./styles.module.scss";
import { BottomBlock } from "@/components/UI/organisms/BottomBlock";

export const GameBottomBlock = () => {
  return (
    <section>
      <Container className={styles.container}>
        <BottomBlock
          className={styles.bottomBlock}
          title={"COMING SOON"}
          subtitle={"Join our social media to become a member of our community"}
          href={"/"}
        />
      </Container>
    </section>
  );
};
