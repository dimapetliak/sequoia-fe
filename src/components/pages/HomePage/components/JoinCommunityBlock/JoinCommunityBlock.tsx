import { Container } from "@/components/UI/atoms/Container";
import styles from "./styles.module.scss";
import { ElementWrapper } from "@/components/UI/atoms/ElementWrapper";
import { Typography } from "@/components/UI/atoms/Typography";
import { Button } from "@/components/UI/molecules/Button";
import { ArrowUpRight } from "@/components/UI/atoms/Icons";
import nextConfig from "../../../../../../next.config";

export const JoinCommunityBlock = () => {
  return (
    <section>
      <Container className={styles.container}>
        <ElementWrapper
          innerShadow
          variants="transparent"
          className={styles.elementWrapper}
          backgroundImageUrl={`${nextConfig.basePath}/assets/waterTile.png`}
          borderRadius="large"
        >
          <Typography font="rattani" textAlign="center" as={"h2"}>
            {`JOIN OUR \n COMMUNITY`}
          </Typography>
          <Typography textAlign="center" as={"h4"}>
            {`Connect us to collaborate, share ideas and stay up to date with our news`}
          </Typography>
          <Button
            className={styles.button}
            variant={"filled"}
            label={"JOIN COMMUNITY"}
            rightIcon={<ArrowUpRight />}
          />
        </ElementWrapper>
      </Container>
    </section>
  );
};
