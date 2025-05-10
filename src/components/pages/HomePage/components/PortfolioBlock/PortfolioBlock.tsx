// import { PortfolioGrid } from "@/components/UI/organisms/PortfolioGrid";
import { Container } from "@/components/UI/atoms/Container";
import { Typography } from "@/components/UI/atoms/Typography";

export const PortfolioBlock = () => {
  return (
    <section>
      <Container>
        <Typography textAlign="center" as={"h2"}>
          PORTFOLIO
        </Typography>
        <Typography textAlign="center" as={"h4"}>
          Will be available soon...
        </Typography>
        {/* <PortfolioGrid /> */}
      </Container>
    </section>
  );
};
